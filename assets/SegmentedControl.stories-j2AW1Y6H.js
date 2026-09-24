import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-CwBxk0jx.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,r as a,t as o}from"./storyDecorators-CxjbOeQx.js";import{n as s,t as c}from"./SegmentedControl-C9H2evbz.js";function l(e){let t=e.options[0],[n,r]=(0,u.useState)(e.initial??(typeof t==`string`?t:t.value));return(0,d.jsx)(c,{...e,value:n,onChange:r})}var u,d,f,p,m,h,g,_,v,y;e((()=>{u=t(n(),1),s(),a(),d=r(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/SegmentedControl`,component:c,decorators:[o],args:{options:[`예정`,`지난`],value:`예정`,size:`md`,label:`경기 목록 종류`,onChange:p()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`Figma Size. 트랙 32 / 40 / 48`},options:{control:`object`,description:`Figma Count 2~4`},onChange:{action:`change`}},parameters:{docs:{description:{component:`[SegmentedControl 100:351](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=100-351), [SegmentItem 100:287](https://www.figma.com/design/zINrAdy8XLijakU2ZKmDdT/%ED%94%BC%EC%B9%98%EB%A1%9C%EA%B7%B8?node-id=100-287). 트랙 32 / 40 / 48, bg/subtle radius 4, 패딩 2. 항목은 트랙보다 4 작고 균등 폭. Selected는 bg/surface + text/primary, Default는 투명 + text/secondary.

**용도.** 2~4개로 화면을 전환하는 자리. 목록 종류를 바꾸는 상위 탭은 UnderlineTabs, 값 하나를 고르는 격자는 RadioCell, 화면 하단 이동은 TabBar.

**코드.** role="radiogroup"에 방향키 이동. 시각적으로는 탭이지만 의미상 단일 선택이라 radio 패턴을 따른다(HIG의 Segmented control과 같은 판단).

### 플랫폼 참고

${i([[`원형`,`Segmented button. 아웃라인 필, 선택 항목에 체크마크 + secondary-container 채움`,`Segmented control. 회색 트랙 위에 선택 항목이 흰 카드로 떠오름(iOS 13+)`,`HIG 원형. 회색 트랙(bg/subtle) 위 흰 항목(bg/surface). 체크마크 없음`],[`높이`,`40dp`,`32pt(표준)`,`sm 32(HIG와 같음, 헤더 안), md 40(M3와 같음, 본문), lg 48(필터 바)`],[`항목 수`,`2~5`,`2~5, 아이콘 또는 텍스트`,`2~4. 5개부터는 라벨이 잘려 UnderlineTabs로`],[`모양`,`필`,`캡슐 트랙, radius 7~9 항목`,`radius 4 트랙과 항목. 필 금지`],[`선택 항목 그림자`,`없음(채움 색으로 구분)`,`약한 그림자`,`없음. 흰 채움과 라벨 굵기(600)로만 구분. 그림자 금지 규칙`],[`모션`,`체크마크 페이드`,`선택 카드가 슬라이드`,`슬라이드 없음, 색만 transition. 시각 회귀 안정성과 reduced motion을 우선`]])}`}}}},h={render:function(e){let[,t]=f();return(0,d.jsx)(c,{...e,onChange:n=>{e.onChange(n),t({value:n})}})}},g={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(l,{size:`sm`,options:[`km/h`,`m/s`],label:`단위`}),(0,d.jsx)(l,{size:`md`,options:[`예정`,`지난`],label:`경기 목록`}),(0,d.jsx)(l,{size:`lg`,options:[`전체`,`홈`,`어웨이`],label:`팀`})]})},_={name:`내용 폭(fullWidth false)`,parameters:{docs:{description:{story:`섹션 제목 옆 인라인 전환. 항목은 내용 폭 + 좌우 12.`}}},render:()=>(0,d.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,d.jsx)(`span`,{className:`text-body-sm font-semibold text-slate`,children:`활동 히트맵`}),(0,d.jsx)(l,{size:`sm`,options:[`전체`,`전반`,`후반`],label:`전반 후반`,fullWidth:!1})]})},v={name:`Count 2~4`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(l,{options:[`예정`,`지난`],label:`2`}),(0,d.jsx)(l,{options:[`전체`,`홈`,`어웨이`],label:`3`}),(0,d.jsx)(l,{options:[`1Q`,`2Q`,`3Q`,`4Q`],label:`4`})]})},y=[`Playground`,`Sizes`,`Inline`,`Counts`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <SegmentedControl {...args} onChange={value => {
      args.onChange(value);
      setArgs({
        value
      });
    }} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Demo size="sm" options={['km/h', 'm/s']} label="단위" />
      <Demo size="md" options={['예정', '지난']} label="경기 목록" />
      <Demo size="lg" options={['전체', '홈', '어웨이']} label="팀" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '내용 폭(fullWidth false)',
  parameters: {
    docs: {
      description: {
        story: '섹션 제목 옆 인라인 전환. 항목은 내용 폭 + 좌우 12.'
      }
    }
  },
  render: () => <div className="flex items-center justify-between">
      <span className="text-body-sm font-semibold text-slate">활동 히트맵</span>
      <Demo size="sm" options={['전체', '전반', '후반']} label="전반 후반" fullWidth={false} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Count 2~4',
  render: () => <div className="flex flex-col gap-4">
      <Demo options={['예정', '지난']} label="2" />
      <Demo options={['전체', '홈', '어웨이']} label="3" />
      <Demo options={['1Q', '2Q', '3Q', '4Q']} label="4" />
    </div>
}`,...v.parameters?.docs?.source}}}}))();export{v as Counts,_ as Inline,h as Playground,g as Sizes,y as __namedExportsOrder,m as default};