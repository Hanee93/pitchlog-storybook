import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/소개`}),`
`,(0,c.jsx)(n.h1,{id:`pitchlog-디자인-시스템`,children:`pitchLog 디자인 시스템`}),`
`,(0,c.jsxs)(n.p,{children:[`풋살 UWB 트래킹 앱의 컴포넌트 라이브러리. 원본은 Figma 파일 `,(0,c.jsx)(n.a,{href:`https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=69-72`,rel:`nofollow`,children:`피치로그`}),`의 디자인 시스템 페이지이고, 토큰은 `,(0,c.jsx)(n.code,{children:`src/index.css`}),`의 Tailwind v4 `,(0,c.jsx)(n.code,{children:`@theme`}),`에 있다. 이 스토리북은 그 명세를 React 19 컴포넌트로 옮긴 것이다.`]}),`
`,(0,c.jsx)(n.h2,{id:`이-문서를-읽는-법`,children:`이 문서를 읽는 법`}),`
`,(0,c.jsxs)(n.p,{children:[`컴포넌트마다 문서 끝에 `,(0,c.jsx)(n.strong,{children:`플랫폼 참고`}),` 표가 있다. 세 열은 Material 3, Apple Human Interface Guidelines, pitchLog다. 두 가이드를 그대로 따르는 것이 목표가 아니다. 목표는 두 가이드가 같은 문제를 어떻게 다르게 풀었는지 알고, 그 위에서 pitchLog의 결정과 그 이유를 적는 것이다. 표에서 pitchLog 열이 두 가이드와 다를 때는 항상 이유가 붙어 있다.`]}),`
`,(0,c.jsx)(n.h2,{id:`시스템을-관통하는-결정-여섯-가지`,children:`시스템을 관통하는 결정 여섯 가지`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`화면당 CTA 하나.`}),` action/primary(코발트 블루)는 화면당 한 곳. 나머지 주요 액션은 ink. Material의 Filled button, HIG의 Filled button처럼 강조 색 버튼을 여러 개 두지 않는다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`섹션당 유채색 하나.`}),` CTA를 제외하면 한 섹션에 뉴트럴 외 색은 하나. 블루는 기록(data), 볼트는 장면(video), 그린은 상승과 성공 텍스트에만 쓴다. 층을 섞지 않는다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`필 금지, radius 4.`}),` 인터랙티브 요소는 radius 4, 카드 8, 시트 16, 모달 24. Material 3와 HIG 모두 캡슐이 기본이지만 pitchLog는 코트의 직선 격자와 맞추기 위해 사각을 유지한다. Toggle까지 사각이다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`외곽선과 그림자 대신 헤어라인.`}),` 카드 외곽선 금지, 앱 화면에 그림자 없음. 구분은 border/hairline과 여백. Material의 elevation 단계와 HIG의 재질(blur) 모두 쓰지 않는다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`상태는 토큰 값으로.`}),` Material의 state layer(8%, 10% 오버레이) 대신 hover와 pressed 색을 토큰으로 고정한다. Figma 변수와 코드가 1:1이라 검증이 쉽다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`대표 숫자만 Inter.`}),` display 스타일과 단위만 Inter, 순간값은 이탤릭, 총계는 업라이트. 한글과 문장은 Pretendard. 두 가이드에 없는 pitchLog 고유 규칙이다.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`폭-기준`,children:`폭 기준`}),`
`,(0,c.jsx)(n.p,{children:`Figma 프레임은 iPhone 기준 402. 콘텐츠 폭은 좌우 24를 뺀 354. 풀블리드 요소(TabBar, UnderlineTabs, Header)는 402. 스토리의 데코레이터가 이 두 폭을 준다.`}),`
`,(0,c.jsx)(n.h2,{id:`접근성-기준선`,children:`접근성 기준선`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`텍스트 대비 4.5:1 이상(WCAG AA). CTA 블루 위 흰 글자 5.9:1. orange는 2.3:1이라 채움 전용, text/tertiary(mist)는 읽어야 하는 정보에 쓰지 않는다.`}),`
`,(0,c.jsx)(n.li,{children:`터치 영역 44 이상(HIG 최소). 20 상자 Checkbox 같은 인라인 요소는 44 행 안에 둔다.`}),`
`,(0,c.jsx)(n.li,{children:`키보드: 포커스 링은 2px ink, offset 2. radiogroup과 tablist는 방향키로 이동.`}),`
`,(0,c.jsx)(n.li,{children:`reduced motion에서 모든 transition과 animation은 0.`}),`
`,(0,c.jsx)(n.li,{children:`모든 스토리가 a11y 애드온(axe)을 오류 기준으로 통과한다. 예외는 text/tertiary(2.8:1)가 명세대로 쓰인 세 자리뿐이다. FormRow Select 플레이스홀더, HighlightCard와 ClipThumbnail의 메타 줄. 해당 스토리에서 대비 규칙을 끄고 이유를 적었다. 반대로 Metric과 RulerPicker의 단위는 명세가 tertiary였지만 읽어야 하는 정보라 text/secondary로 올렸다.`}),`
`,(0,c.jsx)(n.li,{children:`텍스트 대비 4.5:1 기준을 12px 굵은 글자(뱃지, 캡션)에도 그대로 적용한다. WCAG의 큰 글자 완화(18.66px 굵게, 24px)는 이 시스템에서 display 숫자 말고는 해당하는 자리가 없다.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`대비-위반-수정-이력-2026-09-24`,children:`대비 위반 수정 이력 (2026-09-24)`}),`
`,(0,c.jsx)(n.p,{children:`axe가 잡은 명세 수준 위반 두 가지를 Figma 변수와 코드에서 함께 고쳤다.`}),`
`,(0,c.jsx)(n.p,{children:`| 자리 | 전 | 후 |
|---|---|---|
| UnderlineTab, TabBar 비활성 라벨 | text/tertiary(mist) 2.8:1 | text/secondary(slate) 5.5:1 |
| text/secondary(slate) 원본 값. bg/subtle 위 세그먼트 비선택, Text 버튼, 폼 라벨 | #6b7270, bg/subtle 위 4.4:1 | #636a68, bg/subtle 위 5.0:1, 흰 배경 5.5:1 |
| pitch-green 글자 전부(status/success, trend/up, Delta, 랜딩 CTA 흰 글자, Badge Filled Green). 2차 검사에서 발견 | #0b9e57, 흰 배경 3.5:1 | #077a45, 양방향 5.4:1. 랜딩 hover pitch-green-dark도 #066a3c로 |
| status/danger(Badge Tint Red, 오류 텍스트, trend/down) | #d7302a, danger-tint 위 4.2:1 | #c4241e, 틴트 위 5.1:1, 흰 배경 5.8:1 |`}),`
`,(0,c.jsx)(n.p,{children:`text/tertiary(mist 2.8:1)는 그대로 둔다. 플레이스홀더, 메타, 비활성처럼 읽지 않아도 되는 자리 전용이라는 규칙이 그 근거이고, 읽어야 하는 정보에는 쓰지 않는다.`}),`
`,(0,c.jsx)(n.h2,{id:`범위`,children:`범위`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`1차 (2026-09-24).`}),` Button, IconButton, RadioCell(+RadioRow), Checkbox(+CheckboxRow), Toggle, FormRow, SearchField, SegmentedControl, UnderlineTabs(+UnderlineTab), TabBar(+TabItem). 기반으로 Icon.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`2차 (2026-09-24).`}),` Badge, Avatar, Divider, ListRow, Alert, Toast, Filter 4종(FilterChip, FilterButton, FilterOption, FilterSheet), Header, LargeField. 시트와 알럿의 스크림은 Overlay가 공통으로 맡는다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`3차 (2026-09-24).`}),` 기록 6종(Delta, Metric, StatTile, RankBar, AbilityCard, StatGuideSheet), 투표(VoteOption, Vote), 장면 5종(VideoTime, TimelineMarker, Timeline, ClipThumbnail, HighlightCard), 피커 4종(RulerPicker, TimePicker, DayCell, DatePicker). 휠 한 열은 Wheel이 공통.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`앱 이전 (2026-09-24).`}),` 앱 화면 5개(경기 목록, 경기 상세, 선수 상세, MY, 동호회)를 이 컴포넌트들로 다시 짰다. 그 과정에서 코드에서만 추가한 것: Sheet(폼 시트 공통 껍데기), Avatar highlight(목록에서 나 표시), Vote total(미정 포함 분모), SegmentedControl fullWidth false(섹션 제목 옆 인라인), Icon settings. Figma에 되돌려 넣을 후보다.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`남은 것.`}),` Form과 Vote, Timeline의 예시 프레임은 스토리로 대신했다. 이것으로 Figma 46개가 모두 코드에 있다.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),n()}))();export{s as default};