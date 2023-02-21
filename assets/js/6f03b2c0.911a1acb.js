"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61810],{57522:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(29901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,f=b["".concat(s,".").concat(d)]||b[d]||c[d]||p;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},18269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>l});var n=r(14090),a=(r(29901),r(57522));const p={},o=void 0,u={unversionedId:"api/github.updatepullrequestprops.base",id:"api/github.updatepullrequestprops.base",title:"github.updatepullrequestprops.base",description:"Home &gt; @runlightyear/github &gt; UpdatePullRequestProps &gt; base",source:"@site/docs/api/github.updatepullrequestprops.base.md",sourceDirName:"api",slug:"/api/github.updatepullrequestprops.base",permalink:"/lightyear/docs/api/github.updatepullrequestprops.base",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"UpdatePullRequestProps.base property",id:"updatepullrequestpropsbase-property",level:2}],i={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.updatepullrequestprops"},"UpdatePullRequestProps")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.updatepullrequestprops.base"},"base")),(0,a.kt)("h2",{id:"updatepullrequestpropsbase-property"},"UpdatePullRequestProps.base property"),(0,a.kt)("p",null,"The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"base?: string;\n")))}c.isMDXComponent=!0}}]);