"use strict";(self.webpackChunkwoof=self.webpackChunkwoof||[]).push([[365],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>u});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(o),u=a,h=k["".concat(d,".").concat(u)]||k[u]||p[u]||r;return o?n.createElement(h,l(l({ref:t},s),{},{components:o})):n.createElement(h,l({ref:t},s))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8895:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:1e3,tags:["anki"]},l="Key concepts",i={unversionedId:"tool/anki/key-concept",id:"tool/anki/key-concept",title:"Key concepts",description:"Cards",source:"@site/docs/tool/anki/key-concept.mdx",sourceDirName:"tool/anki",slug:"/tool/anki/key-concept",permalink:"/woof/docs/tool/anki/key-concept",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tool/anki/key-concept.mdx",tags:[{label:"anki",permalink:"/woof/docs/tags/anki"}],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3,tags:["anki"]},sidebar:"default",previous:{title:"Anki",permalink:"/woof/docs/tool/anki/"},next:{title:"Studying",permalink:"/woof/docs/tool/anki/studying"}},d={},c=[{value:"Cards",id:"cards",level:2},{value:"Decks",id:"decks",level:2},{value:"Decks tree",id:"decks-tree",level:3},{value:"Default Deck",id:"default-deck",level:3},{value:"Notes and Fields",id:"notes-and-fields",level:2},{value:"Example",id:"example",level:3},{value:"Card Types",id:"card-types",level:3},{value:"Note Types",id:"note-types",level:2},{value:"Standard note types",id:"standard-note-types",level:3},{value:"Collection",id:"collection",level:2},{value:"Shared Decks",id:"shared-decks",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=s("Color"),k=s("Admonition"),u={toc:c};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-concepts"},"Key concepts"),(0,a.kt)("h2",{id:"cards"},"Cards"),(0,a.kt)("p",null,"A question and answer pair is called a 'card'.\nThis is based on a paper flashcard with a question on one side and the answer on the back."),(0,a.kt)("p",null,"In Anki a card doesn't actually look like a physical card, and when you show the answer the question remains visible by default."),(0,a.kt)("p",null,"For example, if you're studying basic chemistry, you might see a question like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"Q: Chemical symbol for oxygen?\n")),(0,a.kt)("p",null,"After thinking about it, and deciding the answer is O, you click the show answer button, and Anki shows you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=",title:""},"Q: Chemical symbol for oxygen?\nA: O\n")),(0,a.kt)("p",null,"After confirming that you are correct, ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," you can tell ")," ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," Anki how well you remembered "),",\nand Anki will choose a next time to show you again."),(0,a.kt)("h2",{id:"decks"},"Decks"),(0,a.kt)("p",null,"A deck is a group of cards."),(0,a.kt)("p",null,"You can ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," place cards in different decks ")," to study ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," parts of ")," your card ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," collection "),"\ninstead of studying everything at once."),(0,a.kt)("p",null,"Each deck can ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," have different settings "),", such as how many new cards to show each day, or how long to wait until cards are shown again."),(0,a.kt)("h3",{id:"decks-tree"},"Decks tree"),(0,a.kt)("p",null,"Decks can contain other decks, which allows you to organize decks into a tree."),(0,a.kt)("p",null,"Anki uses ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," to show different levels."),(0,a.kt)("p",null,"A deck called ",(0,a.kt)("inlineCode",{parentName:"p"},"Chinese::Hanzi")," refers to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Hanzi")," deck, which is ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," part of ")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"Chinese")," deck."),(0,a.kt)("p",null,"If you select ",(0,a.kt)("inlineCode",{parentName:"p"},"Hanzi")," then ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," only the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hanzi")," cards will be shown ")),(0,a.kt)("p",null,"If you select ",(0,a.kt)("inlineCode",{parentName:"p"},"Chinese")," then ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," all ",(0,a.kt)("inlineCode",{parentName:"p"},"Chinese")," cards "),", ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," including ")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Hanzi")," cards, will be shown."),(0,a.kt)("p",null,"To place decks into a tree, you can"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name them with ",(0,a.kt)("inlineCode",{parentName:"li"},"::")," between each level"),(0,a.kt)("li",{parentName:"ul"},"drag and drop them from the deck list")),(0,a.kt)("p",null,"Decks that have been nested under another deck (that is, that have at least one \u201c::\u201d in their names) are often called ",(0,a.kt)("inlineCode",{parentName:"p"},"subdecks``, and top-level decks are sometimes called "),"superdecks`",(0,a.kt)("inlineCode",{parentName:"p"},"or"),"parent decks`"),(0,a.kt)("h3",{id:"default-deck"},"Default Deck"),(0,a.kt)("p",null,"Anki starts with a deck called ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"; ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," any cards ")," which have somehow become ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," separated from other decks ")," will go here."),(0,a.kt)("p",null,"Anki will hide the default deck if it contains no cards and you have added other decks."),(0,a.kt)("p",null,"Alternatively, you may rename this deck and use it for other cards."),(0,a.kt)(k,{type:"tip",title:"later",mdxType:"Admonition"},(0,a.kt)("p",null,"Decks are best used to hold broad categories of cards, rather than specific topics such as \u201cfood verbs\u201d or \u201clesson 1\u201d."),(0,a.kt)("p",null,"For more info on this, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ankiweb.net/editing.html#using-decks-appropriately"},"using decks appropriately")," section.")),(0,a.kt)(k,{type:"tip",title:"later",mdxType:"Admonition"},(0,a.kt)("p",null,"For information on how decks affect the order cards are displayed in, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ankiweb.net/studying.html#display-order"},"display order")," section.")),(0,a.kt)("h2",{id:"notes-and-fields"},"Notes and Fields"),(0,a.kt)("p",null,"When making flashcards, it's often desirable to make ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," more than one card ")," that ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," relates to ")," ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," same ")," ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," information "),"."),(0,a.kt)("p",null,"For example, if you're learning French, and you learn that the word \u201cbonjour\u201d means \u201chello\u201d,"),(0,a.kt)("p",null,"you may wish to create one card that shows you \u201cbonjour\u201d and asks you to remember \u201chello\u201d,"),(0,a.kt)("p",null,"and another card that shows you \u201chello\u201d and asks you to remember \u201cbonjour\u201d."),(0,a.kt)("p",null,"One card is testing your ability to recognize the foreign word, and the other card is testing your ability to produce it."),(0,a.kt)("p",null,"Anki allow you to split the content of your cards up into ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," separate pieces of information "),"."),(0,a.kt)("p",null,"You can then tell Anki which pieces of information you want on each card, and Anki will take care of creating the cards for you and updating them if you make any edits in the future."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Imagine we want to study French vocabulary, and we want to include the ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," page number ")," on the back of each card."),(0,a.kt)("p",null,"We want our cards to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-title="},"Q: Bonjour\nA: Hello\n   Page #12\n")),(0,a.kt)("p",null,"And:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-title="},"Q: Hello\nA: Bonjour\n   Page #12\n")),(0,a.kt)("p",null,"In this example, we have ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," three ")," pieces of related information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a French word"),(0,a.kt)("li",{parentName:"ul"},"an English meaning"),(0,a.kt)("li",{parentName:"ul"},"a page number.")),(0,a.kt)("p",null,"If we put them together, they'd look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-title="},"French: Bonjour\nEnglish: Hello\nPage: 12\n")),(0,a.kt)("p",null,"In Anki, this ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," related information ")," is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"note"),", and each ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," piece of information ")," is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),"."),(0,a.kt)("p",null,"So we can say that this type of note has three fields: French, English, and Page."),(0,a.kt)(k,{type:"tip",title:"later",mdxType:"Admonition"},(0,a.kt)("p",null,'To add and edit fields, click the \u201cFields..." button while adding or editing notes.\nFor more information on fields, please see the ',(0,a.kt)("a",{parentName:"p",href:"https://docs.ankiweb.net/editing.html#customizing-fields"},"Customizing Fields")," section.")),(0,a.kt)("h3",{id:"card-types"},"Card Types"),(0,a.kt)("p",null,"In order for Anki to create cards based on our notes, we need to ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," give it a blueprint "),"\nthat says ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," which fields should be displayed on the front or back of each card "),"."),(0,a.kt)("p",null,"This blueprint is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"card type"),". Each type of note can have one or more card types"),(0,a.kt)("p",null,"When you add a note, Anki will ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," create ")," ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," one ")," ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," card ")," for ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," each card type "),"."),(0,a.kt)("p",null,"Each card type has two ",(0,a.kt)("inlineCode",{parentName:"p"},"templates"),", one for the question and one for the answer."),(0,a.kt)("p",null,"In the above French example, we wanted the recognition card to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-title="},"Q: Bonjour\nA: Hello\n   Page #12\n")),(0,a.kt)("p",null,"To do this, we can set the question and answer templates to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-title="},"Q: {{French}}\nA: {{English}}<br>\n   Page #{{Page}}\n")),(0,a.kt)("p",null,"By surrounding a field name in double curly brackets, we tell Anki to replace that section with the actual information in the field."),(0,a.kt)("p",null,"Anything not surrounded by curly brackets remains the same on each card. (",(0,a.kt)(p,{color:"var(--not-require-but-good-to-know-font-color)",mdxType:"Color"}," For instance, we don't have to type \u201cPage #\u201d into the Page field when adding material - it's added automatically to every card. "),")"),(0,a.kt)(k,{type:"info",title:"info",mdxType:"Admonition"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<br>")," is a special code that tells Anki to move to the next line more details are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ankiweb.net/templates/intro.html"},"templates")," section.")),(0,a.kt)("p",null,"Once a card type has been created, every time you add a new note, a card will be created based on that card type."),(0,a.kt)(k,{type:"tip",title:"later",mdxType:"Admonition"},(0,a.kt)("p",null,'To add and edit card types, click the \u201cCards..." button while adding or editing notes.'),(0,a.kt)("p",null,"For more information on card types, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ankiweb.net/templates/intro.html"},"Cards and Templates")," section.")),(0,a.kt)("h2",{id:"note-types"},"Note Types"),(0,a.kt)("p",null,"Anki allows you to create ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," different types of notes ")," for different material.\nEach type of note has ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," its own ")," ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," set of fields ")," and ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," card types "),"."),(0,a.kt)("p",null,"It's a good idea to create a separate note type for each broad topic you're studying."),(0,a.kt)("p",null,"In the above French example, we might create a note type called ",(0,a.kt)("inlineCode",{parentName:"p"},"French")," for that.\nIf we wanted to learn capital cities, we could create a separate note type for that as well, with fields such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Country")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Capital City"),"."),(0,a.kt)(k,{type:"caution",title:"?????",mdxType:"Admonition"},(0,a.kt)("p",null,"When Anki checks for duplicates, it only compares other notes of the same type."),(0,a.kt)("p",null,"Thus if you add a capital city called \u201cOrange\u201d using the capital city note type, you won't see a duplicate message when it comes time to learn how to say \u201corange\u201d in French.")),(0,a.kt)("h3",{id:"standard-note-types"},"Standard note types"),(0,a.kt)("p",null,"When you create a new collection, Anki automatically adds some standard note types to it."),(0,a.kt)("p",null,"These note types are provided to make Anki easier for new users."),(0,a.kt)(k,{type:"tip",title:"tip",mdxType:"Admonition"},(0,a.kt)("p",null,"In the long run it's recommended you define your own note types for the content you are learning.")),(0,a.kt)("p",null,"The standard note types are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic"),": Has Front and Back fields, and will create ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," one ")," card.\nText you enter in Front will appear on the front of the card, and text you enter in Back will appear on the back of the card."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic (and reversed card)"),": Like Basic, but creates ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," two ")," cards for the text you enter: one from ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," front\u2192back ")," and one from ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," back\u2192front "),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic (optional reversed card)"),": This is a ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," front\u2192back ")," card, and ",(0,a.kt)(p,{color:"var(--primary-font-color)",mdxType:"Color"}," optionally ")," a ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," back\u2192front ")," card.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To do this, it has a third field called \u201cAdd Reverse.\u201d If you enter any text into that field, a reverse card will be created. ",(0,a.kt)(p,{color:"var(--not-nesary-for-now-future-font-color)",mdxType:"Color"}," More information about this is available in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ankiweb.net/templates/intro.html"},"Cards and Templates")," section. ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Basic (type in the answer)"),": This is essentially Basic, with an ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," extra text box on the front ")," where ",(0,a.kt)(p,{color:"var(--secondary-font-color)",mdxType:"Color"}," you can type your answer in "),",\nafter flipping to the back your input would be checked and compared with the answer. ",(0,a.kt)(p,{color:"var(--not-nesary-for-now-future-font-color)",mdxType:"Color"}," More information is available in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ankiweb.net/templates/fields.html#checking-your-answer"},"Checking Your Answer")," section. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloze"),": A note type which makes it easy to select text and turn it into a cloze deletion (e.g., \u201cMan landed on the moon in ....\u200b\u201d \u2192 \u201cMan landed on the moon in 1969\u201d). ",(0,a.kt)(p,{color:"var(--not-nesary-for-now-future-font-color)",mdxType:"Color"}," More information is available in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ankiweb.net/editing.html#cloze-deletion"},"cloze deletion")," section. "))),(0,a.kt)(k,{type:"note",title:"note",mdxType:"Admonition"},(0,a.kt)("p",null,"To add your own note types and modify existing ones, you can use Tools \u2192 Manage Note Types from the main Anki window.")),(0,a.kt)("p",null,"Notes and note types are common to your whole ",(0,a.kt)("a",{parentName:"p",href:"#collection"},"collection")," rather than limited to an individual deck."),(0,a.kt)("p",null,"This means you can use many different types of notes in a particular deck, or have different cards generated from a particular note in different decks."),(0,a.kt)("p",null,"When you add notes using the Add window, you can select what note type to use and what deck to use,\nand these choices are completely independent of each other."),(0,a.kt)("p",null,"You can also change the note type of some notes after you've already created them."),(0,a.kt)("h2",{id:"collection"},"Collection"),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"collection")," is all the material stored in Anki, your cards, notes, decks, note types, deck options, and so on."),(0,a.kt)("h2",{id:"shared-decks"},"Shared Decks"),(0,a.kt)("p",null,"The easiest way to get started with Anki is to download a deck of cards someone has shared:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the \u201cGet Shared\u201d button at the bottom of the deck list."),(0,a.kt)("li",{parentName:"ol"},"When you've found a deck you're interested in, click the \u201cDownload\u201d button to download a deck package."),(0,a.kt)("li",{parentName:"ol"},"Double-click on the downloaded package to load it into Anki, or File\u2192Import it.")),(0,a.kt)(k,{type:"note",title:"note",mdxType:"Admonition"},(0,a.kt)("p",null,"Note that it's not currently possible to add shared decks directly to your AnkiWeb account. You need to import them with the desktop program, then synchronize to upload them to AnkiWeb.")),(0,a.kt)(k,{type:"tip",title:"tip",mdxType:"Admonition"},(0,a.kt)("p",null,"Creating your own deck is the most effective way to learn a complex subject."),(0,a.kt)("p",null,"Subjects like languages and the sciences can't be understood simply by memorizing facts \u2014 they require explanation and context to learn effectively."),(0,a.kt)("p",null,"Furthermore, inputting the information yourself forces you to decide what the key points are, leading to a better understanding.")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"sources"},"Sources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ankiweb.net/getting-started.html"},"https://docs.ankiweb.net/getting-started.html"))))}h.isMDXComponent=!0}}]);