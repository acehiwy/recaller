"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[9884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={description:"Docusaurus Deployment Instruction",tags:["docusaurus","documentation","tool"]},i="Deployment",l={unversionedId:"framework/docusaurus/deployment",id:"framework/docusaurus/deployment",title:"Deployment",description:"Docusaurus Deployment Instruction",source:"@site/docs/framework/docusaurus/deployment.mdx",sourceDirName:"framework/docusaurus",slug:"/framework/docusaurus/deployment",permalink:"/woof/docs/framework/docusaurus/deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/framework/docusaurus/deployment.mdx",tags:[{label:"docusaurus",permalink:"/woof/docs/tags/docusaurus"},{label:"documentation",permalink:"/woof/docs/tags/documentation"},{label:"tool",permalink:"/woof/docs/tags/tool"}],version:"current",frontMatter:{description:"Docusaurus Deployment Instruction",tags:["docusaurus","documentation","tool"]},sidebar:"default",previous:{title:"Swizzling",permalink:"/woof/docs/framework/docusaurus/swizzling"},next:{title:"Anki",permalink:"/woof/docs/tool/anki/"}},s={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Testing your build locally",id:"testing-your-build-locally",level:2},{value:"Trailing slash configuration",id:"trailing-slash-configuration",level:2}],c=(p="Color",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const d={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"To build the static files of your website for production, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"docusaurus build\n")),(0,n.kt)("p",null,"Once it finishes, the static files will be generated within the build directory."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The following parameters are required in docusaurus.config.js to optimize routing and serve files from the correct location:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:null},"URL for your site. For a site deployed at ",(0,n.kt)("inlineCode",{parentName:"td"},"https://my-org.com/my-project/"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"url")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"https://my-org.com/"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"baseUrl")),(0,n.kt)("td",{parentName:"tr",align:null},"Base URL for your project, ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," with a trailing slash "),". For a site deployed at ",(0,n.kt)("inlineCode",{parentName:"td"},"https://my-org.com/my-project/"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"baseUrl")," is ",(0,n.kt)("inlineCode",{parentName:"td"},"/my-project/"),". ",(0,n.kt)("inlineCode",{parentName:"td"},"/")," if no pathname")))),(0,n.kt)("h2",{id:"testing-your-build-locally"},"Testing your build locally"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"docusaurus serve\n")),(0,n.kt)("p",null,"By default, this will load your site at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,n.kt)("h2",{id:"trailing-slash-configuration"},"Trailing slash configuration"),(0,n.kt)("p",null,"Docusaurus has a ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/docusaurus-config#trailingSlash"},"trailingSlash config"),",\nto allow customizing URLs/links and emitted filename patterns."),(0,n.kt)("p",null,"The default value generally works fine. Unfortunately, ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," each static hosting provider ")," has a ",(0,n.kt)(c,{color:"var(--secondary-font-color)",mdxType:"Color"}," different behavior "),",\nand deploying the exact same site to various hosts can lead to distinct results."),(0,n.kt)("p",null,"Depending on your host, it can be useful to change this config."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/slorber/trailing-slash-guide"},"slorber/trailing-slash-guide")," to understand better the behavior of your host and configure trailingSlash appropriately.")))}m.isMDXComponent=!0}}]);