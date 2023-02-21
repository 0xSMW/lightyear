"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23318],{57522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,f=m["".concat(i,".").concat(y)]||m[y]||s[y]||p;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(14090),o=(r(29901),r(57522));const p={},a=void 0,l={unversionedId:"api/github.createpullrequestcommentprops.inreplyto",id:"api/github.createpullrequestcommentprops.inreplyto",title:"github.createpullrequestcommentprops.inreplyto",description:"Home &gt; @runlightyear/github &gt; CreatePullRequestCommentProps &gt; inReplyTo",source:"@site/docs/api/github.createpullrequestcommentprops.inreplyto.md",sourceDirName:"api",slug:"/api/github.createpullrequestcommentprops.inreplyto",permalink:"/lightyear/docs/api/github.createpullrequestcommentprops.inreplyto",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"CreatePullRequestCommentProps.inReplyTo property",id:"createpullrequestcommentpropsinreplyto-property",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.createpullrequestcommentprops"},"CreatePullRequestCommentProps")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/github.createpullrequestcommentprops.inreplyto"},"inReplyTo")),(0,o.kt)("h2",{id:"createpullrequestcommentpropsinreplyto-property"},"CreatePullRequestCommentProps.inReplyTo property"),(0,o.kt)("p",null,'The ID of the review comment to reply to. To find the ID of a review comment with "List review comments on a pull request". When specified, all parameters other than body in the request body are ignored.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"inReplyTo?: number;\n")))}s.isMDXComponent=!0}}]);