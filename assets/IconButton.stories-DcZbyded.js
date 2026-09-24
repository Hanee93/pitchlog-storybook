import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{i as n,r}from"./Icon-B0WhaZnM.js";import{a as i,r as a}from"./storyDecorators-CxjbOeQx.js";import{n as o,r as s,t as c}from"./storyHelpers-DodvrARx.js";import{n as l,t as u}from"./IconButton-OvWj0sc2.js";var d,f,p,m,h;e((()=>{l(),n(),s(),a(),d=t(),f={title:`Components/IconButton`,component:u,args:{icon:`search`,label:`검색`},argTypes:{icon:{control:`select`,options:r,description:`Figma Icon(instance swap)`},label:{control:`text`,description:`스크린 리더 이름. 필수`},interaction:{control:`inline-radio`,options:[void 0,`hover`,`pressed`]},disabled:{control:`boolean`},onClick:{action:`click`}},parameters:{docs:{description:{component:`[Figma 126:1185](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=126-1185). 44x44 터치 영역, 아이콘 24 text/primary, 배경 없음. 헤더의 검색, 뒤로, 닫기 슬롯.

**접근성.** 아이콘만 있는 버튼이라 label이 필수다. 코드에서 aria-label로 붙는다.

### 플랫폼 참고

${i([[`터치 영역`,`48x48dp(컨테이너 40 + 여백)`,`44x44pt`,`44x44. HIG 최소값. Header 402x44 높이에 그대로 들어간다`],[`아이콘`,`24dp Material Symbols`,`SF Symbols, 기본 17pt 폰트 기준`,`24 Lucide, 선 2px`],[`배경`,`Standard는 없음, Filled / Tonal / Outlined 변형`,`Plain(배경 없음), iOS 26은 Glass`,`배경 없음 하나. hover는 bg/subtle, pressed는 hairline 색 채움`],[`색`,`on-surface-variant`,`tintColor`,`text/primary(ink). 강조가 아니라 도구이므로 블루를 쓰지 않는다`]])}`}}}},p={},m={render:()=>(0,d.jsxs)(c,{children:[(0,d.jsxs)(o,{label:`State`,children:[(0,d.jsx)(u,{icon:`search`,label:`검색`}),(0,d.jsx)(u,{icon:`search`,label:`검색`,interaction:`hover`}),(0,d.jsx)(u,{icon:`search`,label:`검색`,interaction:`pressed`}),(0,d.jsx)(u,{icon:`search`,label:`검색`,disabled:!0})]}),(0,d.jsxs)(o,{label:`헤더 슬롯`,children:[(0,d.jsx)(u,{icon:`chevron-left`,label:`뒤로`}),(0,d.jsx)(u,{icon:`close`,label:`닫기`}),(0,d.jsx)(u,{icon:`plus`,label:`추가`}),(0,d.jsx)(u,{icon:`share`,label:`공유`})]})]})},h=[`Playground`,`States`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Matrix>
      <MatrixRow label="State">
        <IconButton icon="search" label="검색" />
        <IconButton icon="search" label="검색" interaction="hover" />
        <IconButton icon="search" label="검색" interaction="pressed" />
        <IconButton icon="search" label="검색" disabled />
      </MatrixRow>
      <MatrixRow label="헤더 슬롯">
        <IconButton icon="chevron-left" label="뒤로" />
        <IconButton icon="close" label="닫기" />
        <IconButton icon="plus" label="추가" />
        <IconButton icon="share" label="공유" />
      </MatrixRow>
    </Matrix>
}`,...m.parameters?.docs?.source}}}}))();export{p as Playground,m as States,h as __namedExportsOrder,f as default};