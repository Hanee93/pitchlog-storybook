import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/상태와 모션`}),`
`,(0,c.jsx)(n.h1,{id:`상태와-모션`,children:`상태와 모션`}),`
`,(0,c.jsx)(n.h2,{id:`인터랙션-상태`,children:`인터랙션 상태`}),`
`,(0,c.jsx)(n.p,{children:`모든 인터랙티브 컴포넌트는 Default, Hover, Pressed, Disabled 네 상태를 가진다. 상태는 오버레이가 아니라 토큰 값으로 정의한다.`}),`
`,(0,c.jsx)(n.p,{children:`| 상태 | 채움 요소(Primary, Secondary, Selected) | 선 요소(Outline, Off) | 텍스트 요소 |
|---|---|---|---|
| Hover | 한 단계 어둡게(primary-hover, secondary-hover) | 선을 text/tertiary 또는 border/strong으로 | 라벨을 text/primary로 |
| Pressed | 두 단계 어둡게(primary-pressed, secondary-pressed) | bg/subtle 채움 + 선 한 단계 | bg/subtle 채움 |
| Disabled | bg/subtle + text/tertiary | 선 제거 + bg/subtle + text/tertiary | text/tertiary |
| Focus(키보드) | 2px ink 아웃라인, offset 2 | 같음 | 같음 |`}),`
`,(0,c.jsxs)(n.p,{children:[`코드에서 hover와 active는 CSS 의사 클래스이고, 문서와 시각 회귀를 위해 `,(0,c.jsx)(n.code,{children:`data-interaction="hover" | "pressed"`}),` 속성으로도 같은 스타일을 고정할 수 있다(`,(0,c.jsx)(n.code,{children:`src/index.css`}),`의 custom variant). Hover는 `,(0,c.jsx)(n.code,{children:`(hover: hover)`}),` 미디어 안에만 적용해 터치 화면에서 hover가 남지 않는다.`]}),`
`,(0,c.jsx)(n.h2,{id:`모션`,children:`모션`}),`
`,(0,c.jsxs)(n.p,{children:[`데이터가 드러나는 순간에만 움직인다. 바 채움(0.5s), 페이드(0.4s, 0.2s), 시트 등장(0.25s). 전부 ease-out. `,(0,c.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),`에서 모든 transition과 animation은 0으로 떨어진다.`]}),`
`,(0,c.jsx)(n.p,{children:`컴포넌트 상태 전환은 색만 transition한다. SegmentedControl의 선택 항목은 슬라이드하지 않고, Toggle의 노브만 이동한다.`}),`
`,(0,c.jsx)(n.h2,{id:`접근성-패턴`,children:`접근성 패턴`}),`
`,(0,c.jsx)(n.p,{children:`| 컴포넌트 | 역할 | 키보드 |
|---|---|---|
| Button, IconButton | button. IconButton은 aria-label 필수 | Enter, Space |
| RadioRow, SegmentedControl | radiogroup > radio, aria-checked | 방향키로 이동, Tab은 그룹 하나 |
| Checkbox, CheckboxRow | 네이티브 checkbox(시각적으로 숨김), indeterminate 속성 | Space |
| Toggle | switch, aria-checked | Enter, Space |
| FormRow | label과 input 연결, Select는 aria-labelledby | 네이티브 |
| SearchField | searchbox | 네이티브 |
| UnderlineTabs | tablist > tab, aria-selected | 방향키로 이동 |
| TabBar | nav > ul > li > a 또는 button, aria-current="page" | Tab |`}),`
`,(0,c.jsx)(n.h2,{id:`플랫폼-참고`,children:`플랫폼 참고`}),`
`,(0,c.jsx)(n.p,{children:`| 항목 | Material 3 | Apple HIG | pitchLog |
|---|---|---|---|
| 상태 표현 | State layer: 컨텐츠 색을 hover 8%, focus 10%, pressed 10%, dragged 16% 불투명도로 덮음 | 눌림은 알파 하이라이트(대개 0.2 dim), 선택은 tint | 명시적 토큰. 채움은 팔레트에서 한 단계(700), 두 단계(800). 오버레이보다 값이 예측 가능하고 Figma 변수와 1:1 |
| Hover | 포인터 기기에서 state layer | iPadOS 포인터: 요소가 살짝 커지거나 배경 하이라이트 | 색만 변화, 크기 변화 없음. (hover: hover) 가드 |
| Pressed 피드백 | Ripple(파문) | 즉시 하이라이트 | 즉시 색 변화. Ripple 없음. Toggle만 노브가 4 커진다(HIG UISwitch와 같은 발상) |
| 포커스 | Focus indicator 3dp, secondary 색 | 키보드 포커스 링(macOS, iPadOS), tvOS는 parallax | 2px ink 아웃라인 offset 2. 색이 아니라 ink라 유채색 규칙과 충돌하지 않는다 |
| Disabled | 컨텐츠 38%, 컨테이너 12% 불투명도 | 알파 0.3 정도 | 불투명도 대신 토큰(bg/subtle, text/tertiary). 겹친 요소가 비쳐 보이는 문제가 없다 |
| Easing과 시간 | Emphasized(0.2, 0, 0, 1) 500ms, Standard 300ms. Duration short 50~200, medium 250~400, long 450~600 | 스프링(duration, bounce) 기본. 시간보다 물리 | ease-out 0.2~0.5s. 스프링 없음. 데이터 앱은 튀는 움직임이 값의 신뢰를 깎는다 |
| Reduce motion | 권장 | 필수(Reduce Motion 설정) | transition과 animation 0. 페이드까지 끈다 |
| 터치 대 키보드 | 둘 다 1급 | 터치 우선, 키보드는 iPad와 외부 키보드 | 터치 우선(폰 웹앱)이지만 WAI-ARIA 패턴을 다 갖춘다. 웹이라 스크린 리더와 키보드 접근이 앱보다 흔하다 |`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),n()}))();export{s as default};