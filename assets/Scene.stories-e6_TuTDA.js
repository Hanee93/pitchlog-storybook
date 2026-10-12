import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-iUPssvWC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{a as o,r as s,t as c}from"./storyDecorators-DI9SAnnw.js";import{n as l,r as u,t as d}from"./storyHelpers-DodvrARx.js";import{n as f,t as p}from"./Badge-BmIrkUMe.js";import{a as m,i as h,n as g,r as _,t as v}from"./ClipThumbnail-CMej1wjA.js";function y({layout:e=`card`,title:t,meta:n,duration:r,badge:i,progress:o,src:s,onPlay:c,className:l}){return e===`row`?(0,b.jsxs)(`button`,{type:`button`,onClick:c,className:a(`flex w-full items-center gap-3 text-left`,l),children:[(0,b.jsx)(g,{src:s,alt:`${t} 썸네일`,height:68,progress:o,className:`w-[120px] shrink-0`,children:(0,b.jsx)(h,{duration:r,className:`absolute bottom-1 left-1`})}),(0,b.jsxs)(`span`,{className:`flex min-w-0 flex-1 flex-col gap-0.5`,children:[(0,b.jsx)(`span`,{className:`truncate text-body-sm font-semibold text-ink`,children:t}),(0,b.jsx)(`span`,{className:`truncate text-caption text-mist`,children:n})]})]}):(0,b.jsxs)(`div`,{className:a(`flex w-full flex-col gap-3`,l),children:[(0,b.jsxs)(g,{src:s,alt:`${t} 썸네일`,progress:o,className:`aspect-video`,children:[(0,b.jsx)(`button`,{type:`button`,"aria-label":`${t} 재생`,onClick:c,className:`absolute top-1/2 left-1/2 flex size-11 -translate-1/2 items-center justify-center rounded-full bg-volt text-ink transition-transform hover:scale-105`,children:(0,b.jsx)(`svg`,{width:`16`,height:`18`,viewBox:`0 0 16 18`,"aria-hidden":`true`,className:`ml-0.5 fill-current`,children:(0,b.jsx)(`path`,{d:`M0 0l16 9-16 9z`})})}),(0,b.jsx)(h,{duration:r,className:`absolute bottom-2 left-2`})]}),(0,b.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,b.jsxs)(`span`,{className:`flex min-w-0 flex-col gap-0.5`,children:[(0,b.jsx)(`span`,{className:`truncate text-body-sm font-semibold text-ink`,children:t}),(0,b.jsx)(`span`,{className:`truncate text-caption text-mist`,children:n})]}),i&&(0,b.jsx)(p,{variant:`tint-volt`,children:i})]})]})}var b,x=e((()=>{f(),i(),_(),m(),b=r(),y.__docgenInfo={description:``,methods:[],displayName:`HighlightCard`,props:{layout:{required:!1,tsType:{name:`union`,raw:`'card' | 'row'`,elements:[{name:`literal`,value:`'card'`},{name:`literal`,value:`'row'`}]},description:``,defaultValue:{value:`'card'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:``},meta:{required:!0,tsType:{name:`string`},description:``},duration:{required:!0,tsType:{name:`string`},description:``},badge:{required:!1,tsType:{name:`string`},description:`Scene 뱃지 라벨. "클립 3"`},progress:{required:!1,tsType:{name:`number`},description:``},src:{required:!1,tsType:{name:`string`},description:``},onPlay:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));function S({label:e,selected:t=!1,onSelect:n,height:r=40,className:i,style:o}){return(0,C.jsxs)(`button`,{type:`button`,"aria-pressed":t,"aria-label":`클립 ${e}`,onClick:n,className:a(`group relative flex flex-col items-center`,i),style:{height:r,...o},children:[t&&(0,C.jsx)(`span`,{className:`absolute bottom-full mb-1 rounded-sm bg-ink px-1.5 py-0.5 font-numeral text-caption font-semibold whitespace-nowrap text-volt`,children:e}),(0,C.jsx)(`span`,{"aria-hidden":`true`,className:a(`size-3 shrink-0 rounded-full bg-volt`,t&&`ring-2 ring-ink`)}),(0,C.jsx)(`span`,{"aria-hidden":`true`,className:`w-[1.5px] flex-1 rounded-bar bg-ink`})]})}var C,w=e((()=>{i(),C=r(),S.__docgenInfo={description:``,methods:[],displayName:`TimelineMarker`,props:{label:{required:!0,tsType:{name:`string`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},height:{required:!1,tsType:{name:`number`},description:`선 높이. Timeline 바 높이에 맞춘다`,defaultValue:{value:`40`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}}));function T({bars:e,clips:t=[],selected:n,onSelectClip:r,height:i=40,label:o=`경기 활동량`,className:s}){let c=Math.max(...e,1e-4),l=e.indexOf(c);return(0,E.jsxs)(`div`,{className:a(`relative w-full`,s),style:{paddingTop:t.length?28:0},children:[(0,E.jsx)(`div`,{role:`img`,"aria-label":`${o}, 5분 단위 ${e.length}구간, 최고 구간 ${l*5}분`,className:`flex items-end gap-0.5 border-b border-line-gray`,style:{height:i},children:e.map((e,t)=>(0,E.jsx)(`span`,{className:a(`flex-1 rounded-bar`,t===l?`bg-signal-blue`:`bg-sky-tint`),style:{height:`${Math.max(4,e/c*100)}%`}},t))}),t.map((e,t)=>(0,E.jsx)(S,{label:e.label,selected:n===t,onSelect:()=>r?.(t),height:i+6,className:`absolute bottom-0 -translate-x-1/2`,style:{left:`${e.at*100}%`}},t))]})}var E,D=e((()=>{i(),w(),E=r(),T.__docgenInfo={description:``,methods:[],displayName:`Timeline`,props:{bars:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`18개, 각 0~1`},clips:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ /** 0~1, 경기 진행 위치 */ at: number; label: string }`,signature:{properties:[{key:`at`,value:{name:`number`,required:!0},description:`0~1, 경기 진행 위치`},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`TimelineClip[]`},description:``,defaultValue:{value:`[]`,computed:!1}},selected:{required:!1,tsType:{name:`number`},description:``},onSelectClip:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},height:{required:!1,tsType:{name:`number`},description:`바 영역 높이`,defaultValue:{value:`40`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`스크린 리더 이름`,defaultValue:{value:`'경기 활동량'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function O(){let[e,t]=(0,k.useState)(1);return(0,A.jsxs)(`div`,{className:`rounded-lg bg-pure-white p-6`,children:[(0,A.jsx)(T,{bars:I,clips:[{at:.12,label:`8분`},{at:.55,label:`52분`},{at:.86,label:`77분`}],selected:e,onSelectClip:t}),(0,A.jsxs)(`div`,{className:`mt-2 flex justify-between text-caption text-slate`,children:[(0,A.jsx)(`span`,{children:`0분`}),(0,A.jsx)(`span`,{children:`45분`}),(0,A.jsx)(`span`,{children:`90분`})]})]})}var k,A,j,M,N,P,F,I,L,R,z;e((()=>{k=t(n(),1),x(),_(),m(),D(),w(),u(),s(),A=r(),j={title:`Components/Scene`,component:y,decorators:[c],args:{layout:`card`,title:`후반 32분 역전골`,meta:`9월 6일, FC 목요일 vs 주말 리그`,duration:`0:12`,badge:`클립 3`,progress:.4},argTypes:{layout:{control:`inline-radio`,options:[`card`,`row`],description:`Figma Layout`},progress:{control:{type:`range`,min:0,max:1,step:.05},description:`Figma Show progress. 시청 구간`},onPlay:{action:`play`}},parameters:{docs:{description:{component:`장면(영상) 컴포넌트 5종. [HighlightCard 107:737](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=107-737), [ClipThumbnail 159:2877](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=159-2877), [VideoTime 161:2935](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=161-2935), [Timeline 106:671](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=106-671), [TimelineMarker 106:670](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=106-670).

- **HighlightCard.** Card는 354 16:9 썸네일 radius 4 + 제목 body/label + 메타 caption text/tertiary + Scene 뱃지. 재생 버튼 scene/accent 44 + ink 삼각형은 Card에만. Row는 120x68 썸네일 행.
- **ClipThumbnail.** 목록 그리드. Wide 354 / Half 173(2열 간격 8). 썸네일 108, 좌상단 유형 뱃지 overlay/dark, 좌하단 VideoTime. 시청한 클립은 하단 3px 재생바(흰 30% + volt), 재생 버튼 없음.
- **VideoTime.** overlay/dark 배경, caption/strong 흰 글자, 높이 20. Elapsed "0:06 / 0:12" 또는 Duration만.
- **Timeline.** 5분 활동량 바 18개 data/tint, 최고 구간 data/accent, hairline 베이스. 클립 순간에만 TimelineMarker. 기록 층(blue)과 장면 층(volt)이 한 프레임에 만나는 유일한 곳.
- **TimelineMarker.** volt 원 12 + ink 선 1.5. Selected는 ink 말풍선 + volt 글자.

### 플랫폼 참고

${o([[`미디어 카드`,`Card + 16:9 media, radius 12, elevation 1`,`카드 없음. Photos, TV 앱은 radius 8~12 썸네일`,`썸네일 radius 4, 카드 외곽선과 그림자 없음. 제목과 메타는 썸네일 아래 텍스트뿐`],[`재생 버튼`,`FAB 또는 Icon button, primary`,`시스템 플레이어 컨트롤(흰색, 재질 배경)`,`volt 원 44 + ink 삼각형. scene/accent가 버튼 채움으로 쓰이는 유일한 자리(영상 문맥 표식). Card에만, 썸네일 목록에는 없음`],[`시간 오버레이`,`Scrim 위 label`,`재생 화면 하단 흰 글자`,`overlay/dark(ink 70%) + caption/strong 흰 글자, radius 4. 사진과 영상 위 글자는 항상 이 조합`],[`시청 진행`,`Linear progress primary`,`재생바 tint`,`3px 흰 30% 위 volt. 파랑은 기록 층이라 영상에 쓰지 않는다`],[`활동량 그래프`,`Charts 라이브러리, primary 계열`,`Swift Charts, 앱 tint`,`18개 바 data/tint + 최고 구간 data/accent 하나. 축과 격자 없음, hairline 베이스만`],[`클립 마커`,`없음(Slider tick marks)`,`영상 스크러버 챕터 마커`,`volt 원 12 + ink 선. 선택하면 ink 말풍선. 기록 바 위에 장면 마커가 올라가는 구조`]])}`}}}},M={name:`HighlightCard`},N={name:`Card, Row`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:`메타 줄(날짜, 상대)은 명세대로 text/tertiary(2.8:1)다. 제목이 정보를 다 담고 메타는 보조라서 허용하는 자리이고, 이 스토리는 그 이유로 대비 검사를 끈다.`}}},render:()=>(0,A.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,A.jsx)(y,{title:`후반 32분 역전골`,meta:`9월 6일, FC 목요일 vs 주말 리그`,duration:`0:12`,badge:`클립 3`,progress:.4}),(0,A.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,A.jsx)(y,{layout:`row`,title:`전반 8분 스프린트`,meta:`9월 6일`,duration:`0:08`}),(0,A.jsx)(y,{layout:`row`,title:`후반 15분 세이브`,meta:`9월 6일`,duration:`0:10`,progress:1})]})]})},P={name:`ClipThumbnail Wide, Half`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:`메타 줄은 명세대로 text/tertiary. Card, Row 스토리와 같은 이유로 대비 검사를 끈다.`}}},render:()=>(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(v,{size:`wide`,title:`후반 32분 역전골`,meta:`9월 6일, 김민수`,duration:`0:12`,type:`골`,progress:.6,onClick:()=>{}}),(0,A.jsxs)(`div`,{className:`flex gap-2`,children:[(0,A.jsx)(v,{size:`half`,title:`전반 8분 스프린트`,meta:`9월 6일`,duration:`0:08`,type:`스프린트`,onClick:()=>{}}),(0,A.jsx)(v,{size:`half`,title:`후반 15분 세이브`,meta:`9월 6일`,duration:`0:10`,type:`세이브`,progress:1,onClick:()=>{}})]})]})},F={name:`VideoTime`,render:()=>(0,A.jsxs)(d,{children:[(0,A.jsx)(l,{label:`Duration`,children:(0,A.jsx)(`span`,{className:`rounded-sm bg-ink p-2`,children:(0,A.jsx)(h,{duration:`0:12`})})}),(0,A.jsx)(l,{label:`Elapsed`,children:(0,A.jsx)(`span`,{className:`rounded-sm bg-ink p-2`,children:(0,A.jsx)(h,{elapsed:`0:06`,duration:`0:12`})})})]})},I=[.3,.5,.6,.8,.7,.9,.6,.4,.5,.3,.6,.7,1,.8,.5,.6,.4,.2],L={name:`Timeline`,render:()=>(0,A.jsx)(O,{})},R={name:`TimelineMarker`,render:()=>(0,A.jsxs)(d,{children:[(0,A.jsx)(l,{label:`Default`,children:(0,A.jsx)(S,{label:`52분`})}),(0,A.jsx)(l,{label:`Selected`,children:(0,A.jsx)(`div`,{className:`pt-7`,children:(0,A.jsx)(S,{label:`52분`,selected:!0})})})]})},z=[`Card`,`Layouts`,`Thumbnails`,`Time`,`TimelineStory`,`Marker`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'HighlightCard'
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Card, Row',
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      description: {
        story: '메타 줄(날짜, 상대)은 명세대로 text/tertiary(2.8:1)다. 제목이 정보를 다 담고 메타는 보조라서 허용하는 자리이고, 이 스토리는 그 이유로 대비 검사를 끈다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <HighlightCard title="후반 32분 역전골" meta="9월 6일, FC 목요일 vs 주말 리그" duration="0:12" badge="클립 3" progress={0.4} />
      <div className="flex flex-col gap-3">
        <HighlightCard layout="row" title="전반 8분 스프린트" meta="9월 6일" duration="0:08" />
        <HighlightCard layout="row" title="후반 15분 세이브" meta="9월 6일" duration="0:10" progress={1} />
      </div>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'ClipThumbnail Wide, Half',
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      description: {
        story: '메타 줄은 명세대로 text/tertiary. Card, Row 스토리와 같은 이유로 대비 검사를 끈다.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <ClipThumbnail size="wide" title="후반 32분 역전골" meta="9월 6일, 김민수" duration="0:12" type="골" progress={0.6} onClick={() => {}} />
      <div className="flex gap-2">
        <ClipThumbnail size="half" title="전반 8분 스프린트" meta="9월 6일" duration="0:08" type="스프린트" onClick={() => {}} />
        <ClipThumbnail size="half" title="후반 15분 세이브" meta="9월 6일" duration="0:10" type="세이브" progress={1} onClick={() => {}} />
      </div>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'VideoTime',
  render: () => <Matrix>
      <MatrixRow label="Duration">
        <span className="rounded-sm bg-ink p-2"><VideoTime duration="0:12" /></span>
      </MatrixRow>
      <MatrixRow label="Elapsed">
        <span className="rounded-sm bg-ink p-2"><VideoTime elapsed="0:06" duration="0:12" /></span>
      </MatrixRow>
    </Matrix>
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Timeline',
  render: () => <TimelineDemo />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'TimelineMarker',
  render: () => <Matrix>
      <MatrixRow label="Default">
        <TimelineMarker label="52분" />
      </MatrixRow>
      <MatrixRow label="Selected">
        <div className="pt-7"><TimelineMarker label="52분" selected /></div>
      </MatrixRow>
    </Matrix>
}`,...R.parameters?.docs?.source}}}}))();export{M as Card,N as Layouts,R as Marker,P as Thumbnails,F as Time,L as TimelineStory,z as __namedExportsOrder,j as default};