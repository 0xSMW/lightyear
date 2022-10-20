"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[368],{7522:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(9901);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),g=p(a),h=n,d=g["".concat(u,".").concat(h)]||g[h]||s[h]||i;return a?r.createElement(d,l(l({ref:e},c),{},{components:a})):r.createElement(d,l({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3595:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(4090),n=(a(9901),a(7522));const i={},l=void 0,o={unversionedId:"api/lightyear.getauthdata",id:"api/lightyear.getauthdata",title:"lightyear.getauthdata",description:"Home &gt; @runlightyear/lightyear &gt; getAuthData",source:"@site/docs/api/lightyear.getauthdata.md",sourceDirName:"api",slug:"/api/lightyear.getauthdata",permalink:"/lightyear/docs/api/lightyear.getauthdata",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/lightyear.getauthdata.md",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"getAuthData() function",id:"getauthdata-function",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:p};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/lightyear"},"@runlightyear/lightyear")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/lightyear.getauthdata"},"getAuthData")),(0,n.kt)("h2",{id:"getauthdata-function"},"getAuthData() function"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function getAuthData(name: string): Promise<AuthData>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"the name of the auth")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/lightyear.authdata"},"AuthData"),">"))}s.isMDXComponent=!0}}]);