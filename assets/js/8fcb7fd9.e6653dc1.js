"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8866],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(29901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(14090),a=(r(29901),r(57522));const o={},i=void 0,l={unversionedId:"api/github.pullrequestreviewpayload.action",id:"api/github.pullrequestreviewpayload.action",title:"github.pullrequestreviewpayload.action",description:"Home &gt; @runlightyear/github &gt; PullRequestReviewPayload &gt; action",source:"@site/docs/api/github.pullrequestreviewpayload.action.md",sourceDirName:"api",slug:"/api/github.pullrequestreviewpayload.action",permalink:"/docs/api/github.pullrequestreviewpayload.action",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"PullRequestReviewPayload.action property",id:"pullrequestreviewpayloadaction-property",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.pullrequestreviewpayload"},"PullRequestReviewPayload")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.pullrequestreviewpayload.action"},"action")),(0,a.kt)("h2",{id:"pullrequestreviewpayloadaction-property"},"PullRequestReviewPayload.action property"),(0,a.kt)("p",null,"The action that was performed."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'action: "submitted"\n    /**\n     * The body of a review has been edited.\n     */\n     | "edited"\n    /**\n     * A review has been dismissed.\n     */\n     | "dismissed";\n')))}s.isMDXComponent=!0}}]);