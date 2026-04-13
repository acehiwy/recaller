import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightFullViewMode from "starlight-fullview-mode";

export default defineConfig({
  site: "https://acehiwy.github.io",
  base: "/recaller/",
  integrations: [
    starlight({
      title: "Recaller",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/acehiwy/recaller",
        },
      ],
      tableOfContents: { maxHeadingLevel: 5 },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            integrity:
              "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
          },
        },
      ],
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
      plugins: [starlightFullViewMode()],
      sidebar: [
        { link: "/", label: "Intro" },
        {
          label: "Concepts",
          collapsed: true,
          items: [
            { label: "OpenAPI", collapsed: true, autogenerate: { directory: "concept/open-api" } },
            "concept/character-encoding",
            { label: "Design Pattern", collapsed: true, autogenerate: { directory: "concept/design-pattern" } },
            { label: "Responsive Image", collapsed: true, autogenerate: { directory: "concept/responsive-image" } },
          ],
        },
        {
          label: "Framework",
          collapsed: true,
          items: [
            {
              label: "Angular",
              collapsed: true,
              items: [
                "framework/angular",
                "framework/angular/0_installation",
                {
                  label: "Component",
                  collapsed: true,
                  autogenerate: { directory: "framework/angular/1_component" },
                },
                "framework/angular/a_injection-context",
                "framework/angular/b_signal",
                "framework/angular/image-optimization",
                "framework/angular/route",
              ],
            },
            {
              label: "Docusaurus",
              collapsed: true,
              items: [
                "framework/docusaurus",
                "framework/docusaurus/1_installation",
                {
                  label: "Docs",
                  collapsed: true,
                  items: [
                    "framework/docusaurus/2_docs",
                    "framework/docusaurus/2_docs/1_create-docs",
                    {
                      label: "Sidebar",
                      collapsed: true,
                      autogenerate: { directory: "framework/docusaurus/2_docs/2_sidebar" },
                    },
                  ],
                },
                "framework/docusaurus/3_pages",
                {
                  label: "Markdown Features",
                  collapsed: true,
                  autogenerate: { directory: "framework/docusaurus/4_markdown-features" },
                },
                "framework/docusaurus/5_styling-and-layout",
                "framework/docusaurus/6_swizzling",
                "framework/docusaurus/7_deployment",
              ],
            },
            {
              label: "FastAPI",
              collapsed: true,
              items: [
                "framework/fastapi",
                "framework/fastapi/1_path-parameter",
                "framework/fastapi/2_query-parameter",
                "framework/fastapi/3_request-body",
                {
                  label: "Dependencies Injection",
                  collapsed: true,
                  autogenerate: { directory: "framework/fastapi/4_dependencies-injection" },
                },
              ],
            },
          ],
        },
        {
          label: "Language",
          collapsed: true,
          items: [
            {
              label: "Python",
              collapsed: true,
              items: [
                "language/python",
                "language/python/1_string",
                {
                  label: "Control Flow",
                  collapsed: true,
                  autogenerate: { directory: "language/python/2_control-flow" },
                },
                "language/python/3_loop",
                "language/python/4_list",
                "language/python/5_queue",
                "language/python/6_set",
                "language/python/7_tuple",
                "language/python/8_delete-statement",
                "language/python/9_dictionary",
                {
                  label: "Function",
                  collapsed: true,
                  autogenerate: { directory: "language/python/10_function" },
                },
                "language/python/11_class",
                "language/python/12_scope",
                "language/python/13_error-and-exception",
                "language/python/14_modules",
                "language/python/15_with-statement",
                "language/python/16_working-with-file",
                {
                  label: "Type Hint",
                  collapsed: true,
                  autogenerate: { directory: "language/python/19_type-hint" },
                },
                "language/python/20_asyncio",
                "language/python/20_virtual-environment",
                "language/python/assignment-expression",
                "language/python/note",
              ],
            },
            {
              label: "Rust",
              collapsed: true,
              items: [
                "language/rust",
                "language/rust/cargo",
                "language/rust/variable",
                "language/rust/data-type",
                "language/rust/function",
                "language/rust/control-flow",
                {
                  label: "Ownership",
                  collapsed: true,
                  autogenerate: { directory: "language/rust/ownership" },
                },
                "language/rust/struct",
                "language/rust/enum-and-pattern-matching",
                {
                  label: "Package, Crate and Module",
                  collapsed: true,
                  autogenerate: { directory: "language/rust/package-crate-and-module" },
                },
                {
                  label: "Error Handling",
                  collapsed: true,
                  autogenerate: { directory: "language/rust/error-handling" },
                },
                "language/rust/generic",
                "language/rust/trait",
                "language/rust/lifetime",
                {
                  label: "Collection",
                  collapsed: true,
                  autogenerate: { directory: "language/rust/collection" },
                },
                {
                  label: "Writing Test",
                  collapsed: true,
                  autogenerate: { directory: "language/rust/writing-test" },
                },
              ],
            },
            {
              label: "TypeScript",
              collapsed: true,
              autogenerate: { directory: "language/typescript" },
            },
          ],
        },
        {
          label: "System Design",
          collapsed: true,
          autogenerate: { directory: "system-design" },
        },
        {
          label: "Tools",
          collapsed: true,
          items: [
            { label: "Anki", collapsed: true, autogenerate: { directory: "tool/anki" } },
            { label: "Git", collapsed: true, autogenerate: { directory: "tool/git" } },
            {
              label: "RabbitMQ",
              collapsed: true,
              items: [
                "tool/rabbitmq",
                "tool/rabbitmq/1_message-acknowledgment",
                {
                  label: "Tutorial",
                  collapsed: true,
                  autogenerate: { directory: "tool/rabbitmq/2_tutorial" },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
