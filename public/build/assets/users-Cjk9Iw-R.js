import{v as T,j as i,ap as Y,aq as fe,r as y,$ as Yt,a0 as X,x as l,P as B,z as f,y as Je,a1 as Xt,ar as qn,as as Qt,at as Jn,R as Yn,A as Xn,S as Qn,C as Zn,D as er,E as tr}from"./Store-BpDAtkMQ.js";import{j as ae,n as nr,s as de,T as pt,D as oe,P as Zt,A as en,v as rr,r as or,C as tn,R as ir,w as sr,x as ar,X as cr,Y as bt}from"./SuccessShopSetup-DPhMYx3O.js";import{K as lr}from"./KeyboardDoubleArrowDown-DBwzBRvf.js";const dr=T(i.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),ur=T(i.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"})),fr=T(i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"})),hr=T(i.jsx("path",{d:"M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z"}));let nn=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.shop},xr=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.bookPlace},gr=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.ticketStatus},pr=e=>{var t,n;return(n=(t=e.users)==null?void 0:t.dashboard)==null?void 0:n.queue};function mt(e,t,n){console.log("SEND UUID:",t),console.log("SHOP UUID:",n),ae.get(`/api/web/customer/ticket-status/${t}`).then(r=>{console.log("TICKET RESPONSE:",r.data),r.data.active?e(Y({activeTicket:!0,ticketNumber:r.data.ticket_number,peopleBeforeMe:r.data.people_before_me,status:r.data.status,customer:r.data.customer})):(console.log("TICKET FINISHED:",r.data.status),localStorage.removeItem(`ticket_uuid_${n}`),e(Y({activeTicket:!1,status:r.data.status,ticketNumber:null,peopleBeforeMe:0,customer:null})))}).catch(r=>{console.log("TICKET ERROR:",r)}).finally(()=>{e(Y({checking:!1}))})}function br(e,t,n,r,o,s,a){e(fe({loading:0})),ae.post("/api/web/sendBookPlace",{uuid:t,full_name:n,phone:r,serviceId:o,fcm_token:a}).then(c=>{localStorage.setItem(`ticket_uuid_${t}`,c.data.ticket_uuid),localStorage.setItem(`ticket_id_${t}`,c.data.ticket_id),window.location.reload()}).catch(c=>{console.log(c.response),e(fe({loading:1,message:c.response.data.message,errors:c.response.data.errors}))})}const Et={"& .MuiOutlinedInput-root":{borderRadius:"14px",background:"#1b1c1d",color:"#fff","& fieldset":{borderColor:"rgba(255,255,255,.08)"},"&:hover fieldset":{borderColor:"rgba(99,91,255,.5)"},"&.Mui-focused fieldset":{borderColor:"#635bff",boxShadow:"0 0 15px rgba(99,91,255,.3)"}},"& input::placeholder":{color:"#b7b6b6",opacity:1}};function mr(e){var J,g;let{lastTicketNumber:t,waitingCount:n,tUEFF:r,uuid:o,ticketNumber:s,fcmToken:a}=e,c=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};const[u,d]=y.useState(null);let h=Yt(),x=X(nn),m=X(nr),w=m==null?void 0:m.services,k=X(xr),{full_name:M,phone:ce,service_id:re,loading:Se,errors:Ce}=k,le=M,Ie=ce,Ae=re,F=Se,E=Ce;console.log(t);const P=S=>{if(!S)return;const C=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S)}`;window.open(C,"_blank")};let $=S=>C=>{h(fe({[S]:C.target.value}))},q=()=>{if(console.log("🔥 FCM TOKEN:",a),!a){console.log("❌ FCM TOKEN NOT READY");return}br(h,o,M,ce,Ae,r,a)};return i.jsxs(l,{dir:"rtl",sx:{bgcolor:"black",mx:"auto",px:{xs:3,md:15},py:0,display:"flex",flexDirection:"column",gap:3},children:[i.jsxs(B,{elevation:0,sx:{px:2,pt:2,pb:{xs:4,sm:10},borderRadius:"20px 20px 0px 0px",position:"relative",overflow:"hidden",background:"linear-gradient(135deg,#4338CA 0%,#6366F1 50%,#06B6D4 100%)",background:"linear-gradient(135deg, #743DB1 0%, #47CBE4 50%, #3989EC 100%)",color:"#fff"},children:[i.jsx(l,{sx:{position:"absolute",top:-120,right:-120,width:280,height:280,borderRadius:"50%",bgcolor:"rgba(255,255,255,.08)"}}),i.jsx(l,{sx:{position:"absolute",bottom:-60,left:-60,width:220,height:220,borderRadius:"50%",bgcolor:"rgba(255,255,255,.06)"}}),i.jsx(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",my:{xs:1,sm:3}},children:i.jsx(f,{sx:{fontSize:{xs:35,md:40},opacity:.9},children:"مرحباً بك، احجز دورك بسهولة وتابع تقدمك لحظة بلحظة."})}),i.jsxs(l,{dir:"rtl",sx:{mt:2,position:"relative",zIndex:2,display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-evenly",gap:2},children:[i.jsxs(l,{children:[i.jsxs(l,{sx:{display:"flex",flexDirection:{xs:"row",sm:"row"},alignItems:"center",justifyContent:"center",gap:1,textAlign:{xs:"right",md:"right"}},children:[i.jsx(hr,{sx:{fontSize:{xs:90,sm:110}}}),i.jsxs(l,{children:[i.jsx(f,{sx:{fontSize:{xs:20,md:23},fontWeight:700},children:x==null?void 0:x.shop_name}),i.jsxs(l,{onClick:()=>P(x==null?void 0:x.address),sx:{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},gap:1,flexWrap:"nowrap",opacity:.9},children:[i.jsx(fr,{fontSize:"small"}),i.jsx(f,{sx:{fontSize:15,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:x==null?void 0:x.address})]})]})]}),i.jsxs(l,{sx:{mt:{xs:0,sm:3},display:{xs:"none",sm:"block"},flexWrap:"wrap",justifyContent:{xs:"center",md:"flex-start"}},children:[i.jsx(de,{label:"مفتوح الآن",sx:{ml:1.5,px:1,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}}),i.jsx(de,{label:`${n} منتظرين`,sx:{ml:1.5,px:1,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}})]})]}),i.jsxs(l,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[i.jsx(l,{sx:{width:{xs:200,md:180},height:{xs:200,md:180},borderRadius:"50%",background:"linear-gradient(135deg,#ffffff,#eef4ff)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"primary.main",border:"8px solid rgba(255,255,255,.25)",boxShadow:"0 25px 50px rgba(0,0,0,.15)",textAlign:"center",px:2},children:t===0||t===void 0||t===null?i.jsxs(i.Fragment,{children:[i.jsx(f,{sx:{fontSize:28,fontWeight:900,lineHeight:1.3},children:"كن أول من يحجز"}),i.jsx(f,{sx:{mt:1,fontSize:15,fontWeight:600,color:"text.secondary"},children:"لا توجد تذاكر اليوم"})]}):i.jsxs(i.Fragment,{children:[i.jsx(f,{sx:{fontSize:90,fontWeight:900,lineHeight:1},children:t}),i.jsx(f,{sx:{fontSize:18,fontWeight:700},children:"آخر تذكرة"})]})}),i.jsxs(l,{sx:{mt:{xs:5,sm:3},display:{xs:"block",sm:"none"},flexWrap:"wrap",gap:1,justifyContent:{xs:"center",md:"flex-start"}},children:[i.jsx(de,{label:"مفتوح الآن",sx:{ml:.5,px:.5,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}}),i.jsx(de,{label:`${n} منتظرين`,sx:{ml:.5,px:.5,bgcolor:"rgba(255,255,255,.15)",color:"#fff",backdropFilter:"blur(10px)"}})]})]})]}),i.jsx(l,{sx:{mt:{xs:3,sm:0},mb:{xs:5,sm:0},display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(l,{onClick:c,sx:{display:{xs:"block",sm:"none"},alignItems:"center",justifyContent:"center",borderRadius:"50%",backdropFilter:"blur(10px)",cursor:"pointer",animation:"bounce 1.5s infinite","@keyframes bounce":{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(8px)"}}},children:i.jsx(lr,{sx:{fontSize:80,color:"#fff"}})})}),i.jsx(l,{component:"svg",viewBox:"0 0 1440 120",preserveAspectRatio:"none",sx:{position:"absolute",bottom:0,left:0,width:"100%",height:{xs:80,sm:80},display:"block"},children:i.jsx("path",{d:"M0,64C120,120,240,0,360,64C480,128,600,0,720,64C840,128,960,0,1080,64C1200,128,1320,0,1440,64V120H0Z"})})]}),i.jsxs(l,{sx:{mt:0,display:"flex",flexDirection:"column",gap:2},children:[i.jsx(pt,{fullWidth:!0,value:le,onChange:$("full_name"),placeholder:"أدخل اسمك الكامل",sx:Et,error:!!(E!=null&&E.full_name),helperText:((J=E==null?void 0:E.full_name)==null?void 0:J[0])||""}),i.jsx(pt,{fullWidth:!0,value:Ie,onChange:$("phone"),placeholder:"05XXXXXXXX",sx:Et,error:!!(E!=null&&E.phone),helperText:((g=E==null?void 0:E.phone)==null?void 0:g[0])||""}),(w==null?void 0:w.length)>0&&i.jsx(f,{sx:{color:"#B7B6B6",fontWeight:800,mt:1},children:"اختر الخدمة"}),i.jsx(l,{sx:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2},children:w==null?void 0:w.map(S=>{const C=(k==null?void 0:k.service_id)===S.id;return i.jsxs(B,{onClick:()=>h(fe({service_id:S.id})),elevation:0,sx:{p:2,cursor:"pointer",borderRadius:4,textAlign:"center",bgcolor:C?"#7C3AED":"#1B1C1D",color:"#fff",border:C?"2px solid #A78BFA":"1px solid rgba(255,255,255,.15)",boxShadow:C?"0 0 25px rgba(124,58,237,.45)":"none",transform:C?"translateY(-4px)":"translateY(0)",transition:"all .25s ease",position:"relative","&:hover":{transform:"translateY(-4px)"}},children:[C&&i.jsx(l,{sx:{position:"absolute",top:8,left:8,width:22,height:22,borderRadius:"50%",bgcolor:"#fff",color:"#7C3AED",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900},children:"✓"}),i.jsx(f,{fontWeight:700,fontSize:13,children:S.name})]},S.id)})}),(E==null?void 0:E.service_id)&&i.jsx(f,{sx:{color:"#f44336",fontSize:12,mt:1},children:E.service_id[0]}),i.jsx(Je,{fullWidth:!0,onClick:q,variant:"contained",sx:{mt:2,mb:10,height:65,borderRadius:"24px",fontWeight:900,fontSize:18,background:"linear-gradient(135deg,#4F46E5,#06B6D4)",boxShadow:"0 15px 35px rgba(79,70,229,.35)"},children:F===0?i.jsx(Xt,{size:24,sx:{color:"#fff"}}):i.jsxs(i.Fragment,{children:["احجز دوري الآن",i.jsx(dr,{})]})})]})]})}const rn=T(i.jsx("path",{d:"m21.9 7.89-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17M13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48-.67 0-1.22-.59-1.22-1.31zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97zM11 8.69c0 .72-.55 1.31-1.29 1.31-.75 0-1.3-.7-1.22-1.48L9.04 5H11zM18.77 10c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01 1.05 3.37c.16.67-.25 1.64-1.19 1.64"})),Er=T([i.jsx("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87"},"0"),i.jsx("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),i.jsx("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4"},"2")]),wr=T(i.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"})),on=T(i.jsx("path",{d:"M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"})),sn=T(i.jsx("path",{d:"M9.64 7.64c.29-.62.42-1.33.34-2.09-.19-1.73-1.54-3.2-3.26-3.49-2.77-.48-5.14 1.89-4.66 4.65.3 1.72 1.76 3.07 3.49 3.26.76.08 1.46-.05 2.09-.34L10 12l-2.36 2.36c-.62-.29-1.33-.42-2.09-.34-1.73.19-3.2 1.54-3.49 3.26-.48 2.77 1.89 5.13 4.65 4.65 1.72-.3 3.07-1.76 3.26-3.49.08-.76-.05-1.46-.34-2.09L12 14l7.59 7.59c.89.89 2.41.26 2.41-1v-.01c0-.37-.15-.73-.41-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m7.59-10.09L13 9l2 2 6.59-6.59c.26-.26.41-.62.41-1V3.4c0-1.25-1.52-1.88-2.41-.99"})),Fr=T(i.jsx("path",{d:"m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"}));var Ye={},D=[[1569,65152,null,null,null],[1570,65153,null,null,65154],[1571,65155,null,null,65156],[1572,65157,null,null,65158],[1573,65159,null,null,65160],[1574,65161,65163,65164,65162],[1575,65165,null,null,65166],[1576,65167,65169,65170,65168],[1577,65171,null,null,65172],[1578,65173,65175,65176,65174],[1579,65177,65179,65180,65178],[1580,65181,65183,65184,65182],[1581,65185,65187,65188,65186],[1582,65189,65191,65192,65190],[1583,65193,null,null,65194],[1584,65195,null,null,65196],[1585,65197,null,null,65198],[1586,65199,null,null,65200],[1688,64394,null,null,64395],[1587,65201,65203,65204,65202],[1588,65205,65207,65208,65206],[1589,65209,65211,65212,65210],[1590,65213,65215,65216,65214],[1591,65217,65219,65220,65218],[1592,65221,65223,65224,65222],[1593,65225,65227,65228,65226],[1594,65229,65231,65232,65230],[1600,1600,1600,1600,1600],[1601,65233,65235,65236,65234],[1602,65237,65239,65240,65238],[1603,65241,65243,65244,65242],[1604,65245,65247,65248,65246],[1605,65249,65251,65252,65250],[1606,65253,65255,65256,65254],[1607,65257,65259,65260,65258],[1608,65261,null,null,65262],[1609,65263,null,null,65264],[1610,65265,65267,65268,65266],[1740,64508,64510,64511,64509],[1670,64378,64380,64381,64379],[1662,64342,64344,64345,64343],[1711,64402,64404,64405,64403],[1705,64398,64400,64401,64399]],I=[[[1604,1575],65275,null,null,65276]],wt=[1552,1554,1555,1556,1557,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773];function yr(e){for(var t=0;t<D.length;++t)if(D[t][0]==e)return!0;return!1}function Te(e){for(var t=0;t<D.length;++t)if(D[t][0]==e)return D[t];return!1}function Sr(e,t){for(var n=0;n<I.length;++n)if(I[n][0][0]==e&&I[n][0][1]==t)return I[n];return!1}function Ft(e){for(var t=0;t<wt.length;++t)if(wt[t]==e)return!0;return!1}function Cr(e){for(var t,n,r="",o=0;o<e.length;++o){var s=e.charCodeAt(o);if(yr(s)){for(var a=null,c=null,u=o-1,d=o+1;u>=0&&Ft(e.charCodeAt(u));--u);for(a=u>=0?e.charCodeAt(u):null,t=a?Te(a):!1,t[2]==null&&t[3]==null&&(a=null);d<e.length&&Ft(e.charCodeAt(d));++d);if(c=d<=e.length?e.charCodeAt(d):null,t=c?Te(c):!1,t[3]==null&&t[4]==null&&(c=null),s==1604&&c!=null&&(c==1570||c==1571||c==1573||c==1575)){n=Sr(s,c),a!=null?r+=String.fromCharCode(n[4]):r+=String.fromCharCode(n[1]),o=o+1;continue}if(t=Te(s),a!=null&&c!=null&&t[3]!=null){r+=String.fromCharCode(t[3]);continue}else if(a!=null&&t[4]!=null){r+=String.fromCharCode(t[4]);continue}else if(c!=null&&t[2]!=null){r+=String.fromCharCode(t[2]);continue}else r+=String.fromCharCode(t[1])}else r+=String.fromCharCode(s)}return r}Ye.convertArabic=Cr;function Ir(e){var t="",n;e:for(var r=0;r<e.length;++r){n=e.charCodeAt(r);for(var o=0;o<D.length;++o)if(D[o][4]==n||D[o][2]==n||D[o][1]==n||D[o][3]==n){t+=String.fromCharCode(D[o][0]);continue e}for(var o=0;o<I.length;++o)if(I[o][4]==n||I[o][2]==n||I[o][1]==n||I[o][3]==n){t+=String.fromCharCode(I[o][0][0])+String.fromCharCode(I[o][0][1]);continue e}t+=String.fromCharCode(n)}return t}Ye.convertArabicBack=Ir;var Xe={},_=[[1569,65152,null,null,null],[1570,65153,null,null,65154],[1571,65155,null,null,65156],[1572,65157,null,null,65158],[1573,65159,null,null,65160],[1574,65161,65163,65164,65162],[1575,65165,null,null,65166],[1576,65167,65169,65170,65168],[1577,65171,null,null,65172],[1578,65173,65175,65176,65174],[1579,65177,65179,65180,65178],[1580,65181,65183,65184,65182],[1581,65185,65187,65188,65186],[1582,65189,65191,65192,65190],[1583,65193,null,null,65194],[1584,65195,null,null,65196],[1585,65197,null,null,65198],[1586,65199,null,null,65200],[1688,64394,null,null,64395],[1587,65201,65203,65204,65202],[1588,65205,65207,65208,65206],[1589,65209,65211,65212,65210],[1590,65213,65215,65216,65214],[1591,65217,65219,65220,65218],[1592,65221,65223,65224,65222],[1593,65225,65227,65228,65226],[1594,65229,65231,65232,65230],[1600,1600,1600,1600,1600],[1601,65233,65235,65236,65234],[1602,65237,65239,65240,65238],[1603,65241,65243,65244,65242],[1604,65245,65247,65248,65246],[1605,65249,65251,65252,65250],[1606,65253,65255,65256,65254],[1607,65257,65259,65260,65258],[1608,65261,null,null,65262],[1609,65263,64488,64489,64509],[1610,65265,65267,65268,65266],[1740,64508,64510,64511,65264],[1670,64378,64380,64381,64379],[1662,64342,64344,64345,64343],[1711,64402,64404,64405,64403],[1705,64398,64400,64401,64399]],A=[[[1604,1570],65269,null,null,65270],[[1604,1571],65271,null,null,65272],[[1604,1573],65273,null,null,65274],[[1604,1575],65275,null,null,65276]],yt=[1552,1554,1555,1556,1557,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773];function Ar(e){for(var t=0;t<_.length;++t)if(_[t][0]==e)return!0;return!1}function ke(e){for(var t=0;t<_.length;++t)if(_[t][0]==e)return _[t];return!1}function vr(e,t){for(var n=0;n<A.length;++n)if(A[n][0][0]==e&&A[n][0][1]==t)return A[n];return!1}function St(e){for(var t=0;t<yt.length;++t)if(yt[t]==e)return!0;return!1}function Dr(e){for(var t,n,r="",o=0;o<e.length;++o){var s=e.charCodeAt(o);if(Ar(s)){for(var a=null,c=null,u=o-1,d=o+1;u>=0&&St(e.charCodeAt(u));--u);for(a=u>=0?e.charCodeAt(u):null,t=a?ke(a):!1,t[2]==null&&t[3]==null&&(a=null);d<e.length&&St(e.charCodeAt(d));++d);if(c=d<=e.length?e.charCodeAt(d):null,t=c?ke(c):!1,t[3]==null&&t[4]==null&&(c=null),s==1604&&c!=null&&(c==1570||c==1571||c==1573||c==1575)){n=vr(s,c),a!=null?r+=String.fromCharCode(n[4]):r+=String.fromCharCode(n[1]),o=o+1;continue}if(t=ke(s),a!=null&&c!=null&&t[3]!=null){r+=String.fromCharCode(t[3]);continue}else if(a!=null&&t[4]!=null){r+=String.fromCharCode(t[4]);continue}else if(c!=null&&t[2]!=null){r+=String.fromCharCode(t[2]);continue}else r+=String.fromCharCode(t[1])}else r+=String.fromCharCode(s)}return r}Xe.convertArabic=Dr;function _r(e){var t="",n;e:for(var r=0;r<e.length;++r){n=e.charCodeAt(r);for(var o=0;o<_.length;++o)if(_[o][4]==n||_[o][2]==n||_[o][1]==n||_[o][3]==n){t+=String.fromCharCode(_[o][0]);continue e}for(var o=0;o<A.length;++o)if(A[o][4]==n||A[o][2]==n||A[o][1]==n||A[o][3]==n){t+=String.fromCharCode(A[o][0][0])+String.fromCharCode(A[o][0][1]);continue e}t+=String.fromCharCode(n)}return t}Xe.convertArabicBack=_r;var Tr={PersianShaper:Ye,ArabicShaper:Xe};const kr=qn(Tr);function Ct(e){return e?kr.ArabicShaper.convertArabic(e):""}function Br({lastTicketNumber:e,lastCustomer:t,serviceName:n}){var o,s,a;const r=new Date;return i.jsxs(B,{elevation:0,sx:{width:360,mx:"auto",bgcolor:"#ffffff",borderRadius:6,overflow:"hidden",border:"1px solid #E2E8F0",boxShadow:"0 25px 60px rgba(15,23,42,.12)"},children:[i.jsxs(l,{sx:{p:4,textAlign:"center",background:"linear-gradient(135deg,#EFF6FF,#FFFFFF)"},children:[i.jsx(f,{sx:{fontSize:30,fontWeight:900,color:"#0F172A",letterSpacing:.5},children:"BARBER HOUSE"}),i.jsx(f,{sx:{mt:1,color:"#64748B",fontSize:15,fontWeight:700},children:"Ticket de file d'attente"})]}),i.jsx(oe,{sx:{borderStyle:"dashed"}}),i.jsxs(l,{sx:{py:2,display:"flex",alignItems:"center",flexDirection:"column"},children:[i.jsx(f,{sx:{color:"#64748B",fontSize:16,fontWeight:700},children:"Numéro de ticket"}),i.jsx(l,{sx:{mt:1.5,width:150,height:150,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#2563EB,#60A5FA)",boxShadow:"0 15px 35px rgba(37,99,235,.35)"},children:i.jsx(f,{sx:{mt:-10,fontSize:80,fontWeight:1e3,color:"#fff",lineHeight:1},children:e})})]}),i.jsx(oe,{sx:{borderStyle:"dashed"}}),i.jsx(l,{sx:{p:3},children:i.jsxs(l,{sx:{background:"#F8FAFC",borderRadius:4,p:2,display:"flex",flexDirection:"column",gap:2},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[i.jsx(Zt,{sx:{color:"#2563EB",fontSize:28}}),i.jsx(f,{sx:{mt:-2},fontSize:18,fontWeight:800,color:"#0F172A",children:Ct((o=t==null?void 0:t.customer)==null?void 0:o.name)})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[i.jsx(Fr,{sx:{color:"#2563EB",fontSize:26}}),i.jsx(f,{sx:{mt:-2},fontSize:18,fontWeight:800,color:"#0F172A",children:((s=t==null?void 0:t.customer)==null?void 0:s.phone)??"-"})]})]})}),i.jsx(oe,{sx:{borderStyle:"dashed"}}),i.jsxs(l,{sx:{p:3,display:"flex",justifyContent:"space-around"},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(on,{sx:{color:"#2563EB",fontSize:32}}),i.jsxs(l,{children:[i.jsx(f,{sx:{mt:-2},fontSize:12,color:"#64748B",fontWeight:600,children:"Date"}),i.jsx(f,{fontWeight:900,fontSize:16,children:r.toLocaleDateString("fr-FR")})]})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(wr,{sx:{color:"#2563EB",fontSize:32}}),i.jsxs(l,{children:[i.jsx(f,{sx:{mt:-2},fontSize:12,color:"#64748B",fontWeight:600,children:"Heure"}),i.jsx(f,{fontWeight:900,fontSize:16,children:r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})})]})]})]}),i.jsx(oe,{sx:{borderStyle:"dashed"}}),i.jsxs(l,{sx:{p:3,display:"flex",alignItems:"center",gap:2},children:[i.jsx(l,{sx:{width:55,height:55,borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",background:"#EFF6FF"},children:i.jsx(sn,{sx:{color:"#2563EB",fontSize:32}})}),i.jsxs(l,{children:[i.jsx(f,{sx:{mt:-2},color:"#64748B",fontSize:13,fontWeight:700,children:"Service"}),i.jsx(f,{fontSize:20,fontWeight:900,children:Ct(((a=t==null?void 0:t.service)==null?void 0:a.name)??"-")})]})]}),i.jsx(oe,{sx:{borderStyle:"dashed"}}),i.jsxs(l,{sx:{p:3,textAlign:"center"},children:[i.jsx(f,{fontWeight:900,fontSize:16,color:"#0F172A",children:"Merci de nous avoir choisis"}),i.jsx(f,{mt:.5,color:"#64748B",fontSize:14,children:"Nous apprécions votre visite"})]})]})}function jr(e){var h,x,m;let{shop:t,lastTicketNumber:n,waitingCount:r,lastCustomer:o,peopleBeforeMe:s,currentNumber:a,lastServedNumber:c}=e;const u=y.useRef(null),d=async()=>{const k=(await ir(u.current,{scale:2})).toDataURL("image/png"),M=document.createElement("a");M.href=k,M.download="ticket.png",M.click()};return console.log(o),i.jsxs(l,{sx:{minHeight:"100vh",px:2,py:5,background:`
linear-gradient(
135deg,
#eef4ff 0%,
#f8fafc 45%,
#f0fdf4 100%
)
`,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:350,height:350,borderRadius:"50%",background:"rgba(37,99,235,.18)",filter:"blur(90px)",top:-120,right:-120},"&::after":{content:'""',position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(16,185,129,.12)",filter:"blur(90px)",bottom:-100,left:-100}},children:[i.jsx(l,{sx:{position:"fixed",left:"-9999px",top:0},children:i.jsx(l,{ref:u,children:i.jsx(Br,{lastTicketNumber:n,waitingCount:r,lastCustomer:o})})}),i.jsxs(l,{sx:{maxWidth:520,mx:"auto",display:"flex",flexDirection:"column",gap:2.5},children:[i.jsx(B,{elevation:0,sx:{p:2.5,borderRadius:6,background:"rgba(255,255,255,.45)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:"0 20px 40px rgba(15,23,42,.08)"},children:i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:2},children:[i.jsx(en,{sx:{width:60,height:60,bgcolor:"#EFF6FF",color:"#2563EB"},children:i.jsx(rn,{fontSize:"large"})}),i.jsxs(l,{children:[i.jsx(f,{fontSize:19,fontWeight:900,color:"#0F172A",children:t==null?void 0:t.shop_name}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:.8,px:1.5,py:.5,borderRadius:8,bgcolor:"#E6FFEE"},children:[i.jsx(l,{sx:{width:8,height:8,borderRadius:"50%",bgcolor:"#16A34A",boxShadow:"0 0 0 4px rgba(22,163,74,.15)"}}),i.jsx(f,{sx:{color:"#15803D",fontWeight:800,fontSize:13},children:"مفتوح الآن"})]})]})]})}),i.jsxs(B,{elevation:0,sx:{p:4,borderRadius:8,background:"rgba(255,255,255,.40)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,.75)",boxShadow:`
        0 25px 50px rgba(15,23,42,.08),
        inset 0 1px 0 rgba(255,255,255,.9)
    `,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:260,height:260,borderRadius:"50%",background:"rgba(37,99,235,.10)",filter:"blur(70px)",top:-100,right:-100}},children:[i.jsxs(l,{children:[i.jsx(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(f,{sx:{color:"#64748B",fontWeight:900,fontSize:25},children:"أنت في قائمة الانتظار"})}),i.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"center"},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(f,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(h=o==null?void 0:o.customer)==null?void 0:h.name}),i.jsx(f,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الاسم"})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(f,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(x=o==null?void 0:o.customer)==null?void 0:x.phone}),i.jsx(f,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الهاتف"})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(f,{sx:{fontSize:20,fontWeight:1e3,color:"#2563EB"},children:n}),i.jsx(f,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": رقم تذكرتك"})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"end",justifyContent:"center",gap:.5},children:[i.jsx(f,{sx:{fontSize:18,fontWeight:700,color:"#2563EB"},children:(m=o==null?void 0:o.service)==null?void 0:m.name}),i.jsx(f,{sx:{color:"#64748B",fontSize:18,fontWeight:700},children:": الخدمة"})]}),i.jsxs(l,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:1},children:[i.jsx(on,{sx:{color:"#2563EB",fontSize:20}}),i.jsx(f,{sx:{color:"#64748B",fontSize:16,fontWeight:700},children:"تم الحجز: 24 يوليو 2026 - 15:30"})]})]})]}),i.jsx(l,{sx:{mt:3,display:"flex",justifyContent:"center"},children:i.jsxs(l,{sx:{width:240,height:240,borderRadius:"50%",background:"rgba(255,255,255,.28)",backdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,.8)",boxShadow:`
                0 25px 60px rgba(37,99,235,.15),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",inset:18,borderRadius:"50%",border:"2px solid rgba(37,99,235,.15)"}},children:[i.jsx(f,{sx:{fontSize:72,fontWeight:1e3,color:"#2563EB",lineHeight:1},children:a??c??"--"}),i.jsx(f,{sx:{fontSize:18,color:"#64748B",fontWeight:700},children:"الرقم الحالي"})]})}),i.jsxs(l,{mt:3,children:[i.jsxs(l,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[i.jsx(f,{fontSize:13,color:"#64748B",children:"تقدم الدور"}),i.jsx(f,{fontSize:13,fontWeight:800,children:"75%"})]}),i.jsx(rr,{value:75,variant:"determinate",sx:{height:10,borderRadius:20,bgcolor:"#E2E8F0","& .MuiLinearProgress-bar":{borderRadius:20,background:"linear-gradient(90deg,#2563EB,#38BDF8)"}}})]}),i.jsx(Je,{onClick:d,fullWidth:!0,variant:"contained",startIcon:i.jsx(or,{}),sx:{mt:3,height:52,borderRadius:3,textTransform:"none",fontSize:15,fontWeight:800,bgcolor:"#2563EB",boxShadow:"0 10px 25px rgba(37,99,235,.25)","&:hover":{bgcolor:"#1D4ED8"}},children:"تحميل التذكرة"})]}),i.jsxs(l,{sx:{display:"flex",gap:2},children:[i.jsxs(B,{elevation:0,sx:{flex:1,p:2.5,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",overflow:"hidden"},children:[i.jsx(l,{sx:{position:"absolute",top:-20,right:-20,width:90,height:90,borderRadius:"50%",background:"rgba(37,99,235,.15)",filter:"blur(30px)"}}),i.jsx(l,{sx:{width:52,height:52,borderRadius:3,bgcolor:"rgba(37,99,235,.08)",display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:i.jsx(Er,{sx:{fontSize:30,color:"#2563EB"}})}),i.jsx(f,{sx:{fontSize:38,fontWeight:1e3,color:"#0F172A",lineHeight:1},children:s>0?s:""}),i.jsx(f,{sx:{mt:1,fontSize:13,color:"#64748B",fontWeight:600},children:s===0?"أنت التالي 🎉":"أشخاص قبلك"}),i.jsx(l,{sx:{mt:2,width:40,height:4,borderRadius:10,bgcolor:"#2563EB"}})]}),i.jsxs(B,{elevation:0,sx:{flex:1,p:2.5,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
                0 15px 35px rgba(15,23,42,.06),
                inset 0 1px 0 rgba(255,255,255,.9)
            `,position:"relative",overflow:"hidden"},children:[i.jsx(l,{sx:{position:"absolute",top:-20,right:-20,width:90,height:90,borderRadius:"50%",background:"rgba(245,158,11,.15)",filter:"blur(30px)"}}),i.jsx(l,{sx:{width:52,height:52,borderRadius:3,bgcolor:"rgba(245,158,11,.08)",display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:i.jsx(ur,{sx:{fontSize:30,color:"#F59E0B"}})}),i.jsx(f,{sx:{fontSize:38,fontWeight:1e3,color:"#0F172A",lineHeight:1},children:"12"}),i.jsx(f,{sx:{mt:1,fontSize:13,color:"#64748B",fontWeight:600},children:"دقيقة انتظار"}),i.jsx(l,{sx:{mt:2,width:40,height:4,borderRadius:10,bgcolor:"#F59E0B"}})]})]}),i.jsxs(B,{elevation:0,sx:{p:2,borderRadius:5,background:"rgba(255,255,255,.35)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.7)",boxShadow:`
            0 15px 35px rgba(15,23,42,.06),
            inset 0 1px 0 rgba(255,255,255,.9)
        `,display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden",position:"relative"},children:[i.jsx(l,{sx:{position:"absolute",width:120,height:120,borderRadius:"50%",background:"rgba(34,197,94,.15)",filter:"blur(40px)",top:-40,left:-40}}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1.5,zIndex:2},children:[i.jsx(l,{sx:{width:42,height:42,borderRadius:"50%",bgcolor:"rgba(34,197,94,.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(tn,{sx:{color:"#16A34A"}})}),i.jsxs(l,{children:[i.jsx(f,{sx:{fontWeight:800,color:"#0F172A",fontSize:14},children:"النظام يعمل"}),i.jsx(f,{sx:{color:"#64748B",fontSize:12},children:"يتم تحديث البيانات بشكل مباشر"})]})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1,zIndex:2},children:[i.jsx(l,{sx:{width:10,height:10,borderRadius:"50%",bgcolor:"#22C55E",animation:"pulse 1.5s infinite","@keyframes pulse":{"0%":{boxShadow:"0 0 0 0 rgba(34,197,94,.6)"},"70%":{boxShadow:"0 0 0 10px rgba(34,197,94,0)"},"100%":{boxShadow:"0 0 0 0 rgba(34,197,94,0)"}}}}),i.jsx(f,{sx:{fontWeight:700,color:"#16A34A",fontSize:13},children:"مباشر"})]})]})]})]})}function Rr({shop:e,ticketNumber:t,lastCustomer:n}){var r,o;return console.log(t),i.jsx(l,{dir:"rtl",sx:{minHeight:"100dvh",px:2,py:5,display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg,#f8fafc,#ecfdf5)",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",width:350,height:350,borderRadius:"50%",background:"rgba(34,197,94,.18)",filter:"blur(100px)",top:-100,right:-100},"&::after":{content:'""',position:"absolute",width:300,height:300,borderRadius:"50%",background:"rgba(37,99,235,.15)",filter:"blur(100px)",bottom:-100,left:-100}},children:i.jsxs(B,{elevation:0,sx:{width:"100%",maxWidth:420,p:3,borderRadius:8,background:"rgba(255,255,255,.75)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,.8)",boxShadow:"0 30px 70px rgba(15,23,42,.12)",textAlign:"center",position:"relative",zIndex:2},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1.5,mb:4},children:[i.jsxs(l,{children:[i.jsx(f,{fontSize:20,fontWeight:1e3,children:e==null?void 0:e.shop_name}),i.jsx(f,{fontSize:13,color:"text.secondary",fontWeight:700,children:e==null?void 0:e.business_type})]}),i.jsx(en,{sx:{width:55,height:55,bgcolor:"#dcfce7",color:"#16a34a"},children:i.jsx(rn,{})})]}),i.jsx(f,{fontSize:28,fontWeight:1e3,color:"#16a34a",sx:{mb:3},children:"🎉 حان دورك"}),i.jsxs(l,{sx:{width:200,height:200,mx:"auto",borderRadius:"50%",background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxShadow:"0 25px 50px rgba(22,163,74,.35)",animation:"pulse 2s infinite","@keyframes pulse":{"0%":{boxShadow:"0 0 0 0 rgba(22,163,74,.5)"},"70%":{boxShadow:"0 0 0 25px rgba(22,163,74,0)"},"100%":{boxShadow:"0 0 0 0 rgba(22,163,74,0)"}}},children:[i.jsx(f,{fontSize:16,fontWeight:800,children:"رقم التذكرة"}),i.jsx(f,{sx:{fontSize:50},children:t})]}),i.jsxs(l,{sx:{mt:4,p:2,borderRadius:4,bgcolor:"#f8fafc",display:"flex",flexDirection:"column",gap:1.5},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(Zt,{sx:{color:"#2563eb"}}),i.jsx(f,{fontWeight:800,children:"الاسم"})]}),i.jsx(f,{fontWeight:900,color:"primary",children:(r=n==null?void 0:n.customer)==null?void 0:r.name})]}),i.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[i.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:1},children:[i.jsx(sn,{sx:{color:"#2563eb"}}),i.jsx(f,{fontWeight:800,children:"الخدمة"})]}),i.jsx(f,{fontWeight:900,color:"primary",children:((o=n==null?void 0:n.service)==null?void 0:o.name)??"غير محدد"})]})]}),i.jsxs(l,{sx:{mt:3,py:1.5,borderRadius:4,bgcolor:"#dcfce7",display:"flex",justifyContent:"center",alignItems:"center",gap:1},children:[i.jsx(tn,{sx:{color:"#16a34a"}}),i.jsx(f,{color:"#15803d",fontWeight:900,children:"توجه إلى الموظف الآن"})]})]})})}function Be(e,t){ae.post("/api/web/getShopQueueStatus",{uuid:t}).then(n=>{console.log(n),e(Qt({lastTicketNumber:n.data.last_ticket_number,waitingCount:n.data.waiting_count,lastServedNumber:n.data.last_served_number,queueOpen:n.data.queue_open})),e(Y({currentNumber:n.data.current_number}))}).catch(n=>{console.log(n.response)})}const Q=new Audio("/sounds/ticket-call.mp3");Q.preload="auto";Q.loop=!0;function Nr(){Q.currentTime=0,Q.play(),document.addEventListener("click",It,{once:!0}),document.addEventListener("touchstart",It,{once:!0})}function It(){Q.pause(),Q.currentTime=0}const Or=()=>{};var At={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Mr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],a=e[n++],c=e[n++],u=((o&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},cn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],a=o+1<e.length,c=a?e[o+1]:0,u=o+2<e.length,d=u?e[o+2]:0,h=s>>2,x=(s&3)<<4|c>>4;let m=(c&15)<<2|d>>6,w=d&63;u||(w=64,a||(m=64)),r.push(n[h],n[x],n[m],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(an(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const d=o<e.length?n[e.charAt(o)]:64;++o;const x=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||c==null||d==null||x==null)throw new Pr;const m=s<<2|c>>4;if(r.push(m),d!==64){const w=c<<4&240|d>>2;if(r.push(w),x!==64){const k=d<<6&192|x;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Pr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $r=function(e){const t=an(e);return cn.encodeByteArray(t,!0)},ln=function(e){return $r(e).replace(/\./g,"")},Wr=function(e){try{return cn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=()=>zr().__FIREBASE_DEFAULTS__,Lr=()=>{if(typeof process>"u"||typeof At>"u")return;const e=At.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wr(e[1]);return t&&JSON.parse(t)},Kr=()=>{try{return Or()||Hr()||Lr()||Vr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dn=()=>{var e;return(e=Kr())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function un(){try{return typeof indexedDB=="object"}catch{return!1}}function fn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}function Gr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirebaseError";class te extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qr,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pe.prototype.create)}}class pe{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?Jr(s,r):"Error",c=`${this.serviceName}: ${a} (${o}).`;return new te(o,c,r)}}function Jr(e,t){try{let n=0,r="";for(;n<e.length;){const o=e.indexOf("{$",n);if(o===-1){r+=e.substring(n);break}const s=e.indexOf("}",o+2);if(s===-1){r+=e.substring(n);break}const a=e.substring(o+2,s),c=t[a];r+=e.substring(n,o)+(c!=null?String(c):`<${a}?>`),n=s+1}return r}catch{return e}}function ze(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],a=t[o];if(vt(s)&&vt(a)){if(!ze(s,a))return!1}else if(s!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function vt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return e&&e._delegate?e._delegate:e}class z{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ur;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qr(t))try{this.getOrInitializeService({instanceIdentifier:H})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=H){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=H){return this.instances.has(t)}getOptions(t=H){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(o)}return o}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const s=this.instances.get(r);return s&&t(s,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=H){return this.component?this.component.multipleInstances?t:H:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xr(e){return e===H?void 0:e}function Qr(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const eo={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},to=b.INFO,no={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ro=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=no[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oo{constructor(t){this.name=t,this._logLevel=to,this._logHandler=ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eo[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const io=(e,t)=>t.some(n=>e instanceof n);let Dt,_t;function so(){return Dt||(Dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ao(){return _t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hn=new WeakMap,He=new WeakMap,xn=new WeakMap,je=new WeakMap,Ze=new WeakMap;function co(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(R(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&hn.set(n,e)}).catch(()=>{}),Ze.set(t,e),t}function lo(e){if(He.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});He.set(e,t)}let Le={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return He.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return R(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function uo(e){Le=e(Le)}function fo(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Re(this),t,...n);return xn.set(r,t.sort?t.sort():[t]),R(r)}:ao().includes(e)?function(...t){return e.apply(Re(this),t),R(hn.get(this))}:function(...t){return R(e.apply(Re(this),t))}}function ho(e){return typeof e=="function"?fo(e):(e instanceof IDBTransaction&&lo(e),io(e,so())?new Proxy(e,Le):e)}function R(e){if(e instanceof IDBRequest)return co(e);if(je.has(e))return je.get(e);const t=ho(e);return t!==e&&(je.set(e,t),Ze.set(t,e)),t}const Re=e=>Ze.get(e);function be(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),c=R(a);return r&&a.addEventListener("upgradeneeded",u=>{r(R(a.result),u.oldVersion,u.newVersion,R(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),o&&u.addEventListener("versionchange",d=>o(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function ue(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),R(n).then(()=>{})}const xo=["get","getKey","getAll","getAllKeys","count"],go=["put","add","delete","clear"],Ne=new Map;function Tt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ne.get(t))return Ne.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=go.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||xo.includes(n)))return;const s=async function(a,...c){const u=this.transaction(a,o?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),o&&u.done]))[0]};return Ne.set(t,s),s}uo(e=>({...e,get:(t,n,r)=>Tt(t,n)||e.get(t,n,r),has:(t,n)=>!!Tt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bo(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bo(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ve="@firebase/app",kt="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new oo("@firebase/app"),mo="@firebase/app-compat",Eo="@firebase/analytics-compat",wo="@firebase/analytics",Fo="@firebase/app-check-compat",yo="@firebase/app-check",So="@firebase/auth",Co="@firebase/auth-compat",Io="@firebase/database",Ao="@firebase/data-connect",vo="@firebase/database-compat",Do="@firebase/functions",_o="@firebase/functions-compat",To="@firebase/installations",ko="@firebase/installations-compat",Bo="@firebase/messaging",jo="@firebase/messaging-compat",Ro="@firebase/performance",No="@firebase/performance-compat",Oo="@firebase/remote-config",Mo="@firebase/remote-config-compat",Po="@firebase/storage",$o="@firebase/storage-compat",Wo="@firebase/firestore",zo="@firebase/ai",Ho="@firebase/firestore-compat",Lo="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]",Vo={[Ve]:"fire-core",[mo]:"fire-core-compat",[wo]:"fire-analytics",[Eo]:"fire-analytics-compat",[yo]:"fire-app-check",[Fo]:"fire-app-check-compat",[So]:"fire-auth",[Co]:"fire-auth-compat",[Io]:"fire-rtdb",[Ao]:"fire-data-connect",[vo]:"fire-rtdb-compat",[Do]:"fire-fn",[_o]:"fire-fn-compat",[To]:"fire-iid",[ko]:"fire-iid-compat",[Bo]:"fire-fcm",[jo]:"fire-fcm-compat",[Ro]:"fire-perf",[No]:"fire-perf-compat",[Oo]:"fire-rc",[Mo]:"fire-rc-compat",[Po]:"fire-gcs",[$o]:"fire-gcs-compat",[Wo]:"fire-fst",[Ho]:"fire-fst-compat",[zo]:"fire-vertex","fire-js":"fire-js",[Lo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Map,Ko=new Map,Ue=new Map;function Bt(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e){const t=e.name;if(Ue.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;Ue.set(t,e);for(const n of he.values())Bt(n,e);for(const n of Ko.values())Bt(n,e);return!0}function et(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},j=new pe("app","Firebase",Uo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}function gn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ke,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw j.create("bad-app-name",{appName:String(o)});if(n||(n=dn()),!n)throw j.create("no-options");const s=he.get(o);if(s)if(ze(n,s.options)){if(ze(r,s.config))return s;throw j.create("duplicate-app",{appName:o,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw j.create("duplicate-app",{appName:o,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const a=new Zr(o);for(const u of Ue.values())a.addComponent(u);const c=new Go(n,r,a);return he.set(o,c),c}function qo(e=Ke){const t=he.get(e);if(!t&&e===Ke&&dn())return gn();if(!t)throw j.create("no-app",{appName:e});return t}function W(e,t,n){let r=Vo[e]??e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${r}" with version "${t}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),O.warn(a.join(" "));return}V(new z(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="firebase-heartbeat-database",Yo=1,se="firebase-heartbeat-store";let Oe=null;function pn(){return Oe||(Oe=be(Jo,Yo,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(se)}catch(n){console.warn(n)}}}}).catch(e=>{throw j.create("idb-open",{originalErrorMessage:e.message})})),Oe}async function Xo(e){try{const n=(await pn()).transaction(se),r=await n.objectStore(se).get(bn(e));return await n.done,r}catch(t){if(t instanceof te)O.warn(t.message);else{const n=j.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});O.warn(n.message)}}}async function jt(e,t){try{const r=(await pn()).transaction(se,"readwrite");await r.objectStore(se).put(t,bn(e)),await r.done}catch(n){if(n instanceof te)O.warn(n.message);else{const r=j.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});O.warn(r.message)}}}function bn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=1024,Zo=30;class ei{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ni(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rt();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:o}),this._heartbeatsCache.heartbeats.length>Zo){const a=ri(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){O.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rt(),{heartbeatsToSend:r,unsentEntries:o}=ti(this._heartbeatsCache.heartbeats),s=ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return O.warn(n),""}}}function Rt(){return new Date().toISOString().substring(0,10)}function ti(e,t=Qo){const n=[];let r=e.slice();for(const o of e){const s=n.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Nt(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Nt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ni{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return un()?fn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return jt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return jt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Nt(e){return ln(JSON.stringify({version:2,heartbeats:e})).length}function ri(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e){V(new z("platform-logger",t=>new po(t),"PRIVATE")),V(new z("heartbeat",t=>new ei(t),"PRIVATE")),W(Ve,kt,e),W(Ve,kt,"esm2020"),W("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi("");const mn="@firebase/installations",tt="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=1e4,wn=`w:${tt}`,Fn="FIS_v2",ii="https://firebaseinstallations.googleapis.com/v1",si=60*60*1e3,ai="installations",ci="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},K=new pe(ai,ci,li);function yn(e){return e instanceof te&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn({projectId:e}){return`${ii}/projects/${e}/installations`}function Cn(e){return{token:e.token,requestStatus:2,expiresIn:ui(e.expiresIn),creationTime:Date.now()}}async function In(e,t){const r=(await t.json()).error;return K.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function An({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function di(e,{refreshToken:t}){const n=An(e);return n.append("Authorization",fi(t)),n}async function vn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ui(e){return Number(e.replace("s","000"))}function fi(e){return`${Fn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Sn(e),o=An(e),s=t.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const a={fid:n,authVersion:Fn,appId:e.appId,sdkVersion:wn},c={method:"POST",headers:o,body:JSON.stringify(a)},u=await vn(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Cn(d.authToken)}}else throw await In("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^[cdef][\w-]{21}$/,Ge="";function pi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=bi(e);return gi.test(n)?n:Ge}catch{return Ge}}function bi(e){return xi(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Map;function _n(e,t){const n=ne(e);Tn(n,t),wi(n,t)}function mi(e,t){kn();const n=ne(e);let r=Z.get(n);r||(r=new Set,Z.set(n,r)),r.add(t)}function Ei(e,t){const n=ne(e),r=Z.get(n);r&&(r.delete(t),r.size===0&&Z.delete(n),Bn())}function Tn(e,t){const n=Z.get(e);if(n)for(const r of n)r(t)}function wi(e,t){const n=kn();n&&n.postMessage({key:e,fid:t}),Bn()}let L=null;function kn(){return!L&&"BroadcastChannel"in self&&(L=new BroadcastChannel("[Firebase] FID Change"),L.onmessage=e=>{Tn(e.data.key,e.data.fid)}),L}function Bn(){Z.size===0&&L&&(L.close(),L=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="firebase-installations-database",yi=1,U="firebase-installations-store";let Me=null;function nt(){return Me||(Me=be(Fi,yi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}})),Me}async function xe(e,t){const n=ne(e),o=(await nt()).transaction(U,"readwrite"),s=o.objectStore(U),a=await s.get(n);return await s.put(t,n),await o.done,(!a||a.fid!==t.fid)&&_n(e,t.fid),t}async function jn(e){const t=ne(e),r=(await nt()).transaction(U,"readwrite");await r.objectStore(U).delete(t),await r.done}async function me(e,t){const n=ne(e),o=(await nt()).transaction(U,"readwrite"),s=o.objectStore(U),a=await s.get(n),c=t(a);return c===void 0?await s.delete(n):await s.put(c,n),await o.done,c&&(!a||a.fid!==c.fid)&&_n(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e){let t;const n=await me(e.appConfig,r=>{const o=Si(r),s=Ci(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===Ge?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Si(e){const t=e||{fid:pi(),registrationStatus:0};return Rn(t)}function Ci(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(K.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ii(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ai(e)}:{installationEntry:t}}async function Ii(e,t){try{const n=await hi(e,t);return xe(e.appConfig,n)}catch(n){throw yn(n)&&n.customData.serverCode===409?await jn(e.appConfig):await xe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ai(e){let t=await Ot(e.appConfig);for(;t.registrationStatus===1;)await Dn(100),t=await Ot(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rt(e);return r||n}return t}function Ot(e){return me(e,t=>{if(!t)throw K.create("installation-not-found");return Rn(t)})}function Rn(e){return vi(e)?{fid:e.fid,registrationStatus:0}:e}function vi(e){return e.registrationStatus===1&&e.registrationTime+En<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di({appConfig:e,heartbeatServiceProvider:t},n){const r=_i(e,n),o=di(e,n),s=t.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const a={installation:{sdkVersion:wn,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(a)},u=await vn(()=>fetch(r,c));if(u.ok){const d=await u.json();return Cn(d)}else throw await In("Generate Auth Token",u)}function _i(e,{fid:t}){return`${Sn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t=!1){let n;const r=await me(e.appConfig,s=>{if(!Nn(s))throw K.create("not-registered");const a=s.authToken;if(!t&&Bi(a))return s;if(a.requestStatus===1)return n=Ti(e,t),s;{if(!navigator.onLine)throw K.create("app-offline");const c=Ri(s);return n=ki(e,c),c}});return n?await n:r.authToken}async function Ti(e,t){let n=await Mt(e.appConfig);for(;n.authToken.requestStatus===1;)await Dn(100),n=await Mt(e.appConfig);const r=n.authToken;return r.requestStatus===0?ot(e,t):r}function Mt(e){return me(e,t=>{if(!Nn(t))throw K.create("not-registered");const n=t.authToken;return Ni(n)?{...t,authToken:{requestStatus:0}}:t})}async function ki(e,t){try{const n=await Di(e,t),r={...t,authToken:n};return await xe(e.appConfig,r),n}catch(n){if(yn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jn(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await xe(e.appConfig,r)}throw n}}function Nn(e){return e!==void 0&&e.registrationStatus===2}function Bi(e){return e.requestStatus===2&&!ji(e)}function ji(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+si}function Ri(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Ni(e){return e.requestStatus===1&&e.requestTime+En<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(e){const t=e,{installationEntry:n,registrationPromise:r}=await rt(t);return r?r.catch(console.error):ot(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e,t=!1){const n=e;return await Pi(n),(await ot(n,t)).token}async function Pi(e){const{registrationPromise:t}=await rt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e,t){const{appConfig:n}=e;return mi(n,t),()=>{Ei(n,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){if(!e||!e.options)throw Pe("App Configuration");if(!e.name)throw Pe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Pe(e){return K.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="installations",zi="installations-internal",Hi=e=>{const t=e.getProvider("app").getImmediate(),n=Wi(t),r=et(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Li=e=>{const t=e.getProvider("app").getImmediate(),n=et(t,On).getImmediate();return{getId:()=>Oi(n),getToken:o=>Mi(n,o)}};function Vi(){V(new z(On,Hi,"PUBLIC")),V(new z(zi,Li,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi();W(mn,tt);W(mn,tt,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="/firebase-messaging-sw.js",Ui="/firebase-cloud-messaging-push-scope",Mn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Gi="https://fcmregistrations.googleapis.com/v1",Pn="google.c.a.c_id",qi="google.c.a.c_l",Ji="google.c.a.ts",Yi="google.c.a.e",Pt=1e4;var $t;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})($t||($t={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ee;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e.FID_REGISTERED="fid-registered"})(ee||(ee={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function $n(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="fcm_token_details_db",Xi=5,Wt="fcm_token_object_Store";async function Qi(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes($e))return null;let t=null;return(await be($e,Xi,{upgrade:async(r,o,s,a)=>{if(o<2||!r.objectStoreNames.contains(Wt))return;const c=a.objectStore(Wt),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(o===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:v(d.vapidKey)}}}else if(o===3){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:v(d.auth),p256dh:v(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:v(d.vapidKey)}}}else if(o===4){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:v(d.auth),p256dh:v(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:v(d.vapidKey)}}}}}})).close(),await ue($e),await ue("fcm_vapid_details_db"),await ue("undefined"),Zi(t)?t:null}function Zi(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","fid-registration-failed":"A problem occurred while creating an FCM registration via FID: {$errorInfo}","fid-unregister-failed":"A problem occurred while unregistering the FCM registration via FID: {$errorInfo}","fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":"No onRegistered callback handler was provided or registered. Implement onRegistered() before register()."},p=new pe("messaging","Messaging",es);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="firebase-messaging-database",Ht=2,G="firebase-messaging-store",N="firebase-messaging-fid-registration-store",ts={openDB:be,deleteDB:ue};let Lt=ts,ie=null;function ns(e,t,n){switch(t){case 0:if(e.createObjectStore(G),n===1)break;case 1:n===2&&e.createObjectStore(N)}}function Vt(e){return{upgrade:(t,n)=>{ns(t,n,e)},blocked:()=>{},blocking:(t,n,r)=>{var o;ie=null,(o=r.target)==null||o.close()},terminated:()=>{ie=null}}}function Ee(){return ie||(ie=Lt.openDB(zt,Ht,Vt(2)).catch(()=>Lt.openDB(zt,Ht-1,Vt(1)))),ie}function Wn(e,t){return e.objectStoreNames.contains(t)}function zn(e){if(!Wn(e,N))throw p.create("fid-registration-idb-schema-unavailable")}async function rs(e){const t=we(e),r=await(await Ee()).transaction(G).objectStore(G).get(t);if(r)return r;{const o=await Qi(e.appConfig.senderId);if(o)return await it(e,o),o}}async function it(e,t){const n=we(e),r=await Ee(),o=[G],s=Wn(r,N);s&&o.push(N);const a=r.transaction(o,"readwrite");return await a.objectStore(G).put(t,n),s&&await a.objectStore(N).delete(n),await a.done,t}async function Hn(e){const t=we(e),n=await Ee();return zn(n),await n.transaction(N).objectStore(N).get(t)}async function os(e,t){const n=we(e),r=await Ee();zn(r);const o=r.transaction([G,N],"readwrite");return await o.objectStore(N).put(t,n),await o.objectStore(G).delete(n),await o.done,t}function we({appConfig:e}){return e.appId}const Kt="@firebase/messaging",qe="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=3,ss=1e3;async function as(e,t){const n=await ye(e),r=st(t,e.appConfig.appName,!1),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Fe(e.appConfig),o)).json()}catch(a){throw p.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw p.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw p.create("token-subscribe-no-token");return s.token}async function cs(e,t){var u;const n=await ye(e),r=st(t,e.appConfig.appName,!0),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await hs(()=>fetch(Fe(e.appConfig),o),is,ss)}catch(d){throw p.create("fid-registration-failed",{errorInfo:d==null?void 0:d.toString()})}if(s.ok)return{responseFid:await ls(s)};let a;try{a=await s.json()}catch{throw p.create("fid-registration-failed",{errorInfo:s.statusText})}const c=((u=a.error)==null?void 0:u.message)??s.statusText;throw p.create("fid-registration-failed",{errorInfo:c})}async function ls(e){const t=await e.text();if(!t.trim())throw p.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is empty"});let n;try{n=JSON.parse(t)}catch{throw p.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is not valid JSON"})}const r=n.name;if(typeof r!="string"||r.length===0)throw p.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response did not include a non-empty name"});return ds(r)}const Ut="/registrations/";function ds(e){const t=e.indexOf(Ut);if(t!==-1){const n=e.slice(t+Ut.length);if(n.length>0)return n}throw p.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response name is not a valid registration resource name"})}async function us(e,t){const n=await ye(e),r=st(t.subscriptionOptions,e.appConfig.appName,!1),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Fe(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw p.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw p.create("token-update-failed",{errorInfo:a})}if(!s.token)throw p.create("token-update-no-token");return s.token}async function fs(e,t){const r={method:"DELETE",headers:await ye(e)};try{const s=await(await fetch(`${Fe(e.appConfig)}/${t}`,r)).json();if(s.error){const a=s.error.message;throw p.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw p.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}async function hs(e,t,n){let r;for(let o=0;o<t;o++)try{return await e()}catch(s){if(r=s,o<t-1){const a=n*Math.pow(2,o);await new Promise(c=>setTimeout(c,a))}}throw r}function Fe({projectId:e}){return`${Gi}/projects/${e}/registrations`}async function ye({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function xs(e,t){var n,r;try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return new URL(e).host}catch{}try{if(typeof self<"u"&&((n=self.location)!=null&&n.href))return new URL(e,self.location.origin).host}catch{}return typeof self<"u"&&((r=self.location)!=null&&r.host)?self.location.host:t}function st({p256dh:e,auth:t,endpoint:n,vapidKey:r,swScope:o},s,a){const c={web:{origin:xs(o,s),endpoint:n,auth:t,p256dh:e}};return a&&(c.fcm_sdk_version=qe),r!==Mn&&(c.web.applicationPubKey=r),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=7*24*60*60*1e3;async function ps(e){const t=await ms(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:v(t.getKey("auth")),p256dh:v(t.getKey("p256dh"))},r=await rs(e.firebaseDependencies);if(r){if(Es(r.subscriptionOptions,n))return Date.now()>=r.createTime+gs?bs(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await fs(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return Gt(e.firebaseDependencies,n)}else return Gt(e.firebaseDependencies,n)}async function bs(e,t){try{const n=await us(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await it(e.firebaseDependencies,r),n}catch(n){throw n}}async function Gt(e,t){const r={token:await as(e,t),createTime:Date.now(),subscriptionOptions:t};return await it(e,r),r.token}async function ms(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$n(t)})}function Es(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}function ws(e,t){const n=e.onRegisteredHandler;n&&(typeof n=="function"?n(t):n.next(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(e){try{e.swRegistration=await navigator.serviceWorker.register(Ki,{scope:Ui}),e.swRegistration.update().catch(()=>{}),await ys(e.swRegistration)}catch(t){throw p.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function ys(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Pt} ms`)),Pt),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=s=>{var a;((a=s.target)==null?void 0:a.state)==="activated"&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t){if(!t&&!e.swRegistration&&await Fs(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Mn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=3;async function Ss(e,t){const n=await Cs(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:n.endpoint,auth:v(n.getKey("auth")),p256dh:v(n.getKey("p256dh"))},o=e.firebaseDependencies.installations;for(let s=0;s<qt;s++){const{responseFid:a}=await cs(e.firebaseDependencies,r);if(a===t)return;s<qt-1&&await o.getToken(!0)}throw p.create("fid-registration-failed",{errorInfo:"CreateRegistration response FID does not match Firebase Installation ID"})}async function Cs(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$n(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=7*24*60*60*1e3;async function Kn(e,t){if(!navigator)throw p.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw p.create("permission-blocked");if(!e.onRegisteredHandler)throw p.create("invalid-on-registered-handler");await Vn(e,t==null?void 0:t.vapidKey),await Ln(e,t==null?void 0:t.serviceWorkerRegistration);const n=e._registerNotifyChain.catch(()=>{});return e._registerNotifyChain=n.then(async()=>{const r=await e.firebaseDependencies.installations.getId(),o=await Hn(e.firebaseDependencies),s=Date.now();if((!o||o.fid!==r||s>=o.lastRegisterTime+Is)&&(await Ss(e,r),await os(e.firebaseDependencies,{fid:r,lastRegisterTime:s,vapidKey:e.vapidKey})),!e.onRegisteredHandler)throw p.create("invalid-on-registered-handler");ws(e,r)}),e._registerNotifyChain}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e,t){return $i(t,()=>{(async()=>!e.onRegisteredHandler||!await Hn(e.firebaseDependencies)||await Kn(e).catch(()=>{}))()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return vs(t,e),Ds(t,e),_s(t,e),t}function vs(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function Ds(e,t){t.data&&(e.data=t.data)}function _s(e,t){var o,s,a,c;if(!t.fcmOptions&&!((o=t.notification)!=null&&o.click_action))return;e.fcmOptions={};const n=((s=t.fcmOptions)==null?void 0:s.link)??((a=t.notification)==null?void 0:a.click_action);n&&(e.fcmOptions.link=n);const r=(c=t.fcmOptions)==null?void 0:c.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e){return typeof e=="object"&&!!e&&Pn in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){if(!e||!e.options)throw We("App Configuration Object");if(!e.name)throw We("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw We(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function We(e){return p.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:"stopped"};const o=ks(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),this.logQueue.state==="scheduled"&&clearTimeout(this.logQueue.timerId),this.logQueue={state:"stopped"},Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e,t){if(!navigator)throw p.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw p.create("permission-blocked");return await Vn(e,t==null?void 0:t.vapidKey),await Ln(e,t==null?void 0:t.serviceWorkerRegistration),ps(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(e,t,n){const r=Rs(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Pn],message_name:n[qi],message_time:n[Ji],message_device_time:Math.floor(Date.now()/1e3)})}function Rs(e){switch(e){case ee.NOTIFICATION_CLICKED:return"notification_open";case ee.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;if(e.onMessageHandler&&n.messageType===ee.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Jt(n)):e.onMessageHandler.next(Jt(n))),e.onRegisteredHandler&&n.messageType===ee.FID_REGISTERED){const o=n.fid;typeof e.onRegisteredHandler=="function"?e.onRegisteredHandler(o):e.onRegisteredHandler.next(o)}const r=n.data;Ts(r)&&r[Yi]==="1"&&await js(e,n.messageType,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=e=>{const t=new Bs(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ns(t,n)),t._fidChangeUnsubscribe=As(t,e.getProvider("installations").getImmediate()),t},Ms=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Un(t,r),register:r=>Kn(t,r)}};function Ps(){V(new z("messaging",Os,"PUBLIC")),V(new z("messaging-internal",Ms,"PRIVATE")),W(Kt,qe),W(Kt,qe,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(){try{await fn()}catch{return!1}return typeof window<"u"&&un()&&Gr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e,t){if(!navigator)throw p.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e=qo()){return $s().then(t=>{if(!t)throw p.create("unsupported-browser")},t=>{throw p.create("indexed-db-unsupported")}),et(Qe(e),"messaging").getImmediate()}async function Gn(e,t){return e=Qe(e),Un(e,t)}function Hs(e,t){return e=Qe(e),Ws(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps();var Ls="firebase",Vs="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W(Ls,Vs,"app");const Ks={apiKey:"AIzaSyAUjyNbF__Ki6QVympviFP9MEddgZxGZIQ",authDomain:"spotlly.firebaseapp.com",projectId:"spotlly",storageBucket:"spotlly.firebasestorage.app",messagingSenderId:"1057323783239",appId:"1:1057323783239:web:c9d2e421f615d9e8e94d62"},Us=gn(Ks);let ge=null;typeof window<"u"&&(ge=zs(Us));const Gs=T(i.jsx("path",{d:"M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2M6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94M18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05"}));function qs({open:e,onClose:t,uuid:n}){const[r,o]=y.useState(!1),s=async()=>{try{o(!0);const a=await Notification.requestPermission();if(console.log("NOTIFICATION PERMISSION:",a),a!=="granted"){o(!1);return}const c=await navigator.serviceWorker.register("/firebase-messaging-sw.js");console.log("SERVICE WORKER REGISTERED:",c);const u=await Gn(ge,{vapidKey:"BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_Tw kWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw".replace(" ",""),serviceWorkerRegistration:c});if(console.log("FCM TOKEN:",u),!u){console.error("FCM TOKEN WAS NOT GENERATED"),o(!1);return}const d=localStorage.getItem(`ticket_id_${n}`);if(console.log("TICKET ID:",d),d){const h=await ae.post("/api/web/save-fcm-token",{ticket_id:d,fcm_token:u});console.log("FCM TOKEN SAVED:",h.data)}else console.warn("NO TICKET ID FOUND");o(!1),t()}catch(a){console.error("FCM ERROR:",a),o(!1)}};return i.jsx(sr,{open:e,disableEscapeKeyDown:!0,onClose:()=>{},children:i.jsxs(ar,{sx:{p:4,textAlign:"center",width:{xs:"calc(100vw - 40px)",sm:420},maxWidth:420},children:[i.jsx(Gs,{sx:{fontSize:80,color:"#0ab7ab",mb:2}}),i.jsx(f,{sx:{fontSize:24,fontWeight:900,mb:1},children:"فعّل الإشعارات"}),i.jsx(f,{sx:{color:"#64748b",lineHeight:2,mb:3},children:"فعّل الإشعارات حتى نتمكن من إعلامك عندما يقترب دورك أو يحين دورك."}),i.jsx(Je,{fullWidth:!0,variant:"contained",disabled:r,onClick:s,sx:{py:1.3,borderRadius:3,fontWeight:800,background:"linear-gradient(90deg,#0ab7ab,#4cc9f0,#9d4edd)","&:hover":{background:"linear-gradient(90deg,#09a99e,#3ebbdc,#8d43c9)"}},children:r?i.jsx(Xt,{size:24,sx:{color:"#fff"}}):"تفعيل الإشعارات"})]})})}function Js(){const{uuid:e}=Jn(),t=Yt(),[n,r]=y.useState(null),[o,s]=y.useState(!1),[a,c]=y.useState(null),[u,d]=y.useState(!1),h=X(gr),x=X(pr),m=X(nn),w=x==null?void 0:x.queueOpen,k=h==null?void 0:h.checking,M=h==null?void 0:h.activeTicket,ce=h==null?void 0:h.status,re=h==null?void 0:h.TUEFF,Se=h==null?void 0:h.currentNumber,Ce=x==null?void 0:x.lastTicketNumber,le=x==null?void 0:x.waitingCount;x==null||x.lastCustomer;const Ie=x==null?void 0:x.lastServedNumber,Ae=h==null?void 0:h.peopleBeforeMe;return y.useEffect(()=>{new Audio("/sounds/ticket-call.mp3").load()},[]),y.useEffect(()=>{Notification.permission!=="granted"&&d(!0)},[]),y.useEffect(()=>{let F=null;return(async()=>{var P;try{const $=await navigator.serviceWorker.register("/firebase-messaging-sw.js");if(console.log("🔥 FCM SERVICE WORKER:",$),Notification.permission!=="granted"){console.log("❌ Notification permission:",Notification.permission);return}const q=await Gn(ge,{vapidKey:"BMrlXhCM4FvgLg4dhS1qIRdWG_-0dzrH4p6goE2Gm5vOKP_TwkWVFmjsv2G-Bts2Jny0NBf0OHMd6OY6MTeLLUw",serviceWorkerRegistration:$});if(!q){console.log("❌ FCM TOKEN NOT FOUND");return}console.log("🔥 CURRENT FCM TOKEN:",q),r(q);const J=localStorage.getItem(`ticket_id_${e}`);if(console.log("🎫 CURRENT TICKET ID:",J),!J)console.log("⏳ No ticket yet");else{const g=await ae.post("/api/web/save-fcm-token",{ticket_id:Number(J),fcm_token:q});console.log("✅ FCM TOKEN SAVED:",g.data)}F=Hs(ge,g=>{var at,ct,lt,dt,ut,ft,ht;console.log("🔥🔥 FCM MESSAGE RECEIVED:",g);const S=((at=g==null?void 0:g.notification)==null?void 0:at.title)||((ct=g==null?void 0:g.data)==null?void 0:ct.title)||"Spotlly",C=((lt=g==null?void 0:g.notification)==null?void 0:lt.body)||((dt=g==null?void 0:g.data)==null?void 0:dt.body)||"",Ys=((ut=g==null?void 0:g.notification)==null?void 0:ut.icon)||((ft=g==null?void 0:g.data)==null?void 0:ft.icon)||"/images/slogo.png";if(console.log("🔔 TITLE:",S),console.log("🔔 BODY:",C),Notification.permission==="granted"){const ve=(ht=g==null?void 0:g.data)==null?void 0:ht.type,xt=new Notification(S,{body:C,icon:"/images/slogo.png",badge:"/images/slogo.png",tag:`spotlly-${(g==null?void 0:g.messageId)||Date.now()}`,requireInteraction:!0});let De="/sounds/sound-notification2.mp3";(ve==="turn_called"||ve==="service_started")&&(De="/sounds/sound-notification1.mp3"),console.log("🔊 Notification type:",ve),console.log("🔊 Sound:",De);const gt=new Audio(De);gt.volume=1,gt.play().catch(_e=>{console.log("🔇 SOUND BLOCKED:",_e)}),xt.onclick=()=>{xt.close();const _e=`${window.location.origin}/q/${e}`;window.open(_e,"_blank")}}}),console.log("✅ FCM ONMESSAGE LISTENER READY")}catch($){console.error("❌ FCM INIT ERROR:",((P=$.response)==null?void 0:P.data)||$)}})(),()=>{F&&F()}},[e]),y.useEffect(()=>{if(!(m!=null&&m.id))return;const F=window.Echo.channel(`shop.${m.id}`);return F.listen(".queue.status.changed",E=>{t(Qt({queueOpen:E.queue_open}))}),F.listen(".ticket.created",()=>{Be(t,e)}),F.listen(".ticket.status.changed",E=>{const P=localStorage.getItem(`ticket_uuid_${e}`);P&&E.ticket_uuid===P&&(mt(t,P,e),E.status==="serving"&&(s(!0),Nr())),Be(t,e)}),window.Echo.connector.pusher.connection.bind("connected",()=>{console.log("REVERB CONNECTED")}),window.Echo.connector.pusher.connection.bind("disconnected",()=>{console.log("REVERB DISCONNECTED")}),()=>{window.Echo.leave(`shop.${m.id}`)}},[m==null?void 0:m.id,e]),y.useEffect(()=>{Be(t,e),cr(t,e)},[e,re]),y.useEffect(()=>{const F=localStorage.getItem(`ticket_uuid_${e}`);if(!F){t(Y({checking:!1,activeTicket:!1,status:null,ticketNumber:null,peopleBeforeMe:0}));return}t(Y({checking:!0})),mt(t,F,e)},[e,re]),k?i.jsx("div",{children:i.jsx(bt,{})}):w===null?i.jsx(bt,{}):w?i.jsxs(l,{children:[i.jsx(qs,{open:u,uuid:e,onClose:()=>d(!1)}),ce==="serving"?i.jsx(Rr,{shop:m,ticketNumber:h.ticketNumber,lastCustomer:h==null?void 0:h.customer}):M?i.jsx(jr,{shop:m,currentNumber:Se,peopleBeforeMe:Ae,lastTicketNumber:h.ticketNumber,waitingCount:le,lastCustomer:h==null?void 0:h.customer,lastServedNumber:Ie}):i.jsx(mr,{uuid:e,tUEFF:re,lastTicketNumber:Ce,waitingCount:le,fcmToken:n})]}):i.jsx(l,{sx:{minHeight:"100dvh",display:"flex",alignItems:"center",justifyContent:"center",p:3,background:"linear-gradient(135deg,#743DB1 0%,#47CBE4 50%,#3989EC 100%)"},children:i.jsxs(l,{sx:{width:"100%",maxWidth:500,bgcolor:"#fff",borderRadius:5,p:4,textAlign:"center",boxShadow:"0 25px 60px rgba(0,0,0,.15)"},children:[i.jsx(l,{sx:{width:90,height:100,borderRadius:"50%",bgcolor:"#fee2e2",display:"flex",alignItems:"center",justifyContent:"center",mx:"auto",mb:3},children:i.jsx(l,{sx:{fontSize:40},children:"🔒"})}),i.jsx(l,{sx:{fontSize:28,fontWeight:900,color:"#111827",mb:1},children:"المحل مغلق حالياً"}),i.jsx(l,{sx:{color:"#6b7280",lineHeight:2,fontSize:15},children:"يرجى المحاولة لاحقاً."})]})})}Yn.createRoot(document.getElementById("app")).render(i.jsx(Xn,{store:Qn,children:i.jsx(Zn,{children:i.jsx(er,{children:i.jsx(tr,{path:"/q/:uuid",element:i.jsx(Js,{})})})})}));
