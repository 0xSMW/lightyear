"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6983],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(29901);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),y=i,d=f["".concat(s,".").concat(y)]||f[y]||l[y]||n;return r?o.createElement(d,p(p({ref:t},c),{},{components:r})):o.createElement(d,p({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,p=new Array(n);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var u=2;u<n;u++)p[u]=r[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=r(14090),i=(r(29901),r(57522));const n={},p=void 0,a={unversionedId:"api/github.listrepositoriesforauthenticateduserprops.type",id:"api/github.listrepositoriesforauthenticateduserprops.type",title:"github.listrepositoriesforauthenticateduserprops.type",description:"Home &gt; @runlightyear/github &gt; ListRepositoriesForAuthenticatedUserProps &gt; type",source:"@site/docs/api/github.listrepositoriesforauthenticateduserprops.type.md",sourceDirName:"api",slug:"/api/github.listrepositoriesforauthenticateduserprops.type",permalink:"/docs/api/github.listrepositoriesforauthenticateduserprops.type",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"ListRepositoriesForAuthenticatedUserProps.type property",id:"listrepositoriesforauthenticateduserpropstype-property",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/github.listrepositoriesforauthenticateduserprops"},"ListRepositoriesForAuthenticatedUserProps")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/github.listrepositoriesforauthenticateduserprops.type"},"type")),(0,i.kt)("h2",{id:"listrepositoriesforauthenticateduserpropstype-property"},"ListRepositoriesForAuthenticatedUserProps.type property"),(0,i.kt)("p",null,"Limit results to repositories of the specified type. Will cause a 422 error if used in the same request as visibility or affiliation."),(0,i.kt)("p",null,"Default: all"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'type: Array<"all" | "owner" | "public" | "private" | "member">;\n')))}l.isMDXComponent=!0}}]);