"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97116],{57522:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(29901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,y=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return r?a.createElement(y,i(i({ref:t},d),{},{components:r})):a.createElement(y,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(14090),n=(r(29901),r(57522));const l={},i=void 0,p={unversionedId:"api/github.pullrequestreviewpayload",id:"api/github.pullrequestreviewpayload",title:"github.pullrequestreviewpayload",description:"Home &gt; @runlightyear/github &gt; PullRequestReviewPayload",source:"@site/docs/api/github.pullrequestreviewpayload.md",sourceDirName:"api",slug:"/api/github.pullrequestreviewpayload",permalink:"/docs/api/github.pullrequestreviewpayload",draft:!1,tags:[],version:"current",frontMatter:{}},o={},u=[{value:"PullRequestReviewPayload interface",id:"pullrequestreviewpayload-interface",level:2},{value:"Required Properties",id:"required-properties",level:2}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.pullrequestreviewpayload"},"PullRequestReviewPayload")),(0,n.kt)("h2",{id:"pullrequestreviewpayload-interface"},"PullRequestReviewPayload interface"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PullRequestReviewPayload extends CommonPayload \n")),(0,n.kt)("b",null,"Extends:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.commonpayload"},"CommonPayload")),(0,n.kt)("h2",{id:"required-properties"},"Required Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.pullrequestreviewpayload.action"},"action")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},'"submitted" /',"*","*"," ","*"," The body of a review has been edited. ","*","/ ","|",' "edited" /',"*","*"," ","*"," A review has been dismissed. ","*","/ ","|",' "dismissed"'),(0,n.kt)("td",{parentName:"tr",align:null},"The action that was performed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.pullrequestreviewpayload.changes"},"changes")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"{ body: { from: string; }; }"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.pullrequestreviewpayload.pullrequest"},"pullRequest")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The pull request the review pertains to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.pullrequestreviewpayload.review"},"review")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The review that was affected.")))))}s.isMDXComponent=!0}}]);