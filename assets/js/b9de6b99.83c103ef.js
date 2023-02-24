"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8516],{57522:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(29901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||p;return r?o.createElement(d,a(a({ref:t},s),{},{components:r})):o.createElement(d,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var o=r(14090),n=(r(29901),r(57522));const p={},a=void 0,i={unversionedId:"api/openai.createcompletionprops.prompt",id:"api/openai.createcompletionprops.prompt",title:"openai.createcompletionprops.prompt",description:"Home &gt; @runlightyear/openai &gt; CreateCompletionProps &gt; prompt",source:"@site/docs/api/openai.createcompletionprops.prompt.md",sourceDirName:"api",slug:"/api/openai.createcompletionprops.prompt",permalink:"/docs/api/openai.createcompletionprops.prompt",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"CreateCompletionProps.prompt property",id:"createcompletionpropsprompt-property",level:2}],s={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/openai"},"@runlightyear/openai")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/openai.createcompletionprops"},"CreateCompletionProps")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/openai.createcompletionprops.prompt"},"prompt")),(0,n.kt)("h2",{id:"createcompletionpropsprompt-property"},"CreateCompletionProps.prompt property"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Defaults to ","<","|","endoftext","|",">"," The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays."),(0,n.kt)("p",null,"Note that ","<","|","endoftext","|",">"," is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"prompt?: string | string[];\n")))}m.isMDXComponent=!0}}]);