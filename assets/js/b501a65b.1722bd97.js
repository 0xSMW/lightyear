"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9175],{57522:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(29901);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,c(c({ref:r},l),{},{components:t})):o.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68243:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(14090),n=(t(29901),t(57522));const a={},c=void 0,p={unversionedId:"api/airtable.createrecordsprops.records",id:"api/airtable.createrecordsprops.records",title:"airtable.createrecordsprops.records",description:"Home &gt; @runlightyear/airtable &gt; CreateRecordsProps &gt; records",source:"@site/docs/api/airtable.createrecordsprops.records.md",sourceDirName:"api",slug:"/api/airtable.createrecordsprops.records",permalink:"/docs/api/airtable.createrecordsprops.records",draft:!1,tags:[],version:"current",frontMatter:{}},s={},i=[{value:"CreateRecordsProps.records property",id:"createrecordspropsrecords-property",level:2}],l={toc:i};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/airtable"},"@runlightyear/airtable")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/airtable.createrecordsprops"},"CreateRecordsProps")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/airtable.createrecordsprops.records"},"records")),(0,n.kt)("h2",{id:"createrecordspropsrecords-property"},"CreateRecordsProps.records property"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Create multiple records"),(0,n.kt)("p",null,"Pass in multiple records to create multiple in one request"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"records?: Array<{\n        fields: {\n            [key: string]: unknown;\n        };\n    }>;\n")))}d.isMDXComponent=!0}}]);