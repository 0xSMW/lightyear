"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3402],{57522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(14090),o=(r(29901),r(57522));const a={},p=void 0,c={unversionedId:"api/openai.createcompletionprops.maxtokens",id:"api/openai.createcompletionprops.maxtokens",title:"openai.createcompletionprops.maxtokens",description:"Home &gt; @runlightyear/openai &gt; CreateCompletionProps &gt; maxTokens",source:"@site/docs/api/openai.createcompletionprops.maxtokens.md",sourceDirName:"api",slug:"/api/openai.createcompletionprops.maxtokens",permalink:"/docs/api/openai.createcompletionprops.maxtokens",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[{value:"CreateCompletionProps.maxTokens property",id:"createcompletionpropsmaxtokens-property",level:2}],l={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/openai"},"@runlightyear/openai")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/openai.createcompletionprops"},"CreateCompletionProps")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/openai.createcompletionprops.maxtokens"},"maxTokens")),(0,o.kt)("h2",{id:"createcompletionpropsmaxtokens-property"},"CreateCompletionProps.maxTokens property"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Defaults to 16 The maximum number of tokens to generate in the completion."),(0,o.kt)("p",null,"The token count of your prompt plus maxTokens cannot exceed the model's context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096)."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"maxTokens?: number;\n")))}m.isMDXComponent=!0}}]);