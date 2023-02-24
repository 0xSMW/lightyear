"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1254],{57522:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var i=o(29901);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=i.createContext({}),h=function(e){var t=i.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=h(e.components);return i.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),y=h(o),b=n,u=y["".concat(p,".").concat(b)]||y[b]||l[b]||r;return o?i.createElement(u,s(s({ref:t},c),{},{components:o})):i.createElement(u,s({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=y;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var h=2;h<r;h++)s[h]=o[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}y.displayName="MDXCreateElement"},87115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=o(14090),n=(o(29901),o(57522));const r={},s=void 0,a={unversionedId:"api/github.webhookevent",id:"api/github.webhookevent",title:"github.webhookevent",description:"Home &gt; @runlightyear/github &gt; WebhookEvent",source:"@site/docs/api/github.webhookevent.md",sourceDirName:"api",slug:"/api/github.webhookevent",permalink:"/docs/api/github.webhookevent",draft:!1,tags:[],version:"current",frontMatter:{}},p={},h=[{value:"WebhookEvent type",id:"webhookevent-type",level:2}],c={toc:h};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github"},"@runlightyear/github")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/github.webhookevent"},"WebhookEvent")),(0,n.kt)("h2",{id:"webhookevent-type"},"WebhookEvent type"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'declare type WebhookEvent = \n/**\n * Activity related to a branch protection rule.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with at least read-only access on repositories administration\n */\n"branch_protection_rule"\n/**\n * Check run activity has occurred. The type of activity is specified in the action property of the payload object. For more information, see the "check runs" REST API.\n *\n * Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array and a null value for head_branch.\n *\n * Availability\n *   Repository webhooks only receive payloads for the created and completed event types in a repository\n *   Organization webhooks only receive payloads for the created and completed event types in repositories\n *   GitHub Apps with the checks:read permission receive payloads for the created and completed events that occur in the repository where the app is installed. The app must have the checks:write permission to receive the rerequested and requested_action event types. The rerequested and requested_action event type payloads are only sent to the GitHub App being requested. GitHub Apps with the checks:write are automatically subscribed to this webhook event.\n */\n | "check_run"\n/**\n * Check suite activity has occurred. The type of activity is specified in the action property of the payload object. For more information, see the "check suites" REST API.\n *\n * Note: The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty pull_requests array and a null value for head_branch.\n *\n * Availability\n *   Repository webhooks only receive payloads for the completed event types in a repository\n *   Organization webhooks only receive payloads for the completed event types in repositories\n *   GitHub Apps with the checks:read permission receive payloads for the created and completed events that occur in the repository where the app is installed. The app must have the checks:write permission to receive the requested and rerequested event types. The requested and rerequested event type payloads are only sent to the GitHub App being requested. GitHub Apps with the checks:write are automatically subscribed to this webhook event.\n */\n | "check_suite"\n/**\n * Activity related to code scanning alerts in a repository. The type of activity is specified in the action property of the payload object. For more information, see "About code scanning."\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the security_events :read permission\n */\n | "code_scanning_alert"\n/**\n * A commit comment is created. The type of activity is specified in the action property of the payload object. For more information, see the "commit comment" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "commit_comment"\n/**\n * A Git branch or tag is created. For more information, see the "Git database" REST API.\n *\n * Note: You will not receive a webhook for this event when you create more than three tags at once.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "create"\n/**\n * A Git branch or tag is deleted. For more information, see the "Git database" REST API.\n *\n * Note: You will not receive a webhook for this event when you delete more than three tags at once.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "delete"\n/**\n * A deploy key is added or removed from a repository. The type of activity is specified in the action property of the payload object. For more information, see the "Deploy keys" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "deploy_key"\n/**\n * A deployment is created. The type of activity is specified in the action property of the payload object. For more information, see the "deployment" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the deployments permission\n */\n | "deployment"\n/**\n * A deployment is created. The type of activity is specified in the action property of the payload object. For more information, see the "deployments" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the deployments permission\n */\n | "deployment_status"\n/**\n * Note: Webhook events for GitHub Discussions are currently in beta and subject to change.\n *\n * Activity related to a discussion. For more information, see the "Using the GraphQL API for discussions."\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the discussions permission\n */\n | "discussion"\n/**\n * Note: Webhook events for GitHub Discussions are currently in beta and subject to change.\n *\n * Activity related to a comment in a discussion. For more information, see "Using the GraphQL API for discussions."\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the discussions permission\n */\n | "discussion_comment"\n/**\n * A user forks a repository. For more information, see the "forks" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "fork"\n/**\n * When someone revokes their authorization of a GitHub App, this event occurs. A GitHub App receives this webhook by default and cannot unsubscribe from this event.\n *\n * Anyone can revoke their authorization of a GitHub App from their GitHub account settings page. Revoking the authorization of a GitHub App does not uninstall the GitHub App. You should program your GitHub App so that when it receives this webhook, it stops calling the API on behalf of the person who revoked the token. If your GitHub App continues to use a revoked access token, it will receive the 401 Bad Credentials error. For details about user-to-server requests, which require GitHub App authorization, see "Identifying and authorizing users for GitHub Apps."\n *\n * Availability\n *   GitHub Apps\n */\n | "github_app_authorization"\n/**\n * A wiki page is created or updated. For more information, see "About wikis."\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "gollum"\n/**\n * Activity related to a GitHub App installation. The type of activity is specified in the action property of the payload object. For more information, see the "GitHub App installation" REST API.\n *\n * Availability\n *   GitHub Apps\n */\n | "installation"\n/**\n * Activity related to repositories being added to a GitHub App installation. The type of activity is specified in the action property of the payload object. For more information, see the "GitHub App installation" REST API.\n *\n * Availability\n *   GitHub Apps\n */\n | "installation_repositories"\n/**\n * Activity related to an issue or pull request comment. The type of activity is specified in the action property of the payload object. For more information, see the "issue comments" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the issues permission\n */\n | "issue_comment"\n/**\n * Activity related to an issue. The type of activity is specified in the action property of the payload object. For more information, see the "issues" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the issues permission\n */\n | "issues"\n/**\n * Activity related to a label. The type of activity is specified in the action property of the payload object. For more information, see the "labels" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the metadata permission\n */\n | "label"\n/**\n * Activity related to a GitHub Marketplace purchase. The type of activity is specified in the action property of the payload object. For more information, see the "GitHub Marketplace."\n *\n * Availability\n *   GitHub Apps\n */\n | "marketplace_purchase"\n/**\n * Activity related to repository collaborators. The type of activity is specified in the action property of the payload object. For more information, see the "collaborators" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the members permission\n */\n | "member"\n/**\n * Activity related to team membership. The type of activity is specified in the action property of the payload object. For more information, see the "team members" REST API.\n *\n * Availability\n *   Organization webhooks\n *   GitHub Apps with the members permission\n */\n | "membership"\n/**\n * Note: The pull request merge queue feature is currently in limited public beta and subject to change.\n *\n * Activity related to merge groups in a merge queue. The type of activity is specified in the action property of the payload object.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the merge_queues permission\n */\n | "merge_group"\n/**\n * The webhook this event is configured on was deleted. This event will only listen for changes to the particular hook the event is installed on. Therefore, it must be selected for each hook that you\'d like to receive meta events for.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "meta"\n/**\n * Activity related to milestones. The type of activity is specified in the action property of the payload object. For more information, see the "milestones" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pull_requests permission\n */\n | "milestone"\n/**\n * Activity related to an organization and its members. The type of activity is specified in the action property of the payload object. For more information, see the "organizations" REST API.\n *\n * Availability\n *   Organization webhooks only receive the deleted, added, removed, renamed, and invited events\n *   GitHub Apps with the members permission\n */\n | "organization"\n/**\n * Activity related to people being blocked in an organization. The type of activity is specified in the action property of the payload object. For more information, see the "blocking organization users" REST API.\n *\n * Availability\n *   Organization webhooks\n *   GitHub Apps with the organization_administration permission\n */\n | "org_block"\n/**\n * Activity related to GitHub Packages. The type of activity is specified in the action property of the payload object. For more information, see "Managing packages with GitHub Packages" to learn more about GitHub Packages.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "package"\n/**\n * Represents an attempted build of a GitHub Pages site, whether successful or not. A push to a GitHub Pages enabled branch (gh-pages for project pages, the default branch for user and organization pages) triggers this event.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pages permission\n */\n | "page_build"\n/**\n * When you create a new webhook, we\'ll send you a simple ping event to let you know you\'ve set up the webhook correctly. This event isn\'t stored so it isn\'t retrievable via the Events API endpoint.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps receive a ping event with an app_id used to register the app\n */\n | "ping"\n/**\n * Activity related to classic projects. The type of activity is specified in the action property of the payload object. For more information, see the "projects" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the repository_projects or organization_projects permission\n *\n * Note: This event only occurs for projects (classic).\n */\n | "project"\n/**\n * Activity related to cards in a classic project. The type of activity is specified in the action property of the payload object. For more information, see the "project cards" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the repository_projects or organization_projects permission\n *\n * Note: This event only occurs for projects (classic).\n */\n | "project_card"\n/**\n * Activity related to columns in a classic project. The type of activity is specified in the action property of the payload object. For more information, see the "project columns" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the repository_projects or organization_projects permission\n *\n * Note: This event only occurs for projects (classic).\n */\n | "project_column"\n/**\n * Note: Webhook events for projects are currently in beta and subject to change. To share feedback about projects webhooks with GitHub, see the Projects webhook feedback discussion.\n *\n * Activity related to items in a project. The type of activity is specified in the action property of the payload object. For more information, see "About projects."\n *\n * Availability\n *   Organization webhooks\n *   GitHub Apps with the organization_projects permission\n */\n | "projects_v2_item"\n/**\n * When a private repository is made public. Without a doubt: the best GitHub event.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the metadata permission\n */\n | "public"\n/**\n * Activity related to pull requests. The type of activity is specified in the action property of the payload object. For more information, see the "pull requests" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pull_requests permission\n */\n | "pull_request"\n/**\n * Activity related to pull request reviews. The type of activity is specified in the action property of the payload object. For more information, see the "pull request reviews" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pull_requests permission\n */\n | "pull_request_review"\n/**\n * Activity related to pull request review comments in the pull request\'s unified diff. The type of activity is specified in the action property of the payload object. For more information, see the "pull request review comments" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pull_requests permission\n */\n | "pull_request_review_comment"\n/**\n * Activity related to a comment thread on a pull request being marked as resolved or unresolved. The type of activity is specified in the action property of the payload object.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the pull_requests permission\n */\n | "pull_request_review_thread"\n/**\n * One or more commits are pushed to a repository branch or tag.\n *\n * Note: You will not receive a webhook for this event when you push more than three tags at once.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "push"\n/**\n * Activity related to a release. The type of activity is specified in the action property of the payload object. For more information, see the "releases" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the contents permission\n */\n | "release"\n/**\n * This event occurs when a GitHub App sends a POST request to the "Create a repository dispatch event" endpoint.\n *\n * Availability\n *   GitHub Apps must have the contents permission to receive this webhook.\n */\n | "repository_dispatch"\n/**\n * Activity related to a repository. The type of activity is specified in the action property of the payload object. For more information, see the "repositories" REST API.\n *\n * Availability\n *   Repository webhooks receive all event types except deleted\n *   Organization webhooks\n *   GitHub Apps with the metadata permission receive all event types except deleted\n */\n | "repository"\n/**\n * Activity related to a repository being imported to GitHub. The type of activity is specified in the action property of the payload object. For more information, see the "source imports" REST API. To receive this event for a personal repository, you must create an empty repository prior to the import. This event can be triggered using either the GitHub Importer or the Source imports API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "repository_import"\n/**\n * Activity related to security vulnerability alerts in a repository. The type of activity is specified in the action property of the payload object. For more information, see the "About Dependabot alerts".\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "repository_vulnerability_alert"\n/**\n * Activity related to a security advisory that has been reviewed by GitHub. A GitHub-reviewed security advisory provides information about security-related vulnerabilities in software on GitHub.\n *\n * The security advisory dataset also powers the GitHub Dependabot alerts. For more information, see "About Dependabot alerts."\n *\n * Availability\n *   GitHub Apps with the security_events permission\n */\n | "security_advisory"\n/**\n * Activity related to a sponsorship listing. The type of activity is specified in the action property of the payload object. For more information, see "About GitHub Sponsors".\n *\n * You can only create a sponsorship webhook on GitHub. For more information, see "Configuring webhooks for events in your sponsored account".\n *\n * Availability\n *   Sponsored accounts\n */\n | "sponsorship"\n/**\n * Activity related to a repository being starred. The type of activity is specified in the action property of the payload object. For more information, see the "starring" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n */\n | "star"\n/**\n * When the status of a Git commit changes. For more information, see the "statuses" REST API.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the statuses permission\n */\n | "status"\n/**\n * Activity related to an organization\'s team. The type of activity is specified in the action property of the payload object. For more information, see the "teams" REST API.\n *\n * Availability\n *   Organization webhooks\n *   GitHub Apps with the members permission\n */\n | "team"\n/**\n * When a repository is added to a team.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the members permission\n */\n | "team_add"\n/**\n * When someone stars a repository. The type of activity is specified in the action property of the payload object. For more information, see the "starring" REST API.\n *\n * The event\u2019s actor is the user who starred a repository, and the event\u2019s repository is the repository that was starred.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   GitHub Apps with the metadata permission\n */\n | "watch"\n/**\n * This event occurs when someone triggers a workflow run on GitHub or sends a POST request to the "Create a workflow dispatch event" endpoint. For more information, see "Events that trigger workflows."\n *\n * Availability\n *   GitHub Apps must have the contents permission to receive this webhook.\n */\n | "workflow_dispatch"\n/**\n * A GitHub Actions workflow job has been queued, is in progress, or has been completed on a repository. The type of activity is specified in the action property of the payload object.\n *\n * Availability\n *   Repository webhooks\n *   Organization webhooks\n *   Enterprise webhooks\n */\n | "workflow_job"\n/**\n * When a GitHub Actions workflow run is requested or completed. For more information, see "Events that trigger workflows."\n *\n * Availability\n *   GitHub Apps with the actions or contents permissions.\n */\n | "workflow_run";\n')))}l.isMDXComponent=!0}}]);