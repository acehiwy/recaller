"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[122],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>u});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},m=function(e){var o=p(e.components);return n.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return t?n.createElement(k,i(i({ref:o},m),{},{components:t})):n.createElement(k,i({ref:o},m))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5326:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const a={description:"Docusaurus's MDX syntax",tags:["docusaurus","documentation","tool"]},i="MDX and React",l={unversionedId:"docusaurus/markdown-features/mdx-react",id:"docusaurus/markdown-features/mdx-react",title:"MDX and React",description:"Docusaurus's MDX syntax",source:"@site/docs/docusaurus/markdown-features/mdx-react.mdx",sourceDirName:"docusaurus/markdown-features",slug:"/docusaurus/markdown-features/mdx-react",permalink:"/woof/docs/docusaurus/markdown-features/mdx-react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus/markdown-features/mdx-react.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"},{label:"documentation",permalink:"/woof/docs/tags/documentation"},{label:"tool",permalink:"/woof/docs/tags/tool"}],version:"current",frontMatter:{description:"Docusaurus's MDX syntax",tags:["docusaurus","documentation","tool"]},sidebar:"default",previous:{title:"Heading and Table of contents",permalink:"/woof/docs/docusaurus/markdown-features/heading-and-toc"},next:{title:"Pages",permalink:"/woof/docs/docusaurus/pages"}},s={},p=[{value:"Exporting components",id:"exporting-components",level:2},{value:"Importing components",id:"importing-components",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2},{value:"Importing in other Markdown files (<code>.mdx</code>)",id:"importing-in-other-markdown-files-mdx",level:3},{value:"Importing in other JSX files",id:"importing-in-other-jsx-files",level:3},{value:"Importing code snippets",id:"importing-code-snippets",level:2},{value:"MDX component scope",id:"mdx-component-scope",level:2},{value:"Available exports",id:"available-exports",level:2}],m=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o)},c=m("Color"),d=m("Tabs"),u=m("TabItem"),k={toc:p};function h(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mdx-and-react"},"MDX and React"),(0,r.kt)("p",null,"Docusaurus has built-in support for ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," MDX v1 "),"\n, which allows you to ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," write JSX ")," ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," within ")," your ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," Markdown files ")," and ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," render them as React components "),"."),(0,r.kt)("admonition",{title:"later",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX docs")," to see what other fancy stuff you can do with MDX.")),(0,r.kt)("h2",{id:"exporting-components"},"Exporting components"),(0,r.kt)("p",null,"To ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," define ")," any custom component ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," within ")," an MDX file,",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," you have to ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," it ")),(0,r.kt)("p",null,"Only paragraphs that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," will be parsed as components instead of prose."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"prose : written or spoken language in its ordinary form")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Example "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=foo.mdx showLineNumbers",title:"foo.mdx",showLineNumbers:!0},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n"))),(0,r.kt)("admonition",{title:"MDX is JSX",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX."),(0,r.kt)("p",{parentName:"admonition"},"Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n"))),(0,r.kt)("h2",{id:"importing-components"},"Importing components"),(0,r.kt)("p",null,"You can also import your own components defined in other files or third-party components installed via npm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@site")," alias points to your ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," website's directory "),", usually ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," where the docusaurus.config.js file is "),".")),(0,r.kt)("p",null,"While declaring components within Markdown is very convenient for simple cases,\nit becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability."),(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"},"Use a separate .js file")," when your component involves complex JS logic:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=foo.mdx showLineNumbers",title:"foo.mdx",showLineNumbers:!0},"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n")),(0,r.kt)("h2",{id:"importing-markdown"},"Importing Markdown"),(0,r.kt)("p",null,"You can use Markdown files ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," as components ")," and import them elsewhere,\neither in ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," Markdown files ")," or in ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," React pages "),"."),(0,r.kt)("p",null,"By convention, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," filename prefix will not create any doc page and means the Markdown file is a ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"},' "partial" '),", to be imported by other files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=_markdown-partial-example.mdx showLineNumbers",title:"_markdown-partial-example.mdx",showLineNumbers:!0},"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n")),(0,r.kt)("h3",{id:"importing-in-other-markdown-files-mdx"},"Importing in other Markdown files (",(0,r.kt)("inlineCode",{parentName:"h3"},".mdx"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=someOtherDoc.mdx showLineNumbers",title:"someOtherDoc.mdx",showLineNumbers:!0},'import PartialExample from "./_markdown-partial-example.mdx";\n\n<PartialExample name="Sebastien" />;\n')),(0,r.kt)("h3",{id:"importing-in-other-jsx-files"},"Importing in other JSX files"),(0,r.kt)("p",null,"If you are importing ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," Markdown ")," ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," in "),(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," a React page "),",\nyou have to supply ",(0,r.kt)("inlineCode",{parentName:"p"},"MDXContent")," provider yourself."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Wrap your imported Markdown component with ",(0,r.kt)("inlineCode",{parentName:"p"},"MDXContent")," provider.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=fooPages.jsx showLineNumbers",title:"fooPages.jsx",showLineNumbers:!0},'import React from "react";\nimport FeatureDisplay from "./_featureDisplay.mdx";\nimport MDXContent from "@theme/MDXContent";\n\nexport default function LandingPage() {\n  return (\n    <div>\n      // highlight-start\n      <MDXContent>\n        <FeatureDisplay />\n      </MDXContent>\n      // highlight-end\n    </div>\n  );\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the table of contents does not contain the imported Markdown headings.")),(0,r.kt)("h2",{id:"importing-code-snippets"},"Importing code snippets"),(0,r.kt)("p",null,"You can also import ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," any code file as raw text "),",\nand then ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," insert ")," it in a ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," code block "),"."),(0,r.kt)("p",null,"You need to install ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/raw-loader/"},"Webpack raw-loader")," in your project:"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"npm install --save raw-loader\n"))),(0,r.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"yarn add raw-loader\n")))),(0,r.kt)("p",null,"Now you can import code snippets from another file as it is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=foo.mdx showLineNumbers",title:"foo.mdx",showLineNumbers:!0},'import CodeBlock from "@theme/CodeBlock";\nimport MyComponentSource from "!!raw-loader!./myComponent";\n\n<CodeBlock language="jsx">{MyComponentSource}</CodeBlock>;\n')),(0,r.kt)("admonition",{title:"later",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"code-blocks"},"using code blocks in JSX")," for more details of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," component.")),(0,r.kt)("h2",{id:"mdx-component-scope"},"MDX component scope"),(0,r.kt)("p",null,"Apart from importing a component and exporting a component,\na third way to use a component in MDX is to ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," register it ")," to the ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," global scope "),",\nwhich will make it automatically ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," available in every MDX file "),", without any import statements."),(0,r.kt)("p",null,"For example, given this MDX file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=foo.mdx showLineNumbers",title:"foo.mdx",showLineNumbers:!0},"- a\n- list!\n\nAnd some <YourCustomComponent>custom markup</YourCustomComponent>...\n")),(0,r.kt)("p",null,"It will be compiled to a React component containing ",(0,r.kt)("inlineCode",{parentName:"p"},"ul"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"li"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"YourCustomComponent")," tags."),(0,r.kt)("p",null,"In Docusaurus, this MDX component scope is provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/MDXComponents")," component."),(0,r.kt)(c,{color:"var(--can-not-understand-font-color)",mdxType:"Color"},(0,r.kt)("p",null,"It's not a React component, per se, unlike most other exports under the @theme/\nalias: it is a record from tag names like ul and img to their custom implementations.")),(0,r.kt)("p",null,"If you want to register extra tag names (like the ",(0,r.kt)("inlineCode",{parentName:"p"},"<YourCustomComponent>")," tag above),\nyou should consider wrapping ",(0,r.kt)("inlineCode",{parentName:"p"},"@theme/MDXComponents"),", so you don't have to maintain all the existing mappings."),(0,r.kt)("p",null,"Since the swizzle CLI doesn't allow wrapping non-component files yet, you should manually create the wrapper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=src/theme/MDXComponents.js showLineNumbers",title:"src/theme/MDXComponents.js",showLineNumbers:!0},'import React from "react";\n// Import the original mapper\nimport MDXComponents from "@theme-original/MDXComponents";\nimport YourCustomComponent from "@site/src/components/YourCustomComponent";\n\nexport default {\n  // Re-use the default mapping\n  ...MDXComponents,\n  // Map the "YourCustomComponent" tag to our <YourCustomComponent /> component!\n  YourCustomComponent: YourCustomComponent,\n};\n')),(0,r.kt)("p",null,"And now, you can freely use ",(0,r.kt)("inlineCode",{parentName:"p"},"<highlight>")," in every page, without writing the import statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=foo.mdx showLineNumbers",title:"foo.mdx",showLineNumbers:!0},"I can conveniently use <YourCustomComponent>Docusaurus green</YourCustomComponent> everywhere!\n")),(0,r.kt)("h2",{id:"available-exports"},"Available exports"),(0,r.kt)("p",null,"\u200b",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," Within ")," the MDX page, the following\nvariables are available as globals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"frontMatter"),": the front matter as a record of string keys and values;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toc"),": the table of contents, as a tree of headings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contentTitle"),": the Markdown title, which is the first h1 heading in the Markdown text. It's undefined if there isn't one (e.g. title specified in the front matter).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">\n  {\n    JSON.stringify(\n      // highlight-next-line\n      toc,\n      null,\n      2\n    )\n  }\n</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {\n    // highlight-next-line\n    Object.entries(frontMatter)\n    .map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)\n  }\n</ul>\n\n<p>\n  The title of this page is:\n  <b>\n    // highlight-next-line\n    {contentTitle}\n  </b>\n</p>\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/react"},"https://docusaurus.io/docs/markdown-features/react"))))}h.isMDXComponent=!0}}]);