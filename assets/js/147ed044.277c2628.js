"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22989],{57522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(29901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(h,p(p({ref:t},l),{},{components:r})):a.createElement(h,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(14090),n=(r(29901),r(57522));const o={},p=void 0,i={unversionedId:"api/github.pushpayload.head_commit",id:"api/github.pushpayload.head_commit",title:"github.pushpayload.head_commit",description:"Home &gt; @runlightyear/github &gt; PushPayload &gt; head\\commit",source:"@site/docs/api/github.pushpayload.head_commit.md",sourceDirName:"api",slug:"/api/github.pushpayload.head_commit",permalink:"/lightyear/docs/api/github.pushpayload.head_commit",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"PushPayload.head_commit property",id:"pushpayloadhead_commit-property",level:2}],l={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.pushpayload"},"PushPayload")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.pushpayload.head_commit"},"head","_","commit")),(0,n.kt)("h2",{id:"pushpayloadhead_commit-property"},"PushPayload.head","_","commit property"),(0,n.kt)("p",null,"For pushes where after is or points to a commit object, an expanded representation of that commit. For pushes where after refers to an annotated tag object, an expanded representation of the commit pointed to by the annotated tag."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"head_commit: object;\n")))}s.isMDXComponent=!0}}]);