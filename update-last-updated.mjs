#!/usr/bin/env node

import fs from 'fs';
import { globSync } from 'glob';

let patterns = process.argv.slice(2);
const markdownOnlyIndex = patterns.indexOf('--markdown-only');
const markdownOnly = markdownOnlyIndex > -1;

if (markdownOnly) {
  patterns.splice(markdownOnlyIndex, 1);
}

if (patterns.length === 0) {
  console.log('Usage: ./update-last-updated.mjs [--markdown-only] <pattern1> <pattern2> ...');
  process.exit(1);
}

const now = new Date().toISOString();
const lastUpdateString = `last_update:\n  date: ${now}`;

function updateFileContent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
    const match = content.match(frontmatterRegex);

    if (match) {
      let frontmatter = match[1];
      const lastUpdateRegex = /^last_update:(:\s*.*)?(\n\s+.*)*/m;
      
      if (lastUpdateRegex.test(frontmatter)) {
        frontmatter = frontmatter.replace(lastUpdateRegex, lastUpdateString);
      } else {
        frontmatter = frontmatter.trimEnd() + `\n${lastUpdateString}\n`;
      }
      content = content.replace(match[1], frontmatter);
    } else {
      content = `---\n${lastUpdateString}\n---\n\n${content}`;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

const expandedPatterns = patterns.flatMap(pattern => {
    if (fs.existsSync(pattern) && fs.statSync(pattern).isDirectory()) {
        return `${pattern}/**/*`;
    }
    return pattern;
});

const files = globSync(expandedPatterns, {
    nodir: true,
    absolute: true,
});

for (const file of files) {
    if (markdownOnly) {
        if (file.endsWith('.mdx') || file.endsWith('.md')) {
            updateFileContent(file);
        }
    } else {
        updateFileContent(file);
    }
}