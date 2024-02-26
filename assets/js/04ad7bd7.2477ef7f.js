"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[95702],{33266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(85893),r=t(11151),o=t(74866),i=t(85162);const l={title:"PnP No Modal SDK - v7 to v8",displayed_sidebar:"docs",description:"PnP No Modal SDK - v6 to v7 | Documentation - Web3Auth",sidebar_label:"v7 to v8"},s="Migration Guide from v7 to v8 for Web3Auth No Modal SDK",d={id:"pnp/migration-guides/no-modal-v7-to-v8",title:"PnP No Modal SDK - v7 to v8",description:"PnP No Modal SDK - v6 to v7 | Documentation - Web3Auth",source:"@site/docs/pnp/migration-guides/no-modal-v7-to-v8.mdx",sourceDirName:"pnp/migration-guides",slug:"/pnp/migration-guides/no-modal-v7-to-v8",permalink:"/docs/pnp/migration-guides/no-modal-v7-to-v8",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/pnp/migration-guides/no-modal-v7-to-v8.mdx",tags:[],version:"current",frontMatter:{title:"PnP No Modal SDK - v7 to v8",displayed_sidebar:"docs",description:"PnP No Modal SDK - v6 to v7 | Documentation - Web3Auth",sidebar_label:"v7 to v8"},sidebar:"docs",previous:{title:"v5 to v6",permalink:"/docs/pnp/migration-guides/modal-v5-to-v6"},next:{title:"v6 to v7",permalink:"/docs/pnp/migration-guides/no-modal-v6-to-v7"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Changes in Detail",id:"changes-in-detail",level:2},{value:"Whitelabeling Configuration Update",id:"whitelabeling-configuration-update",level:3},{value:"Before (v7):",id:"before-v7",level:4},{value:"After (v8):",id:"after-v8",level:4},{value:"Adapter Management with <code>getDefaultExternalAdapters</code>",id:"adapter-management-with-getdefaultexternaladapters",level:3},{value:"Before (v7):",id:"before-v7-1",level:4},{value:"After (v8):",id:"after-v8-1",level:4},{value:"<code>ChainConfig</code>",id:"chainconfig",level:3},{value:"Before (v7):",id:"before-v7-2",level:4},{value:"After (v8):",id:"after-v8-2",level:4},{value:"<code> web3AuthNoModalOptions</code>",id:"-web3authnomodaloptions",level:3},{value:"Before (v7):",id:"before-v7-3",level:4},{value:"After (v8):",id:"after-v8-3",level:4},{value:"<code>@web3auth/default-solana-adapter</code>",id:"web3authdefault-solana-adapter",level:4},{value:"Installation",id:"installation",level:5},{value:"Usage",id:"usage",level:5},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"migration-guide-from-v7-to-v8-for-web3auth-no-modal-sdk",children:"Migration Guide from v7 to v8 for Web3Auth No Modal SDK"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This migration guide provides steps for upgrading from version 7 (v7) to version 8 (v8) of the Web3Auth No Modal SDK. The guide outlines significant\nchanges and enhancements, including simplification of the whitelabeling process, introduction of ",(0,a.jsx)(n.code,{children:"getDefaultExternalAdapters"})," for easy adapter\nmanagement, and updates to the ",(0,a.jsx)(n.code,{children:"CustomChainConfig"})," interface."]}),"\n",(0,a.jsx)(n.h2,{id:"changes-in-detail",children:"Changes in Detail"}),"\n",(0,a.jsx)(n.h3,{id:"whitelabeling-configuration-update",children:"Whitelabeling Configuration Update"}),"\n",(0,a.jsx)(n.h4,{id:"before-v7",children:"Before (v7):"}),"\n",(0,a.jsxs)(n.p,{children:["Whitelabel configuration was passed directly to the ",(0,a.jsx)(n.code,{children:"OpenLoginAdapter"}),". This often required importing the ",(0,a.jsx)(n.code,{children:"OpenLoginAdapter"})," just for this purpose."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// v7 code\nconst openloginAdapter = new OpenloginAdapter({\n  adapterSettings: {\n    whiteLabel: {\n      appName: "W3A Heroes",\n      appUrl: "https://web3auth.io",\n      // ... other settings\n    },\n  },\n  // ... other settings\n});\n'})}),"\n",(0,a.jsx)(n.h4,{id:"after-v8",children:"After (v8):"}),"\n",(0,a.jsxs)(n.p,{children:["The whitelabel configuration can now be passed to the ",(0,a.jsx)(n.code,{children:"uiConfig"})," parameter, streamlining the process and reducing unnecessary imports."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// v8 code\nconst web3AuthOptions: Web3AuthNoModalOptions = {\n  clientId,\n  chainConfig,\n  web3AuthNetwork: "sapphire_mainnet",\n  uiConfig: {\n    appName: "W3A Heroes",\n    appUrl: "https://web3auth.io",\n    theme: {\n      primary: "#768729",\n    },\n    logoLight: "https://web3auth.io/images/web3auth-logo.svg",\n    logoDark: "https://web3auth.io/images/web3auth-logo---Dark.svg",\n    defaultLanguage: "en",\n    mode: "auto",\n    useLogoLoader: true,\n  },\n  privateKeyProvider,\n};\nconst web3auth = new Web3AuthNoModal(web3AuthOptions);\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"adapter-management-with-getdefaultexternaladapters",children:["Adapter Management with ",(0,a.jsx)(n.code,{children:"getDefaultExternalAdapters"})]}),"\n",(0,a.jsx)(n.h4,{id:"before-v7-1",children:"Before (v7):"}),"\n",(0,a.jsx)(n.p,{children:"Adapters were manually configured and instantiated."}),"\n",(0,a.jsx)(n.h4,{id:"after-v8-1",children:"After (v8):"}),"\n",(0,a.jsxs)(n.p,{children:["Adapters can be automatically fetched and configured using the ",(0,a.jsx)(n.code,{children:"getDefaultExternalAdapters"})," method, streamlining the setup process."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// v8 code\nimport { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";\n\nconst adapters = await getDefaultExternalAdapters({ options: web3AuthOptions });\n\nadapters.forEach((adapter) => {\n  if (adapter.name === "walletconnectv2") {\n    web3auth.configureAdapter(adapter);\n  }\n});\n'})}),"\n",(0,a.jsx)(n.h3,{id:"chainconfig",children:(0,a.jsx)(n.code,{children:"ChainConfig"})}),"\n",(0,a.jsx)(n.h4,{id:"before-v7-2",children:"Before (v7):"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ChainConfig"})," did not require a ",(0,a.jsx)(n.code,{children:"logo"})," parameter, and ",(0,a.jsx)(n.code,{children:"blockExplorer"})," was used for the block explorer URL."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'const chainConfig: CustomChainConfig = {\n  chainNamespace: CHAIN_NAMESPACES.OTHER,\n  chainId: "0x1",\n  rpcTarget: "https://mainnet-algorand.api.purestake.io/ps2",\n  displayName: "Algorand Mainnet",\n  blockExplorer: "",\n  ticker: "ALGO",\n  tickerName: "Algorand",\n};\n'})}),"\n",(0,a.jsx)(n.h4,{id:"after-v8-2",children:"After (v8):"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ChainConfig"})," now requires a ",(0,a.jsx)(n.code,{children:"logo"})," parameter for the chain's logo and the parameter formerly called ",(0,a.jsx)(n.code,{children:"blockExplorer"})," has been renamed to\n",(0,a.jsx)(n.code,{children:"blockExplorerUrl"}),". Additionally, ",(0,a.jsx)(n.code,{children:"isTestnet"})," has been introduced which can be used to define whether the network is testnet or not."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["From v8, parameters apart from ",(0,a.jsx)(n.code,{children:"chainId"}),", ",(0,a.jsx)(n.code,{children:"rpcTarget"}),", and ",(0,a.jsx)(n.code,{children:"chainNamespace"})," are now optional. Please note, while using\n",(0,a.jsx)(n.a,{href:"/sdk/wallet-services",children:"Wallet Services"})," you have to also pass the optional parameters."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// v8 code\nexport type CustomChainConfig = {\n  chainNamespace: ChainNamespaceType;\n  chainId: string;\n  rpcTarget: string;\n  wsTarget?: string;\n  displayName?: string;\n  blockExplorerUrl?: string;\n  ticker?: string;\n  tickerName?: string;\n  decimals?: number;\n  logo?: string;\n  isTestnet?: boolean;\n};\nconst chainConfig = {\n  chainId: "0x3",\n  displayName: "Solana Testnet",\n  chainNamespace: CHAIN_NAMESPACES.SOLANA,\n  tickerName: "SOLANA",\n  ticker: "SOL",\n  decimals: 18,\n  rpcTarget: "https://api.testnet.solana.com",\n  // highlight-start\n  blockExplorerUrl: "https://explorer.solana.com/?cluster=testnet",\n  logo: "https://images.toruswallet.io/sol.svg",\n  isTestnet: true,\n  // highlight-end\n};\n'})}),"\n",(0,a.jsx)(n.h3,{id:"-web3authnomodaloptions",children:(0,a.jsx)(n.code,{children:" web3AuthNoModalOptions"})}),"\n",(0,a.jsx)(n.h4,{id:"before-v7-3",children:"Before (v7):"}),"\n",(0,a.jsxs)(n.p,{children:["Earlier, the ",(0,a.jsx)(n.code,{children:"privateKeyProvider"})," provider was not mandatory, and ",(0,a.jsx)(n.code,{children:"chainConfig"})," was mandatory."]}),"\n",(0,a.jsx)(n.h4,{id:"after-v8-3",children:"After (v8):"}),"\n",(0,a.jsxs)(n.p,{children:["In v8, the ",(0,a.jsx)(n.code,{children:"privateKeyProvider"})," is introduced to ",(0,a.jsx)(n.code,{children:"Web3AuthNoModalOptions"}),", and ",(0,a.jsx)(n.code,{children:"chainConfig"})," is now optional."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'const chainConfig = {\n  chainId: "0x1", // Please use 0x1 for Mainnet\n  rpcTarget: "https://rpc.ankr.com/eth",\n  displayName: "Ethereum Mainnet",\n  blockExplorerUrl: "https://etherscan.io/",\n  ticker: "ETH",\n  tickerName: "Ethereum",\n  logo: "https://images.toruswallet.io/eth.svg",\n};\n\n// highlight-start\nconst ethereumPrivateKeyProvider = EthereumPrivateKeyProvider({\n  config: {chainConfig}\n});\n// highlight-end\n\nconst web3auth = new Web3Auth({\n  clientId: "", // Get your Client ID from the Web3Auth Dashboard\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  uiConfig: {\n    // highlight-next-line\n    // Access the LANGUAGES from @toruslabs/openlogin-utils\n    defaultLanguage: LANGUAGES.tr, // Supported languages en, de, ja, ko, zh, es, fr, pt, nl\n  }\n  // highlight-next-line\n  privateKeyProvider: ethereumPrivateKeyProvider,\n});\n'})}),"\n",(0,a.jsx)(n.h4,{id:"web3authdefault-solana-adapter",children:(0,a.jsx)(n.code,{children:"@web3auth/default-solana-adapter"})}),"\n",(0,a.jsxs)(n.p,{children:["Default Solana adapter allows you to create & configure external adapters for SOLANA namespace, like ",(0,a.jsx)(n.code,{children:"@web3auth/torus-solana"}),", and ",(0,a.jsx)(n.code,{children:"@web3auth/phantom"}),"\neasily."]}),"\n",(0,a.jsx)(n.h5,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/default-solana-adapter\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/default-solana-adapter\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/default-solana-adapter\n"})})})]}),"\n",(0,a.jsx)(n.h5,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'const chainConfig = {\n  chainId: "0x3",\n  displayName: "Solana Testnet",\n  chainNamespace: CHAIN_NAMESPACES.SOLANA,\n  tickerName: "SOLANA",\n  ticker: "SOL",\n  decimals: 18,\n  rpcTarget: "https://api.testnet.solana.com",\n  blockExplorerUrl: "https://explorer.solana.com/?cluster=testnet",\n  logo: "https://images.toruswallet.io/sol.svg",\n  isTestnet: true,\n};\n\nconst privateKeyProvider = new SolanaPrivateKeyProvider({ config: { chainConfig } });\n\nconst web3AuthNoModalOptions: Web3AuthNoModalOptions = {\n  clientId,\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  privateKeyProvider: privateKeyProvider,\n};\n\nconst adapters = await getDefaultExternalAdapters({ options: web3AuthNoModalOptions });\n\nadapters.forEach((adapter) => {\n  web3auth.configureAdapter(adapter);\n});\n'})}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"Migrating from v7 to v8 of the Web3Auth No Modal SDK involves:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Moving whitelabel configuration to the ",(0,a.jsx)(n.code,{children:"uiConfig"})," parameter."]}),"\n",(0,a.jsxs)(n.li,{children:["Utilizing ",(0,a.jsx)(n.code,{children:"getDefaultExternalAdapters"})," for streamlined adapter configuration."]}),"\n",(0,a.jsxs)(n.li,{children:["Updating ",(0,a.jsx)(n.code,{children:"ChainConfig"})," to include the ",(0,a.jsx)(n.code,{children:"logo"})," parameter and renaming ",(0,a.jsx)(n.code,{children:"blockExplorer"})," to ",(0,a.jsx)(n.code,{children:"blockExplorerUrl"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(67294),r=t(36905),o=t(12466),i=t(16550),l=t(20469),s=t(91980),d=t(67392),c=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,u]=g({queryString:t,groupId:r}),[v,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=d??v;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function A(e){const n=(0,m.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);