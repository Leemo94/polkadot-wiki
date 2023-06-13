(self.webpackChunk=self.webpackChunk||[]).push([[8355],{47940:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(74165),i=n(15861),r=n(67294),o=n(92519),s=n(9963),l=n(67425);function d(t,e,n){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,a.Z)().mark((function t(e,n,i){var r,l,d,u,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){t.next=18;break}return t.abrupt("return");case 18:return d=new o.U(r),t.next=21,s.G.create({provider:d});case 21:u=t.sent,(c=n.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=c[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t,e,n,a){switch(e){case"humanReadable":(0,l.HumanReadable)(t,n,a);break;case"precise":(0,l.Precise)(t,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(t,a);break;case"percentage":(0,l.Percentage)(t,a);break;case"arrayLength":(0,l.ArrayLength)(t,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(t){var e=t.network,n=t.path,o=t.defaultValue,s=t.filter,l=void 0===s?void 0:s,u=(0,r.useState)(""),p=u[0],h=u[1];return e=e.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?c(o.toString(),l,e,h):h(o.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,n,h);case 2:if(void 0!==(i=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?c(i,l,e,h):h(i);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),p}},67425:t=>{var e={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,n,a){var i=void 0;if("polkadot"===n||"statemint"===n)i=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}t=parseFloat(t),a((t=Number.isInteger(t/e[n].precision)?t/e[n].precision+" "+e[n].symbol:(t/e[n].precision).toFixed(i)+" "+e[n].symbol).toString())},Precise:function(t,n,a){a(t=(t=parseFloat(t))/e[n].precision+" "+e[n].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},Percentage:function(t,e){e((t/=1e7).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},48693:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(47940),s=["components"],l={id:"learn-identity",title:"Account Identity",sidebar_label:"Account Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},d=void 0,u={unversionedId:"learn/learn-identity",id:"learn/learn-identity",title:"Account Identity",description:"Learn about on-chain identity, judgements and registrars.",source:"@site/../docs/learn/learn-identity.md",sourceDirName:"learn",slug:"/learn-identity",permalink:"/docs/learn-identity",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-identity.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1679035834,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"learn-identity",title:"Account Identity",sidebar_label:"Account Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Multi-Signature Accounts",permalink:"/docs/learn-account-multisig"}},c={},p=[{value:"Setting an Identity",id:"setting-an-identity",level:2},{value:"Format Caveat",id:"format-caveat",level:3},{value:"Judgements",id:"judgements",level:2},{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3},{value:"Current Registrars",id:"current-registrars",level:3},{value:"Sub Accounts",id:"sub-accounts",level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",level:2}],h={toc:p},m="wrapper";function g(t){var e=t.components,l=(0,i.Z)(t,s);return(0,r.kt)(m,(0,a.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot provides a naming system that allows\nparticipants to add personal information to their on-chain account and subsequently ask for\nverification of this information by ",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n",(0,r.kt)(o.Z,{network:"polkadot",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nand\n",(0,r.kt)(o.Z,{network:"polkadot",path:"consts.identity.fieldDeposit",defaultValue:66e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nper each field beyond the legal name. These funds are ",(0,r.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when\nthe identity is cleared."),(0,r.kt)("p",null,"These amounts can also be extracted by querying constants through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"Chain state constants")," tab on Polkadot-JS\nApps."),(0,r.kt)("admonition",{title:"Instructions for setting and clearing Identities",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The procedure to set and clear identities is explained in detail in this support article -\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"How to set and clear an Identity"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Ledger app on ",(0,r.kt)("strong",{parentName:"p"},"Nano S")," doesn't support the extrinsic for setting identity. As a workaround,\ncreate a primary identity with an on-chain account and then using that primary identity, assign a\n",(0,r.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity")," to the Ledger stash.")),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The\nPolkadot-JS UI currently encodes the raw bytes it encounters as UTF8 strings, which makes these\nvalues readable on-screen. However, given that there are no restrictions on the values that can be\nplaced into these fields, a different UI may interpret them as, for example, IPFS hashes or encoded\nbitmaps. This means any field stored as raw bytes will become unreadable by that specific UI. As\nfield standards crystallize, things will become easier to use but for now, every custom\nimplementation of displaying user information will likely have to make a conscious decision on the\napproach to take, or support multiple formats and then attempt multiple encodings until the output\nmakes sense."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed (all the currently verified identities on-chain)."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct (this step involves\nverification of state issued identity documents, and at the moment no account has known good\nidentity, with the exception of registrars)."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by the complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgments."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics tab in the Polkadot-JS UI")," and select the\n",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you\nwant to be judged by, and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these\nconfirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State tab in the Polkadot-JS UI")," and selecting\n",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("admonition",{title:"Instructions for requesting and cancelling Identity judgments",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The procedure to request and cancel identity judgments is explained in detail in this\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"support article"))),(0,r.kt)("admonition",{title:"Requesting judgement through Web3 Foundation Registrar If you requested judgement for your",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"on-chain identity through the Web3 Foundation Registrar (i.e. Registrar #0) you will need to\ncomplete a few additional tasks. For more information visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179747-how-to-use-the-w3f-registrar-page"},"this support article"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The set identity calls go on-chain. Hence, the contact information is available publicly, for both\nlegitimate entities, like registrars or validators, but also scammers who might impersonate them.\nThe strings in the identity fields are good candidates for homograph attacks, as someone could list\na fraudulent website (web3.f0undation instead of web3.foundation for example) and still get verified\nby the registrar (if the checks are automated)!"),(0,r.kt)("p",{parentName:"admonition"},"In a decentralized network, one should be cautious making transactions with accounts solely based on\ntheir identity. If an account on-chain claims to be of Web3 Foundation, it is wise to verify its\nauthenticity by checking directly with Web3 Foundation or examining the established history of that\naccount on-chain.")),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 1 DOT to\nverify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee\nto the registrar who provides the judgement on those claims. Users set a maximum fee they are\nwilling to pay and only registrars below this amount would provide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,r.kt)("admonition",{title:"Advanced How-to Guides",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-identity-guides#registrars"},"this page")," to learn how to become a Registrar.")),(0,r.kt)("h3",{id:"current-registrars"},"Current Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Polkadot.\nUnless no additional information is available here, you must reach out to specific registrars\nindividually if you want to be judged by those."),(0,r.kt)("p",null,"Registrar 0: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.web3.foundation/"},"https://registrar.web3.foundation/")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Account"),":\n12j3Cz8qskCGJxmSJpVL2z2t3Fpmw3KoBaBaRGPnuibFc7o8\n",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Fee"),":\n0 DOT ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Registrar 1: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.d11d.net/"},"https://registrar.d11d.net/")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Account"),":\n1Reg2TYv9rGfrQKpPREmrHRxrNsUDBQKzkYwP1UstD97wpJ\n",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Fee"),":\n10 DOT ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Registrar 2: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Account"),":\n1EpXirnoTimS1SWq52BeYx7sitsusXNGzMyGx8WPujPd1HB\n",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Fee"),":\n0 DOT ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"","","","","",""),(0,r.kt)("p",null,"","","","","",""),(0,r.kt)("p",null,"To find out how to contact the registrar after the application for judgement or to learn who they\nare, we can check their identity by adding them to our Address Book. Their identity will be\nautomatically loaded."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chevdor is registrar #1",src:n(65494).Z,width:"579",height:"217"})),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"Stash accounts")," of each of\ntheir validators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts. Note that a deposit of\n",(0,r.kt)(o.Z,{network:"polkadot",path:"consts.identity.subAccountDeposit",defaultValue:20053e7,filter:"humanReadable",mdxType:"RPC"}),"\n","\nis required for every sub-account."),(0,r.kt)("admonition",{title:"Explainer article and video on setting sub-identities",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Here is the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181991-how-to-set-identities-for-sub-accounts"},"how to set sub-identities"),"\narticle and a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial")," on setting\nsub-identities using Polkadot-JS UI")),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,r.kt)("admonition",{title:'Visit the section "Clear an Identity" on',type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981"},"this support article")," for\nguidelines about clearing identities.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."))}g.isMDXComponent=!0},65494:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a=n.p+"assets/images/16-95dc969648d23cdfdd68bf04135818bb.jpg"},46601:()=>{}}]);