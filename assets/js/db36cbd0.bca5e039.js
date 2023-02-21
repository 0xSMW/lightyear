"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47867],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(29901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(r),f=a,y=b["".concat(i,".").concat(f)]||b[f]||u[f]||s;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},59598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=r(14090),a=(r(29901),r(57522));const s={},o=void 0,p={unversionedId:"api/github.createissueprops.labels",id:"api/github.createissueprops.labels",title:"github.createissueprops.labels",description:"Home &gt; @runlightyear/github &gt; CreateIssueProps &gt; labels",source:"@site/docs/api/github.createissueprops.labels.md",sourceDirName:"api",slug:"/api/github.createissueprops.labels",permalink:"/lightyear/docs/api/github.createissueprops.labels",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"CreateIssueProps.labels property",id:"createissuepropslabels-property",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.createissueprops"},"CreateIssueProps")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.createissueprops.labels"},"labels")),(0,a.kt)("h2",{id:"createissuepropslabels-property"},"CreateIssueProps.labels property"),(0,a.kt)("p",null,"Labels to associate with this issue."),(0,a.kt)("p",null,"NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"labels?: Array<string> | Array<object>;\n")))}u.isMDXComponent=!0}}]);