import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,r,t as i}from"./storyDecorators-CyXXSInj.js";import{n as a,t as o}from"./Toast-C8gKSruN.js";var s,c,l,u,d;e((()=>{a(),r(),s=t(),c={title:`Components/Toast`,component:o,decorators:[i],globals:{backgrounds:{value:`canvas`}},args:{type:`success`,message:`경기가 저장됐습니다`,action:`보기`},argTypes:{type:{control:`inline-radio`,options:[`default`,`success`,`danger`],description:`Figma Type`},action:{control:`text`,description:`Figma Show action + Action`},onAction:{action:`action`}},parameters:{docs:{description:{component:`[Figma 134:1826](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=134-1826). Type Default | Success | Danger. 폭 354 bg/inverse, body/sm text/inverse, radius 4, float/sm, 상하 패딩 14 좌우 16. Success는 status/live 점, Danger는 status/danger 점 8. 오른쪽 텍스트 액션 선택.

**배치.** 탭바 위 16, 한 번에 하나, 3초. 타이머와 큐는 화면이 맡고 컴포넌트는 role="status"로 읽힌다.

### 플랫폼 참고

${n([[`원형`,`Snackbar. 48dp(한 줄), inverse-surface, radius 4, 왼쪽 정렬 텍스트 + 오른쪽 inverse-primary 액션, 4~10초`,`토스트 없음. HUD(가운데 재질 박스), 상단 배너, 인앱 알림`,`M3 Snackbar 계열. ink 바탕, radius 4, 3초. 오른쪽 텍스트 액션`],[`상태 색`,`없음(텍스트로)`,`해당 없음`,`점 8로 성공(status/live)과 오류(status/danger)를 구분. 바탕색은 바꾸지 않아 유채색 규칙을 지킨다`],[`위치`,`하단, FAB와 내비 위`,`해당 없음`,`탭바 위 16, 좌우 24`],[`액션 색`,`inverse-primary`,`해당 없음`,`흰 글자 600. 블루를 쓰지 않는다`]])}`}}}},l={},u={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(o,{type:`default`,message:`투표를 마감했습니다`}),(0,s.jsx)(o,{type:`success`,message:`경기가 저장됐습니다`,action:`보기`}),(0,s.jsx)(o,{type:`danger`,message:`저장에 실패했습니다`,action:`다시`})]})},d=[`Playground`,`Types`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Toast type="default" message="투표를 마감했습니다" />
      <Toast type="success" message="경기가 저장됐습니다" action="보기" />
      <Toast type="danger" message="저장에 실패했습니다" action="다시" />
    </div>
}`,...u.parameters?.docs?.source}}}}))();export{l as Playground,u as Types,d as __namedExportsOrder,c as default};