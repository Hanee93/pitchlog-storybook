import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-iUPssvWC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,n as a,r as o}from"./storyDecorators-DI9SAnnw.js";import{n as s,t as c}from"./TabBar-BW4rWHKQ.js";function l(e){let[t,n]=(0,u.useState)(`home`);return(0,d.jsx)(c,{...e,value:t,onSelect:n})}var u,d,f,p,m,h,g,_;e((()=>{u=t(n(),1),s(),o(),d=r(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,p=[{value:`home`,label:`홈`,icon:`house`},{value:`matches`,label:`경기`,icon:`flag`},{value:`club`,label:`동호회`,icon:`user-group`},{value:`my`,label:`MY`,icon:`circle-user-round`}],m={title:`Components/TabBar`,component:c,decorators:[a],globals:{backgrounds:{value:`canvas`}},args:{items:p,value:`home`,homeIndicator:!0},argTypes:{homeIndicator:{control:`boolean`,description:`홈 인디케이터 여백 24`},onSelect:{action:`select`}},parameters:{docs:{description:{component:`[TabBar 69:386](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-386), [TabItem 69:385](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-385). 폭 402 bg/surface, 상단 hairline. 항목 높이 44, 아이콘 24 + caption 12. Active text/primary, 비활성 text/secondary. 세로 구성은 헤어라인 1 + 상단 10 + 항목 44 + 하단(홈 인디케이터) 24 = 79.

**변경 이력.** 2026-09-24 비활성 라벨을 text/tertiary(mist, 2.8:1)에서 text/secondary(slate, 5.5:1)로 바꿨다. axe 대비 검사 결과. 같은 날 세로 구성을 1 + 44 + 34에서 1 + 10 + 44 + 24로 바꿨다. Figma tabBar 프레임과 앱 화면(Home, Matches)이 항목 위에 여백을 두기 때문이다. 총 높이 79는 그대로.

**용도.** 화면 하단 이동 전용. 4개 고정(홈, 경기, 동호회, MY).

**코드.** nav > ul > li. href가 있으면 a, 없으면 button. 현재 탭은 aria-current="page". 라우터는 바깥에서 연결한다.

### 플랫폼 참고

${i([[`원형`,`Navigation bar 80dp. 활성 항목에 64x32 필 인디케이터(secondary-container) + 아이콘 채움 전환`,`Tab bar 49pt + 홈 인디케이터 34. 선택 항목은 tintColor. iOS 26은 떠 있는 Glass 탭바`,`HIG 원형. 1 + 10 + 44 + 24 = 79로 HIG 83보다 4 낮게, M3 80보다 1 짧게. 인디케이터 필 없음`],[`항목 수`,`3~5`,`2~5`,`4 고정`],[`라벨`,`Label medium 12, 항상 표시 또는 선택 시만`,`10pt, 항상 표시`,`caption 12 항상 표시. HIG 10은 한글 가독성이 떨어져 12`],[`활성 표시`,`인디케이터 필 + 채움 아이콘`,`tintColor(파랑)`,`색만 ink vs slate. 아이콘 채움 전환 없음. 활성 탭은 위치이지 강조가 아니라 블루 금지. iOS의 systemGray 비활성(3.0:1)과 달리 4.5:1을 지킨다`],[`아이콘`,`Material Symbols 24, outlined ↔ filled`,`SF Symbols`,`Lucide 24, 선 2px 고정`],[`상단 구분`,`없음(surface 색 차이, elevation 2)`,`hairline separator + blur 재질`,`hairline 1px, 불투명 흰색. 재질과 그림자 모두 쓰지 않는다`]])}`}}}},h={render:function(e){let[,t]=f();return(0,d.jsx)(c,{...e,onSelect:n=>{e.onSelect?.(n),t({value:n})}})}},g={name:`화면 안`,render:()=>(0,d.jsx)(`div`,{className:`flex h-[420px] w-[402px] flex-col justify-end bg-court-white`,children:(0,d.jsx)(l,{items:p})})},_=[`Playground`,`InShell`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <TabBar {...args} onSelect={value => {
      args.onSelect?.(value);
      setArgs({
        value
      });
    }} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '화면 안',
  render: () => <div className="flex h-[420px] w-[402px] flex-col justify-end bg-court-white">
      <Demo items={items} />
    </div>
}`,...g.parameters?.docs?.source}}}}))();export{g as InShell,h as Playground,_ as __namedExportsOrder,m as default};