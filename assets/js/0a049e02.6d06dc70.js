"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3923],{57522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,y=f["".concat(a,".").concat(m)]||f[m]||c[m]||p;return r?n.createElement(y,u(u({ref:t},l),{},{components:r})):n.createElement(y,u({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,u=new Array(p);u[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<p;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=r(14090),o=(r(29901),r(57522));const p={},u=void 0,s={unversionedId:"api/github.createpullrequestprops.issue",id:"api/github.createpullrequestprops.issue",title:"github.createpullrequestprops.issue",description:"Home &gt; @runlightyear/github &gt; CreatePullRequestProps &gt; issue",source:"@site/docs/api/github.createpullrequestprops.issue.md",sourceDirName:"api",slug:"/api/github.createpullrequestprops.issue",permalink:"/docs/api/github.createpullrequestprops.issue",draft:!1,tags:[],version:"current",frontMatter:{}},a={},i=[{value:"CreatePullRequestProps.issue property",id:"createpullrequestpropsissue-property",level:2}],l={toc:i};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.createpullrequestprops"},"CreatePullRequestProps")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.createpullrequestprops.issue"},"issue")),(0,o.kt)("h2",{id:"createpullrequestpropsissue-property"},"CreatePullRequestProps.issue property"),(0,o.kt)("p",null,"An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless title is specified."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"issue?: number;\n")))}c.isMDXComponent=!0}}]);