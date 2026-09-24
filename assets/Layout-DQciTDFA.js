import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/간격과 크기`}),`
`,(0,c.jsx)(n.h1,{id:`간격과-크기`,children:`간격과 크기`}),`
`,(0,c.jsx)(n.p,{children:`4 배수 스케일. 화면 폭 402, 좌우 여백 24, 콘텐츠 폭 354.`}),`
`,`
`,(0,c.jsx)(n.h2,{id:`간격-space`,children:`간격 space/*`}),`
`,(0,c.jsx)(l,{name:`space/xs`,px:4,use:`아이콘과 텍스트, 숫자와 단위`}),`
`,(0,c.jsx)(l,{name:`space/sm`,px:8,use:`요소 사이. 버튼 안 아이콘과 라벨, RadioRow 칸 사이`}),`
`,(0,c.jsx)(l,{name:`space/md`,px:12,use:`요소 사이. Checkbox와 라벨`}),`
`,(0,c.jsx)(l,{name:`space/lg`,px:16,use:`카드 내부 그룹 사이, 버튼 좌우 패딩`}),`
`,(0,c.jsx)(l,{name:`space/xl`,px:24,use:`화면 좌우 여백, 카드 패딩, 탭 사이`}),`
`,(0,c.jsx)(l,{name:`space/2xl`,px:32,use:`섹션 사이`}),`
`,(0,c.jsx)(n.h2,{id:`높이-size`,children:`높이 size/*`}),`
`,(0,c.jsx)(n.p,{children:`| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| size/button-sm | 36 | Small 버튼, RadioCell sm |
| size/button-md | 44 | Medium 버튼, RadioCell md, CheckboxRow, IconButton, TabBar 항목, Header |
| size/button-lg | 52 | Large 버튼(주 CTA) |
| size/segment-sm | 32 | SegmentedControl sm |
| size/segment-md | 40 | SegmentedControl md |
| size/segment-lg | 48 | SegmentedControl lg, UnderlineTabs, FormRow 값 칸, SearchField |
| size/badge | 24 | Badge |
| size/avatar-xs ~ xl | 24 / 32 / 40 / 56 / 80 | Avatar |`}),`
`,(0,c.jsx)(n.h2,{id:`터치-영역`,children:`터치 영역`}),`
`,(0,c.jsx)(n.p,{children:`44가 바닥이다. 그보다 작은 요소(Checkbox 20, Toggle 24, Small 버튼 36)는 반드시 44 이상의 행이나 여백 안에 둔다. 코드에서는 CheckboxRow와 FormRow가 그 행이다.`}),`
`,(0,c.jsx)(n.h2,{id:`플랫폼-참고`,children:`플랫폼 참고`}),`
`,(0,c.jsx)(n.p,{children:`| 항목 | Material 3 | Apple HIG | pitchLog |
|---|---|---|---|
| 기본 단위 | 4dp 그리드, 8dp 주요 간격 | 8pt 그리드 권장, 엄격하지 않음 | 4 배수 6단계(4~32). 두 가이드와 같은 4 기반 |
| 화면 좌우 여백 | 16dp(compact) | 16pt(iOS), 20pt(iPhone 큰 화면 리스트 inset) | 24. 두 가이드보다 넓다. 대표 숫자(48)의 여백감과 헤어라인 구분에 의존하는 레이아웃이라 좌우 숨 공간이 더 필요하다 |
| 최소 터치 영역 | 48x48dp | 44x44pt | 44. HIG 값. 402 폭에서 48 격자를 짜면 6칸이 안 나온다(RadioRow 6칸 = 52.3 폭). 대신 입력 칸은 48 |
| 컴포넌트 높이 체계 | 컴포넌트마다 고유값(버튼 40, 필드 56, 칩 32, 탭 48, 내비 80) | 컴포넌트마다 고유값(버튼 50/34, 필드 44, 세그먼트 32, 탭바 49) | 32 / 36 / 40 / 44 / 48 / 52 여섯 값을 여러 컴포넌트가 공유. 같은 행에 놓이는 것끼리 높이가 같다(FormRow 값 칸 48 = SearchField 48 = UnderlineTabs 48) |
| 폭 | 반응형 breakpoint 5단계(compact, medium, expanded, large, extra-large) | Size class(compact, regular) | 402 하나. 폰 웹앱이라 폰 폭만 다룬다. 넓은 화면은 402 컬럼을 가운데 두고 헤어라인으로 감싼다(AppScreen) |
| 안전 영역 | 시스템 인셋 | Safe area 필수, 홈 인디케이터 34 | TabBar 아래 34 여백. Header는 상태바 아래 56에서 시작 |`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l;e((()=>{c=i(),a(),n(),l=({name:e,px:t,use:n})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4 border-b border-line-gray py-2`,children:[(0,c.jsx)(`div`,{className:`w-24 shrink-0`,children:(0,c.jsx)(`code`,{children:e})}),(0,c.jsxs)(`div`,{className:`w-12 shrink-0 text-caption text-slate`,children:[t,`px`]}),(0,c.jsx)(`div`,{className:`h-4 shrink-0 bg-signal-blue`,style:{width:t}}),(0,c.jsx)(`div`,{className:`text-body-sm text-ink`,children:n})]})}))();export{l as Space,s as default};