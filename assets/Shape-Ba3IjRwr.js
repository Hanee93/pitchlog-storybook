import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/모서리와 높이`}),`
`,(0,c.jsx)(n.h1,{id:`모서리와-높이`,children:`모서리와 높이`}),`
`,`
`,(0,c.jsx)(n.h2,{id:`모서리-radius`,children:`모서리 radius/*`}),`
`,(0,c.jsx)(l,{name:`radius/none`,px:`0`,cls:`rounded-none`,use:`풀블리드 이미지, 화면 가장자리에 붙는 표면(탭바, 시트 하단)`}),`
`,(0,c.jsx)(l,{name:`radius/bar`,px:`2`,cls:`rounded-bar`,use:`바 그래프 칸, 인디케이터, 토글 노브. 4 미만의 유일한 값`}),`
`,(0,c.jsx)(l,{name:`radius/default`,px:`4`,cls:`rounded-sm`,use:`기본. 버튼, 뱃지, 세그먼트, 입력, 칩, 체크박스, 토글 트랙`}),`
`,(0,c.jsx)(l,{name:`radius/large`,px:`8`,cls:`rounded-lg`,use:`카드, 알럿, 시트 안 표면, LargeField`}),`
`,(0,c.jsx)(l,{name:`radius/xlarge`,px:`16`,cls:`rounded-xl`,use:`바텀시트 상단, 큰 카드`}),`
`,(0,c.jsx)(l,{name:`radius/2xlarge`,px:`24`,cls:`rounded-2xl`,use:`전체 화면 모달, 이미지 카드. 화면당 하나`}),`
`,(0,c.jsx)(l,{name:`radius/full`,px:`9999`,cls:`rounded-full`,use:`아바타, 라이브 점, 순위 마커에만. 버튼과 뱃지 금지`}),`
`,(0,c.jsx)(n.p,{children:`크기가 커질수록 모서리가 커진다. 인터랙티브 요소 4, 카드 8, 시트 16, 모달 24. 필과 알약은 금지다. Toggle 트랙도 4다.`}),`
`,(0,c.jsx)(n.h2,{id:`높이elevation`,children:`높이(elevation)`}),`
`,(0,c.jsx)(n.p,{children:`앱 화면에는 그림자가 없다. 표면의 구분은 색(canvas 위 surface)과 border/hairline으로만 한다. float 그림자 4종(float, md, sm, xs)은 랜딩 페이지와 화면 위에 뜨는 것(바텀시트, 알럿, 토스트)에만 쓴다.`}),`
`,(0,c.jsx)(n.p,{children:`| 층 | 처리 |
|---|---|
| 화면 | bg/canvas |
| 카드, 목록 | bg/surface, 외곽선 없음, 행 사이 hairline |
| 카드 위 트랙과 칩 | bg/subtle |
| 시트, 알럿, 토스트 | bg/surface + float/sm + overlay/scrim(시트, 알럿) |`}),`
`,(0,c.jsx)(n.h2,{id:`플랫폼-참고`,children:`플랫폼 참고`}),`
`,(0,c.jsx)(n.p,{children:`| 항목 | Material 3 | Apple HIG | pitchLog |
|---|---|---|---|
| 모서리 스케일 | none 0, extra-small 4, small 8, medium 12, large 16, extra-large 28, full. 버튼과 칩은 full이 기본. Expressive는 round와 square 패밀리 | 고정 스케일 없음. 연속 곡률(continuous corner), 안쪽 요소는 동심원 반경(concentric). iOS 26은 캡슐 기본 | 0, 2, 4, 8, 16, 24, full 7단계. M3 스케일과 거의 같은 값이되 기본이 4이고 full은 원형 요소 전용. 12와 28은 없다 |
| 버튼 모양 | 필(full) | 캡슐 | 4. 두 가이드와 반대. 데이터와 코트의 직선 격자에 맞추고, 뱃지와 버튼이 같은 모양 언어를 갖게 한다 |
| 동심원 규칙 | 명시 없음 | 안쪽 반경 = 바깥 반경 - 패딩 | 같은 원칙. SegmentedControl 트랙 4, 패딩 2, 항목 4(작아서 차이 없음). 시트 16 안 카드 8 |
| 높이 표현 | Elevation 0~5 (0, 1, 3, 6, 8, 12dp). 그림자 + surface tint 오버레이 | 그림자 장식 금지. 층은 재질(blur, vibrancy)과 Liquid Glass로 표현 | 앱 화면 그림자 0. 뜨는 표면만 float/sm. 재질(blur)도 쓰지 않는다. HIG의 "그림자 장식 금지"와 같은 태도, 재질 대신 불투명 흰색 |
| 카드 | Elevated / Filled / Outlined 세 종류 | 카드는 콘텐츠 그룹, 외곽선보다 배경색 차이 | 외곽선 금지, 그림자 금지. canvas 위 surface 색 차이와 헤어라인만. HIG 방향 |
| 구분선 | Divider 1dp outline-variant, 가능하면 여백으로 대체 | Separator, 리스트 행 사이 inset | hairline 1px line-gray. 여백보다 헤어라인을 선호한다. 카드를 안 쓰는 대신 헤어라인이 구조를 만든다 |`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l;e((()=>{c=i(),a(),n(),l=({name:e,px:t,cls:n,use:r})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4 border-b border-line-gray py-2`,children:[(0,c.jsx)(`div`,{className:`size-12 shrink-0 bg-ink ${n}`}),(0,c.jsx)(`div`,{className:`w-32 shrink-0`,children:(0,c.jsx)(`code`,{children:e})}),(0,c.jsx)(`div`,{className:`w-12 shrink-0 text-caption text-slate`,children:t}),(0,c.jsx)(`div`,{className:`text-body-sm text-ink`,children:r})]})}))();export{l as Radius,s as default};