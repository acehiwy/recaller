"use strict";(self.webpackChunkrecaller=self.webpackChunkrecaller||[]).push([[745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,g=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={description:"Docusaurus Autogenerated Sidebar",sidebar_position:2e3,tags:["docusaurus"]},i="Autogenerated",s={unversionedId:"framework/docusaurus/docs/sidebar/autogenerated",id:"framework/docusaurus/docs/sidebar/autogenerated",title:"Autogenerated",description:"Docusaurus Autogenerated Sidebar",source:"@site/docs/framework/docusaurus/docs/sidebar/autogenerated.mdx",sourceDirName:"framework/docusaurus/docs/sidebar",slug:"/framework/docusaurus/docs/sidebar/autogenerated",permalink:"/recaller/docs/framework/docusaurus/docs/sidebar/autogenerated",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/docs/sidebar/autogenerated.mdx",tags:[{label:"docusaurus",permalink:"/recaller/docs/tags/docusaurus"}],version:"current",sidebarPosition:2e3,frontMatter:{description:"Docusaurus Autogenerated Sidebar",sidebar_position:2e3,tags:["docusaurus"]},sidebar:"default",previous:{title:"Sidebar Items",permalink:"/recaller/docs/framework/docusaurus/docs/sidebar/items"},next:{title:"Multiple sidebars",permalink:"/recaller/docs/framework/docusaurus/docs/sidebar/multiple-sidebars"}},l={},d=[{value:"Category index convention",id:"category-index-convention",level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",level:2},{value:"Doc item metadata",id:"doc-item-metadata",level:3},{value:"Category item metadata",id:"category-item-metadata",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Color"),m=u("Tabs"),p=u("TabItem"),g={toc:d};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autogenerated"},"Autogenerated"),(0,r.kt)("p",null,"Docusaurus can create a sidebar automatically from your filesystem structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"each folder creates a sidebar category"),(0,r.kt)("li",{parentName:"ul"},"each file creates a doc link.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'type SidebarItemAutogenerated = {\n  type: "autogenerated";\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n')),(0,r.kt)("p",null,"An ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," autogenerated item is converted ")," by Docusaurus to a ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," sidebar slice "),"\nso you can splice multiple autogenerated items from multiple directories, interleaving them with regular sidebar items, in one sidebar level."),(0,r.kt)("details",null,(0,r.kt)("summary",null," Example "),(0,r.kt)("p",null,"Consider this file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"docs\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251c\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251c\u2500\u2500 advanced\n    \u2502   \u251c\u2500\u2500 advanced1.md\n    \u2502   \u251c\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251c\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251c\u2500\u2500 easy\n    \u2502   \u251c\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251c\u2500\u2500 tutorial-end.md\n    \u251c\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n")),(0,r.kt)("p",null,"sidebar definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=sidebars.js showLineNumbers",title:"sidebars.js",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    "intro",\n    {\n      type: "category",\n      label: "Tutorials",\n      items: [\n        "tutorial-intro",\n        // highlight-start\n        {\n          type: "autogenerated",\n          dirName: "tutorials/easy", // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n\n        "tutorial-medium",\n\n        // highlight-start\n        {\n          type: "autogenerated",\n          dirName: "tutorials/advanced", // Generate sidebar slice from docs/tutorials/hard\n        },\n        // highlight-end\n        "tutorial-end",\n      ],\n    },\n    // highlight-start\n    {\n      type: "autogenerated",\n      dirName: "api", // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: "category",\n      label: "Community",\n      items: ["team", "chat"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"It would be resolved as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title= showLineNumbers",title:"",showLineNumbers:!0},'module.exports = {\n  mySidebar: [\n    "intro",\n    {\n      type: "category",\n      label: "Tutorials",\n      items: [\n        "tutorial-intro",\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        "easy1",\n        "easy2",\n        // highlight-end\n        "tutorial-medium",\n        // highlight-start\n        // Two files and a folder in docs/tutorials/hard\n        "advanced1",\n        "advanced2",\n        {\n          type: "category",\n          label: "read-more",\n          items: ["resource1", "resource2"],\n        },\n        // highlight-end\n        "tutorial-end",\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: "category",\n      label: "product1-api",\n      items: ["api"],\n    },\n    {\n      type: "category",\n      label: "product2-api",\n      items: ["basic-api", "pro-api"],\n    },\n    // highlight-end\n    {\n      type: "category",\n      label: "Community",\n      items: ["team", "chat"],\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"Note how the autogenerate ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," source directories themselves ",(0,r.kt)(c,{color:"var(--primary-font-color)",mdxType:"Color"}," don't ")," become categories "),': only the items they contain do.\nThis is what we mean by "sidebar slice".')),(0,r.kt)("h2",{id:"category-index-convention"},"Category index convention"),(0,r.kt)("p",null,"Docusaurus can automatically link a ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," category ")," to its ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," index document "),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Normally (without link or category index) when category is clicked, nothing happend")),(0,r.kt)("p",null,"A category index document is a document following one of those filename conventions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Named as index (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/index.md")),(0,r.kt)("li",{parentName:"ul"},"Named as README (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/README.mdx")),(0,r.kt)("li",{parentName:"ul"},"Same name as parent folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/Guides.md"))),(0,r.kt)("p",null,"This is equivalent to using a category with a ",(0,r.kt)("a",{parentName:"p",href:"items#doc-link"},"doc link"),"."),(0,r.kt)(c,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"},"Naming your introductory document README.md makes it show up when browsing the folder using the GitHub interface, while using index.md makes the behavior more in line with how HTML files are served."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If a folder only has one index page, it will be turned into a link instead of a category."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-title=",metastring:"showLineNumbers",showLineNumbers:!0},"some-doc\n\u251c\u2500\u2500 index.md\n\u251c\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n"))),(0,r.kt)("h2",{id:"autogenerated-sidebar-metadata"},"Autogenerated sidebar metadata"),(0,r.kt)("p",null,"For handwritten sidebar definitions, you would provide metadata to sidebar items through sidebars.js."),(0,r.kt)("p",null,"For autogenerated, Docusaurus would read them from the item's respective file."),(0,r.kt)("p",null,"In addition, you may want to adjust the relative position of each item because,\nby default, items within a sidebar slice will be ",(0,r.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," generated in alphabetical order ")," (using file and folder names)."),(0,r.kt)("h3",{id:"doc-item-metadata"},"Doc item metadata"),(0,r.kt)("p",null,"The label, className, and customProps attributes are declared in front matter as sidebar_label, sidebar_class_name, and sidebar_custom_props, respectively."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Front matter"),(0,r.kt)("th",{parentName:"tr",align:null},"sidebar.js"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_class_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"className"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_custom_props")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customProps"))))),(0,r.kt)("p",null,"Position can be specified in the same way, via sidebar_position front matter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=foo.md showLineNumbers",title:"foo.md",showLineNumbers:!0},"---\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n")),(0,r.kt)("h3",{id:"category-item-metadata"},"Category item metadata"),(0,r.kt)("p",null,"By adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.yml")," file in the respective folder."),(0,r.kt)("p",null,"You can specify any category metadata and also the ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," metadata."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," will default to the respective values of the category's linked doc, if there is one."),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(p,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=docs/foo/_category_.json showLineNumbers",title:"docs/foo/_category_.json",showLineNumbers:!0},'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  },\n  "customProps": {\n    "description": "This description can be used in the swizzled DocCard"\n  }\n}\n'))),(0,r.kt)(p,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docs/foo/_category_.yml showLineNumbers",title:"docs/foo/_category_.yml",showLineNumbers:!0},'position: 2.5 # float position is supported\nlabel: "Tutorial"\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\ncustomProps:\n  description: This description can be used in the swizzled DocCard\n')))),(0,r.kt)("admonition",{title:"???",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the link is explicitly specified, Docusaurus will not apply any default conventions."),(0,r.kt)("p",{parentName:"admonition"},'The doc links can be specified relatively, e.g. if the category is generated with the guides directory, "link": {"type": "doc", "id": "intro"} will be resolved to the ID guides/intro, only falling back to intro if a doc with the former ID doesn\'t exist.'),(0,r.kt)("p",{parentName:"admonition"},"You can also use link: null to opt out of default conventions and not generate any category index page.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The position metadata is only used within a sidebar slice: Docusaurus does not re-order other items of your sidebar.")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/autogenerated"},"https://docusaurus.io/docs/sidebar/autogenerated"))))}y.isMDXComponent=!0}}]);