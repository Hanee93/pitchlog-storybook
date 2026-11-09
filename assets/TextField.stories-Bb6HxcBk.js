import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{O as n}from"./iframe-ijBa-pNC.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cx-B8S8_Vys.js";import{a as o,r as s,t as c}from"./storyDecorators-FL8HJpQ6.js";import{n as l,t as u}from"./Icon-CbBTU1As.js";import{n as d,t as f}from"./Button-k3Kf7t_z.js";function p({type:e=`email`,value:t,onChange:n,label:r,placeholder:i=g[e],visible:o,onVisibleChange:s,focused:c,disabled:l,name:d,autoComplete:f=_[e],className:p}){let v=(0,m.useId)(),[y,b]=(0,m.useState)(!1),x=o??y,S=e===`password`;return(0,h.jsxs)(`div`,{className:a(`flex w-full flex-col gap-2`,p),children:[r&&(0,h.jsx)(`label`,{htmlFor:v,className:`text-body text-slate`,children:r}),(0,h.jsxs)(`div`,{"data-focused":c||void 0,className:a(`flex h-14 w-full items-center rounded-sm border border-line-gray bg-pure-white pl-4 transition-colors focus-within:border-ink data-[focused]:border-ink`,S?`pr-2`:`pr-4`,l&&`bg-court-white`),children:[(0,h.jsx)(`input`,{id:v,name:d,type:S&&!x?`password`:S?`text`:`email`,inputMode:S?void 0:`email`,autoComplete:f,autoCapitalize:`none`,spellCheck:!1,"aria-label":r?void 0:i,value:t,placeholder:i,disabled:l,onChange:e=>n(e.target.value),className:`h-full min-w-0 flex-1 bg-transparent text-body text-ink caret-ink outline-none placeholder:text-mist disabled:text-mist`}),S&&(0,h.jsx)(`button`,{type:`button`,"aria-label":x?`비밀번호 숨기기`:`비밀번호 보기`,"aria-pressed":x,disabled:l,onClick:()=>{let e=!x;b(e),s?.(e)},className:`flex size-10 shrink-0 items-center justify-center rounded-sm text-slate transition-colors hover:text-ink disabled:pointer-events-none disabled:text-mist`,children:(0,h.jsx)(u,{name:x?`eye-off`:`eye`,size:24})})]})]})}var m,h,g,_,v=e((()=>{m=t(n(),1),i(),l(),h=r(),g={email:`이메일 주소`,password:`비밀번호`},_={email:`email`,password:`current-password`},p.__docgenInfo={description:``,methods:[],displayName:`TextField`,props:{type:{required:!1,tsType:{name:`union`,raw:`'email' | 'password'`,elements:[{name:`literal`,value:`'email'`},{name:`literal`,value:`'password'`}]},description:``,defaultValue:{value:`'email'`,computed:!1}},value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`string`},description:`필드 위 라벨. 없으면 플레이스홀더가 접근 가능한 이름이 된다`},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`{
  email: '이메일 주소',
  password: '비밀번호',
}`,computed:!1}},visible:{required:!1,tsType:{name:`boolean`},description:`비밀번호 표시 여부. 넘기면 controlled, 안 넘기면 내부 상태(기본 숨김)`},onVisibleChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(visible: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`visible`}],return:{name:`void`}}},description:``},focused:{required:!1,tsType:{name:`boolean`},description:`문서와 시각 회귀용 포커스 고정`},disabled:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:``},autoComplete:{required:!1,tsType:{name:`InputHTMLAttributes['autoComplete']`,raw:`InputHTMLAttributes<HTMLInputElement>['autoComplete']`},description:``,defaultValue:{value:`{
  email: 'email',
  password: 'current-password',
}`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{y=t(n(),1),v(),d(),s(),b=r(),{fn:x}=__STORYBOOK_MODULE_TEST__,{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,C={title:`Components/TextField`,component:p,decorators:[c],globals:{backgrounds:{value:`canvas`}},args:{type:`email`,value:``,onChange:x()},argTypes:{type:{control:`inline-radio`,options:[`email`,`password`],description:`Figma Type`},value:{control:`text`,description:`Figma Value`},label:{control:`text`,description:`필드 위 라벨. 선택`},placeholder:{control:`text`},visible:{control:`boolean`,description:`Password Visibility = Shown. 넘기면 controlled`},focused:{control:`boolean`,description:`Figma State = Focused 고정`},disabled:{control:`boolean`},onChange:{action:`change`},onVisibleChange:{action:`visibleChange`}},parameters:{docs:{description:{component:`Figma 미반영(코드 먼저, 2026-10-12). Type Email | Password, State Empty | Focused | Filled | Disabled, Password는 Visibility Hidden | Shown.

**용도.** 로그인, 가입처럼 입력 두세 개가 화면의 주인공인 폼. 설정 화면의 여러 값 입력은 FormRow(48, 외곽선 없음), 금액 하나는 LargeField.

**구조.** 폭 354, 높이 56, 좌우 패딩 16, radius 4, bg/surface 흰색 위 hairline 1px. Focused는 ink 1px. 값 body/regular ink, 플레이스홀더 text/tertiary. 라벨은 선택이고 body/regular text/secondary가 위에 8 간격. Disabled는 bg/subtle에 text/tertiary.

**비밀번호.** 오른쪽 끝에 눈 아이콘 24 text/secondary, 터치 영역 40(오른쪽 패딩 8). Hidden이면 eye, Shown이면 eye-off. 토글은 aria-pressed로 상태를 알리고 라벨이 '비밀번호 보기 / 숨기기'로 바뀐다. 입력값을 지우지 않는다.

### 플랫폼 참고

${o([[`높이`,`Text field 56dp`,`텍스트 필드 44pt 최소, 로그인 시트는 50 안팎`,`56. 로그인 화면은 입력 두 개와 CTA(52)뿐이라 FormRow 48보다 키워 터치와 시선을 받는다`],[`테두리`,`Outlined 1dp outline, 포커스 2dp primary. Filled는 밑줄`,`secondarySystemBackground 채움, 외곽선 없음`,`bg/surface 흰색 + hairline 1px, 포커스 ink 1px. 캔버스(bg/subtle) 위에 놓여 흰 면이 입력 영역을 알린다. primary 색 테두리는 CTA와 겹쳐 쓰지 않는다`],[`라벨`,`Floating label(필드 안에서 위로 이동)`,`플레이스홀더 또는 필드 왼쪽 라벨`,`플레이스홀더 기본, 라벨은 선택으로 위에 고정. 플로팅 라벨은 높이 안에서 글자가 움직여 쓰지 않는다`],[`비밀번호 보기`,`Trailing icon visibility / visibility_off`,`iOS 17부터 SecureField에 보기 토글 없음, 앱이 직접 추가`,`eye / eye-off 24. Hidden이 기본이고 toggle은 aria-pressed`],[`키보드`,`inputType textEmailAddress`,`keyboardType emailAddress, textContentType`,`inputMode email, autoComplete email / current-password, autoCapitalize none`]])}`}}}},w={render:function(e){let[,t]=S();return(0,b.jsx)(p,{...e,onChange:n=>{e.onChange(n),t({value:n})}})}},T={name:`Email: Empty / Focused / Filled / Disabled`,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(p,{type:`email`,value:``,onChange:()=>{}}),(0,b.jsx)(p,{type:`email`,value:``,onChange:()=>{},focused:!0}),(0,b.jsx)(p,{type:`email`,value:`minjun@pitchlog.kr`,onChange:()=>{}}),(0,b.jsx)(p,{type:`email`,value:``,onChange:()=>{},disabled:!0})]})},E={name:`Password: Hidden / Shown`,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(p,{type:`password`,value:``,onChange:()=>{},visible:!1}),(0,b.jsx)(p,{type:`password`,value:``,onChange:()=>{},visible:!1,focused:!0}),(0,b.jsx)(p,{type:`password`,value:`pitchlog2026`,onChange:()=>{},visible:!1}),(0,b.jsx)(p,{type:`password`,value:`pitchlog2026`,onChange:()=>{},visible:!0}),(0,b.jsx)(p,{type:`password`,value:`pitchlog2026`,onChange:()=>{},visible:!1,disabled:!0})]})},D={name:`With label`,render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(p,{type:`email`,label:`이메일 주소`,value:``,onChange:()=>{}}),(0,b.jsx)(p,{type:`password`,label:`비밀번호`,value:``,onChange:()=>{}})]})},O={name:`Login form`,render:function(){let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(``);return(0,b.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault()},children:[(0,b.jsx)(p,{type:`email`,value:e,onChange:t}),(0,b.jsx)(p,{type:`password`,value:n,onChange:r}),(0,b.jsx)(f,{type:`submit`,variant:`primary`,size:`lg`,className:`mt-3`,disabled:!e||!n,children:`로그인`})]})}},k=[`Playground`,`Email`,`Password`,`WithLabel`,`LoginForm`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, setArgs] = useArgs();
    return <TextField {...args} onChange={value => {
      args.onChange(value);
      setArgs({
        value
      });
    }} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Email: Empty / Focused / Filled / Disabled',
  render: () => <div className="flex flex-col gap-4">
      <TextField type="email" value="" onChange={() => {}} />
      <TextField type="email" value="" onChange={() => {}} focused />
      <TextField type="email" value="minjun@pitchlog.kr" onChange={() => {}} />
      <TextField type="email" value="" onChange={() => {}} disabled />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Password: Hidden / Shown',
  render: () => <div className="flex flex-col gap-4">
      <TextField type="password" value="" onChange={() => {}} visible={false} />
      <TextField type="password" value="" onChange={() => {}} visible={false} focused />
      <TextField type="password" value="pitchlog2026" onChange={() => {}} visible={false} />
      <TextField type="password" value="pitchlog2026" onChange={() => {}} visible />
      <TextField type="password" value="pitchlog2026" onChange={() => {}} visible={false} disabled />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With label',
  render: () => <div className="flex flex-col gap-4">
      <TextField type="email" label="이메일 주소" value="" onChange={() => {}} />
      <TextField type="password" label="비밀번호" value="" onChange={() => {}} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Login form',
  render: function Render() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <form className="flex flex-col gap-3" onSubmit={e => {
      e.preventDefault();
    }}>
        <TextField type="email" value={email} onChange={setEmail} />
        <TextField type="password" value={password} onChange={setPassword} />
        <Button type="submit" variant="primary" size="lg" className="mt-3" disabled={!email || !password}>
          로그인
        </Button>
      </form>;
  }
}`,...O.parameters?.docs?.source}}}}))();export{T as Email,O as LoginForm,E as Password,w as Playground,D as WithLabel,k as __namedExportsOrder,C as default};