"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1104],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(29901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),h=a,d=s["".concat(u,".").concat(h)]||s[h]||b[h]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},79690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(14090),a=(r(29901),r(57522));const o={},i=void 0,p={unversionedId:"api/github.github.definewebhook",id:"api/github.github.definewebhook",title:"github.github.definewebhook",description:"Home &gt; @runlightyear/github &gt; GitHub &gt; defineWebhook",source:"@site/docs/api/github.github.definewebhook.md",sourceDirName:"api",slug:"/api/github.github.definewebhook",permalink:"/docs/api/github.github.definewebhook",draft:!1,tags:[],version:"current",frontMatter:{}},u={},l=[{value:"GitHub.defineWebhook() method",id:"githubdefinewebhook-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:l};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.github"},"GitHub")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.github.definewebhook"},"defineWebhook")),(0,a.kt)("h2",{id:"githubdefinewebhook-method"},"GitHub.defineWebhook() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Define a GitHub repository webhook"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static defineWebhook(props: DefineGitHubWebhookProps): string;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.definegithubwebhookprops"},"DefineGitHubWebhookProps")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"string"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Subscribe to push events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'GitHub.defineWebhook({\n  name: "githubPushes",\n  title: "GitHub Pushes",\n  subscribeProps: () => {\n    return {\n      owner: "<owner>",\n      repo: "<repo>",\n      events: ["push"],\n    }\n  },\n});\n')))}b.isMDXComponent=!0}}]);