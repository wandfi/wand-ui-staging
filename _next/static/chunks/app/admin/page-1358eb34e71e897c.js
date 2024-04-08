(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{65967:function(e,t,a){Promise.resolve().then(a.bind(a,5970))},5970:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return AdminPage}});var s=a(57437),r=a(76036),n=a(73479),l=a(72009),o=a(14389),i=a(54415),u=a(57042),d=a(2265),c=a(37238),p=a(88920),x=a(28881),f=a(99888),m=a(21693),b=a(16775),h=a(43977),v=a(79352);let g=[{label:"资产利息率",value:"Y"},{label:"目标AAR",value:"AART"},{label:"安全AAR",value:"AARS"},{label:"上顶AAR",value:"AARU"},{label:"熔断AAR",value:"AARC"},{label:"赎回手续费",value:"C"},{label:"进入国库比例",value:"TreasuryFeeRate"},{label:"Discount冷静时间",value:"CircuitBreakPeriod",units:0},{label:"低买池最小成交量USB",value:"PtyPoolMinUsbAmount"},{label:"高卖池最小成交量",value:"PtyPoolMinAssetAmount"}];function Expandable(e){let{children:t,tit:a,disable:r}=e,[n,l]=(0,d.useState)(!1);return(0,s.jsxs)("div",{className:"flex flex-col w-full bg-white rounded-2xl overflow-hidden border border-solid border-blue-400",children:[(0,s.jsxs)("div",{className:"px-5 py-2 flex justify-between items-center text-sm",children:[(0,s.jsx)("div",{className:"font-medium text-base",children:a}),r?t:(0,s.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:()=>l(!n),children:[(0,s.jsx)("span",{className:"mr-[5px]",children:n?"Close":"Expand"}),n?(0,s.jsx)(p.iRh,{}):(0,s.jsx)(p.tv1,{})]})]}),(0,s.jsx)(c.Collapse,{isOpened:n,theme:{content:"bg-gray-200 p-4 flex flex-col gap-2"},children:t})]})}function UpdateVaultVaule(e){let{vc:t}=e,a=(0,o.p)(),c=(0,d.useMemo)(()=>g.map(e=>({...e,label:"".concat(e.label,"(").concat(e.value,")")})),[]),[{value:p,param:v},w]=(0,f.Z)({value:"",param:c[0]}),{data:j}=(0,i.uX)({contracts:g.map(e=>({abi:n.$4,address:l.e_[a],functionName:"vaultParamValue",args:[t.vault,(0,m.$G)(e.value,{size:32})]})),watch:!0}),A=(0,d.useMemo)(()=>(j||[]).map((e,t)=>{let a=g[t];return"".concat(a.label,"(").concat(a.value,"): ").concat((0,b.b)(e.result||0n,"number"==typeof a.units?a.units:10))}),[j]),y="number"==typeof v.units?v.units:10;return(0,s.jsxs)(Expandable,{tit:"Vault Param Vaule",children:[(0,s.jsx)(x.ZP,{maxMenuHeight:340,value:v,options:c,onChange:e=>w({param:e})}),(0,s.jsx)("input",{value:p.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");w({value:t})},type:"number",className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.$4,address:l.e_[a],functionName:"updateVaultParamValue",args:[t.vault,(0,m.$G)(v.value,{size:32}),(0,h.v)(p,y)]},onTxSuccess:()=>{w({value:""})},className:"btn-primary flex items-center justify-center gap-4"}),(0,s.jsx)("div",{className:"text-sm flex flex-col items-start",children:A.map((e,t)=>(0,s.jsx)("div",{children:e},"info_".concat(t)))})]})}function UpdateVaultPrice(e){let{vc:t}=e,[{feed:a},l]=(0,f.Z)({feed:""});return(0,s.jsxs)(Expandable,{tit:"Vault Price Feed",children:[(0,s.jsx)("input",{type:"text",placeholder:"_assetTokenPriceFeed_",value:a,onChange:e=>l({feed:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.WW,address:t.vault,functionName:"updatePriceFeed",args:[a]},onTxSuccess:()=>{l({feed:""})},className:"btn-primary flex items-center justify-center gap-4"})]})}function ActionVault(e){let{vc:t,functionName:a}=e;return(0,s.jsx)(Expandable,{tit:"Vault "+a,disable:!0,children:(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.WW,address:t.vault,functionName:a},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})})}function WandTxOwner(){let e=(0,o.p)(),[{owner:t},a]=(0,f.Z)({owner:""});return(0,s.jsxs)(Expandable,{tit:"WandOwner transferOwnership",children:[(0,s.jsx)("input",{type:"text",placeholder:"newOwner",value:t,onChange:e=>a({owner:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.EF,address:l.Vq[e],functionName:"transferOwnership",args:[t]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function WandSetBlastAddress(){let e=(0,o.p)(),[{address:t},a]=(0,f.Z)({address:""});return(0,s.jsxs)(Expandable,{tit:"Wand setBlastAddress",children:[(0,s.jsx)("input",{type:"text",placeholder:"_blastAddress_",value:t,onChange:e=>a({address:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.EF,address:l.Vq[e],functionName:"setBlastAddress",args:[t]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function WandSetBlastPointsAddress(){let e=(0,o.p)(),[{address:t,address2:a},i]=(0,f.Z)({address:"",address2:""});return(0,s.jsxs)(Expandable,{tit:"Wand setBlastPointsAddress",children:[(0,s.jsx)("input",{type:"text",placeholder:"_blastPointsAddress_",value:t,onChange:e=>i({address:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)("input",{type:"text",placeholder:"_blastPointsOperator_",value:a,onChange:e=>i({address2:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(r.v,{tx:"Write",config:{abi:n.EF,address:l.Vq[e],functionName:"setBlastPointsAddress",args:[t,a]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}let w=["pauseMint","unpauseMint","pauseRedeem","unpauseRedeem","pauseUsbToMarginTokens","unpauseUsbToMarginTokens"];function ClaimYieldsForBuyPool(e){let{vc:t}=e,{data:a}=(0,i.D2)({abi:n.aT,address:t.ptyPoolBelowAddress,functionName:"claimableYields"}),l=t.ptyPoolBelowAddress&&a||0n,[{address:o},d]=(0,f.Z)({address:""});return(0,s.jsxs)(Expandable,{tit:"ClaimYields for Buy Low Pool",children:[(0,s.jsxs)("span",{children:["Yields: ",(0,v.d)(l)]}),(0,s.jsx)("input",{type:"text",placeholder:"recipient",value:o,onChange:e=>d({address:e.target.value}),className:(0,u.Z)("bg-white border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,s.jsx)(r.v,{tx:"Write",disabled:!t.ptyPoolBelowAddress||l<=0n,config:{abi:n.aT,address:t.ptyPoolBelowAddress,functionName:"claimYields",args:[o]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function AdminPage(){let e=(0,o.p)(),t=l.iK[e],[{vc:a},r]=(0,f.Z)({vc:t[0]}),n=(0,d.useMemo)(()=>t.map(e=>({label:e.assetTokenSymbol+e.version,value:e.vault,data:e})),[]);return(0,s.jsx)("div",{className:"w-full flex",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full max-w-[840px] mx-auto px-5",children:[(0,s.jsx)(x.ZP,{defaultValue:n[0],options:n,onChange:e=>(null==e?void 0:e.data)&&r({vc:e.data})}),(0,s.jsx)(UpdateVaultVaule,{vc:a}),(0,s.jsx)(UpdateVaultPrice,{vc:a}),w.map(e=>(0,s.jsx)(ActionVault,{vc:a,functionName:e},e)),(0,s.jsx)(WandTxOwner,{}),(0,s.jsx)(WandSetBlastAddress,{}),(0,s.jsx)(WandSetBlastPointsAddress,{}),(0,s.jsx)(ClaimYieldsForBuyPool,{vc:a})]})})}},76036:function(e,t,a){"use strict";a.d(t,{v:function(){return ApproveAndTx}});var s=a(57437),r=a(72009),n=a(81628),l=a(2265),o=a(71424),i=a(56926),u=a(7935),d=a(54415);let c={},useApproves=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:s}=(0,i.mA)(),p=(0,d.uT)(),{data:x}=(0,i.py)(),[f,m]=(0,l.useState)(!1),b=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==r.K8),[e]),[h,v]=(0,l.useState)(t&&c[t]||{}),updateAllownce=(e,a)=>{t&&(c[t]={...c[t]||{},[e]:a},v(t=>({...t,[e]:a})))},{data:g}=(0,i.Ov)(),w=(0,i.t_)();(0,l.useEffect)(()=>{s&&t&&b.forEach(e=>{p({abi:u.em,address:e,functionName:"allowance",args:[s,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[b,s,g]);let[j,A]=(0,l.useState)(!1),y=(0,l.useMemo)(()=>b.filter(t=>(0,n.ok)(e,t)>0n&&(0,n.ok)(e,t)>(0,n.ok)(h,t)),[e,b,h]),approve=async()=>{if(0!=y.length&&t)try{A(!0),m(!1);for(let s=0;s<y.length;s++){let r=y[s],n=!1===a?e[r]:a,l=await (null==x?void 0:x.writeContract({abi:u.em,address:r,functionName:"approve",args:[t,n]}));l&&await (null==w?void 0:w.waitForTransactionReceipt({hash:l})),updateAllownce(r,n)}o.A.success("Approve success"),A(!1),m(!0)}catch(e){throw o.A.error((0,n.az)(e)),A(!1),m(!1),e}};return{approve,loading:j,shouldApprove:y.length>0,isSuccess:f}};var p=a(43003),x=a(35769),f=a(72084);function ApproveAndTx(e){let{className:t,tx:a,approves:r,spender:n,requestAmount:o,config:i,toast:u=!0,disabled:d,onTxSuccess:c,onApproveSuccess:m}=e,{write:b,isDisabled:h,isLoading:v}=(0,p.R)({onSuccess:()=>c&&c(),...i},u),g=d||h||v||!1===i.enabled,{approve:w,shouldApprove:j,loading:A,isSuccess:y}=useApproves(r||{},n,o),N=(0,l.useRef)();return(N.current=m,(0,l.useEffect)(()=>{N.current&&y&&N.current()},[y]),j)?(0,s.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:w,disabled:d||!w||A,children:[A&&(0,s.jsx)(f.$,{}),"Approve"]}):(0,s.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>b(),disabled:g,children:[v&&(0,s.jsx)(f.$,{}),a]})}},72084:function(e,t,a){"use strict";a.d(t,{$:function(){return Spinner}});var s=a(57437),r=a(57042);let Spinner=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{fill:"none",className:(0,r.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},43003:function(e,t,a){"use strict";a.d(t,{R:function(){return useWrapContractWrite}});var s=a(81628),r=a(2265),n=a(71424),l=a(56926),o=a(54415);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[a,i]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!1),c=(0,l.t_)(),{data:p}=(0,l.py)(),x=!c||!p||!p.account||a||!e||"object"==typeof e&&!1==e.enabled,f=(0,o.hp)(),write=async()=>{if(!x){i(!0),d(!1);try{let a="function"==typeof e?await e():e,{request:s}=await c.simulateContract({account:p.account,...a}),r=await p.writeContract(s),l=await c.waitForTransactionReceipt({hash:r});if("success"!==l.status)throw"Transaction reverted";d(!0),a.onSuccess&&a.onSuccess({}),t&&n.A.success("Transaction success"),f.update()}catch(e){t&&n.A.error((0,s.az)(e))}i(!1)}};return{write,isDisabled:x,isLoading:a,isSuccess:u}}}},function(e){e.O(0,[1866,1439,8881,8920,7418,8666,2971,2472,1744],function(){return e(e.s=65967)}),_N_E=e.O()}]);