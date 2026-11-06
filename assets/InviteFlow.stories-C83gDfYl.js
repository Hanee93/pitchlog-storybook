import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-DCJolSNO.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./Button-729N8V_A.js";import{n as o,t as ee}from"./Avatar-Bo7qEvZ9.js";import{n as s,t as c}from"./Badge-BmIrkUMe.js";import{n as l,t as u}from"./ConfirmSheet-BJUjk5Qu.js";import{n as d,t as f}from"./EmptyState-D7tEyqyK.js";import{n as te,t as p}from"./Header-CP8p8QrJ.js";import{n as m,t as h}from"./IconButton-_4-mu8fg.js";import{n as g,t as _}from"./FormRow-B-hN58kh.js";import{n as v,t as y}from"./ScreenTitle-CEWD_M4T.js";import{n as b,t as x}from"./Screen-BNtSZkdn.js";import{i as S,n as C,r as ne,t as w}from"./Card-C_kzdY0N.js";import{n as re,t as T}from"./Section-Kia2mQNb.js";import{n as ie,t as E}from"./ItemRow-Bv9drFyp.js";import{n as D,t as O}from"./TabBar-C1-cKQ0l.js";import{n as k,r as A,t as j}from"./BottomDock-DlQNs6Jd.js";import{n as M,t as N}from"./Toast-C8gKSruN.js";import{n as P,t as F}from"./Vote-DpyD4fKM.js";function I({children:e}){return(0,q.jsx)(`div`,{className:`flex items-start gap-10`,children:e})}function L({name:e,children:t}){return(0,q.jsxs)(`div`,{className:`flex shrink-0 flex-col gap-3`,children:[(0,q.jsx)(`p`,{className:`text-body-sm text-slate`,children:e}),(0,q.jsx)(`div`,{className:`shadow-float-sm`,children:t})]})}function R({children:e}){return(0,q.jsxs)(x,{fixedHeight:!0,header:(0,q.jsx)(p,{surface:!0,title:`클럽 초대`,left:(0,q.jsx)(h,{icon:`close`,label:`닫기`})}),bottom:(0,q.jsx)(j,{children:(0,q.jsxs)(k,{children:[(0,q.jsx)(a,{variant:`outline`,size:`lg`,children:`거절하기`}),(0,q.jsx)(a,{variant:`primary`,size:`lg`,children:`수락하기`})]})}),children:[(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-6 px-6 pt-6 text-center`,children:[(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,q.jsx)(`p`,{className:`text-body-sm text-slate`,children:`From`}),(0,q.jsx)(ee,{name:`김민수`,size:`md`,showLabel:!0})]}),(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,q.jsx)(X,{}),(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,q.jsx)(`p`,{className:`text-app-heading font-semibold text-ink`,children:`FC 토요일`}),(0,q.jsx)(`p`,{className:`text-body-sm text-slate`,children:`매주 토요일 밤, 서초에서 뜁니다`})]}),(0,q.jsx)(c,{variant:`filled-neutral`,children:`매니저`})]})]}),e]})}function z(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(``),[i,o]=(0,K.useState)(``);return(0,q.jsx)(x,{fixedHeight:!0,header:(0,q.jsx)(p,{surface:!0,title:`회원가입`,left:(0,q.jsx)(h,{icon:`chevron-left`,label:`뒤로`})}),bottom:(0,q.jsxs)(`div`,{className:`flex flex-col gap-2 px-6 pt-6 pb-[72px]`,children:[(0,q.jsx)(a,{variant:`primary`,size:`lg`,disabled:!e||!n||!i,children:`가입하고 초대 수락하기`}),(0,q.jsx)(a,{variant:`text`,size:`lg`,children:`이미 계정이 있어요`})]}),children:(0,q.jsxs)(T,{children:[(0,q.jsx)(E,{size:`md`,title:`FC 토요일`,badge:(0,q.jsx)(c,{variant:`filled-neutral`,children:`매니저`}),sub:`김민수님의 초대를 수락하는 중`,avatar:{name:`F`}}),(0,q.jsxs)(`div`,{className:`flex flex-col`,children:[(0,q.jsx)(_,{label:`이름`,value:e,onChange:t,placeholder:`경기에서 쓸 이름`}),(0,q.jsx)(_,{label:`이메일`,value:n,onChange:r,placeholder:`name@example.com`,inputMode:`email`}),(0,q.jsx)(_,{label:`비밀번호`,value:i,onChange:o,placeholder:`8자 이상`,divider:!1})]})]})})}function B(){return(0,q.jsx)(x,{fixedHeight:!0,header:(0,q.jsx)(p,{surface:!0,right:(0,q.jsx)(h,{icon:`close`,label:`닫기`})}),bottom:(0,q.jsx)(j,{children:(0,q.jsx)(a,{variant:`primary`,size:`lg`,children:`홈으로 가기`})}),children:(0,q.jsxs)(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center`,children:[(0,q.jsx)(X,{}),(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,q.jsx)(`p`,{className:`text-app-heading font-semibold text-ink`,children:`FC 토요일 멤버가 됐어요`}),(0,q.jsx)(`p`,{className:`text-body-sm text-slate`,children:`멤버 14명이 함께 뜁니다. 다음 경기는 9월 6일 (토) 20:00, 서초 풋살파크 A코트`})]}),(0,q.jsx)(c,{variant:`outline-neutral`,children:`멤버`})]})})}function V(){let[e,t]=(0,K.useState)(null);return(0,q.jsx)(F,{label:`참석 투표`,me:`이수현`,value:e,onChange:t,options:[{value:`yes`,label:`참석`,count:9},{value:`no`,label:`불참`,count:3},{value:`maybe`,label:`미정`,count:2}],summary:`참석 9명, 미정 5명`,deadline:`투표 마감 금 18:00`})}function H(){return(0,q.jsx)(x,{background:`canvas`,statusBar:64,fixedHeight:!0,header:(0,q.jsx)(y,{title:`FC 토요일`,onSwitch:()=>{},inset:16,compact:!0}),bottom:(0,q.jsx)(O,{items:Y,value:`home`}),children:(0,q.jsxs)(`div`,{className:`flex flex-col gap-4 px-4 pt-4 pb-4`,children:[(0,q.jsxs)(w,{title:`9월 6일 (토) 20:00`,action:(0,q.jsx)(c,{variant:`tint-neutral`,children:`D-5`}),children:[(0,q.jsx)(`p`,{className:`-mt-2 text-body-sm text-slate`,children:`서초 풋살파크 A코트`}),(0,q.jsx)(V,{})]}),(0,q.jsx)(w,{title:`지난 경기 기록`,children:(0,q.jsx)(f,{title:`아직 참여한 경기가 없어요`,description:`첫 경기에서 태그를 착용하면 속도와 활동량이 여기에 쌓입니다`,className:`py-6`})}),(0,q.jsx)(w,{title:`팀 소식`,children:(0,q.jsx)(E,{title:`이수현님이 들어왔습니다`,sub:`방금, 김민수님의 초대`,avatar:{name:`이수현`,size:`sm`,highlight:!0}})})]})})}function U(){return(0,q.jsx)(R,{children:(0,q.jsx)(u,{open:!0,fixed:!1,title:`초대를 거절하시겠어요?`,body:`거절하면 김민수님이 다시 초대해야 합니다`,confirmLabel:`거절하기`,onConfirm:()=>{},onCancel:()=>{}})})}function W(){return(0,q.jsx)(x,{fixedHeight:!0,header:(0,q.jsx)(p,{surface:!0,right:(0,q.jsx)(h,{icon:`close`,label:`닫기`})}),bottom:(0,q.jsx)(j,{children:(0,q.jsx)(a,{variant:`primary`,size:`lg`,children:`pitchLog 시작하기`})}),children:(0,q.jsx)(`div`,{className:`flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center`,children:(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,q.jsx)(`p`,{className:`text-app-heading font-semibold text-ink`,children:`초대를 거절했어요`}),(0,q.jsx)(`p`,{className:`text-body-sm text-slate`,children:`FC 토요일에 들어가지 않습니다. 마음이 바뀌면 김민수님에게 다시 초대를 요청하세요`})]})})})}function G({invites:e=!1,toast:t}){return(0,q.jsxs)(x,{statusBar:64,fixedHeight:!0,header:(0,q.jsx)(y,{title:`pitchLog`,action:(0,q.jsx)(h,{icon:`settings`,label:`설정`})}),children:[e&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(T,{title:`받은 초대`,children:(0,q.jsx)(E,{title:`FC 원샷`,badge:(0,q.jsx)(c,{variant:`outline-neutral`,children:`멤버`}),sub:`박지훈님이 초대, 10월 19일까지`,avatar:{name:`F`},trailing:(0,q.jsx)(a,{variant:`secondary`,size:`sm`,children:`보기`})})}),(0,q.jsx)(ne,{})]}),(0,q.jsx)(T,{children:(0,q.jsx)(f,{title:e?`초대를 수락하거나 직접 시작하세요`:`아직 소속된 클럽이 없어요`,description:e?`클럽을 만들면 바로 관리자가 됩니다`:`클럽을 만들거나 초대를 받아 시작하세요`,action:(0,q.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,q.jsx)(a,{variant:`primary`,size:`lg`,children:`클럽 만들기`}),(0,q.jsx)(a,{variant:`outline`,size:`lg`,children:`초대 링크로 가입하기`})]})})}),t&&(0,q.jsx)(`div`,{className:`absolute inset-x-6 bottom-[50px]`,children:(0,q.jsx)(N,{message:t})})]})}var K,q,J,Y,X,Z,Q,$;e((()=>{K=t(n(),1),b(),S(),re(),C(),v(),d(),ie(),te(),m(),i(),s(),o(),D(),g(),A(),l(),M(),P(),q=r(),J={title:`Templates/초대 플로우`,component:x,globals:{backgrounds:{value:`canvas`}},parameters:{layout:`padded`,docs:{description:{component:`초대 링크로 들어온 사람의 두 갈래. 왼쪽에서 오른쪽으로 읽는다. Figma 원본은 초대 수락하기 화면 한 장이고 나머지는 패턴만으로 새로 그렸다.

| 플로우 | 화면 | 뼈대 |
|---|---|---|
| 수락 (비로그인) | 초대 → 회원가입 → 입단 완료 → 홈(첫 진입) | 상세 화면 + BottomDock ButtonGroup / 작업 화면 + FormRow / EmptyState / 홈 Card |
| 거절 | 거절 확인 → 거절 완료(비로그인) / 소속 없음 게이트(로그인) → 게이트(받은 초대 있음) | ConfirmSheet / EmptyState / Screen 64 + ScreenTitle + EmptyState + Toast |

규칙: 초대 화면은 공개 라우트라 뒤로 가기 대신 닫기(X). 수락을 눌러야 회원가입으로 가고, 가입이 끝나면 같은 토큰으로 돌아와 바로 수락된다. 거절은 로그인 없이 그 자리에서 끝난다. 소속 클럽 0개면 탭바 없는 게이트 화면 하나로 보내고, 클럽이 생기는 순간 탭바가 처음 나타난다.`}}}},Y=[{value:`home`,label:`홈`,icon:`house`},{value:`matches`,label:`경기`,icon:`flag`},{value:`club`,label:`동호회`,icon:`user-group`},{value:`my`,label:`MY`,icon:`circle-user-round`}],X=({size:e=94})=>(0,q.jsx)(`span`,{"aria-hidden":`true`,className:`block rounded-lg bg-line-gray`,style:{width:e,height:e}}),Z={name:`수락 (비로그인)`,args:{children:null},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{name:`1 초대 (비로그인)`,children:(0,q.jsx)(R,{})}),(0,q.jsx)(L,{name:`2 회원가입 (수락 누름)`,children:(0,q.jsx)(z,{})}),(0,q.jsx)(L,{name:`3 입단 완료`,children:(0,q.jsx)(B,{})}),(0,q.jsx)(L,{name:`4 홈 (첫 진입)`,children:(0,q.jsx)(H,{})})]})},Q={name:`거절`,args:{children:null},render:()=>(0,q.jsxs)(I,{children:[(0,q.jsx)(L,{name:`1 거절 확인`,children:(0,q.jsx)(U,{})}),(0,q.jsx)(L,{name:`2a 거절 완료 (비로그인)`,children:(0,q.jsx)(W,{})}),(0,q.jsx)(L,{name:`2b 소속 없음 게이트 (로그인)`,children:(0,q.jsx)(G,{toast:`초대를 거절했어요`})}),(0,q.jsx)(L,{name:`게이트, 받은 초대 있음`,children:(0,q.jsx)(G,{invites:!0})})]})},$=[`AcceptFlow`,`DeclineFlow`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '수락 (비로그인)',
  args: {
    children: null
  },
  /* FormRow 플레이스홀더(text/tertiary)는 작업 화면 템플릿과 같은 대비 예외 */
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <Flow>
      <Frame name="1 초대 (비로그인)">
        <InviteScreen />
      </Frame>
      <Frame name="2 회원가입 (수락 누름)">
        <SignUpScreen />
      </Frame>
      <Frame name="3 입단 완료">
        <JoinedScreen />
      </Frame>
      <Frame name="4 홈 (첫 진입)">
        <HomeFirstScreen />
      </Frame>
    </Flow>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '거절',
  args: {
    children: null
  },
  render: () => <Flow>
      <Frame name="1 거절 확인">
        <DeclineConfirmScreen />
      </Frame>
      <Frame name="2a 거절 완료 (비로그인)">
        <DeclinedGuestScreen />
      </Frame>
      <Frame name="2b 소속 없음 게이트 (로그인)">
        <NoClubScreen toast="초대를 거절했어요" />
      </Frame>
      <Frame name="게이트, 받은 초대 있음">
        <NoClubScreen invites />
      </Frame>
    </Flow>
}`,...Q.parameters?.docs?.source}}}}))();export{Z as AcceptFlow,Q as DeclineFlow,$ as __namedExportsOrder,J as default};