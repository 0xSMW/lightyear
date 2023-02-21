"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27423],{57522:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var n=t(29901);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return t?n.createElement(d,p(p({ref:r},m),{},{components:t})):n.createElement(d,p({ref:r},m))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46673:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(14090),o=(t(29901),t(57522));const a={},p=void 0,i={unversionedId:"api/postmark.sendsingleemailprops.from",id:"api/postmark.sendsingleemailprops.from",title:"postmark.sendsingleemailprops.from",description:"Home &gt; @runlightyear/postmark &gt; SendSingleEmailProps &gt; from",source:"@site/docs/api/postmark.sendsingleemailprops.from.md",sourceDirName:"api",slug:"/api/postmark.sendsingleemailprops.from",permalink:"/lightyear/docs/api/postmark.sendsingleemailprops.from",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"SendSingleEmailProps.from property",id:"sendsingleemailpropsfrom-property",level:2}],m={toc:l};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/postmark"},"@runlightyear/postmark")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/postmark.sendsingleemailprops"},"SendSingleEmailProps")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/postmark.sendsingleemailprops.from"},"from")),(0,o.kt)("h2",{id:"sendsingleemailpropsfrom-property"},"SendSingleEmailProps.from property"),(0,o.kt)("p",null,"The sender email address. Must have a registered and confirmed Sender Signature."),(0,o.kt)("p",null,'To include a name, use the format "Full Name ',"<","sender","@","domain.com",">",'" for the address.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"from: string;\n")))}c.isMDXComponent=!0}}]);