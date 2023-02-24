"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[294],{57522:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(29901);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),b=p(r),m=a,g=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return r?n.createElement(g,i(i({ref:e},l),{},{components:r})):n.createElement(g,i({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=b;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},50496:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(14090),a=(r(29901),r(57522));const o={},i=void 0,u={unversionedId:"api/github.github._constructor_",id:"api/github.github._constructor_",title:"github.github._constructor_",description:"Home &gt; @runlightyear/github &gt; GitHub &gt; (constructor)",source:"@site/docs/api/github.github._constructor_.md",sourceDirName:"api",slug:"/api/github.github._constructor_",permalink:"/docs/api/github.github._constructor_",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"GitHub.(constructor)",id:"githubconstructor",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],l={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.github"},"GitHub")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.github._constructor_"},"(constructor)")),(0,a.kt)("h2",{id:"githubconstructor"},"GitHub.(constructor)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Constructs a new instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," class"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(props: GitHubConnectorProps);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.githubconnectorprops"},"GitHubConnectorProps")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'defineAction({\n  name: "githubExample",\n  title: "GitHub Example",\n  apps: ["github"],\n  run: ({ auths }) => {\n    const github = new GitHub({ auth: auths.github });\n  }\n})\n')))}s.isMDXComponent=!0}}]);