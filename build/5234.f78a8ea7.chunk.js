"use strict";(self.webpackChunkcms_nhan_dien_to_chuc=self.webpackChunkcms_nhan_dien_to_chuc||[]).push([[5234],{35809:($,C,t)=>{t.d(C,{B:()=>I,D:()=>A,H:()=>T,R:()=>N});var r=t(92132),v=t(83997),s=t(30893),w=t(42455),m=t(38413),E=t(4198),M=t(55356),u=t(55506),p=t(9005),P=t(46270),y=t(54894),j=t(61979),k=t(25524),x=t(63891);const W=(0,x.default)(v.s)`
  svg path {
    fill: ${({theme:D})=>D.colors.neutral600};
  }
`,U=({name:D})=>(0,r.jsxs)(v.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.a8)(300),children:[(0,r.jsx)(W,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,r.jsx)(p.A,{width:`${8/16}rem`})}),(0,r.jsx)(s.o,{fontWeight:"bold",children:D})]}),A=()=>(0,r.jsx)(j.P,{renderItem:D=>{if(D.type===k.D.STAGE)return(0,r.jsx)(U,{name:typeof D.item=="string"?D.item:null})}}),N=({children:D})=>(0,r.jsx)(w.P,{children:(0,r.jsx)(m.g,{tabIndex:-1,children:(0,r.jsx)(E.s,{children:D})})}),I=({href:D})=>{const{formatMessage:z}=(0,y.A)();return(0,r.jsx)(u.N_,{startIcon:(0,r.jsx)(P.A,{}),to:D,children:z({id:"global.back",defaultMessage:"Back"})})},T=({title:D,subtitle:z,navigationAction:X,primaryAction:q})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.x7,{name:D}),(0,r.jsx)(M.Q,{navigationAction:X,primaryAction:q,title:D,subtitle:z})]})},35658:($,C,t)=>{t.d(C,{a:()=>w,g:()=>s});var r=t(57438),v=t(25524);function s(m){if(!m)return null;const M=Object.entries(r._.colors).filter(([,u])=>u.toUpperCase()===m.toUpperCase()).reduce((u,[p])=>(v.S?.[p]&&(u=p),u),null);return M?{themeColorName:M,name:v.S[M]}:null}function w(){return Object.entries(v.S).map(([m,E])=>({hex:r._.colors[m].toUpperCase(),name:E}))}},41464:($,C,t)=>{t.d(C,{u:()=>m});var r=t(21272),v=t(55506),s=t(54894),w=t(61979);const m=(E={},M)=>{const{locale:u}=(0,s.A)(),p=(0,v.QM)(u,{sensitivity:"base"}),{data:P,error:y,isError:j,isLoading:k,refetch:x}=(0,w.z)(E,M);return{roles:r.useMemo(()=>[...P??[]].sort((U,A)=>p.compare(U.name,A.name)),[P,p]),error:y,isError:j,isLoading:k,refetch:x}}},28239:($,C,t)=>{t.d(C,{u:()=>M});var r=t(21272),v=t(55506),s=t(61979);const w=s.n.injectEndpoints({endpoints:u=>({getComponents:u.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:p=>p.data}),getContentTypes:u.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:p=>p.data})}),overrideExisting:!1}),{useGetComponentsQuery:m,useGetContentTypesQuery:E}=w;function M(){const{_unstableFormatAPIError:u}=(0,v.wq)(),p=(0,v.hN)(),P=m(),y=E();r.useEffect(()=>{y.error&&p({type:"warning",message:u(y.error)})},[y.error,u,p]),r.useEffect(()=>{P.error&&p({type:"warning",message:u(P.error)})},[P.error,u,p]);const j=P.isLoading||y.isLoading,k=r.useMemo(()=>(y?.data??[]).filter(W=>W.kind==="collectionType"&&W.isDisplayed),[y?.data]),x=r.useMemo(()=>(y?.data??[]).filter(W=>W.kind!=="collectionType"&&W.isDisplayed),[y?.data]);return{isLoading:j,components:r.useMemo(()=>P?.data??[],[P?.data]),collectionTypes:k,singleTypes:x}}},71087:($,C,t)=>{t.d(C,{u:()=>v});var r=t(15773);function v(s={}){const{id:w="",...m}=s,{data:E,isLoading:M}=(0,r.c)({id:w,populate:"stages",...m}),[u]=(0,r.d)(),[p]=(0,r.e)(),[P]=(0,r.f)(),{workflows:y,meta:j}=E??{};return{meta:j,workflows:y,isLoading:M,createWorkflow:u,updateWorkflow:p,deleteWorkflow:P}}},47249:($,C,t)=>{t.d(C,{S:()=>et,W:()=>at,a:()=>$e,b:()=>he,c:()=>fe,d:()=>xe,e:()=>Ie,f:()=>ke,g:()=>Le,h:()=>ge,i:()=>Be,j:()=>Fe,k:()=>Ne,l:()=>Ce,r:()=>je,s:()=>ze,u:()=>Se,v:()=>nt});var r=t(21272),v=t(61979),s=t(92132),w=t(94061),m=t(30893),E=t(83997),M=t(56654),u=t(88353),p=t(98765),P=t(57237),y=t(60888),j=t(44604),k=t(90151),x=t(68074),W=t(7537),U=t(48323),A=t(55506),N=t(54894),I=t(82437),T=t(63891),D=t(43206),z=t(85641),X=t(39116),q=t(90625),ye=t(33544),ce=t(5336),H=t(66078),F=t(61535),De=t(25801),i=t(25524),ee=t(35658),L=t(70653),Pe=t(56336),_e=t(88761),Oe=t(48940),S=t(12083);function Se(e,a){const o=(0,v.Q)();(0,r.useEffect)(()=>{o.injectReducer(e,a)},[o,e,a])}function Te(e){return{type:i.j,payload:{id:e}}}function Ce({workflow:e}){return{type:i.A,payload:e}}function xe({workflows:e}){return{type:i.c,payload:e}}function We(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,a){return{type:i.l,payload:{stageId:e,...a}}}function Ae(e){return{type:i.m,payload:e}}function Re(e,a){return{type:i.n,payload:{newIndex:a,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function je(){return{type:i.e}}function Ie(e){return{type:i.f,payload:e}}function ke(e){return{type:i.g,payload:e}}function Le(e){return{type:i.h,payload:e}}const se=(0,T.default)(D.A)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,be=(0,T.default)(w.a)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...a})=>(0,s.jsx)(be,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...a,children:(0,s.jsxs)(E.s,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(m.o,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:ye.node.isRequired};const G={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=G,a){return(0,_e.jM)(e,o=>{const{payload:c}=a;switch(a.type){case i.f:{o.serverState.contentTypes=c;break}case i.h:{o.clientState.isLoading=c;break}case i.g:{o.serverState.roles=c;break}case i.A:{const n=c;n&&(o.serverState.workflow=n,o.clientState.currentWorkflow.data={...n,stages:n.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{o.serverState.workflows=c;break}case i.e:{o.clientState=G.clientState,o.serverState=(0,_e.mq)(G.serverState);break}case i.k:{const{stageId:n}=c,{currentWorkflow:d}=e.clientState;o.clientState.currentWorkflow.data.stages=d.data.stages?.filter(f=>(f?.id??f.__temp_key__)!==n);break}case i.d:{const{currentWorkflow:n}=e.clientState;n.data||(o.clientState.currentWorkflow.data={stages:[]});const d=me(o.clientState.currentWorkflow.data.stages);o.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:n}=e.clientState,{id:d}=c,f=n.data.stages?.findIndex(h=>(h?.id??h?.__temp_key__)===d);if(f!==void 0&&f!==-1){const h=n.data.stages?.[f];o.clientState.currentWorkflow.data.stages?.splice(f+1,0,{...h,id:void 0,__temp_key__:me(o.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:n}=e.clientState,{stageId:d,...f}=c;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(h=>(h.id??h.__temp_key__)===d?{...h,...f}:h);break}case i.m:{const{currentWorkflow:n}=e.clientState;o.clientState.currentWorkflow.data.stages=n.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:n}}}=e.clientState,{newIndex:d,oldIndex:f}=c;if(n&&d>=0&&d<n.length){const h=n[f],R=[...n];R.splice(f,1),R.splice(d,0,h),o.clientState.currentWorkflow.data.stages=R}break}case i.i:{o.clientState.currentWorkflow.data={...o.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const a=e.map(o=>Number(o.id??o.__temp_key__));return Math.max(...a,-1)+1},b=e=>e[i.R]??G,Ke=(0,L.Mz)(b,({serverState:{contentTypes:e}})=>e),fe=(0,L.Mz)(b,({serverState:{roles:e}})=>e),he=(0,L.Mz)(b,({clientState:{currentWorkflow:e}})=>e.data),Ue=(0,L.Mz)(b,({serverState:{workflows:e}})=>e),$e=(0,L.Mz)(b,({serverState:e,clientState:{currentWorkflow:a}})=>!Pe(e.workflow,a.data)),Ne=(0,L.Mz)(b,({serverState:e,clientState:{currentWorkflow:a}})=>!(e.workflow?.stages??[]).every(o=>!!a.data.stages?.find(({id:c})=>c===o.id))),ze=(0,L.Mz)(b,({clientState:{isLoading:e}})=>e),Fe=(0,L.Mz)(b,({serverState:e})=>e),Ye=(0,T.default)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,He=(0,T.default)(E.s)`
  > * {
    flex-grow: 1;
  }
`,Ge=(0,T.default)(ce.Dr)`
  color: ${({theme:e})=>e.colors.danger600};
`,Ve=(0,T.default)(H.l9)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Qe=(0,T.default)(u.K)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Ze=(0,ee.a)(),Je=()=>(0,s.jsx)(w.a,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Xe=({id:e,index:a,canDelete:o,canReorder:c,canUpdate:n,isOpen:d=!1,stagesCount:f})=>{const h=l=>`${l+1} of ${f}`,R=l=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:h(l)}))},ae=l=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:h(l)}))},V=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},ne=(l,K)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:h(l)})),O(Re(K,l))},oe=()=>{ie(!0)},[Q,_]=r.useState(null),{formatMessage:g}=(0,N.A)(),{trackUsage:re}=(0,A.z1)(),O=(0,I.wA)(),ot=(0,A.hN)(),[le,rt]=r.useState(d),[lt,ie]=r.useState(!1),[B,Ee,it]=(0,F.Mt)(`stages.${a}.name`),[Z,Me,dt]=(0,F.Mt)(`stages.${a}.color`),[Y,ve,ct]=(0,F.Mt)(`stages.${a}.permissions`),_t=(0,I.d4)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,ht,we]=(0,v.T)(c,{index:a,item:{index:a,name:B.value},onGrabItem:R,onDropItem:ae,onMoveItem:ne,onCancel:V,type:i.D.STAGE}),Et=(0,v.V)(mt,ft),Mt=Ze.map(({hex:l,name:K})=>({value:l,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:K}),color:l})),{themeColorName:vt}=(0,ee.g)(Z.value)??{},de=_t?.filter(l=>l.code!=="strapi-super-admin");return r.useEffect(()=>{we((0,De.n)(),{captureDraggingState:!1})},[we,a]),(0,s.jsxs)(w.a,{ref:l=>Et(l),children:[Q&&(0,s.jsx)(p.s,{"aria-live":"assertive",children:Q}),ut?(0,s.jsx)(Je,{}):(0,s.jsxs)(P.n,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:Ee.error??Me?.error??ve?.error,hasErrorMessage:!1,children:[(0,s.jsx)(y.P,{title:B.value,togglePosition:"left",action:(o||n)&&(0,s.jsxs)(E.s,{children:[(0,s.jsxs)(H.bL,{children:[(0,s.jsxs)(Ve,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(z.A,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(p.s,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(H.UC,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(H.x8,{children:[n&&(0,s.jsx)(ce.Dr,{onClick:()=>O(Te(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),o&&(0,s.jsx)(Ge,{onClick:()=>O(We(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),n&&(0,s.jsx)(Qe,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:ht,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(X.A,{})})]})}),(0,s.jsx)(j.u,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(k.x,{gap:4,children:[(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(W.k,{...B,id:B.name,disabled:!n,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:Ee.error??!1,onChange:l=>{it.setValue(l.target.value),O(te(e,{name:l.target.value}))},required:!0})}),(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(U.Z,{disabled:!n,error:Me?.error??!1,id:Z.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:l=>{dt.setValue(l),O(te(e,{color:String(l)}))},value:Z.value.toUpperCase(),startIcon:(0,s.jsx)(E.s,{as:"span",height:2,background:Z.value,borderColor:vt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:Mt.map(({value:l,label:K,color:J})=>{const{themeColorName:wt}=(0,ee.g)(J)||{};return(0,s.jsx)(U.eY,{value:l,startIcon:(0,s.jsx)(E.s,{as:"span",height:2,background:J,borderColor:wt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:K},l)})})}),(0,s.jsx)(x.E,{col:6,children:de?.length===0?(0,s.jsx)(A.WT,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:Y.name}):(0,s.jsxs)(E.s,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(He,{grow:1,children:(0,s.jsx)(M.KF,{...Y,disabled:!n,error:ve.error??!1,id:Y.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:l=>{const K=l.map(J=>({role:parseInt(J,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(K),O(te(e,{permissions:K}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(Y.value??[]).map(l=>`${l.role}`),withTags:!0,children:(0,s.jsx)(M.np,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(l=>`${l.id}`),children:de?.map(l=>(0,s.jsx)(Ye,{value:`${l.id}`,children:l.name},l.id))})})}),(0,s.jsx)(u.K,{disabled:!n,icon:(0,s.jsx)(q.A,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>oe()})]})})]})})]}),(0,s.jsx)(A.TM.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{O(Ae({permissions:Y.value})),ie(!1),ot({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(A.TM.Body,{children:(0,s.jsx)(m.o,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,T.default)(w.a)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:a=!0,stages:o=[]})=>{const{formatMessage:c}=(0,N.A)(),n=(0,I.wA)(),{trackUsage:d}=(0,A.z1)();return(0,s.jsxs)(E.s,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(w.a,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(E.s,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:o.map((f,h)=>{const R=Number(f?.id??f.__temp_key__);return(0,s.jsx)(w.a,{as:"li",children:(0,s.jsx)(Xe,{id:R,index:h,isOpen:!f.id,canDelete:o.length>1&&e,canReorder:o.length>1,canUpdate:a,stagesCount:o.length})},`stage-${R}`)})})]}),a&&(0,s.jsx)(pe,{type:"button",onClick:()=>{n(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,T.default)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,T.default)(m.o)`
  font-style: italic;
`,at=({canUpdate:e=!0})=>{const{formatMessage:a,locale:o}=(0,N.A)(),c=(0,I.wA)(),n=(0,I.d4)(Ke),d=(0,I.d4)(he),f=(0,I.d4)(Ue),[h,R,ae]=(0,F.Mt)("name"),[V,ne,oe]=(0,F.Mt)("contentTypes"),Q=(0,A.QM)(o,{sensitivity:"base"});return(0,s.jsxs)(k.x,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(W.k,{...h,id:h.name,disabled:!e,label:a({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:R.error??!1,onChange:_=>{c(ue({name:_.target.value})),ae.setValue(_.target.value)},required:!0})}),n&&(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(M.KF,{...V,customizeContent:_=>a({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ne.error??!1,id:V.name,label:a({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),oe.setValue(_)},placeholder:a({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...n.collectionTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...n.collectionTypes].sort((_,g)=>Q.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...n.singleTypes.length>0?[{label:a({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...n.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(M.np,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=f?.find(O=>(d&&O.id!==d.id||!d)&&O.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(m.o,{children:a({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...O)=>(0,s.jsx)(m.o,{as:"em",fontWeight:"bold",children:O}),i:(...O)=>(0,s.jsx)(st,{children:O})})})},g.value)})},_.label)})})})]})};async function nt({values:e,formatMessage:a}){const o=S.Ik({contentTypes:S.YO().of(S.Yj()),name:S.Yj().max(255,a({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:S.YO().of(S.Ik().shape({name:S.Yj().required(a({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,a({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",a({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:n}}=this;return n?.stages.filter(d=>d.name===c).length===1}),color:S.Yj().required(a({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:S.YO(S.Ik({role:S.ai().strict().typeError(a({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:S.Yj().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await o.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const n={};return c instanceof S.yI&&c.inner.forEach(d=>{d.path&&Oe(n,d.path,d.message)}),n}}}}]);