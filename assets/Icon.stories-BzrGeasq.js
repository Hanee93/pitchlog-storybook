import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{i as n,n as r,r as i,t as a}from"./Icon-B0WhaZnM.js";import{a as o,r as s}from"./storyDecorators-CxjbOeQx.js";var c,l,u,d,f;e((()=>{r(),n(),s(),c=t(),l={title:`Components/Icon`,component:a,args:{name:`search`,size:24},argTypes:{name:{control:`select`,options:i,description:`Figma Name`},size:{control:`inline-radio`,options:[16,20,24]},label:{control:`text`,description:`의미 있는 아이콘의 이름. 비우면 장식으로 숨긴다`}},parameters:{docs:{description:{component:`[Figma 168:1670](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=168-1670). 24 프레임, Lucide 기반, 채움 없이 선 2px. 색은 부모의 text/* 색(currentColor).

Figma의 대문자 이름(Close, Edit, Help, QR, Search, Share)은 코드에서 Lucide 소문자로 쓴다. Close와 x는 같은 글리프. settings는 동호회 설정 진입용으로 코드에서 먼저 추가했고 Figma 세트에 아직 없다.

### 플랫폼 참고

${o([[`세트`,`Material Symbols. weight, fill, grade, optical size 축`,`SF Symbols. 9 weight, 3 scale, 텍스트와 베이스라인 정렬`,`Lucide. 선 2px 고정, 축 없음. 세트 하나로 고정해 변형 폭발을 막는다`],[`크기`,`24dp 기본, 20 dense`,`17pt 폰트 기준 스케일`,`24 기본, 버튼 안 20, Small 16. 세 단계만`],[`색`,`on-surface 계열 토큰`,`label 계열 또는 tint`,`text/primary, secondary, tertiary, inverse 중 하나. 아이콘 전용 색 없음`]])}`}}}},u={},d={name:`18개 전부`,render:()=>(0,c.jsx)(`div`,{className:`grid grid-cols-6 gap-4`,children:i.map(e=>(0,c.jsxs)(`div`,{className:`flex flex-col items-center gap-2 rounded-sm bg-pure-white p-3 text-ink`,children:[(0,c.jsx)(a,{name:e,size:24}),(0,c.jsx)(`span`,{className:`text-caption text-slate`,children:e})]},e))})},f=[`Playground`,`All`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '18개 전부',
  render: () => <div className="grid grid-cols-6 gap-4">
      {ICON_NAMES.map(n => <div key={n} className="flex flex-col items-center gap-2 rounded-sm bg-pure-white p-3 text-ink">
          <Icon name={n} size={24} />
          <span className="text-caption text-slate">{n}</span>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}}}))();export{d as All,u as Playground,f as __namedExportsOrder,l as default};