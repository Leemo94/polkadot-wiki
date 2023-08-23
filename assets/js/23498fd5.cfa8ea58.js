"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),o=["components"],r={id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets",description:"Tools that you can use to integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},l=void 0,c={unversionedId:"build/build-integrate-assets",id:"build/build-integrate-assets",title:"Assets on Polkadot",description:"Tools that you can use to integrating assets.",source:"@site/../docs/build/build-integrate-assets.md",sourceDirName:"build",slug:"/build-integrate-assets",permalink:"/docs/build-integrate-assets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-integrate-assets.md",tags:[],version:"current",lastUpdatedBy:"Dominique",lastUpdatedAt:1692173733,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets",description:"Tools that you can use to integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},sidebar:"docs",previous:{title:"Polkadot Protocol",permalink:"/docs/build-protocol-info"},next:{title:"Node Management",permalink:"/docs/build-node-management"}},p={},u=[{value:"Assets Basics",id:"assets-basics",level:2},{value:"Asset Operations",id:"asset-operations",level:3},{value:"Integration",id:"integration",level:2},{value:"Parachain Node",id:"parachain-node",level:3},{value:"Sidecar",id:"sidecar",level:3},{value:"Tx Wrapper Polkadot",id:"tx-wrapper-polkadot",level:3}],d={toc:u},h="wrapper";function f(e){var t=e.components,a=(0,s.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Polkadot Relay Chain does not natively\nsupport assets beyond DOT This functionality\nexists in parachains. On both Polkadot and Kusama, this parachain is called Asset Hub."),(0,i.kt)("p",null,"The Asset Hub provides a first-class interface for creating, managing, and using both fungible and\nnon-fungible assets. The fungible interface is similar to Ethereum's ERC-20 standard. However, the\ndata structures and stateful operations are encoded directly into the chain's runtime, making\noperations fast and fee-efficient."),(0,i.kt)("p",null,"Beyond merely supporting assets, integrating an Asset Hub into your systems has several benefits for\ninfrastructure providers and users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for on-chain assets."),(0,i.kt)("li",{parentName:"ul"},"Significantly lower transaction fees (about 1/10) than the Relay Chain."),(0,i.kt)("li",{parentName:"ul"},"Significantly lower deposits (1/10) than the Relay Chain. This includes the existential deposit\nand deposits for proxy/multisig operations."),(0,i.kt)("li",{parentName:"ul"},"Ability to pay transaction fees in certain assets. As in, accounts would ",(0,i.kt)("strong",{parentName:"li"},"not")," need DOT in order\nto exist on-chain nor to pay fees.")),(0,i.kt)("p",null,"The Asset Hub will use DOT as its native currency. Users can transfer DOT from the Relay Chain into\nthe Asset Hub and use it natively. The Relay Chain will also accept DOT transfers from the Asset Hub\nback to the Relay Chain to use for staking, governance, or any other activity taking place there."),(0,i.kt)("p",null,"Using the Asset Hub for DOT/KSM balance transfers will be much more efficient than the Relay Chain\nand is highly recommended. Until domain specific parachains are built, the Relay Chain will still\nneed to be used for staking and governance."),(0,i.kt)("h2",{id:"assets-basics"},"Assets Basics"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/assets/src/lib.rs"},"Assets pallet"),"\nfor the most up-to-date info and reference documentation."),(0,i.kt)("p",null,"Assets are stored as a map from an ID to information about the asset, including a management team,\ntotal supply, total number of accounts, its sufficiency for account existence, and more.\nAdditionally, the asset owner can register metadata like the name, symbol, and number of decimals\nfor representation."),(0,i.kt)("p",null,"Some assets, as determined by on-chain governance, are regarded as \u201csufficient\u201d. Sufficiency means\nthat the asset balance is enough to create the account on-chain, with no need for the DOT/KSM\nexistential deposit. Likewise, you cannot send a non-sufficient asset to an account that does not\nexist. Sufficient assets can be used to pay transaction fees (i.e. there is no need to hold DOT/KSM\non the account)."),(0,i.kt)("p",null,"Assets do have a minimum balance (set by the creator), and if an account drops below that balance,\nthe dust is lost."),(0,i.kt)("h3",{id:"asset-operations"},"Asset Operations"),(0,i.kt)("p",null,"The Assets pallet has its own interface for dealing with assets. See the ",(0,i.kt)("a",{parentName:"p",href:"#integration"},"Integration"),"\nsection below for how to fetch information and construct transactions."),(0,i.kt)("p",null,"The main functions you will probably interact with are ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". These\nfunctions transfer some ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," (balance) of an ",(0,i.kt)("inlineCode",{parentName:"p"},"AssetId")," (a ",(0,i.kt)("inlineCode",{parentName:"p"},"u32"),", not a contract address) to\nanother account."),(0,i.kt)("p",null,"The Assets pallet also provides an ",(0,i.kt)("inlineCode",{parentName:"p"},"approve_transfer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel_approval"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_approved"),"\ninterface for non-custodial operations."),(0,i.kt)("p",null,"Asset transfers will result in an ",(0,i.kt)("inlineCode",{parentName:"p"},"assets.transferred")," event. The same instructions for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#events"},"monitoring events and ",(0,i.kt)("strong",{parentName:"a"},"not")," transactions")," applies to asset\ntransfers."),(0,i.kt)("p",null,"Note that you can use the same addresses (except\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#anonymous-proxy-pure-proxy"},"pure proxies"),"!) on the Asset Hub that you use\non the Relay Chain. The SS58 encodings are the same, only the chain information (genesis hash, etc.)\nwill change on transaction construction."),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("p",null,"The Asset Hub will come with the same tooling suite that Parity Technologies provides for the Relay\nChain, namely ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"API Sidecar")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/tree/main/packages/txwrapper-polkadot"},"TxWrapper Polkadot"),".\nIf you have a technical question or issue about how to use one of the integration tools please file\na GitHub issue so a developer can help."),(0,i.kt)("h3",{id:"parachain-node"},"Parachain Node"),(0,i.kt)("p",null,"Using the Asset Hub will require running a parachain node to sync the chain. This is very similar to\nrunning a Polkadot node, with the addition of\nsome extra flags. You can follow\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/README.md#asset-hub-"},"these guidelines")," to set up\nan Asset Hub node."),(0,i.kt)("h3",{id:"sidecar"},"Sidecar"),(0,i.kt)("p",null,"API Sidecar is a REST service for Relay Chain and parachain nodes; It comes with endpoints to query\ninfo about assets and asset balances on the Asset Hub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asset lookups will always use the ",(0,i.kt)("inlineCode",{parentName:"li"},"AssetId")," to refer to an asset class. On-chain metadata is\nsubject to change and thus not suitable as a canonical index."),(0,i.kt)("li",{parentName:"ul"},"Please refer to ",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"docs")," for full usage\ninformation. Details on options like how to make a historical query are not included here.")),(0,i.kt)("p",null,"Here are the available public instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot-asset-hub-public-sidecar.parity-chains.parity.io"},"Sidecar connected to Polkadot Asset Hub"),"\nand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama-asset-hub-public-sidecar.parity-chains.parity.io"},"Sidecar connected to Kusama Asset Hub"))),(0,i.kt)("p",null,"The purpose of these instances is to allow anyone to check and get a quick\noverview of the info that the asset-related endpoints provide."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These instances should only be used for ad-hoc checks or tests and not for production, heavy testing\nor any other critical purpose.")),(0,i.kt)("h3",{id:"tx-wrapper-polkadot"},"Tx Wrapper Polkadot"),(0,i.kt)("p",null,"TxWrapper Polkadot is a library designed to facilitate transaction construction and signing in\noffline environments; it comes with a set of asset-specific functions to use on the Asset Hub. When\nconstructing parachain transactions, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"txwrapper-polkadot")," exactly as on the Relay Chain,\nbut would construct transactions with the appropriate parachain metadata like genesis hash, spec\nversion, and type registry."))}f.isMDXComponent=!0}}]);