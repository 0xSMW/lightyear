"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19641],{57522:(t,r,e)=>{e.d(r,{Zo:()=>p,kt:()=>c});var n=e(29901);function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t,r){if(null==t)return{};var e,n,a=function(t,r){if(null==t)return{};var e,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=n.createContext({}),g=function(t){var r=n.useContext(s),e=r;return t&&(e="function"==typeof t?t(r):o(o({},r),t)),e},p=function(t){var r=g(t.components);return n.createElement(s.Provider,{value:r},t.children)},u={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(t,r){var e=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=g(e),c=a,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return e?n.createElement(d,o(o({ref:r},p),{},{components:e})):n.createElement(d,o({ref:r},p))}));function c(t,r){var e=arguments,a=r&&r.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var g=2;g<i;g++)o[g]=e[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},55838:(t,r,e)=>{e.r(r),e.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=e(14090),a=(e(29901),e(57522));const i={},o=void 0,l={unversionedId:"api/github.commonpayload",id:"api/github.commonpayload",title:"github.commonpayload",description:"Home &gt; @runlightyear/github &gt; CommonPayload",source:"@site/docs/api/github.commonpayload.md",sourceDirName:"api",slug:"/api/github.commonpayload",permalink:"/docs/api/github.commonpayload",draft:!1,tags:[],version:"current",frontMatter:{}},s={},g=[{value:"CommonPayload interface",id:"commonpayload-interface",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Optional Properties",id:"optional-properties",level:2}],p={toc:g};function u(t){let{components:r,...e}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,e,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/github.commonpayload"},"CommonPayload")),(0,a.kt)("h2",{id:"commonpayload-interface"},"CommonPayload interface"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CommonPayload \n")),(0,a.kt)("h2",{id:"required-properties"},"Required Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.commonpayload.repository"},"repository")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"{ id: number; nodeId: string; name: string; fullName: string; private: boolean; owner: { login: string; id: number; nodeId: string; avatarUrl: string; gravatarId: string; url: string; htmlUrl: string; followersUrl: string; followingUrl: string; gistsUrl: string; starredUrl: string; subscriptionsUrl: string; organizationsUrl: string; reposUrl: string; eventsUrl: string; receivedEventsUrl: string; type: string; siteAdmin: boolean; }; htmlUrl: string; description: string ","|"," null; fork: boolean; url: string; forksUrl: string; keysUrl: string; collaboratorsUrl: string; teamsUrl: string; hooksUrl: string; issueEventsUrl: string; eventsUrl: string; assigneesUrl: string; branchesUrl: string; tagsUrl: string; blobsUrl: string; gitTagsUrl: string; gitRefsUrl: string; treesUrl: string; statusesUrl: string; languagesUrl: string; stargazersUrl: string; contributorsUrl: string; subscribersUrl: string; subscriptionUrl: string; commitsUrl: string; gitCommitsUrl: string; commentsUrl: string; issueCommentUrl: string; contentsUrl: string; compareUrl: string; mergesUrl: string; archiveUrl: string; downloadsUrl: string; issuesUrl: string; pullsUrl: string; milestonesUrl: string; notificationsUrl: string; labelsUrl: string; releasesUrl: string; deploymentsUrl: string; createdAt: string; updatedAt: string; pushedAt: string; gitUrl: string; sshUrl: string; cloneUrl: string; svnUrl: string; homepage: string ","|"," null; size: number; stargazersCount: number; watchersCount: number; language: string ","|"," null; hasIssues: boolean; hasProjects: boolean; hasDownloads: boolean; hasWiki: boolean; hasPages: boolean; hasDiscussions: boolean; forksCount: number; mirrorUrl: string ","|"," null; archived: boolean; disabled: boolean; openIssuesCount: number; license: string ","|"," null; allowForking: boolean; isTemplate: boolean; webCommitSignoffRequired: boolean; topics: string","[","]","; visibility: string; forks: number; openIssues: number; watchers: number; defaultBranch: string; }"),(0,a.kt)("td",{parentName:"tr",align:null},"The repository where the event occurred.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.commonpayload.sender"},"sender")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"{ login: string; id: number; nodeId: string; avatarUrl: string; gravatarId: string; url: string; htmlUrl: string; followersUrl: string; followingUrl: string; gistsUrl: string; starredUrl: string; subscriptionsUrl: string; organizationsUrl: string; reposUrl: string; eventsUrl: string; receivedEventsUrl: string; type: string; siteAdmin: boolean; }"),(0,a.kt)("td",{parentName:"tr",align:null},"The user that triggered the event.")))),(0,a.kt)("h2",{id:"optional-properties"},"Optional Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.commonpayload.installation"},"installation?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"The GitHub App installation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/github.commonpayload.organization"},"organization?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Webhook payloads contain the organization object when the webhook is configured for an organization or the event occurs from activity in a repository owned by an organization.")))))}u.isMDXComponent=!0}}]);