#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

const FRONTMATTER_DELIMITER = '---';
const LAST_UPDATE_FIELD = 'last_update';
const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx']);
const USAGE = 'Usage: ./update-last-updated.mjs [--markdown-only] <pattern1> <pattern2> ...';

function parseArguments(argv) {
  const patterns = [];
  let markdownOnly = false;

  for (const argument of argv) {
    if (argument === '--markdown-only') {
      markdownOnly = true;
      continue;
    }

    patterns.push(argument);
  }

  return { patterns, markdownOnly };
}

function getPreferredNewline(content) {
  return content.includes('\r\n') ? '\r\n' : '\n';
}

function formatLastUpdateBlock(timestamp) {
  return [
    `${LAST_UPDATE_FIELD}:`,
    `  date: ${timestamp}`,
  ];
}

function isTopLevelField(line) {
  return /^[A-Za-z0-9_-]+:/.test(line);
}

function findFieldBlocks(lines, fieldName) {
  const blocks = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!isTopLevelField(line)) {
      continue;
    }

    const [currentField] = line.split(':', 1);
    let end = index + 1;

    while (end < lines.length && !isTopLevelField(lines[end])) {
      end += 1;
    }

    if (currentField === fieldName) {
      blocks.push({ start: index, end });
    }

    index = end - 1;
  }

  return blocks;
}

function upsertLastUpdate(frontmatter, timestamp) {
  const newline = getPreferredNewline(frontmatter);
  const lines = frontmatter === '' ? [] : frontmatter.split(/\r?\n/);
  const replacementBlock = formatLastUpdateBlock(timestamp);
  const fieldBlocks = findFieldBlocks(lines, LAST_UPDATE_FIELD);

  if (fieldBlocks.length === 0) {
    if (lines.length === 0) {
      return replacementBlock.join(newline);
    }

    return `${frontmatter.trimEnd()}${newline}${replacementBlock.join(newline)}`;
  }

  const updatedLines = [];
  let cursor = 0;

  for (let index = 0; index < fieldBlocks.length; index += 1) {
    const block = fieldBlocks[index];
    updatedLines.push(...lines.slice(cursor, block.start));

    if (index === 0) {
      updatedLines.push(...replacementBlock);
    }

    cursor = block.end;
  }

  updatedLines.push(...lines.slice(cursor));
  return updatedLines.join(newline).trimEnd();
}

function extractFrontmatter(content) {
  const match = content.match(/^---(\r?\n)([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!match) {
    return null;
  }

  return {
    newline: match[1],
    frontmatter: match[2],
    body: content.slice(match[0].length),
  };
}

function addFrontmatter(content, timestamp, newline) {
  const body = content.replace(/^\r?\n*/, '');
  const frontmatter = formatLastUpdateBlock(timestamp).join(newline);
  return `${FRONTMATTER_DELIMITER}${newline}${frontmatter}${newline}${FRONTMATTER_DELIMITER}${newline}${newline}${body}`;
}

function updateContent(content, timestamp) {
  const existingFrontmatter = extractFrontmatter(content);

  if (!existingFrontmatter) {
    return addFrontmatter(content, timestamp, getPreferredNewline(content));
  }

  const updatedFrontmatter = upsertLastUpdate(existingFrontmatter.frontmatter, timestamp);
  return `${FRONTMATTER_DELIMITER}${existingFrontmatter.newline}${updatedFrontmatter}${existingFrontmatter.newline}${FRONTMATTER_DELIMITER}${existingFrontmatter.newline}${existingFrontmatter.body}`;
}

function expandPatterns(patterns) {
  return patterns.flatMap((pattern) => {
    if (fs.existsSync(pattern) && fs.statSync(pattern).isDirectory()) {
      return `${pattern}/**/*`;
    }

    return pattern;
  });
}

function isMarkdownFile(filePath) {
  return MARKDOWN_EXTENSIONS.has(path.extname(filePath));
}

function collectFiles(patterns, markdownOnly) {
  const expandedPatterns = expandPatterns(patterns);
  const files = globSync(expandedPatterns, {
    nodir: true,
    absolute: true,
  });

  const uniqueFiles = [...new Set(files)];
  return markdownOnly ? uniqueFiles.filter(isMarkdownFile) : uniqueFiles;
}

function updateFileContent(filePath, timestamp) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const updatedContent = updateContent(content, timestamp);

    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

function main() {
  const { patterns, markdownOnly } = parseArguments(process.argv.slice(2));

  if (patterns.length === 0) {
    console.log(USAGE);
    process.exit(1);
  }

  const timestamp = new Date().toISOString();
  const files = collectFiles(patterns, markdownOnly);

  for (const file of files) {
    updateFileContent(file, timestamp);
  }
}

main();
