"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8070],{7522:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(9901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=n,s=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return r?a.createElement(s,o(o({ref:t},d),{},{components:r})):a.createElement(s,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(4090),n=(r(9901),r(7522));const i={},o=void 0,l={unversionedId:"api/github.pingpayload",id:"api/github.pingpayload",title:"github.pingpayload",description:"Home &gt; @runlightyear/github &gt; PingPayload",source:"@site/docs/api/github.pingpayload.md",sourceDirName:"api",slug:"/api/github.pingpayload",permalink:"/lightyear/docs/api/github.pingpayload",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/github.pingpayload.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"PingPayload interface",id:"pingpayload-interface",level:2},{value:"Required Properties",id:"required-properties",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.pingpayload"},"PingPayload")),(0,n.kt)("h2",{id:"pingpayload-interface"},"PingPayload interface"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PingPayload extends CommonPayload \n")),(0,n.kt)("b",null,"Extends:")," [CommonPayload](/lightyear/docs/api/github.commonpayload)",(0,n.kt)("h2",{id:"required-properties"},"Required Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/lightyear/docs/api/github.pingpayload.hook"},"hook")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"{ appId: number; }"),(0,n.kt)("td",{parentName:"tr",align:null},"The webhook configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/lightyear/docs/api/github.pingpayload.hookid"},"hookId")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the webhook that triggered the ping.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/lightyear/docs/api/github.pingpayload.zen"},"zen")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Random string of GitHub zen.")))))}c.isMDXComponent=!0}}]);