"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6200],{7522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var o=r(9901);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),y=n,b=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return r?o.createElement(b,s(s({ref:t},l),{},{components:r})):o.createElement(b,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(4090),n=(r(9901),r(7522));const a={},s=void 0,i={unversionedId:"api/github.listrepositorywebhooksresponse.data",id:"api/github.listrepositorywebhooksresponse.data",title:"github.listrepositorywebhooksresponse.data",description:"Home &gt; @runlightyear/github &gt; ListRepositoryWebhooksResponse &gt; data",source:"@site/docs/api/github.listrepositorywebhooksresponse.data.md",sourceDirName:"api",slug:"/api/github.listrepositorywebhooksresponse.data",permalink:"/lightyear/docs/api/github.listrepositorywebhooksresponse.data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/github.listrepositorywebhooksresponse.data.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"ListRepositoryWebhooksResponse.data property",id:"listrepositorywebhooksresponsedata-property",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.listrepositorywebhooksresponse"},"ListRepositoryWebhooksResponse")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/lightyear/docs/api/github.listrepositorywebhooksresponse.data"},"data")),(0,n.kt)("h2",{id:"listrepositorywebhooksresponsedata-property"},"ListRepositoryWebhooksResponse.data property"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"data: Array<{\n        type: string;\n        id: number;\n        name: string;\n        active: boolean;\n        events: Array<WebhookEvent>;\n        config: object;\n        updatedAt: string;\n        createdAt: string;\n        url: string;\n        testUrl: string;\n        pingUrl: string;\n        deliveriesUrl: string;\n        lastResponse: {\n            code?: number;\n            status?: string;\n            message?: string;\n        };\n    }>;\n")))}u.isMDXComponent=!0}}]);