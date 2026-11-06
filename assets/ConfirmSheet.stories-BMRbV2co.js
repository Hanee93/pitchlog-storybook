import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-DCJolSNO.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,r as a}from"./storyDecorators-CyXXSInj.js";import{n as o,t as s}from"./Button-729N8V_A.js";import{n as c,t as l}from"./ConfirmSheet-BJUjk5Qu.js";function u(){let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-4`,children:[(0,f.jsx)(s,{variant:`outline`,size:`md`,fullWidth:!1,onClick:()=>t(!0),children:`일정 등록`}),(0,f.jsx)(l,{open:e,fixed:!1,title:`캘린더에 일정이 등록되었습니다`,body:`자동 등록을 켜면 앞으로 투표가 마감된 경기가 캘린더에 바로 들어갑니다.`,confirmLabel:`자동 등록 켜기`,cancelLabel:`닫기`,confirm:`primary`,onConfirm:()=>t(!1),onCancel:()=>t(!1)})]})}var d,f,p,m,h,g,_,v,y;e((()=>{d=t(n(),1),c(),o(),a(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/ConfirmSheet`,component:l,args:{open:!0,title:`캘린더에 일정이 등록되었습니다`,body:`자동 등록을 켜면 앞으로 투표가 마감된 경기가 캘린더에 바로 들어갑니다. 자동 등록을 켤까요?`,confirmLabel:`자동 등록 켜기`,cancelLabel:`닫기`,confirm:`secondary`,fixed:!1,onConfirm:p(),onCancel:p()},argTypes:{confirm:{control:`inline-radio`,options:[`secondary`,`primary`],description:`Figma Confirm. 확인 버튼 스타일`},title:{control:`text`,description:`Figma Title`},body:{control:`text`,description:`Figma Body`},onConfirm:{action:`confirm`},onCancel:{action:`cancel`}},decorators:[e=>(0,f.jsx)(`div`,{className:`relative h-[560px] w-[402px] overflow-hidden bg-court-white`,children:(0,f.jsx)(e,{})})],parameters:{docs:{description:{component:`[Figma 546:821](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=546-821). Confirm=Secondary | Primary. 제목, 본문, 버튼 두 개로 된 확인용 바텀시트.

**구조.** 폭 402, 상단 radius 16, 핸들 36x4, 좌우 패딩 24, 홈 인디케이터 34, float/sm, 스크림. 제목 heading/sub 20, 본문 body/sm text/secondary(Alert와 같은 짝). 버튼은 취소 Outline + 확인, Large 52, 같은 폭, 간격 16.

**Alert와 나누는 기준.** 되돌릴 수 없는 확인(삭제, 탈퇴)은 가운데 Alert. 다음 행동을 고르는 가벼운 안내(설정 켜기, 이어서 하기, 저장 후 보기)는 아래에서 올라오는 이 시트. 확인 버튼은 기본 Secondary(ink)이고, 사용자에게 권하는 행동이 분명할 때만 Primary(CTA 블루). 시트가 화면을 덮으므로 화면당 CTA 하나 규칙과 충돌하지 않는다.

**코드.** role="dialog"에 제목과 본문을 연결하고 확인 버튼에 자동 포커스. 스크림 탭과 Escape는 onCancel.

### 플랫폼 참고

${i([[`대응 요소`,`Modal bottom sheet에 텍스트와 버튼을 넣는 패턴. 전용 컴포넌트 없음`,`Action sheet(iOS 13+ 하단, 제목 + 메시지 + 액션 목록 + 취소). iOS 26은 소스에 붙는 팝오버형`,`iOS Action sheet의 구조(제목, 메시지, 액션, 취소)를 M3 바텀시트 껍데기에 담았다. 액션은 목록이 아니라 나란한 버튼 두 개`],[`버튼 배치`,`오른쪽 정렬 텍스트 버튼 또는 전폭 버튼 세로 쌓기`,`전폭 액션을 세로로 쌓고 취소는 아래 따로 분리`,`같은 폭 두 개 가로. 취소 왼쪽(HIG 알럿 순서). 선택지가 둘이라 세로 쌓기보다 낮다`],[`강조`,`Filled 버튼은 primary`,`기본 액션은 bold, 파괴적은 빨강`,`확인은 ink가 기본. 권하는 행동일 때만 블루. 파괴적 확인은 이 시트를 쓰지 않는다`],[`제목`,`Headline small 24`,`13pt 회색(제목과 메시지가 작고 흐림)`,`heading/sub 20 ink + body/sm slate. HIG 액션시트보다 제목을 크게 두어 알럿과 같은 위계`],[`닫기`,`스크림 탭, 드래그`,`취소 버튼 또는 바깥 탭`,`스크림 탭, Escape, 취소 버튼. 드래그 없음`]])}`}}}},h={name:`Confirm = Secondary`},g={name:`Confirm = Primary`,args:{confirm:`primary`}},_={name:`본문 없음`,args:{body:void 0,title:`이 경기를 캘린더에 넣을까요?`,confirmLabel:`넣기`,cancelLabel:`취소`}},v={name:`열고 닫기`,render:()=>(0,f.jsx)(u,{})},y=[`Secondary`,`Primary`,`TitleOnly`,`Interactive`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Confirm = Secondary'
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Confirm = Primary',
  args: {
    confirm: 'primary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '본문 없음',
  args: {
    body: undefined,
    title: '이 경기를 캘린더에 넣을까요?',
    confirmLabel: '넣기',
    cancelLabel: '취소'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '열고 닫기',
  render: () => <Demo />
}`,...v.parameters?.docs?.source}}}}))();export{v as Interactive,g as Primary,h as Secondary,_ as TitleOnly,y as __namedExportsOrder,m as default};