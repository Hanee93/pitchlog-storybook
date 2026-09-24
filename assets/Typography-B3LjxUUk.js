import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,v as r}from"./blocks-USXkMBNz.js";import{t as i}from"./jsx-runtime-f3rHp9ZU.js";import{t as a}from"./mdx-react-shim-D-_7B18u.js";function o(e){let n={h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Foundations/타이포그래피`}),`
`,(0,c.jsx)(n.h1,{id:`타이포그래피`,children:`타이포그래피`}),`
`,(0,c.jsx)(n.p,{children:`Pretendard Variable이 본문과 헤딩, Inter가 대표 숫자와 단위. 앱 스케일은 402 폭 기준이며 임의 px는 쓰지 않는다.`}),`
`,`
`,(0,c.jsx)(n.h2,{id:`앱-스케일`,children:`앱 스케일`}),`
`,(0,c.jsx)(l,{name:`display/xl`,cls:`font-numeral italic text-app-display-xl font-extrabold`,spec:`Inter 48 / 1.05 / -3%`,sample:`28.4`,use:`홈 히어로 숫자 하나. 순간값(최고속도)`}),`
`,(0,c.jsx)(l,{name:`display/xl-upright`,cls:`font-numeral text-app-display-xl font-extrabold`,spec:`Inter 48 / 1.05 / -3%`,sample:`12.6`,use:`홈 히어로 숫자. 정지된 총계`}),`
`,(0,c.jsx)(l,{name:`display/lg`,cls:`font-numeral italic text-app-display font-extrabold`,spec:`Inter 40 / 1.1 / -3%`,sample:`28.4`,use:`화면당 대표 숫자 하나. 순간값`}),`
`,(0,c.jsx)(l,{name:`display/sm`,cls:`font-numeral italic text-app-display-sm font-extrabold`,spec:`Inter 28 / 1.15 / -2%`,sample:`28.4`,use:`카드 안 대표 숫자`}),`
`,(0,c.jsx)(l,{name:`display/unit`,cls:`font-numeral italic text-app-heading font-semibold`,spec:`Inter 24 / 1.25`,sample:`km/h`,use:`display xl, lg 옆 단위`}),`
`,(0,c.jsx)(l,{name:`heading/lg`,cls:`text-app-heading font-semibold`,spec:`24 / 1.25 / -2% / 600`,sample:`FC 목요일, 이번 주 MVP 김민수`,use:`화면 제목, 시트 제목`}),`
`,(0,c.jsx)(l,{name:`heading/sub`,cls:`text-app-subheading font-semibold`,spec:`20 / 1.4 / 600`,sample:`3경기 연속 상승 중`,use:`인사이트 문장, 리스트 헤드`}),`
`,(0,c.jsx)(l,{name:`heading/sm`,cls:`text-app-heading-sm font-semibold`,spec:`16 / 1.4 / -1% / 600`,sample:`다음 경기 참석 투표`,use:`카드 제목, 헤더 제목, 활성 탭`}),`
`,(0,c.jsx)(l,{name:`body/regular`,cls:`text-body`,spec:`16 / 1.5 / 400`,sample:`박지훈님이 최고속도 팀 신기록을 세웠습니다`,use:`본문, 폼 값, 버튼 라벨`}),`
`,(0,c.jsx)(l,{name:`body/label`,cls:`text-body-sm font-semibold`,spec:`14 / 1.5 / 600`,sample:`참석 8명, 미정 6명`,use:`Small 버튼, 칩, 세그먼트 라벨`}),`
`,(0,c.jsx)(l,{name:`body/sm`,cls:`text-body-sm`,spec:`14 / 1.5 / 400`,sample:`투표 마감 금 18:00`,use:`보조 설명, 토스트`}),`
`,(0,c.jsx)(l,{name:`caption/strong`,cls:`text-caption font-semibold`,spec:`12 / 1.5 / 600`,sample:`MVP`,use:`뱃지, 델타, 표 헤더`}),`
`,(0,c.jsx)(l,{name:`caption/regular`,cls:`text-caption`,spec:`12 / 1.5 / 400`,sample:`9월 6일 경기, 회원 14명`,use:`메타, 탭바 라벨`}),`
`,(0,c.jsx)(n.h2,{id:`플랫폼-참고`,children:`플랫폼 참고`}),`
`,(0,c.jsx)(n.p,{children:`| 항목 | Material 3 | Apple HIG (iOS) | pitchLog |
|---|---|---|---|
| 역할 체계 | Display, Headline, Title, Body, Label 5역할 x L/M/S = 15 | Large Title 34, Title 1~3 (28/22/20), Headline 17 semibold, Body 17, Callout 16, Subheadline 15, Footnote 13, Caption 1~2 (12/11) | display(숫자 전용) 3단계, heading 3단계, body 3, caption 2 = 13. M3의 역할 이름을 빌리되 Title을 heading에 합쳤다 |
| 본문 크기 | Body Large 16 | Body 17 | 16. 한글 Pretendard는 17에서 행이 너무 길어져 16 |
| 라벨 | Label L/M/S 14/12/11, medium weight | Footnote 13, Caption 12/11 | body/label 14 600, caption 12. 11은 쓰지 않는다(한글 최소 12) |
| 대표 숫자 | Display Large 57, Roboto | Large Title 34, SF Pro Rounded 권장 | display/xl 48 Inter 800. 숫자 전용 스타일을 따로 둔 것이 두 가이드와 다른 점. 순간값 이탤릭, 총계 업라이트 |
| 서체 | Roboto (Roboto Flex) | SF Pro, SF Pro Rounded, 한글은 Apple SD Gothic Neo | Pretendard Variable + Inter. Pretendard는 Inter 기반 한글 서체라 숫자 서체 Inter와 x-height가 맞는다 |
| 굵기 | Regular 400, Medium 500 | Regular, Semibold, Bold | 400, 600, 800 세 단계. 500은 쓰지 않는다 |
| 동적 크기 | 시스템 폰트 배율 따름 | Dynamic Type 11단계, 필수 | 1차 범위 밖. rem 기반이라 브라우저 배율은 따라간다 |
| 자간 | 크기별 tracking 값 명시 | 시스템이 크기별 자동 | 24 이상은 음수 자간(-2%, -3%), 그 아래 0. HIG 방식과 같은 원칙 |`})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c,l;e((()=>{c=i(),a(),n(),l=({name:e,cls:t,spec:n,use:r,sample:i})=>(0,c.jsxs)(`div`,{className:`flex items-end gap-6 border-b border-line-gray py-3`,children:[(0,c.jsxs)(`div`,{className:`w-40 shrink-0`,children:[(0,c.jsx)(`code`,{className:`text-caption`,children:e}),(0,c.jsx)(`div`,{className:`text-caption text-slate`,children:n})]}),(0,c.jsx)(`div`,{className:`min-w-0 flex-1 text-ink ${t}`,children:i}),(0,c.jsx)(`div`,{className:`w-56 shrink-0 text-caption text-slate`,children:r})]})}))();export{l as Row,s as default};