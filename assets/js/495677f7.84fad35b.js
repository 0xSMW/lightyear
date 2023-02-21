"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72085],{57522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(29901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(14090),a=(r(29901),r(57522));const o={},p=void 0,s={unversionedId:"api/postmark.sendsingleemailprops.attachments",id:"api/postmark.sendsingleemailprops.attachments",title:"postmark.sendsingleemailprops.attachments",description:"Home &gt; @runlightyear/postmark &gt; SendSingleEmailProps &gt; attachments",source:"@site/docs/api/postmark.sendsingleemailprops.attachments.md",sourceDirName:"api",slug:"/api/postmark.sendsingleemailprops.attachments",permalink:"/lightyear/docs/api/postmark.sendsingleemailprops.attachments",draft:!1,tags:[],version:"current",frontMatter:{}},i={},c=[{value:"SendSingleEmailProps.attachments property",id:"sendsingleemailpropsattachments-property",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/postmark"},"@runlightyear/postmark")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/postmark.sendsingleemailprops"},"SendSingleEmailProps")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/postmark.sendsingleemailprops.attachments"},"attachments")),(0,a.kt)("h2",{id:"sendsingleemailpropsattachments-property"},"SendSingleEmailProps.attachments property"),(0,a.kt)("p",null,"List of attachments"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"attachments: Array<{\n        name: string;\n        content: string;\n        contentType: string;\n    }>;\n")))}m.isMDXComponent=!0}}]);