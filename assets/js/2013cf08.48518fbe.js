"use strict";(self.webpackChunkrecaller=self.webpackChunkrecaller||[]).push([[9262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?o.createElement(g,l(l({ref:t},u),{},{components:a})):o.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3e3,tags:["docusaurus"]},l="Pages",i={unversionedId:"framework/docusaurus/pages",id:"framework/docusaurus/pages",title:"Pages",description:"The @docusaurus/plugin-content-pages plugin empowers you to create one-off standalone pages.",source:"@site/docs/framework/docusaurus/pages.mdx",sourceDirName:"framework/docusaurus",slug:"/framework/docusaurus/pages",permalink:"/recaller/docs/framework/docusaurus/pages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/pages.mdx",tags:[{label:"docusaurus",permalink:"/recaller/docs/tags/docusaurus"}],version:"current",sidebarPosition:3e3,frontMatter:{sidebar_position:3e3,tags:["docusaurus"]},sidebar:"default",previous:{title:"Multiple sidebars",permalink:"/recaller/docs/framework/docusaurus/docs/sidebar/multiple-sidebars"},next:{title:"Markdown Features",permalink:"/recaller/docs/framework/docusaurus/markdown-features/"}},s={},p=[{value:"Add A React Page",id:"add-a-react-page",level:2},{value:"Add A Markdown Page",id:"add-a-markdown-page",level:2},{value:"Routing",id:"routing",level:2},{value:"Duplicate Routes",id:"duplicate-routes",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("Color"),d=u("Tabs"),m=u("TabItem"),g={toc:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pages"},"Pages"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-pages")," plugin empowers you to create one-off standalone pages.\nYou can use ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," React components "),", or ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," Markdown "),"."),(0,n.kt)("admonition",{title:"later",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages"},"Pages Plugin API Reference documentation")," for an exhaustive list of options.")),(0,n.kt)("h2",{id:"add-a-react-page"},"Add A React Page"),(0,n.kt)("p",null,"React is used as the UI library to create pages."),(0,n.kt)("p",null,"Every page component should export a React component"),(0,n.kt)("p",null,"Create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/helloReact.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=/src/pages/helloReact.js showLineNumbers",title:"/src/pages/helloReact.js",showLineNumbers:!0},'import React from "react";\nimport Layout from "@theme/Layout";\n\nexport default function Hello() {\n  return (\n    <Layout title="Hello" description="Hello React Page">\n      <div\n        style={{\n          display: "flex",\n          justifyContent: "center",\n          alignItems: "center",\n          height: "50vh",\n          fontSize: "20px",\n        }}\n      >\n        <p>\n          Edit <code>pages/helloReact.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n')),(0,n.kt)("p",null,"Now open ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/helloReact"},"http://localhost:3000/helloReact")," and you will see the new page you just created."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Each page doesn't come with any styling.\nYou will need to import the Layout component from ",(0,n.kt)("inlineCode",{parentName:"p"},'import Layout from "@theme/Layout"'),"\nand wrap your contents within that component if you want the ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," navbar ")," and/or ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," footer ")," to appear."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(m,{value:"withOutLayout",label:"Page Without Layout",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"@site/docs/assets/page-without-layout.png",src:a(9324).Z,width:"3334",height:"1878"}))),(0,n.kt)(m,{value:"withLayout",label:"Page With Layout",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"@site/docs/assets/page-with-layout.png",src:a(8570).Z,width:"3348",height:"1886"}))))),(0,n.kt)("h2",{id:"add-a-markdown-page"},"Add A Markdown Page"),(0,n.kt)("p",null,"Create a file ",(0,n.kt)("inlineCode",{parentName:"p"},"/src/pages/helloMarkdown.md")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},"---\ntitle: my hello page title\ndescription: my hello page description\nhide_table_of_contents: true\n---\n\n# Hello\n\nHow are you?\n")),(0,n.kt)("p",null,"In the same way, a page will be created at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/helloMarkdown"},"http://localhost:3000/helloMarkdown"),"."),(0,n.kt)("h2",{id:"routing"},"Routing"),(0,n.kt)("p",null,"Any JavaScript file you create under /src/pages/ directory will be automatically converted to a website page, following the /src/pages/ directory hierarchy."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo/test.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo/test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/foo/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"[baseUrl]/foo/"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"baseUrl of pages , blog , docs can be configured using ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"))),(0,n.kt)("p",null,"we recommend co-locating your styles with the page component in its own directory."),(0,n.kt)("p",null,'For example, to create a "Support" page, you could do one of the following:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/support/index.js")," file."),(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"/src/pages/support/styles.module.css"),' with styles meant to only be used on the "Support" page.')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"you will still need to manually import the CSS module file within your component module (support/index.js).")),(0,n.kt)("admonition",{title:"excluding files from website paths",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"All JavaScript , TypeScript, Markdown files within the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/")," directory will have corresponding website paths generated for them."),(0,n.kt)("p",{parentName:"admonition"},"If you want to create reusable components into that directory, use the exclude option (by default, files prefixed with ","_",", test files(.test.js),\nand files in ",(0,n.kt)("strong",{parentName:"p"},"tests")," directory ",(0,n.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," are not turned into pages "),").")),(0,n.kt)("h2",{id:"duplicate-routes"},"Duplicate Routes"),(0,n.kt)("p",null,"You may accidentally create multiple pages that are meant to be accessed on the same route."),(0,n.kt)("p",null,"When this happens, Docusaurus will warn you about duplicate routes\nwhen you run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build"),", ",(0,n.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," but the site will still be built successfully. ")),(0,n.kt)("p",null,"The ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," page that was created last will be accessible "),", but it will override other conflicting pages."),(0,n.kt)("p",null,"To resolve this issue, you should modify or remove any conflicting routes."),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"sources"},"Sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/creating-pages"},"https://docusaurus.io/docs/creating-pages"))))}f.isMDXComponent=!0},8570:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/page-with-layout-570b6d4096e8399599d6fc30c502a58b.png"},9324:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/page-without-layout-fb524e2fff15b6314423bcec14726332.png"}}]);