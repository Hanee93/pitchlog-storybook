import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/컬러`}),`
`,(0,c.jsx)(n.h1,{id:`컬러`,children:`컬러`}),`
`,(0,c.jsxs)(n.p,{children:[`두 층이다. `,(0,c.jsx)(n.strong,{children:`Primitives`}),`는 원본 값이고 앱에서 직접 쓰지 않는다. `,(0,c.jsx)(n.strong,{children:`Semantic`}),`은 용도 이름이고 앱은 이것만 쓴다. Material 3의 tonal palette와 color role, HIG의 system color와 semantic color(label, systemBackground)를 같은 구조로 합친 것이다.`]}),`
`,`
`,(0,c.jsx)(n.h2,{id:`semantic`,children:`Semantic`}),`
`,(0,c.jsx)(n.h3,{id:`배경-bg`,children:`배경 bg/*`}),`
`,(0,c.jsx)(l,{name:`bg/canvas`,hex:`#f1f3f2`,cls:`bg-court-white`,use:`화면 배경 하나. 카드 안에는 쓰지 않는다`}),`
`,(0,c.jsx)(l,{name:`bg/surface`,hex:`#ffffff`,cls:`bg-pure-white`,use:`카드, 시트, 탭바, 입력 행, 세그먼트 선택 항목`}),`
`,(0,c.jsx)(l,{name:`bg/subtle`,hex:`#f1f3f2`,cls:`bg-court-white`,use:`카드 위 트랙, 칩, 검색 필드, 비활성 버튼`}),`
`,(0,c.jsx)(l,{name:`bg/inverse`,hex:`#151917`,cls:`bg-ink`,use:`능력치 카드, 토스트, Filled 뱃지`}),`
`,(0,c.jsx)(n.h3,{id:`텍스트와-아이콘-text`,children:`텍스트와 아이콘 text/*`}),`
`,(0,c.jsx)(l,{name:`text/primary`,hex:`#151917`,cls:`bg-ink`,use:`본문, 값, 제목, 활성 라벨, 아이콘`}),`
`,(0,c.jsx)(l,{name:`text/secondary`,hex:`#636a68`,cls:`bg-slate`,use:`보조 설명, 폼 라벨, 비선택 세그먼트, 비활성 탭 라벨`}),`
`,(0,c.jsx)(l,{name:`text/tertiary`,hex:`#979b99`,cls:`bg-mist`,use:`플레이스홀더, 메타, 변동 없음. 읽어야 하는 정보 금지(2.8:1)`}),`
`,(0,c.jsx)(l,{name:`text/inverse`,hex:`#ffffff`,cls:`bg-pure-white`,use:`다크 표면과 채움 버튼 위 글자`}),`
`,(0,c.jsx)(n.h3,{id:`선-border`,children:`선 border/*`}),`
`,(0,c.jsx)(l,{name:`border/hairline`,hex:`#e3e6e4`,cls:`bg-line-gray`,use:`구분선, 아웃라인 버튼, 토글 Off 트랙. 카드 외곽선 금지`}),`
`,(0,c.jsx)(l,{name:`border/strong`,hex:`#151917`,cls:`bg-ink`,use:`포커스된 입력, 활성 탭 밑줄, 아웃라인 hover`}),`
`,(0,c.jsx)(n.h3,{id:`액션-action`,children:`액션 action/*`}),`
`,(0,c.jsx)(l,{name:`action/primary`,hex:`#1f5fd0`,cls:`bg-signal-blue`,use:`화면당 CTA 한 곳, 흰 라벨`}),`
`,(0,c.jsx)(l,{name:`action/primary-hover`,hex:`#1a54bb`,cls:`bg-signal-blue-hover`,use:``}),`
`,(0,c.jsx)(l,{name:`action/primary-pressed`,hex:`#1647a0`,cls:`bg-signal-blue-pressed`,use:``}),`
`,(0,c.jsx)(l,{name:`action/secondary`,hex:`#151917`,cls:`bg-ink`,use:`나머지 주요 액션, 알럿 확인, 토글 On, 선택 상태`}),`
`,(0,c.jsx)(l,{name:`action/secondary-hover`,hex:`#0b0d0c`,cls:`bg-ink-dark`,use:``}),`
`,(0,c.jsx)(l,{name:`action/secondary-pressed`,hex:`#000000`,cls:`bg-pure-black`,use:`pure-black의 유일한 용도`}),`
`,(0,c.jsxs)(n.h3,{id:`기록-data-장면-scene-상태-status`,children:[`기록 data/`,(0,c.jsx)(n.em,{children:`, 장면 scene/`}),`, 상태 status/*`]}),`
`,(0,c.jsx)(l,{name:`data/accent`,hex:`#1f5fd0`,cls:`bg-signal-blue`,use:`내 순위 값, 그래프 최고 구간. 버튼과 본문 금지`}),`
`,(0,c.jsx)(l,{name:`data/tint`,hex:`#e8effb`,cls:`bg-sky-tint`,use:`기록 뱃지, 표 하이라이트`}),`
`,(0,c.jsx)(l,{name:`data/orange`,hex:`#f09d4d`,cls:`bg-orange`,use:`1위 메달 채움. 흰 배경 위 글자 금지(2.3:1)`}),`
`,(0,c.jsx)(l,{name:`scene/accent`,hex:`#e4ff4d`,cls:`bg-volt`,use:`클립 뱃지, 재생 버튼. 영상 문맥에만, 항상 ink와 짝`}),`
`,(0,c.jsx)(l,{name:`status/success`,hex:`#077a45`,cls:`bg-pitch-green`,use:`성공 텍스트, 상승 텍스트. 버튼 금지`}),`
`,(0,c.jsx)(l,{name:`status/warning`,hex:`#d98a0b`,cls:`bg-amber`,use:`주의 텍스트`}),`
`,(0,c.jsx)(l,{name:`status/danger`,hex:`#c4241e`,cls:`bg-red`,use:`오류, 삭제 텍스트 버튼. 채움 버튼 금지`}),`
`,(0,c.jsx)(l,{name:`status/live`,hex:`#1ee07a`,cls:`bg-neon-green`,use:`트래킹 중 라이브 점 하나`}),`
`,(0,c.jsx)(n.h2,{id:`primitives-blue-팔레트`,children:`Primitives: blue 팔레트`}),`
`,(0,c.jsx)(n.p,{children:`Material 3의 tonal palette와 같은 발상으로 blue를 50에서 900까지 두었다. Semantic은 600(CTA, data/accent), 700(hover), 800(pressed), 100(tint), 500(team/away)만 참조한다.`}),`
`,(0,c.jsx)(`div`,{className:`flex gap-1`,children:[`50`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`].map(e=>(0,c.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,c.jsx)(`div`,{className:`h-12 w-14 rounded-sm bg-blue-${e}`}),(0,c.jsx)(`span`,{className:`text-caption text-slate`,children:e})]},e))}),`
`,(0,c.jsx)(n.h2,{id:`플랫폼-참고`,children:`플랫폼 참고`}),`
`,(0,c.jsx)(n.p,{children:`| 항목 | Material 3 | Apple HIG | pitchLog |
|---|---|---|---|
| 구조 | Key color 5개에서 tonal palette 13톤을 생성, color role(primary, on-primary, primary-container, surface-container 5단계 등)로 매핑 | System color(systemBlue 등)와 semantic color(label 4단계, systemBackground 3단계, separator)를 라이트와 다크로 제공 | Primitives(뉴트럴 7 + blue 팔레트 10 + 유채색 12) 위에 Semantic 27. HIG의 label 4단계(text/primary, secondary, tertiary, inverse)와 M3의 role 이름(action/primary, on 대신 inverse)을 합쳤다 |
| 강조 색 | Primary와 Secondary, Tertiary 세 계열 | tintColor 하나 | 블루 하나. CTA와 기록을 겸한다. 대신 화면당 CTA 하나, 섹션당 유채색 하나로 남용을 막는다 |
| 표면 층 | Surface container lowest에서 highest까지 5단계 톤 | systemBackground, secondary, tertiary 3단계 + grouped 변형 | canvas, surface, subtle 3단계. subtle과 canvas는 같은 값(#f1f3f2)이고 용도만 다르다. 흰 카드 위 트랙이 subtle, 화면이 canvas |
| 상태 색 | error 하나(error, on-error, error-container) | systemRed, systemOrange, systemGreen | danger, warning, success, live 4개. 빨강은 오류(danger)와 코트 홈팀(team/home)으로 분리해 섞지 않는다 |
| 다크 모드 | 톤을 뒤집어 자동 생성 | semantic color가 자동 전환 | 1차 범위 밖. Semantic 층이 있으므로 값만 바꿔 넣으면 된다 |
| 대비 | on-color 조합이 4.5:1 보장 | Increase Contrast 설정 지원 | CTA 5.9:1. tertiary(mist)는 4.5:1 미만이라 정보 텍스트 금지 규칙으로 보완 |
| 뉴트럴 | Neutral과 Neutral variant 두 팔레트 | 회색 systemGray 1~6 | 그린 언더톤 뉴트럴 7개. 순수 검정 금지, ink #151917가 본문. HIG의 label처럼 역할로 이름 |`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l;e((()=>{c=i(),a(),n(),l=({name:e,hex:t,cls:n,use:r})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-4 border-b border-line-gray py-2`,children:[(0,c.jsx)(`div`,{className:`size-10 shrink-0 rounded-sm border border-line-gray ${n}`}),(0,c.jsx)(`div`,{className:`w-44 shrink-0`,children:(0,c.jsx)(`code`,{children:e})}),(0,c.jsx)(`div`,{className:`w-20 shrink-0 text-caption text-slate`,children:t}),(0,c.jsx)(`div`,{className:`text-body-sm text-ink`,children:r})]})}))();export{l as Swatch,s as default};