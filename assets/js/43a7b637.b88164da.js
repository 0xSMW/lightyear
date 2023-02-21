"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77169],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),b=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=b(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=b(r),h=o,f=l["".concat(u,".").concat(h)]||l[h]||s[h]||i;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=l;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var b=2;b<i;b++)p[b]=r[b];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},18776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>b});var n=r(14090),o=(r(29901),r(57522));const i={},p=void 0,a={unversionedId:"api/github.githubwebhooksubscribeprops",id:"api/github.githubwebhooksubscribeprops",title:"github.githubwebhooksubscribeprops",description:"Home &gt; @runlightyear/github &gt; GitHubWebhookSubscribeProps",source:"@site/docs/api/github.githubwebhooksubscribeprops.md",sourceDirName:"api",slug:"/api/github.githubwebhooksubscribeprops",permalink:"/lightyear/docs/api/github.githubwebhooksubscribeprops",draft:!1,tags:[],version:"current",frontMatter:{}},u={},b=[{value:"GitHubWebhookSubscribeProps type",id:"githubwebhooksubscribeprops-type",level:2}],c={toc:b};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.githubwebhooksubscribeprops"},"GitHubWebhookSubscribeProps")),(0,o.kt)("h2",{id:"githubwebhooksubscribeprops-type"},"GitHubWebhookSubscribeProps type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare type GitHubWebhookSubscribeProps = {\n    owner: string;\n    repo: string;\n    events?: Array<WebhookEvent>;\n};\n")),(0,o.kt)("b",null,"References:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.webhookevent"},"WebhookEvent")))}s.isMDXComponent=!0}}]);