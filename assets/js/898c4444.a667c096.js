"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[592],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||a;return o?r.createElement(f,s(s({ref:t},d),{},{components:o})):r.createElement(f,s({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1390:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={description:"How to create documentation using Docusaurus",tags:["docusaurus","documentation","tool"]},s="Create Docs",l={unversionedId:"framework/docusaurus/docs/create-docs",id:"framework/docusaurus/docs/create-docs",title:"Create Docs",description:"How to create documentation using Docusaurus",source:"@site/docs/framework/docusaurus/docs/create-docs.mdx",sourceDirName:"framework/docusaurus/docs",slug:"/framework/docusaurus/docs/create-docs",permalink:"/woof/docs/framework/docusaurus/docs/create-docs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/docs/create-docs.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"},{label:"documentation",permalink:"/woof/docs/tags/documentation"},{label:"tool",permalink:"/woof/docs/tags/tool"}],version:"current",frontMatter:{description:"How to create documentation using Docusaurus",tags:["docusaurus","documentation","tool"]},sidebar:"default",previous:{title:"Docs",permalink:"/woof/docs/framework/docusaurus/docs/"},next:{title:"Sidebar",permalink:"/woof/docs/framework/docusaurus/docs/sidebar/"}},i={},u=[{value:"Headers And Table Of Content (TOC)",id:"headers-and-table-of-content-toc",level:2},{value:"Custom ID headers",id:"custom-id-headers",level:2},{value:"Doc Front Matter",id:"doc-front-matter",level:2},{value:"Doc tags",id:"doc-tags",level:2},{value:"Docs Folder Structure",id:"docs-folder-structure",level:2},{value:"Document ID",id:"document-id",level:3},{value:"Doc URLs",id:"doc-urls",level:3}],d=(c="Color",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-docs"},"Create Docs"),(0,n.kt)("p",null,"Create a Markdown file, ",(0,n.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the docs directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,n.kt)("h2",{id:"headers-and-table-of-content-toc"},"Headers And Table Of Content (TOC)"),(0,n.kt)("p",null,"Headers will show up on the table of contents on the upper right"),(0,n.kt)("p",null,"So that your users will know what this page is all about without scrolling down or even without reading too much."),(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"},"Only h2 and h3 will be in the TOC by default."),(0,n.kt)("p",null,"You can configure the TOC heading levels either per-document or in the theme configuration."),(0,n.kt)("h2",{id:"custom-id-headers"},"Custom ID headers"),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"{#custom-id}")," syntax you can set your own header ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=foo.md",title:"foo.md"},"# Foo Header {#custom-id}\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"All files prefixed with an underscore (",(0,n.kt)("inlineCode",{parentName:"p"},"_"),") ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," under the docs directory "),' are treated as "partial" pages\nand ',(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," will be ignored by default "),"."),(0,n.kt)("p",{parentName:"admonition"},"Read more about ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react#importing-markdown"},"importing partial pages"),".")),(0,n.kt)("h2",{id:"doc-front-matter"},"Doc Front Matter"),(0,n.kt)("p",null,"The front matter is used to ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," provide additional metadata for your doc ")," page."),(0,n.kt)("p",null,"Front matter is optional. Docusaurus will be able to infer all necessary metadata without the front matter."),(0,n.kt)("admonition",{title:"LATER",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For all possible fields, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"},"API documentation"),".")),(0,n.kt)("h2",{id:"doc-tags"},"Doc tags"),(0,n.kt)("p",null,"Optionally, you can add tags to your doc pages, which introduces another dimension of categorization."),(0,n.kt)("p",null,"Tags are passed in the front matter as a list of labels:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("details",null,(0,n.kt)("summary",null," tags will be displayed at the end of each doc page. "),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{src:o(3651).Z,width:"1128",height:"526"}))),(0,n.kt)("p",{parentName:"admonition"},"when tag is clicked, Docusaurus filter all docs containing it.")),(0,n.kt)("h2",{id:"docs-folder-structure"},"Docs Folder Structure"),(0,n.kt)("p",null,"How the Markdown files are arranged under the docs folder can have multiple impacts on Docusaurus content generation."),(0,n.kt)("p",null,"However, most of them can be decoupled from the file structure."),(0,n.kt)("h3",{id:"document-id"},"Document ID"),(0,n.kt)("p",null,"Every document has a unique id. By default, a document id is the ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," name of the document ")," (without the extension) relative to the root docs directory."),(0,n.kt)("p",null,"For example, the ID of ",(0,n.kt)("inlineCode",{parentName:"p"},"greeting.md"),' is "greeting", and the ID of ',(0,n.kt)("inlineCode",{parentName:"p"},"guide/hello.md"),' is "guide/hello".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"website # Root directory of your site\n\u2514\u2500\u2500 docs\n   \u251c\u2500\u2500 greeting.md\n   \u2514\u2500\u2500 guide\n      \u2514\u2500\u2500 hello.md\n")),(0,n.kt)("p",null,"However, the ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," last part ")," of the id can be ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," defined ")," by the user in the ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," front matter. ")),(0,n.kt)("p",null,"For example, if ",(0,n.kt)("inlineCode",{parentName:"p"},"guide/hello.md"),'\'s content is defined as below, its final id is "guide/part1".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"---\nid: part1\n---\n\nLorem ipsum\n")),(0,n.kt)(d,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"},"The ID is used to refer to a document when hand-writing (manually configure) sidebars, or when using docs-related layout components or hooks."),(0,n.kt)("h3",{id:"doc-urls"},"Doc URLs"),(0,n.kt)("p",null,"By default, a document's ",(0,n.kt)(d,{color:"var(--secondary-font-color)",mdxType:"Color"}," URL location is its file path ",(0,n.kt)(d,{color:"var(--primary-font-color)",mdxType:"Color"}," relative ")," ")," to the docs folder."),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"slug")," front matter to change a document's URL."),(0,n.kt)("p",null,"For example, suppose your site structure looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"website # Root directory of your site\n\u2514\u2500\u2500 docs\n\u2514\u2500\u2500 guide\n\u2514\u2500\u2500 hello.md\n")),(0,n.kt)("p",null,"By default hello.md will be available at /docs/guide/hello."),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"slug"),", you can change its URL location to /docs/bonjour:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"---\nslug: /bonjour\n---\n\nLorem ipsum\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"slug")," will be appended to the doc plugin's routeBasePath, which is ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," by default."),(0,n.kt)("p",{parentName:"admonition"},"It is possible to use:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"absolute slugs: slug: /mySlug, slug: /..."),(0,n.kt)("li",{parentName:"ul"},"relative slugs: slug: mySlug, slug: ./../mySlug..."))),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"sources"},"Sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/create-doc"},"https://docusaurus.io/docs/create-doc"))))}m.isMDXComponent=!0},3651:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/tags-demo-b6273ef6399cc5ca7fc3ea22cee56269.png"}}]);