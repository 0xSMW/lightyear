"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1829],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(29901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),b=n,d=m["".concat(o,".").concat(b)]||m[b]||s[b]||l;return r?a.createElement(d,u(u({ref:t},c),{},{components:r})):a.createElement(d,u({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,u[1]=p;for(var i=2;i<l;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=r(14090),n=(r(29901),r(57522));const l={},u=void 0,p={unversionedId:"api/github.github.createpullrequest",id:"api/github.github.createpullrequest",title:"github.github.createpullrequest",description:"Home &gt; @runlightyear/github &gt; GitHub &gt; createPullRequest",source:"@site/docs/api/github.github.createpullrequest.md",sourceDirName:"api",slug:"/api/github.github.createpullrequest",permalink:"/docs/api/github.github.createpullrequest",draft:!1,tags:[],version:"current",frontMatter:{}},o={},i=[{value:"GitHub.createPullRequest() method",id:"githubcreatepullrequest-method",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:i};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.github"},"GitHub")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.github.createpullrequest"},"createPullRequest")),(0,n.kt)("h2",{id:"githubcreatepullrequest-method"},"GitHub.createPullRequest() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Create a pull request"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"createPullRequest(props: CreatePullRequestProps): Promise<HttpProxyResponse>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"props"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/github.createpullrequestprops"},"CreatePullRequestProps")),(0,n.kt)("td",{parentName:"tr",align:null},"props")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/lightyear.httpproxyresponse"},"HttpProxyResponse"),">"))}s.isMDXComponent=!0}}]);