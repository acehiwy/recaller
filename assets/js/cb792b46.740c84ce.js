"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[634],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8174:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={description:"Introduction to Docusaurus documentation",sidebar_position:2e3,tags:["docusaurus","documentation","tool"]},s="Docs",i={unversionedId:"framework/docusaurus/docs/index",id:"framework/docusaurus/docs/index",title:"Docs",description:"Introduction to Docusaurus documentation",source:"@site/docs/framework/docusaurus/docs/index.mdx",sourceDirName:"framework/docusaurus/docs",slug:"/framework/docusaurus/docs/",permalink:"/woof/docs/framework/docusaurus/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/docs/index.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"},{label:"documentation",permalink:"/woof/docs/tags/documentation"},{label:"tool",permalink:"/woof/docs/tags/tool"}],version:"current",sidebarPosition:2e3,frontMatter:{description:"Introduction to Docusaurus documentation",sidebar_position:2e3,tags:["docusaurus","documentation","tool"]},sidebar:"default",previous:{title:"Installation",permalink:"/woof/docs/framework/docusaurus/installation"},next:{title:"Create Docs",permalink:"/woof/docs/framework/docusaurus/docs/create-docs"}},l={},u=[{value:"Docs-only mode",id:"docs-only-mode",level:2}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docs"},"Docs"),(0,r.kt)("p",null,"The docs feature provides users with a way to organize Markdown files in a hierarchical format."),(0,r.kt)("p",null,"Your site's documentation is organized by four levels, from lowest to highest:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Individual pages."),(0,r.kt)("li",{parentName:"ol"},"Sidebars."),(0,r.kt)("li",{parentName:"ol"},"Versions."),(0,r.kt)("li",{parentName:"ol"},"Plugin instances.")),(0,r.kt)("h2",{id:"docs-only-mode"},"Docs-only mode"),(0,r.kt)("p",null,"A freshly initialized Docusaurus site has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"example.com/                                -> generated from `src/pages/index.js`\n\nexample.com/docs/intro                      -> generated from `docs/intro.md`\nexample.com/docs/tutorial-basics/...        -> generated from `docs/tutorial-basics/...`\n\nexample.com/blog/2021/08/26/welcome         -> generated from `blog/2021-08-26-welcome/index.md`\nexample.com/blog/2021/08/01/mdx-blog-post   -> generated from `blog/2021-08-01-mdx-blog-post.mdx`\n")),(0,r.kt)("p",null,"All docs will be served under the subroute ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/"),"."),(0,r.kt)("p",null,"But what if your site only has docs, or you want to prioritize your docs by putting them at the root?"),(0,r.kt)("p",null,"To enter docs-only mode, change it to like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=docusaurus.config.js showLineNumbers",title:"docusaurus.config.js",showLineNumbers:!0},'module.exports = {\n  // ...\n  presets: [\n    "@docusaurus/preset-classic",\n    {\n      docs: {\n        // highlight-next-line\n        routeBasePath: "/", // Serve the docs at the site\'s root\n        /* other docs plugin options */\n      },\n      // highlight-next-line\n      blog: false, // Optional: disable the blog plugin\n      // ...\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"All that routeBasePath: '/' does is that instead of serving the docs through ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/docs/some-doc"),",\nthey are now at the site root: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com/some-doc"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to put some page at the root (",(0,r.kt)("a",{parentName:"p",href:"https://example.com/"},"https://example.com/"),") through adding the front matter:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=docs/index.md showLineNumbers",title:"docs/index.md",showLineNumbers:!0},"---\nslug: /\n---\n\nThis page will be the home page when users visit https://example.com/.\n"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you added slug: / to a doc to make it the homepage, you should delete the existing homepage at ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/pages/index.js"),", or else there will be two files mapping to the same route!")),(0,r.kt)("p",null,"Now, the site's structure will be like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"example.com/                       -> generated from `docs/intro.md`\nexample.com/tutorial-basics/...    -> generated from `docs/tutorial-basics/...`\n")),(0,r.kt)("admonition",{title:"Docs config API reference",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"},"Docs Plugin API Reference documentation")," for an exhaustive list of options.")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"https://docusaurus.io/docs/docs-introduction"))))}d.isMDXComponent=!0}}]);