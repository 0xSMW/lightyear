"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1854],{7522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(9901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,d=h["".concat(i,".").concat(m)]||h[m]||s[m]||n;return r?a.createElement(d,p(p({ref:t},l),{},{components:r})):a.createElement(d,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var u=2;u<n;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=r(4090),o=(r(9901),r(7522));const n={},p=void 0,c={unversionedId:"api/github.pushpayload.compare",id:"api/github.pushpayload.compare",title:"github.pushpayload.compare",description:"Home &gt; @runlightyear/github &gt; PushPayload &gt; compare",source:"@site/docs/api/github.pushpayload.compare.md",sourceDirName:"api",slug:"/api/github.pushpayload.compare",permalink:"/lightyear/docs/api/github.pushpayload.compare",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/github.pushpayload.compare.md",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"PushPayload.compare property",id:"pushpayloadcompare-property",level:2}],l={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.pushpayload"},"PushPayload")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.pushpayload.compare"},"compare")),(0,o.kt)("h2",{id:"pushpayloadcompare-property"},"PushPayload.compare property"),(0,o.kt)("p",null,"URL that shows the changes in this ref update, from the before commit to the after commit. For a newly created ref that is directly based on the default branch, this is the comparison between the head of the default branch and the after commit. Otherwise, this shows all commits until the after commit."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"compare: string;\n")))}s.isMDXComponent=!0}}]);