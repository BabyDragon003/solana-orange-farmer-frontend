(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{355:function(e,t,n){},360:function(e,t){},361:function(e,t){},370:function(e,t){},385:function(e,t){},386:function(e,t){},404:function(e,t){},406:function(e,t){},414:function(e,t){},416:function(e,t){},426:function(e,t){},428:function(e,t){},459:function(e,t){},461:function(e,t){},468:function(e,t){},469:function(e,t){},48:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(10),a=n(4),c=n(1),i=n.n(c),s=n(14),u=n(71),o=function(){var t=Object(a.a)(i.a.mark((function t(){var n,a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d([e.from(u.a)],u.c);case 2:return n=t.sent,a=Object(r.a)(n,1),c=a[0],t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(i.a.mark((function t(){var n,a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d([e.from(u.f)],u.c);case 2:return n=t.sent,a=Object(r.a)(n,1),c=a[0],t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(i.a.mark((function t(n){var a,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d([e.from(u.e),n.toBuffer()],u.c);case 2:return a=t.sent,c=Object(r.a)(a,1),s=c[0],t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(i.a.mark((function e(t,n){var a,c,u,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.PublicKey.findProgramAddress(t,n);case 2:return a=e.sent,c=Object(r.a)(a,2),u=c[0],o=c[1],e.abrupt("return",[u,o]);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}).call(this,n(9).Buffer)},485:function(e,t){},487:function(e,t){},496:function(e,t){},498:function(e,t){},508:function(e,t){},509:function(e,t){},540:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(33),c=n.n(a),i=n(610),s=(n(355),n(611)),u=n(224),o=n(20),l=n(590),b=n(614),d=n.p+"static/media/FullLogo.70191f06.png",p=n(6),f=Object(l.a)("div")((function(e){var t=e.theme;return Object(o.a)({textAlign:"center",paddingBottom:24},t.breakpoints.down("md"),{h5:{fontSize:20,margin:0}})}));function m(){return Object(p.jsxs)(f,{children:[Object(p.jsx)("img",{src:d,alt:"",width:"70%"}),Object(p.jsx)("hr",{}),Object(p.jsx)(b.a,{variant:"h7",marginTop:-3,children:Object(p.jsx)("b",{children:"The SOL reward pool with the richest daily return and lowest dev fee"})})]})}var g=n(4),j=n(10),h=n(1),x=n.n(h),O=n(616),v=n(606),y=n(607),S=n(604),w=n(615),k=n(618),E=n(28),B=n(326),K=n(77),T=n(14),M=n(179),R=n(71),P={version:"0.1.0",name:"baked_beans",instructions:[{name:"initialize",accounts:[{name:"authority",isMut:!0,isSigner:!0},{name:"globalState",isMut:!0,isSigner:!1},{name:"treasury",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"newAuthority",type:"publicKey"}]},{name:"buyEggs",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"globalState",isMut:!0,isSigner:!1},{name:"treasury",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"userState",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"amount",type:"u64"}]},{name:"sellEggs",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"globalState",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"treasury",isMut:!0,isSigner:!1},{name:"userState",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"hatchEggs",accounts:[{name:"user",isMut:!0,isSigner:!0},{name:"globalState",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"userState",isMut:!0,isSigner:!1},{name:"referral",isMut:!1,isSigner:!1},{name:"referralState",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"globalState",type:{kind:"struct",fields:[{name:"isInitialized",type:"u8"},{name:"authority",type:"publicKey"},{name:"vault",type:"publicKey"},{name:"treasury",type:"publicKey"},{name:"marketEggs",type:"u64"},{name:"devFee",type:"u64"},{name:"psn",type:"u64"},{name:"psnh",type:"u64"},{name:"eggsPerMiner",type:"u64"}]}},{name:"userState",type:{kind:"struct",fields:[{name:"isInitialized",type:"u8"},{name:"user",type:"publicKey"},{name:"lastHatchTime",type:"u64"},{name:"claimedEggs",type:"u64"},{name:"miners",type:"u64"},{name:"referral",type:"publicKey"},{name:"referralSet",type:"u8"}]}}],errors:[{code:6e3,name:"NotAllowedAuthority",msg:"Not allowed authority"},{code:6001,name:"InsufficientAmount",msg:"Should be over minimum amount"},{code:6002,name:"IncorrectUserState",msg:"Incorrect User State"},{code:6003,name:"IncorrectReferral",msg:"Incorrect Referral Pubkey"}]},C=n(81),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=C.b.TYPE.SUCCESS;1===n&&(r=C.b.TYPE.ERROR),2===n&&(r=C.b.TYPE.INFO);var a=t;return t<0&&(a=!1),C.b.error(e,{position:"bottom-left",autoClose:a,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!0,progress:void 0,type:r,theme:"colored"})},A=n(48),L=n(228),W=new T.Connection(Object(T.clusterApiUrl)(R.b)),D=function(e){var t=new K.c(W,e,K.c.defaultOptions());return new K.b(P,R.c,t)},I=function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D(t),e.next=3,A.a();case 3:return r=e.sent,e.next=6,n.account.globalState.fetchNullable(r);case 6:if(null!==(a=e.sent)){e.next=9;break}return e.abrupt("return",null);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}return e.abrupt("return","0");case 2:return e.next=4,W.getBalance(t.publicKey);case 4:return n=e.sent,console.log("getWalletSolBalance x=",n),e.t0=M.BigNumber,e.next=9,W.getBalance(t.publicKey);case 9:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1).div(T.LAMPORTS_PER_SOL).toString());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(g.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}return e.abrupt("return","0");case 2:return D(t),e.next=5,A.c();case 5:return n=e.sent,e.t0=M.BigNumber,e.next=9,W.getBalance(n);case 9:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1).div(T.LAMPORTS_PER_SOL).toString());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r,a,c,i,s,u,o,l,b;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}return e.abrupt("return",null);case 2:return console.log("getUserData"),n=D(t),e.next=6,A.c();case 6:return r=e.sent,e.next=9,W.getBalance(r);case 9:return a=e.sent,e.next=12,A.b(t.publicKey);case 12:return c=e.sent,e.next=15,n.account.userState.fetchNullable(c);case 15:if(null!==(i=e.sent)){e.next=18;break}return e.abrupt("return",null);case 18:return e.next=20,A.a();case 20:return s=e.sent,e.next=23,n.account.globalState.fetchNullable(s);case 23:if(null!==(u=e.sent)){e.next=26;break}return e.abrupt("return",null);case 26:return o=Math.min(u.eggsPerMiner.toNumber(),Date.now()/1e3-i.lastHatchTime.toNumber()),console.log("stateData.claimedEggs.toNumber() =",i.claimedEggs.toNumber()),console.log("secondsPassed =",o),console.log("userStateKey =",c.toBase58()),console.log("stateData =",i),console.log("stateData.user =",i.user.toBase58()),console.log("stateData.miners =",i.miners.toNumber()),l=i.claimedEggs.add(new K.a(o).mul(i.miners)),console.log("myEggs =",l.toNumber()),console.log("globalData.marketEggs =",u.marketEggs.toNumber()),console.log("new BN(vaultBal) =",new K.a(a).toNumber()),b=U(l,u.marketEggs,new K.a(a),u.psn,u.psnh),e.abrupt("return",{miners:i.miners.toString(),beanRewards:new M.BigNumber(b.toString()).div(T.LAMPORTS_PER_SOL).toString()});case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(e,t,n,r,a){if(0===e.toNumber())return new K.a(0);console.log("calcTrade"),console.log(e.toNumber()),console.log(t.toNumber()),console.log(n.toNumber()),console.log(r.toNumber()),console.log(a.toNumber());var c=r.mul(n),i=a.add(r.mul(t).add(a.mul(e)).div(e));return console.log("calcTrade"),console.log(c.toNumber()),console.log(i.toNumber()),c.div(i)}var Y=function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey){e.next=2;break}throw new L.g;case 2:return n=D(t),e.t0=new T.Transaction,e.t1=n.methods.initialize(t.publicKey),e.t2=t.publicKey,e.next=8,A.a();case 8:return e.t3=e.sent,e.t4=t.publicKey,e.next=12,A.c();case 12:return e.t5=e.sent,e.t6=T.SystemProgram.programId,e.t7=T.SYSVAR_RENT_PUBKEY,e.t8={authority:e.t2,globalState:e.t3,treasury:e.t4,vault:e.t5,systemProgram:e.t6,rent:e.t7},e.next=18,e.t1.accounts.call(e.t1,e.t8).instruction();case 18:return e.t9=e.sent,r=e.t0.add.call(e.t0,e.t9),e.next=22,X(W,t,r);case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(g.a)(x.a.mark((function e(t,n,r){var a,c,i,s,u,o,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}throw new L.g;case 2:return a=D(t),e.next=5,A.a();case 5:return c=e.sent,e.next=8,a.account.globalState.fetch(c);case 8:return i=e.sent,e.next=11,A.c();case 11:return s=e.sent,e.t0=a.methods.buyEggs(new K.a(r*T.LAMPORTS_PER_SOL)),e.t1=t.publicKey,e.t2=c,e.t3=i.treasury,e.t4=s,e.next=19,A.b(t.publicKey);case 19:return e.t5=e.sent,e.t6=T.SystemProgram.programId,e.t7=T.SYSVAR_RENT_PUBKEY,e.t8={user:e.t1,globalState:e.t2,treasury:e.t3,vault:e.t4,userState:e.t5,systemProgram:e.t6,rent:e.t7},e.next=25,e.t0.accounts.call(e.t0,e.t8).instruction();case 25:return u=e.sent,e.next=28,H(a,t.publicKey,n);case 28:return o=e.sent,(l=new T.Transaction).add(u),l.add(o),e.next=34,X(W,t,l);case 34:return e.abrupt("return",e.sent);case 35:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(g.a)(x.a.mark((function e(t,n,r){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r,r.equals(n)&&(a=R.d),e.t0=t.methods.hatchEggs(),e.t1=n,e.next=6,A.a();case 6:return e.t2=e.sent,e.next=9,A.c();case 9:return e.t3=e.sent,e.next=12,A.b(n);case 12:return e.t4=e.sent,e.t5=a,e.next=16,A.b(a);case 16:return e.t6=e.sent,e.t7={user:e.t1,globalState:e.t2,vault:e.t3,userState:e.t4,referral:e.t5,referralState:e.t6},e.next=20,e.t0.accounts.call(e.t0,e.t7).instruction();case 20:return c=e.sent,e.abrupt("return",c);case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(g.a)(x.a.mark((function e(t,n){var r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}throw new L.g;case 2:return r=D(t),e.t0=new T.Transaction,e.next=6,H(r,t.publicKey,n);case 6:return e.t1=e.sent,a=e.t0.add.call(e.t0,e.t1),e.next=10,X(W,t,a);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(g.a)(x.a.mark((function e(t){var n,r,a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.publicKey&&void 0!==t.publicKey){e.next=2;break}throw new L.g;case 2:return n=D(t),e.next=5,A.a();case 5:return r=e.sent,e.next=8,n.account.globalState.fetch(r);case 8:return a=e.sent,e.next=11,A.c();case 11:return c=e.sent,e.t0=new T.Transaction,e.t1=n.methods.sellEggs(),e.t2=t.publicKey,e.t3=r,e.t4=a.treasury,e.t5=c,e.next=20,A.b(t.publicKey);case 20:return e.t6=e.sent,e.t7=T.SystemProgram.programId,e.t8={user:e.t2,globalState:e.t3,treasury:e.t4,vault:e.t5,userState:e.t6,systemProgram:e.t7},e.next=25,e.t1.accounts.call(e.t1,e.t8).instruction();case 25:return e.t9=e.sent,i=e.t0.add.call(e.t0,e.t9),e.next=29,X(W,t,i);case 29:return e.abrupt("return",e.sent);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function X(e,t,n){return q.apply(this,arguments)}function q(){return(q=Object(g.a)(x.a.mark((function e(t,n,r){var a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t,n,r);case 2:if(null==(a=e.sent)){e.next=13;break}return c=N("Confirming Transaction ...",-1,2),e.next=7,t.confirmTransaction(a);case 7:i=e.sent,console.log(a),C.b.dismiss(c),i.value.err?N("Transaction Failed",2e3,1):N("Transaction Confirmed",2e3),e.next=14;break;case 13:N("Transaction Failed",2e3,1);case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t,n){return Z.apply(this,arguments)}function Z(){return(Z=Object(g.a)(x.a.mark((function e(t,n,r){var a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n.publicKey&&void 0!==n.signTransaction){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,t.getLatestBlockhash();case 5:return r.recentBlockhash=e.sent.blockhash,r.feePayer=n.publicKey,e.next=9,n.signTransaction(r);case 9:return a=e.sent,c=a.serialize(),N("Sending Transaction ...",500),e.next=14,t.sendRawTransaction(c,{skipPreflight:!0,preflightCommitment:"processed"});case 14:return i=e.sent,e.abrupt("return",i);case 18:return e.prev=18,e.t0=e.catch(2),console.log("tx e = ",e.t0),e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}var $=Object(r.createContext)({minersCount:0,beanRewards:0,walletSolBalance:0,contractSolBalance:0,toggleDataUpdate:function(){}}),ee=function(e){var t=e.children,n=Object(r.useState)(0),a=Object(j.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(0),u=Object(j.a)(s,2),o=u[0],l=u[1],b=Object(r.useState)("0"),d=Object(j.a)(b,2),f=d[0],m=d[1],g=Object(r.useState)("0"),h=Object(j.a)(g,2),x=h[0],O=h[1],v=Object(r.useState)(!1),y=Object(j.a)(v,2),S=y[0],w=y[1],k=Object(B.b)();return Object(r.useEffect)((function(){_(k).then((function(e){console.log("getWalletSolBalance bal=",e),m(e)})),F(k).then((function(e){null!==e&&(console.log("userData =",e),l(e.beanRewards),i(e.miners))}))}),[k]),Object(r.useEffect)((function(){z(k).then((function(e){O(e)}))}),[k,S]),Object(p.jsx)($.Provider,{value:{minersCount:c,beanRewards:o,walletSolBalance:f,contractSolBalance:x,toggleDataUpdate:function(){return w(!S)}},children:t})},te=Object(l.a)("input")({fontSize:24,fontWeight:500,padding:"12px 90px 12px 16px",textAlign:"right",borderRadius:0,border:"1px solid #555",background:"white",width:"100%",outline:"none","&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{WebkitAppearance:"none",margin:0,MozAppearance:"textfield"}});function ne(e){var t=e.value,n=e.max,r=e.onChange,a=void 0===r?function(){}:r;return Object(p.jsxs)(s.a,{position:"relative",children:[Object(p.jsx)(te,{type:"number",min:0,max:n,value:t,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)(b.a,{fontSize:24,position:"absolute",top:9,right:18,fontWeight:500,color:"black",children:"SOL"})]})}var re=Object(l.a)(v.a)({background:"transparent",marginBottom:24,border:"5px solid #555"}),ae=Object(l.a)(y.a)((function(e){var t=e.theme;return Object(o.a)({},t.breakpoints.down("sm"),{flexDirection:"column","> div":{marginLeft:0,marginRight:0}})})),ce=Object(l.a)(y.a)((function(){return{borderBottom:"1px solid black"}}));function ie(){var e=Object(B.b)().publicKey,t=Object(r.useState)(0),n=Object(j.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),u=Object(j.a)(i,2),o=u[0],l=u[1],d=new URLSearchParams(Object(E.c)().search),f=Object(B.b)(),m=Object(r.useState)("0"),h=Object(j.a)(m,2),v=h[0],K=h[1],T=Object(r.useState)("0"),M=Object(j.a)(T,2),R=M[0],P=M[1],C=Object(r.useState)("0"),N=Object(j.a)(C,2),A=N[0],L=N[1],W=Object(r.useState)("0"),D=Object(j.a)(W,2),U=D[0],H=D[1],X=Object(r.useState)(!1),q=Object(j.a)(X,2),Q=q[0],Z=q[1],$=Object(r.useState)(null),ee=Object(j.a)($,2),te=(ee[0],ee[1]);Object(r.useEffect)((function(){_(f).then((function(e){console.log("getWalletSolBalance bal=",e),L(e)})),F(f).then((function(e){null!==e?(console.log("userData =",e),P(e.beanRewards),K(e.miners)):(P("0"),K("0"))})),I(f).then((function(e){null!=e&&te(e.authority)}))}),[f,Q]),Object(r.useEffect)((function(){z(f).then((function(e){H(e)}))}),[f,Q]),Object(r.useEffect)((function(){setTimeout((function(){f.publicKey&&ie()}),5e3)}));var ie=function(){Z(!Q)},se=function(){return d.get("ref")},ue=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,Y(f);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:l(!1),ie();case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),t=se(),console.log("bake: ref=",t),null===t&&(t=f.publicKey),e.prev=4,e.next=7,V(f,t,a);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.error(e.t0);case 12:l(!1),ie();case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),null===(t=se())&&(t=f.publicKey),e.prev=3,e.next=6,G(f,t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0);case 11:l(!1),ie();case 13:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,J(f);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:l(!1),ie();case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(re,{children:[o&&Object(p.jsx)(w.a,{color:"secondary"}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)(ce,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(p.jsx)(b.a,{variant:"body1",children:"Contract"}),Object(p.jsxs)(b.a,{variant:"h5",children:[U," SOL"]})]}),Object(p.jsxs)(ce,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(p.jsx)(b.a,{variant:"body1",children:"Wallet"}),Object(p.jsxs)(b.a,{variant:"h5",children:[A," SOL"]})]}),Object(p.jsxs)(ce,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(p.jsx)(b.a,{variant:"body1",children:"Your Beans"}),Object(p.jsxs)(b.a,{variant:"h5",children:[v," BEANS"]})]}),Object(p.jsxs)(s.a,{paddingTop:4,paddingBottom:3,children:[Object(p.jsx)(s.a,{children:Object(p.jsx)(ne,{max:+A,value:a,onChange:function(e){return function(e){c(e)}(e)}})}),Object(p.jsx)(s.a,{marginTop:3,marginBottom:3,children:Object(p.jsx)(S.a,{variant:"contained",fullWidth:!0,onClick:ue,hidden:!0,className:"custom-button",children:"Init"})}),Object(p.jsx)(s.a,{marginTop:3,marginBottom:3,children:Object(p.jsx)(S.a,{variant:"contained",fullWidth:!0,disabled:!e||0===+a||o,onClick:oe,className:"custom-button",children:"ROAST BEANS"})}),Object(p.jsx)(k.a,{}),Object(p.jsxs)(y.a,{container:!0,justifyContent:"space-between",alignItems:"center",mt:3,children:[Object(p.jsx)(b.a,{variant:"body1",fontWeight:"bolder",children:"Your Rewards"}),Object(p.jsxs)(b.a,{variant:"h5",fontWeight:"bolder",children:[R," SOL"]})]}),Object(p.jsxs)(ae,{container:!0,children:[Object(p.jsx)(y.a,{item:!0,flexGrow:1,marginRight:1,marginTop:3,children:Object(p.jsx)(S.a,{variant:"contained",color:"secondary",fullWidth:!0,disabled:!e||o,onClick:le,className:"custom-button",children:"DARK ROAST"})}),Object(p.jsx)(y.a,{item:!0,flexGrow:1,marginLeft:1,marginTop:3,children:Object(p.jsx)(S.a,{variant:"contained",color:"secondary",fullWidth:!0,disabled:!e||o,onClick:be,className:"custom-button",children:"BREW COFFEE"})})]})]})]})]})}var se=Object(l.a)(v.a)({background:"rgb(255 252 248)",marginBottom:24,border:"5px solid #555"}),ue=[{label:"Daily Return",value:8},{label:"APR",value:"2,920"},{label:"Dev Fee",value:3}];function oe(){return Object(p.jsx)(se,{children:Object(p.jsxs)(O.a,{className:"fact",children:[Object(p.jsx)(b.a,{variant:"h5",borderBottom:"6px solid",paddingBottom:1,children:"Caffeine Facts"}),Object(p.jsx)(s.a,{paddingTop:2,children:ue.map((function(e){return Object(p.jsxs)(y.a,{container:!0,justifyContent:"space-between",children:[Object(p.jsx)(b.a,{variant:"body1",gutterBottom:!0,children:e.label}),Object(p.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1},children:Object(p.jsx)("div",{style:{width:"100%",height:"1px",borderTop:"1px dotted black"}})}),Object(p.jsxs)(b.a,{gutterBottom:!0,children:[e.value,"%"]})]},e.label)}))})]})})}var le=Object(l.a)(v.a)({background:"transparent",border:"5px solid #555"}),be=Object(l.a)("input")((function(e){return{fontSize:10,fontWeight:300,padding:"10px 12px",borderRadius:0,border:"1px solid #555",background:"white",width:"100%",outline:"none",color:e.theme.palette.primary.main}}));function de(e){var t=e.address,n="".concat(window.origin,"?ref=").concat(t);return Object(p.jsx)(le,{children:Object(p.jsxs)(O.a,{style:{paddingLeft:8,paddingRight:8},children:[Object(p.jsx)(b.a,{gutterBottom:!0,variant:"h5",textAlign:"center",children:"Referral Link"}),Object(p.jsx)(be,{value:t?n:"",readOnly:!0}),Object(p.jsx)(b.a,{textAlign:"center",variant:"body2",marginTop:2,paddingX:3,children:"Earn 12% of the SOL used to roast beans from anyone who uses your referral link"})]})})}function pe(){return Object(p.jsx)(y.a,{container:!0,justifyContent:"center",spacing:2,marginTop:4})}var fe=n(172),me=(n(411),n.p,Object(l.a)("div")((function(e){var t=e.theme;return Object(o.a)({position:"relative",maxWidth:500,margin:"0 auto"},t.breakpoints.down("sm"),{maxWidth:"100%"})}))),ge=Object(l.a)("div")((function(){return{display:"flex",flexDirection:"row-reverse"}}));function je(){var e=Object(B.b)();return Object(p.jsx)("div",{children:Object(p.jsxs)(me,{children:[Object(p.jsx)(ge,{children:Object(p.jsx)(fe.b,{variant:"text",style:{border:"5px solid black",fontWeight:900,background:"transparent",borderRadius:"10px",color:"black"}})}),Object(p.jsx)(m,{}),Object(p.jsx)(ie,{}),Object(p.jsx)(oe,{}),Object(p.jsx)(de,{address:e.publicKey&&e.publicKey.toBase58()}),Object(p.jsx)(pe,{}),Object(p.jsx)(C.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}var he=n(333),xe=n(612),Oe=n(613),ve=n(619),ye=n(620),Se=n(621),we=n(622),ke=n(623),Ee=n(624),Be=n(608),Ke=n(625),Te=n(626),Me=n(173),Re=function(e){var t=e.children,n=Object(r.useMemo)((function(){return Object(T.clusterApiUrl)("devnet")}),[]),a=Object(he.a)("autoConnect",!1),c=Object(j.a)(a,2),i=c[0],s=(c[1],Object(r.useMemo)((function(){return[Object(ve.a)(),Object(ye.a)(),Object(Se.a)({options:{clientId:"BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ"}}),Object(we.a)(),Object(ke.a)(),Object(Ee.a)(),Object(Be.a)(),Object(Ke.a)(),Object(Te.a)()]}),[])),u=Object(Me.b)().enqueueSnackbar,o=Object(r.useCallback)((function(e){u(e.message?"".concat(e.name,": ").concat(e.message):e.name,{variant:"error"}),console.error(e)}),[u]);return Object(p.jsx)(xe.a,{endpoint:n,children:Object(p.jsx)(Oe.a,{wallets:s,onError:o,autoConnect:i,children:Object(p.jsx)(fe.a,{children:t})})})};var Pe=function(){return Object(p.jsx)(u.a,{children:Object(p.jsx)(s.a,{paddingY:6,paddingX:2,children:Object(p.jsx)(Me.a,{children:Object(p.jsx)(Re,{children:Object(p.jsx)(je,{})})})})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,630)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Ne=n(341),Ae=n(609),Le=Object(Ne.a)({palette:{primary:{main:"#17215E"},secondary:{main:"#f4b52d"},text:{primary:"#17215E"}},typography:{fontFamily:"Montserrat",body1:{fontSize:20},body2:{fontSize:16},allVariants:{color:"#17215E"},h4:{fontWeight:600,fontSize:32},h5:{fontSize:24,fontWeight:500}},components:{MuiCard:{styleOverrides:{root:{boxShadow:"6px 6px 20px 6px #00000096",borderRadius:20}}},MuiCardContent:{styleOverrides:{root:{padding:"12px 24px"}}},MuiButton:{styleOverrides:{root:{borderRadius:8,fontWeight:400,fontSize:"1.2rem",padding:"10px",minWidth:138},contained:{boxShadow:"6px 6px 20px 6px #00000096"},containedSecondary:{color:"#17215E"}}}}});function We(e){var t=e.children;return Object(p.jsx)(Ae.a,{theme:Le,children:t})}c.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.a,{}),Object(p.jsx)(We,{children:Object(p.jsx)(ee,{children:Object(p.jsx)(Pe,{})})})]}),document.getElementById("root")),Ce()},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return o}));var r=n(14),a="GLOBAL_STATE_SEED",c="VAULT_SEED",i="USER_STATE_SEED",s="devnet",u=new r.PublicKey("557BPiUp8WSumh7PcLpXE12VZppRhiezdHRdfhKAVANn"),o=new r.PublicKey("AWUBKdjcomTH17MusezMp2wcsy5xtSvJAnaZbj3mdW9D")}},[[540,1,2]]]);
//# sourceMappingURL=main.4e02b20c.chunk.js.map