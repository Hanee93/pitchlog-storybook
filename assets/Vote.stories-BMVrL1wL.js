import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-iUPssvWC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,r as a,t as o}from"./storyDecorators-DI9SAnnw.js";import{i as s,n as c,r as l,t as u}from"./Vote-BRVzFD6v.js";function d(){let[e,t]=(0,f.useState)(`yes`),n={yes:8,no:4,maybe:2};return(0,p.jsx)(u,{label:`다음 경기 참석`,me:`김민수`,value:e,onChange:t,options:[{value:`yes`,label:`참석`,count:n.yes+0},{value:`no`,label:`불참`,count:n.no},{value:`maybe`,label:`미정`,count:n.maybe}],summary:`참석 8명, 미정 2명`,deadline:`투표 마감 금 18:00`})}var f,p,m,h,g,_,v,y;e((()=>{f=t(n(),1),c(),s(),a(),p=r(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:`Components/Vote`,component:l,decorators:[o],globals:{backgrounds:{value:`canvas`}},args:{label:`참석`,count:8,ratio:57,selected:!1},argTypes:{ratio:{control:{type:`range`,min:0,max:100},description:`Figma Ratio 25 | 50 | 75`},selected:{control:`boolean`,description:`Figma State`},onSelect:{action:`select`}},parameters:{docs:{description:{component:`[VoteOption 105:644](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=105-644), [Vote 105:645](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=105-645). 354x52 bg/surface radius 4, 좌우 패딩 16. 왼쪽 바 폭이 득표 비율(bg/subtle). Selected는 ink 바 + 흰 라벨 + 내 아바타 xs. 라벨 body/regular, 인원 body/label.

**코드.** Vote는 radiogroup, VoteOption은 radio. 비율은 count 합으로 계산한다. Selected 라벨은 바 위에서는 흰색, 바 밖에서는 ink가 되도록 difference 블렌드를 쓴다.

### 플랫폼 참고

${i([[`대응 요소`,`없음. Radio button + Linear progress 조합`,`없음. iMessage 투표, 설문은 앱 재량`,`선택지 자체가 결과 바. 고르는 행위와 결과 보기가 한 요소`],[`선택 표시`,`Radio 원 primary`,`체크마크 tint`,`ink 채움 바 + 내 아바타. 원이나 체크 없음`],[`비율 표현`,`Linear progress 4dp, primary`,`ProgressView 4pt`,`행 전체 높이 52의 배경 바. 색은 bg/subtle과 ink뿐, 파랑을 쓰지 않는다(투표는 기록이 아니다)`],[`높이`,`48(라디오 행)`,`44`,`52. Large 버튼과 같은 높이. 투표가 화면의 주 행동이라 크게`]])}`}}}},g={name:`VoteOption`,render:function(e){let[,t]=m();return(0,p.jsx)(l,{...e,me:`김민수`,onSelect:()=>{e.onSelect?.(),t({selected:!e.selected})}})}},_={name:`Ratio x State`,render:()=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsx)(l,{label:`참석`,count:3,ratio:25}),(0,p.jsx)(l,{label:`참석`,count:7,ratio:50}),(0,p.jsx)(l,{label:`참석`,count:10,ratio:75}),(0,p.jsx)(l,{label:`참석`,count:3,ratio:25,selected:!0,me:`김민수`}),(0,p.jsx)(l,{label:`참석`,count:10,ratio:75,selected:!0,me:`김민수`})]})},v={name:`Vote 묶음`,render:()=>(0,p.jsx)(d,{})},y=[`Option`,`States`,`Group`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'VoteOption',
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <VoteOption {...args} me="김민수" onSelect={() => {
      args.onSelect?.();
      setArgs({
        selected: !args.selected
      });
    }} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Ratio x State',
  render: () => <div className="flex flex-col gap-2">
      <VoteOption label="참석" count={3} ratio={25} />
      <VoteOption label="참석" count={7} ratio={50} />
      <VoteOption label="참석" count={10} ratio={75} />
      <VoteOption label="참석" count={3} ratio={25} selected me="김민수" />
      <VoteOption label="참석" count={10} ratio={75} selected me="김민수" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Vote 묶음',
  render: () => <Demo />
}`,...v.parameters?.docs?.source}}}}))();export{v as Group,g as Option,_ as States,y as __namedExportsOrder,h as default};