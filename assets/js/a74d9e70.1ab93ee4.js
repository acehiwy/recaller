"use strict";(self.webpackChunkrecaller=self.webpackChunkrecaller||[]).push([[9953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={description:"Docusaurus's Code Blocks",sidebar_position:5e3,tags:["docusaurus"]},i="Code blocks",l={unversionedId:"framework/docusaurus/markdown-features/code-blocks",id:"framework/docusaurus/markdown-features/code-blocks",title:"Code blocks",description:"Docusaurus's Code Blocks",source:"@site/docs/framework/docusaurus/markdown-features/code-blocks.mdx",sourceDirName:"framework/docusaurus/markdown-features",slug:"/framework/docusaurus/markdown-features/code-blocks",permalink:"/recaller/docs/framework/docusaurus/markdown-features/code-blocks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/markdown-features/code-blocks.mdx",tags:[{label:"docusaurus",permalink:"/recaller/docs/tags/docusaurus"}],version:"current",sidebarPosition:5e3,frontMatter:{description:"Docusaurus's Code Blocks",sidebar_position:5e3,tags:["docusaurus"]},sidebar:"default",previous:{title:"Assets",permalink:"/recaller/docs/framework/docusaurus/markdown-features/assets"},next:{title:"Admonitions",permalink:"/recaller/docs/framework/docusaurus/markdown-features/admonitions"}},s={},u=[{value:"Code title",id:"code-title",level:2},{value:"Syntax highlighting",id:"syntax-highlighting",level:2},{value:"Theming",id:"theming",level:3},{value:"Supported Languages",id:"supported-languages",level:3},{value:"Line Highlighting",id:"line-highlighting",level:2},{value:"Supported commenting syntax",id:"supported-commenting-syntax",level:3},{value:"Config highlighted code background",id:"config-highlighted-code-background",level:3},{value:"Custom magic comments",id:"custom-magic-comments",level:3},{value:"Line numbering",id:"line-numbering",level:2},{value:"Interactive code editor",id:"interactive-code-editor",level:2},{value:"Use CodeBlock in JSX",id:"use-codeblock-in-jsx",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Color"),d=c("Tabs"),p=c("TabItem"),h={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-blocks"},"Code blocks"),(0,r.kt)("h2",{id:"code-title"},"Code title"),(0,r.kt)("p",null,"You can add a title to the code block by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," key after the language (leave a space between them)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,r.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,r.kt)("p",null,"Code blocks are text blocks wrapped around by strings of 3 backticks."),(0,r.kt)("admonition",{title:"later",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mdx-js/specification"},"this reference")," for the specifications of MDX.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'```js\nconsole.log("Every repo must come with a mascot.");\n```\n')),(0,r.kt)("p",null,"Docusaurus will pick up syntax highlighting automatically, powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'console.log("Every repo must come with a mascot.");\n')),(0,r.kt)("hr",null),(0,r.kt)(m,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"},(0,r.kt)("h3",{id:"theming"},"Theming")),(0,r.kt)("p",null,"By default, the Prism ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer#theming"},"syntax highlighting theme")," we use is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight"),"."),(0,r.kt)("p",null,"You can change this to another theme by passing theme field in prism as themeConfig in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,r.kt)("p",null,"For example, if you prefer to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"dracula")," highlighting theme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=docusaurus.config.js showLineNumbers",title:"docusaurus.config.js",showLineNumbers:!0},'module.exports = {\n  themeConfig: {\n    prism: {\n      theme: require("prism-react-renderer/themes/dracula"),\n    },\n  },\n};\n')),(0,r.kt)("p",null,"Because a Prism theme is just a JS object, you can also write your own theme if you are not satisfied with the default. Docusaurus enhances the github and vsDark themes to provide richer highlight"),(0,r.kt)("p",null,"You can check our implementations for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismLight.mjs"},"light")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismDark.mjs"},"dark")," code block themes."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"supported-languages"},"Supported Languages"),(0,r.kt)("p",null,"By default, Docusaurus comes with a subset of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"commonly used languages"),"."),(0,r.kt)("p",null,"To add syntax highlighting for any of the other ",(0,r.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism-supported languages"),", define it in an array of additional languages."),(0,r.kt)("p",null,"For example, if you want to add highlighting for the PowerShell language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=docusaurus.config.js showLineNumbers",title:"docusaurus.config.js",showLineNumbers:!0},'module.exports = {\n  // ...\n  themeConfig: {\n    prism: {\n      additionalLanguages: ["powershell"],\n    },\n    // ...\n  },\n};\n')),(0,r.kt)("p",null,"After adding ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalLanguages"),", restart Docusaurus."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Each additional language has to be a valid Prism component name."),(0,r.kt)("p",{parentName:"admonition"},"For example, Prism would map the language ",(0,r.kt)("inlineCode",{parentName:"p"},"cs")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"csharp"),", but only ",(0,r.kt)("inlineCode",{parentName:"p"},"prism-csharp.js")," ",(0,r.kt)(m,{color:"var(--primary-font-color)",mdxType:"Color"}," exists ")," as a component"),(0,r.kt)("p",{parentName:"admonition"},"So you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalLanguages: ['csharp']"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can look into ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/prismjs/components")," to find all components (languages) available.")),(0,r.kt)("h2",{id:"line-highlighting"},"Line Highlighting"),(0,r.kt)("p",null,"You can use comments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"highlight-next-line")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"highlight-start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"highlight-end "))),(0,r.kt)("p",null,"to select which lines are highlighted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'```js\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return "This text is highlighted!";\n  }\n\n  return "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return "This range is highlighted!";\n  }\n  // highlight-end\n\n  return "Nothing highlighted";\n}\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return "This text is highlighted!";\n  }\n\n  return "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return "This range is highlighted!";\n  }\n  // highlight-end\n\n  return "Nothing highlighted";\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"supported-commenting-syntax"},"Supported commenting syntax"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Style"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C-style"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/* ... */")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"// ..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSX-style"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{/* ... */}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bash-style"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"# ..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTML-style"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\x3c!-- ... --\x3e"))))),(0,r.kt)("hr",null),(0,r.kt)(m,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"},(0,r.kt)("h3",{id:"config-highlighted-code-background"},"Config highlighted code background")),(0,r.kt)("p",null,"You can set your own background color for highlighted code line in your ",(0,r.kt)("inlineCode",{parentName:"p"},"src/css/custom.css")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"title=/src/css/custom.css showLineNumbers",title:"/src/css/custom.css",showLineNumbers:!0},':root {\n  --docusaurus-highlighted-code-line-bg: rgb(72, 77, 91);\n}\n\n/* If you have a different syntax highlighting theme for dark mode. */\n[data-theme="dark"] {\n  /* Color which works with dark mode syntax highlighting theme */\n  --docusaurus-highlighted-code-line-bg: rgb(100, 100, 100);\n}\n')),(0,r.kt)("p",null,"If you also need to style the highlighted code line in some other way, you can target on ",(0,r.kt)("inlineCode",{parentName:"p"},"theme-code-block-highlighted-line")," CSS class."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"custom-magic-comments"},"Custom magic comments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"// highlight-next-line")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"// highlight-start")," etc. are called ",(0,r.kt)(m,{color:"var(--secondary-font-color)",mdxType:"Color"},' "magic comments" '),"."),(0,r.kt)("p",null,"You can declare custom magic comments through theme config."),(0,r.kt)("p",null,"For example, you can register another magic comment that adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"code-block-error-line")," class name:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"config",label:"docusaurus.config.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'module.exports = {\n  themeConfig: {\n    prism: {\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: "theme-code-block-highlighted-line",\n          line: "highlight-next-line",\n          block: { start: "highlight-start", end: "highlight-end" },\n        },\n        {\n          className: "code-block-error-line",\n          line: "highlight-error-next-line",\n        },\n      ],\n    },\n  },\n};\n'))),(0,r.kt)(p,{value:"customCss",label:"src/css/custom.css",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n"))),(0,r.kt)(p,{value:"foo.md",label:"foo.md",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"In JavaScript, trying to access properties on `null` will error.\n\n```js\nconst name = null;\n// highlight-error-next-line\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n```\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=foo.md showLineNumbers",title:"foo.md",showLineNumbers:!0},"const name = null;\n// highlight-error-next-line\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Every magic comment entry will contain three keys"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"className")," (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"line")," which applies to the directly next line"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"block")," (containing start and end), which applies to the entire block enclosed by the two comments."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can disable the default line highlighting comments with ",(0,r.kt)("inlineCode",{parentName:"p"},"magicComments: []"),".")),(0,r.kt)("admonition",{title:"later",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using CSS to target the class can already do a lot, but you can unlock the full potential of this feature through swizzling."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"npm run swizzle @docusaurus/theme-classic CodeBlock/Line\n"))),(0,r.kt)(p,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"yarn run swizzle @docusaurus/theme-classic CodeBlock/Line\n")))),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Line")," component will receive the list of class names, based on which you can conditionally render different markup.")),(0,r.kt)("h2",{id:"line-numbering"},"Line numbering"),(0,r.kt)("p",null,"You can enable line numbering for your code block by using ",(0,r.kt)("inlineCode",{parentName:"p"},"showLineNumbers")," key within the language meta string ",(0,r.kt)(m,{color:"var(--secondary-font-color)",mdxType:"Color"}," (don't forget to add space directly before the key) "),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=",title:""},'```jsx showLineNumbers\nimport React from "react";\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},'import React from "react";\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n')),(0,r.kt)(m,{color:"var(--not-nesary-for-now-future-font-color)",mdxType:"Color"},(0,r.kt)("h2",{id:"interactive-code-editor"},"Interactive code editor")),(0,r.kt)("p",null,"You can create an interactive coding editor with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," plugin (Powered by React Live)."),(0,r.kt)("p",null,"refer to further document: ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor"},"https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor")),(0,r.kt)("h2",{id:"use-codeblock-in-jsx"},"Use CodeBlock in JSX"),(0,r.kt)("p",null,"Outside of Markdown, you can use the @theme/CodeBlock component to get the same output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'import CodeBlock from "@theme/CodeBlock";\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      // highlight-start\n      <CodeBlock\n        language="jsx"\n        title="/src/components/HelloCodeTitle.js"\n        showLineNumbers\n      >\n        {`function HelloCodeTitle(props) {\n          return <h1>Hello, {props.name}</h1>;\n        }`}\n      </CodeBlock>\n      // highlight-end\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"The props accepted are ",(0,r.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"showLineNumbers"),", in the same way as you write Markdown code blocks."),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"https://docusaurus.io/docs/markdown-features/code-blocks"))))}g.isMDXComponent=!0}}]);