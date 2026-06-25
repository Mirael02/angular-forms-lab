import{b as ot,d as ke}from"./chunk-MAO7DEQH.js";import{a as me,b as de,c as It}from"./chunk-DMLLG2B6.js";import{a as gt,b as kt}from"./chunk-SX7BILZS.js";import{a as xt}from"./chunk-BBXUIIIA.js";import{a as vt,b as yt,c as Ct,d as Mt}from"./chunk-MJBCULME.js";import{$ as bt,Aa as q,Ba as B,Ca as G,Da as U,E as pt,Ea as H,Fa as K,K as ut,Z as ht,a as ct,aa as _t,b as Q,ba as ft,c as mt,d as p,da as D,e as Z,ea as R,f as $,fa as ne,g as J,ga as ae,ha as Pt,ia as ie,ja as wt,k as ee,l as te,la as re,ma as oe,na as ce,o as dt,p as lt,q as V,sa as Ot,w as st,wa as St,xa as Et,ya as j,za as L}from"./chunk-5UF67QOG.js";import{h as M,k as it,m as k,r as rt}from"./chunk-CLBXOUJC.js";import{$b as Ze,Bb as Be,Cb as Ge,Eb as Y,Fb as Ue,Ib as u,Kb as v,Lb as He,Mb as Ke,N as ze,Ob as We,Pb as xe,Qa as c,Qb as ge,T as Te,U as Ae,Ub as Xe,V as T,Wb as I,X as Ne,Xb as Ye,Y as Fe,Yb as t,Z as _,Zb as y,_b as Qe,a as _e,ac as $e,bc as Je,ca as A,da as N,db as g,dc as et,ea as Ve,eb as F,fa as De,ib as h,k as X,ka as x,la as Re,lc as tt,o as Se,oa as je,qc as nt,rb as fe,sa as Le,tc as C,ua as qe,ub as d,uc as at,v as Ee,vb as n,wb as e,xb as s,z as Ie}from"./chunk-DUHXLYBQ.js";var le=class i{constructor(m){this.http=m}taken=["admin","user","test","root","politeknik"];checkAvailability(){return m=>!m.value||m.value.length<3?X(null):Ee(600).pipe(ze(()=>{let a=this.taken.includes(m.value.toLowerCase());return X(a)}),Se(a=>a?{usernameTaken:!0}:null),Ie(()=>X(null)))}static \u0275fac=function(a){return new(a||i)(Fe(rt))};static \u0275prov=Ae({token:i,factory:i.\u0275fac,providedIn:"root"})};function Rt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Nama depan wajib diisi "),e())}function jt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Minimal 2 karakter "),e())}function Lt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Tidak boleh hanya spasi "),e())}function qt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Nama belakang wajib diisi "),e())}function Bt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," NIK wajib diisi "),e())}function Gt(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," NIK harus 16 digit angka "),e())}function Ut(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," No. HP wajib diisi "),e())}function Ht(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Format tidak valid (mulai 08, 10-13 digit) "),e())}var se=class i{form;next=new x;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-step-personal"]],inputs:{form:"form"},outputs:{next:"next"},decls:87,vars:9,consts:[[1,"form-container"],[1,"form-header"],[1,"form-title"],[1,"form-subtitle"],[1,"form-content",3,"ngSubmit","formGroup"],["appearance","outlined",1,"section-card"],["mat-card-avatar",""],[1,"form-row"],["appearance","outline",1,"form-field"],["matInput","","formControlName","firstName","placeholder","Budi"],["matPrefix",""],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Santoso"],["appearance","outline",1,"form-field-full"],["matInput","","formControlName","nik","maxlength","16","placeholder","3509xxxxxxxxxxxx"],["formControlName","gender"],["value","L"],["value","P"],["matInput","","formControlName","birthDate","type","date"],["matInput","","formControlName","phone","placeholder","08xxxxxxxxxx"],[1,"action-bar"],["mat-raised-button","","color","primary","type","submit",1,"next-btn"]],template:function(a,r){if(a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2)(3,"mat-icon"),t(4,"person_add"),e(),t(5," Data Pribadi "),e(),n(6,"p",3),t(7,"Lengkapi informasi pribadi Anda untuk melanjutkan pendaftaran"),e()(),n(8,"form",4),u("ngSubmit",function(){return r.next.emit()}),n(9,"mat-card",5)(10,"mat-card-header")(11,"mat-icon",6),t(12,"badge"),e(),n(13,"mat-card-title"),t(14,"Informasi Dasar"),e()(),n(15,"mat-card-content")(16,"div",7)(17,"mat-form-field",8)(18,"mat-label"),t(19,"Nama Depan"),e(),s(20,"input",9),n(21,"mat-icon",10),t(22,"person_outline"),e(),h(23,Rt,4,0,"mat-error",11)(24,jt,4,0,"mat-error",11)(25,Lt,4,0,"mat-error",11),e(),n(26,"mat-form-field",8)(27,"mat-label"),t(28,"Nama Belakang"),e(),s(29,"input",12),n(30,"mat-icon",10),t(31,"person_outline"),e(),h(32,qt,4,0,"mat-error",11),e()(),n(33,"mat-form-field",13)(34,"mat-label"),t(35,"NIK (16 digit)"),e(),s(36,"input",14),n(37,"mat-icon",10),t(38,"fingerprint"),e(),n(39,"mat-hint"),t(40,"Nomor Induk Kependudukan 16 digit"),e(),h(41,Bt,4,0,"mat-error",11)(42,Gt,4,0,"mat-error",11),e(),n(43,"div",7)(44,"mat-form-field",8)(45,"mat-label"),t(46,"Jenis Kelamin"),e(),n(47,"mat-select",15)(48,"mat-option",16)(49,"mat-icon"),t(50,"male"),e(),t(51," Laki-laki "),e(),n(52,"mat-option",17)(53,"mat-icon"),t(54,"female"),e(),t(55," Perempuan "),e()(),n(56,"mat-icon",10),t(57,"transgender"),e(),n(58,"mat-error")(59,"mat-icon"),t(60,"warning"),e(),t(61," Pilih jenis kelamin "),e()(),n(62,"mat-form-field",8)(63,"mat-label"),t(64,"Tanggal Lahir"),e(),s(65,"input",18),n(66,"mat-icon",10),t(67,"calendar_today"),e(),n(68,"mat-error")(69,"mat-icon"),t(70,"warning"),e(),t(71," Tanggal lahir wajib diisi "),e()()(),n(72,"mat-form-field",13)(73,"mat-label"),t(74,"No. HP"),e(),s(75,"input",19),n(76,"mat-icon",10),t(77,"phone"),e(),n(78,"mat-hint"),t(79,"Format: 08xxxxxxxxxx (10-13 digit)"),e(),h(80,Ut,4,0,"mat-error",11)(81,Ht,4,0,"mat-error",11),e()()(),n(82,"div",20)(83,"button",21),t(84," Selanjutnya "),n(85,"mat-icon"),t(86,"arrow_forward"),e()()()()()),a&2){let o,l,f,P,w,O,S,E;c(8),d("formGroup",r.form),c(15),d("ngIf",(o=r.form.get("firstName"))==null||o.errors==null?null:o.errors.required),c(),d("ngIf",(l=r.form.get("firstName"))==null||l.errors==null?null:l.errors.minlength),c(),d("ngIf",(f=r.form.get("firstName"))==null||f.errors==null?null:f.errors.whitespaceOnly),c(7),d("ngIf",(P=r.form.get("lastName"))==null||P.errors==null?null:P.errors.required),c(9),d("ngIf",(w=r.form.get("nik"))==null||w.errors==null?null:w.errors.required),c(),d("ngIf",(O=r.form.get("nik"))==null||O.errors==null?null:O.errors.invalidNik),c(38),d("ngIf",(S=r.form.get("phone"))==null||S.errors==null?null:S.errors.required),c(),d("ngIf",(E=r.form.get("phone"))==null||E.errors==null?null:E.errors.pattern)}},dependencies:[k,M,V,J,Q,Z,$,dt,te,ee,ce,oe,re,ne,Pt,ae,ie,Et,St,Ot,R,D,L,j,K,q,H,G,U,B],styles:[".form-container[_ngcontent-%COMP%]{padding:24px;max-width:800px;margin:0 auto}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{margin-bottom:32px;text-align:center}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;font-size:28px;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 8px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:var(--mat-sys-primary)}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-subtitle[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:16px;margin:0}.form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.section-card[_ngcontent-%COMP%]{transition:box-shadow .3s ease,transform .2s ease}.section-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #0000001f}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px 24px;border-bottom:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface-container-lowest)}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-icon[mat-card-avatar][_ngcontent-%COMP%]{background:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);border-radius:50%;width:40px;height:40px;font-size:24px;display:flex;align-items:center;justify-content:center}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--mat-sys-on-surface);margin-left:12px}.section-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:24px}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px}.form-field[_ngcontent-%COMP%]{flex:1;min-width:250px}.form-field-full[_ngcontent-%COMP%]{width:100%;margin-top:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]   mat-icon[matSuffix][_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}mat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:12px}mat-form-field[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{display:flex;align-items:center}mat-form-field[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]   mat-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}mat-form-field[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]   mat-option[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.action-bar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:16px 0}.action-bar[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]{min-width:160px;display:flex;align-items:center;gap:8px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.form-container[_ngcontent-%COMP%]{padding:16px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{margin-bottom:24px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:24px;flex-direction:column;gap:8px}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:12px 16px}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:16px}.section-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.form-row[_ngcontent-%COMP%]{flex-direction:column;gap:0}.form-field[_ngcontent-%COMP%]{min-width:100%}.action-bar[_ngcontent-%COMP%]{justify-content:center}.action-bar[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]{width:100%}}@media(prefers-color-scheme:dark){.section-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #ffffff14}}"]})};var Kt=["input"],Wt=["label"],Xt=["*"],Ce={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Yt=new Ne("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ce}),b=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(b||{}),Me=class{source;checked},Pe=(()=>{class i{_elementRef=_(qe);_changeDetectorRef=_(nt);_ngZone=_(Re);_animationsDisabled=ht();_options=_(Yt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(a){let r=new Me;return r.source=this,r.checked=a,r}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new x;indeterminateChange=new x;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=b.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){_(st).load(_t);let a=_(new tt("tabindex"),{optional:!0});this._options=this._options||Ce,this.color=this._options.color||Ce.color,this.tabIndex=a==null?0:parseInt(a)||0,this.id=this._uniqueId=_(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(a){a.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(a){a!=this.checked&&(this._checked=a,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(a){a!==this.disabled&&(this._disabled=a,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(a){let r=a!=this._indeterminate();this._indeterminate.set(a),r&&(a?this._transitionCheckState(b.Indeterminate):this._transitionCheckState(this.checked?b.Checked:b.Unchecked),this.indeterminateChange.emit(a)),this._syncIndeterminate(a)}_indeterminate=je(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(a){this.checked=!!a}registerOnChange(a){this._controlValueAccessorChangeFn=a}registerOnTouched(a){this._onTouched=a}setDisabledState(a){this.disabled=a}validate(a){return this.required&&a.value!==!0?{required:!0}:null}registerOnValidatorChange(a){this._validatorChangeFn=a}_transitionCheckState(a){let r=this._currentCheckState,o=this._getAnimationTargetElement();if(!(r===a||!o)&&(this._currentAnimationClass&&o.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(r,a),this._currentCheckState=a,this._currentAnimationClass.length>0)){o.classList.add(this._currentAnimationClass);let l=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{o.classList.remove(l)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let a=this._options?.clickAction;!this.disabled&&a!=="noop"?(this.indeterminate&&a!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?b.Checked:b.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&a==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(a){a.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(a,r){if(this._animationsDisabled)return"";switch(a){case b.Init:if(r===b.Checked)return this._animationClasses.uncheckedToChecked;if(r==b.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case b.Unchecked:return r===b.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case b.Checked:return r===b.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case b.Indeterminate:return r===b.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(a){let r=this._inputElement;r&&(r.nativeElement.indeterminate=a)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(a){a.target&&this._labelElement.nativeElement.contains(a.target)&&a.stopPropagation()}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=g({type:i,selectors:[["mat-checkbox"]],viewQuery:function(r,o){if(r&1&&We(Kt,5)(Wt,5),r&2){let l;xe(l=ge())&&(o._inputElement=l.first),xe(l=ge())&&(o._labelElement=l.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(r,o){r&2&&(Ue("id",o.id),fe("tabindex",null)("aria-label",null)("aria-labelledby",null),Ye(o.color?"mat-"+o.color:"mat-accent"),I("_mat-animation-noopable",o._animationsDisabled)("mdc-checkbox--disabled",o.disabled)("mat-mdc-checkbox-disabled",o.disabled)("mat-mdc-checkbox-checked",o.checked)("mat-mdc-checkbox-disabled-interactive",o.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",C],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",C],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",a=>a==null?void 0:at(a)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",C],checked:[2,"checked","checked",C],disabled:[2,"disabled","disabled",C],indeterminate:[2,"indeterminate","indeterminate",C]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[$e([{provide:ct,useExisting:Te(()=>i),multi:!0},{provide:mt,useExisting:i,multi:!0}]),Le],ngContentSelectors:Xt,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(r,o){if(r&1&&(He(),n(0,"div",3),u("click",function(f){return o._preventBubblingFromLabel(f)}),n(1,"div",4,0)(3,"div",5),u("click",function(){return o._onTouchTargetClick()}),e(),n(4,"input",6,1),u("blur",function(){return o._onBlur()})("click",function(){return o._onInputClick()})("change",function(f){return o._onInteractionEvent(f)}),e(),s(6,"div",7),n(7,"div",8),Ve(),n(8,"svg",9),s(9,"path",10),e(),De(),s(10,"div",11),e(),s(11,"div",12),e(),n(12,"label",13,2),Ke(14),e()()),r&2){let l=Xe(2);d("labelPosition",o.labelPosition),c(4),I("mdc-checkbox--selected",o.checked),d("checked",o.checked)("indeterminate",o.indeterminate)("disabled",o.disabled&&!o.disabledInteractive)("id",o.inputId)("required",o.required)("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex),fe("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-checked",o.indeterminate?"mixed":null)("aria-controls",o.ariaControls)("aria-disabled",o.disabled&&o.disabledInteractive?!0:null)("aria-expanded",o.ariaExpanded)("aria-owns",o.ariaOwns)("name",o.name)("value",o.value),c(7),d("matRippleTrigger",l)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),c(),d("for",o.inputId)}},dependencies:[bt,It],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),Nt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=F({type:i});static \u0275inj=T({imports:[Pe,ut]})}return i})();function $t(i,m){i&1&&s(0,"mat-spinner",25)}function Jt(i,m){i&1&&(n(0,"mat-icon",26),t(1,"check_circle"),e())}function en(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Username wajib diisi "),e())}function tn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Minimal 3 karakter "),e())}function nn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Hanya huruf, angka, dan underscore (_) "),e())}function an(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Username sudah dipakai, pilih yang lain "),e())}function rn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Email wajib diisi "),e())}function on(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Format email tidak valid "),e())}function cn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"warning"),e(),t(3," Password wajib diisi "),e())}function mn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Minimal 8 karakter "),e())}function dn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Butuh minimal 1 huruf kapital "),e())}function ln(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Butuh minimal 1 angka "),e())}function sn(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Butuh 1 simbol (!@#$%^&*) "),e())}function pn(i,m){if(i&1&&(Be(0),h(1,cn,4,0,"mat-error",12)(2,mn,4,0,"mat-error",12)(3,dn,4,0,"mat-error",12)(4,ln,4,0,"mat-error",12)(5,sn,4,0,"mat-error",12),Ge()),i&2){let a=m.ngIf;c(),d("ngIf",a.required),c(),d("ngIf",a.tooShort),c(),d("ngIf",a.noUppercase),c(),d("ngIf",a.noNumber),c(),d("ngIf",a.noSymbol)}}function un(i,m){i&1&&(n(0,"mat-error")(1,"mat-icon"),t(2,"error"),e(),t(3," Password tidak cocok "),e())}function hn(i,m){i&1&&(n(0,"div",27)(1,"mat-icon"),t(2,"warning"),e(),t(3," Anda harus menyetujui syarat & ketentuan "),e())}var pe=class i{form;next=new x;prev=new x;showPwd=!1;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-step-account"]],inputs:{form:"form"},outputs:{next:"next",prev:"prev"},decls:69,vars:15,consts:[[1,"form-container"],[1,"form-header"],[1,"form-title"],[1,"form-subtitle"],[1,"form-content",3,"ngSubmit","formGroup"],["appearance","outlined",1,"section-card"],["mat-card-avatar",""],["appearance","outline",1,"form-field-full"],["matInput","","formControlName","username","placeholder","min. 3 karakter, hanya huruf/angka/_"],["matPrefix",""],["matSuffix","","diameter","20",4,"ngIf"],["matSuffix","","color","primary",4,"ngIf"],[4,"ngIf"],["matInput","","formControlName","email","type","email","placeholder","budi@example.com"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["matInput","","formControlName","confirmPassword","type","password"],[1,"checkbox-section"],["formControlName","agreeTerms",1,"terms-checkbox"],[1,"checkbox-label"],["href","#",1,"terms-link"],["class","checkbox-error",4,"ngIf"],[1,"action-bar"],["mat-button","","type","button",1,"back-btn",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"next-btn",3,"disabled"],["matSuffix","","diameter","20"],["matSuffix","","color","primary"],[1,"checkbox-error"]],template:function(a,r){if(a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2)(3,"mat-icon"),t(4,"security"),e(),t(5," Buat Akun "),e(),n(6,"p",3),t(7,"Lengkapi informasi akun untuk mengamankan pendaftaran Anda"),e()(),n(8,"form",4),u("ngSubmit",function(){return r.next.emit()}),n(9,"mat-card",5)(10,"mat-card-header")(11,"mat-icon",6),t(12,"lock"),e(),n(13,"mat-card-title"),t(14,"Kredensial Akun"),e()(),n(15,"mat-card-content")(16,"mat-form-field",7)(17,"mat-label"),t(18,"Username"),e(),s(19,"input",8),n(20,"mat-icon",9),t(21,"person"),e(),h(22,$t,1,0,"mat-spinner",10)(23,Jt,2,0,"mat-icon",11)(24,en,4,0,"mat-error",12)(25,tn,4,0,"mat-error",12)(26,nn,4,0,"mat-error",12)(27,an,4,0,"mat-error",12),e(),n(28,"mat-form-field",7)(29,"mat-label"),t(30,"Email"),e(),s(31,"input",13),n(32,"mat-icon",9),t(33,"email"),e(),h(34,rn,4,0,"mat-error",12)(35,on,4,0,"mat-error",12),e(),n(36,"mat-form-field",7)(37,"mat-label"),t(38,"Password"),e(),s(39,"input",14),n(40,"mat-icon",9),t(41,"lock"),e(),n(42,"button",15),u("click",function(){return r.showPwd=!r.showPwd}),n(43,"mat-icon"),t(44),e()(),h(45,pn,6,5,"ng-container",12),e(),n(46,"mat-form-field",7)(47,"mat-label"),t(48,"Konfirmasi Password"),e(),s(49,"input",16),n(50,"mat-icon",9),t(51,"lock_reset"),e(),h(52,un,4,0,"mat-error",12),e(),n(53,"div",17)(54,"mat-checkbox",18)(55,"span",19),t(56,"Saya setuju dengan"),e(),n(57,"a",20),t(58,"Syarat & Ketentuan"),e()(),h(59,hn,4,0,"div",21),e()()(),n(60,"div",22)(61,"button",23),u("click",function(){return r.prev.emit()}),n(62,"mat-icon"),t(63,"arrow_back"),e(),t(64," Kembali "),e(),n(65,"button",24),t(66," Selanjutnya "),n(67,"mat-icon"),t(68,"arrow_forward"),e()()()()()),a&2){let o,l,f,P,w,O,S,E,we,Oe,W;c(8),d("formGroup",r.form),c(14),d("ngIf",(o=r.form.get("username"))==null?null:o.pending),c(),d("ngIf",((l=r.form.get("username"))==null?null:l.valid)&&!((l=r.form.get("username"))!=null&&l.pending)),c(),d("ngIf",(f=r.form.get("username"))==null||f.errors==null?null:f.errors.required),c(),d("ngIf",(P=r.form.get("username"))==null||P.errors==null?null:P.errors.minlength),c(),d("ngIf",(w=r.form.get("username"))==null||w.errors==null?null:w.errors.pattern),c(),d("ngIf",(O=r.form.get("username"))==null||O.errors==null?null:O.errors.usernameTaken),c(7),d("ngIf",(S=r.form.get("email"))==null||S.errors==null?null:S.errors.required),c(),d("ngIf",(E=r.form.get("email"))==null||E.errors==null?null:E.errors.email),c(4),d("type",r.showPwd?"text":"password"),c(5),y(r.showPwd?"visibility_off":"visibility"),c(),d("ngIf",(we=r.form.get("password"))==null?null:we.errors),c(7),d("ngIf",(r.form.errors==null?null:r.form.errors.passwordMismatch)&&((Oe=r.form.get("confirmPassword"))==null?null:Oe.touched)),c(7),d("ngIf",((W=r.form.get("agreeTerms"))==null?null:W.invalid)&&((W=r.form.get("agreeTerms"))==null?null:W.touched)),c(6),d("disabled",r.form.invalid||r.form.pending)}},dependencies:[k,M,V,J,Q,Z,$,te,ee,ce,oe,re,ne,ae,ie,wt,R,D,ft,L,j,de,me,Nt,Pe,K,q,H,G,U,B],styles:[".form-container[_ngcontent-%COMP%]{padding:24px;max-width:800px;margin:0 auto}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{margin-bottom:32px;text-align:center}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;font-size:28px;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 8px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:var(--mat-sys-primary)}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-subtitle[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:16px;margin:0}.form-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.section-card[_ngcontent-%COMP%]{transition:box-shadow .3s ease,transform .2s ease}.section-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #0000001f}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px 24px;border-bottom:1px solid var(--mat-sys-outline-variant);background:linear-gradient(135deg,var(--mat-sys-primary-container) 0%,var(--mat-sys-surface-container-lowest) 100%)}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-icon[mat-card-avatar][_ngcontent-%COMP%]{background:var(--mat-sys-primary);color:var(--mat-sys-on-primary);border-radius:50%;width:40px;height:40px;font-size:24px;display:flex;align-items:center;justify-content:center}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--mat-sys-on-surface);margin-left:12px}.section-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:24px}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px}.form-field[_ngcontent-%COMP%]{flex:1;min-width:250px}.form-field-full[_ngcontent-%COMP%]{width:100%;margin-top:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%]   mat-icon[matSuffix][_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}mat-form-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:12px}.checkbox-section[_ngcontent-%COMP%]{margin-top:16px;padding:16px 20px;background:var(--mat-sys-surface-container-low);border-radius:8px}.checkbox-section[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);font-size:14px;margin-right:4px}.checkbox-section[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%]{color:var(--mat-sys-primary);text-decoration:none;font-weight:500;font-size:14px}.checkbox-section[_ngcontent-%COMP%]   .terms-checkbox[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.checkbox-section[_ngcontent-%COMP%]   .checkbox-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:var(--mat-sys-error);font-size:13px;margin-top:8px}.checkbox-section[_ngcontent-%COMP%]   .checkbox-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.action-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 0;gap:16px}.action-bar[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.action-bar[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-width:160px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.form-container[_ngcontent-%COMP%]{padding:16px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{margin-bottom:24px}.form-container[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:24px;flex-direction:column;gap:8px}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:12px 16px}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:16px}.section-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.form-row[_ngcontent-%COMP%]{flex-direction:column;gap:0}.form-field[_ngcontent-%COMP%]{min-width:100%}.action-bar[_ngcontent-%COMP%]{flex-direction:column-reverse}.action-bar[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%], .action-bar[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]{width:100%}}@media(prefers-color-scheme:dark){.section-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #ffffff14}}"]})};function bn(i,m){i&1&&s(0,"mat-progress-spinner",15)}var ue=class i{allValues;isSubmitting=!1;prev=new x;submit=new x;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-step-review"]],inputs:{allValues:"allValues",isSubmitting:"isSubmitting"},outputs:{prev:"prev",submit:"submit"},decls:92,vars:14,consts:[[1,"review-container"],[1,"review-header"],[1,"review-title"],[1,"review-subtitle"],["appearance","outlined",1,"review-section"],["mat-card-avatar",""],[1,"review-grid"],[1,"review-row"],[1,"review-label"],[1,"review-value"],[1,"password-dots"],[1,"action-bar"],["mat-button","","type","button",1,"edit-btn",3,"click"],["mat-raised-button","","color","primary",1,"submit-btn",3,"click","disabled"],["diameter","20","mode","indeterminate",4,"ngIf"],["diameter","20","mode","indeterminate"]],template:function(a,r){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2)(3,"mat-icon"),t(4,"fact_check"),e(),t(5," Konfirmasi Data Anda "),e(),n(6,"p",3),t(7,"Pastikan semua informasi sudah benar sebelum melanjutkan"),e()(),n(8,"mat-card",4)(9,"mat-card-header")(10,"mat-icon",5),t(11,"badge"),e(),n(12,"mat-card-title"),t(13,"Data Pribadi"),e()(),n(14,"mat-card-content")(15,"div",6)(16,"div",7)(17,"div",8)(18,"mat-icon"),t(19,"person_outline"),e(),t(20," Nama Lengkap "),e(),n(21,"div",9),t(22),e()(),n(23,"div",7)(24,"div",8)(25,"mat-icon"),t(26,"fingerprint"),e(),t(27," NIK "),e(),n(28,"div",9),t(29),e()(),n(30,"div",7)(31,"div",8)(32,"mat-icon"),t(33,"transgender"),e(),t(34," Jenis Kelamin "),e(),n(35,"div",9),t(36),e()(),n(37,"div",7)(38,"div",8)(39,"mat-icon"),t(40,"calendar_today"),e(),t(41," Tanggal Lahir "),e(),n(42,"div",9),t(43),Je(44,"date"),e()(),n(45,"div",7)(46,"div",8)(47,"mat-icon"),t(48,"phone"),e(),t(49," No. HP "),e(),n(50,"div",9),t(51),e()()()()(),n(52,"mat-card",4)(53,"mat-card-header")(54,"mat-icon",5),t(55,"security"),e(),n(56,"mat-card-title"),t(57,"Data Akun"),e()(),n(58,"mat-card-content")(59,"div",6)(60,"div",7)(61,"div",8)(62,"mat-icon"),t(63,"person"),e(),t(64," Username "),e(),n(65,"div",9),t(66),e()(),n(67,"div",7)(68,"div",8)(69,"mat-icon"),t(70,"email"),e(),t(71," Email "),e(),n(72,"div",9),t(73),e()(),n(74,"div",7)(75,"div",8)(76,"mat-icon"),t(77,"lock"),e(),t(78," Password "),e(),n(79,"div",9)(80,"span",10),t(81,"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"),e()()()()()(),n(82,"div",11)(83,"button",12),u("click",function(){return r.prev.emit()}),n(84,"mat-icon"),t(85,"arrow_back"),e(),t(86," Edit Data "),e(),n(87,"button",13),u("click",function(){return r.submit.emit()}),n(88,"mat-icon"),t(89,"send"),e(),t(90),h(91,bn,1,0,"mat-progress-spinner",14),e()()()),a&2&&(c(22),Ze("",r.allValues==null?null:r.allValues.firstName," ",r.allValues==null?null:r.allValues.lastName),c(7),y(r.allValues==null?null:r.allValues.nik),c(7),y((r.allValues==null?null:r.allValues.gender)==="L"?"Laki-laki":"Perempuan"),c(7),y(et(44,11,r.allValues==null?null:r.allValues.birthDate,"dd MMMM yyyy")),c(8),y(r.allValues==null?null:r.allValues.phone),c(15),y(r.allValues==null?null:r.allValues.username),c(7),y(r.allValues==null?null:r.allValues.email),c(14),d("disabled",r.isSubmitting),c(3),Qe(" ",r.isSubmitting?"Memproses...":"Daftar Sekarang"," "),c(),d("ngIf",r.isSubmitting))},dependencies:[k,M,K,q,H,G,U,B,R,D,L,j,de,me,it],styles:[".review-container[_ngcontent-%COMP%]{padding:24px;max-width:800px;margin:0 auto}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]{margin-bottom:32px;text-align:center}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;font-size:28px;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 8px}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:var(--mat-sys-primary)}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-subtitle[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);font-size:16px;margin:0}.review-section[_ngcontent-%COMP%]{margin-bottom:24px;transition:box-shadow .3s ease,transform .2s ease}.review-section[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #0000001f}.review-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px 24px;border-bottom:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface-container-lowest)}.review-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-icon[mat-card-avatar][_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);color:var(--mat-sys-on-secondary-container);border-radius:50%;width:40px;height:40px;font-size:24px;display:flex;align-items:center;justify-content:center}.review-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--mat-sys-on-surface);margin-left:12px}.review-section[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:24px}.review-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.review-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:var(--mat-sys-surface-container-low);border-radius:8px;transition:background .2s ease}.review-row[_ngcontent-%COMP%]:hover{background:var(--mat-sys-surface-container)}.review-row[_ngcontent-%COMP%]   .review-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-weight:500;color:var(--mat-sys-on-surface-variant);font-size:14px}.review-row[_ngcontent-%COMP%]   .review-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:var(--mat-sys-primary)}.review-row[_ngcontent-%COMP%]   .review-value[_ngcontent-%COMP%]{font-weight:500;color:var(--mat-sys-on-surface);font-size:15px}.review-row[_ngcontent-%COMP%]   .review-value[_ngcontent-%COMP%]   .password-dots[_ngcontent-%COMP%]{letter-spacing:3px;color:var(--mat-sys-on-surface-variant)}.action-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 0;gap:16px;margin-top:24px}.action-bar[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.action-bar[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;min-width:180px}.action-bar[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%]{margin-left:8px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.review-container[_ngcontent-%COMP%]{padding:16px}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]{margin-bottom:24px}.review-container[_ngcontent-%COMP%]   .review-header[_ngcontent-%COMP%]   .review-title[_ngcontent-%COMP%]{font-size:24px;flex-direction:column;gap:8px}.review-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:12px 16px}.review-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:16px}.review-section[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.review-row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:8px}.review-row[_ngcontent-%COMP%]   .review-value[_ngcontent-%COMP%]{width:100%;text-align:left}.action-bar[_ngcontent-%COMP%]{flex-direction:column-reverse}.action-bar[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%], .action-bar[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{width:100%}}@media(prefers-color-scheme:dark){.review-section[_ngcontent-%COMP%]:hover{box-shadow:0 4px 20px #ffffff14}.review-row[_ngcontent-%COMP%]:hover{background:var(--mat-sys-surface-container-high)}}"]})};function _n(i,m){if(i&1){let a=Y();n(0,"div",5)(1,"app-step-personal",6),u("next",function(){A(a);let o=v();return N(o.nextStep())}),e()()}if(i&2){let a=v();c(),d("form",a.personalForm)}}function fn(i,m){if(i&1){let a=Y();n(0,"div",5)(1,"app-step-account",7),u("next",function(){A(a);let o=v();return N(o.nextStep())})("prev",function(){A(a);let o=v();return N(o.prevStep())}),e()()}if(i&2){let a=v();c(),d("form",a.accountForm)}}function xn(i,m){if(i&1){let a=Y();n(0,"div",5)(1,"app-step-review",8),u("prev",function(){A(a);let o=v();return N(o.prevStep())})("submit",function(){A(a);let o=v();return N(o.onSubmit())}),e()()}if(i&2){let a=v();c(),d("allValues",a.allValues)("isSubmitting",a.isSubmitting)}}var he=class i{fb=_(lt);router=_(ot);snackBar=_(xt);uaVal=_(le);currentStep=0;isSubmitting=!1;personalForm;accountForm;ngOnInit(){this.personalForm=this.fb.group({firstName:["",[p.required,p.minLength(2),Mt()]],lastName:["",[p.required,p.minLength(2)]],nik:["",[p.required,Ct()]],gender:["",p.required],birthDate:["",p.required],phone:["",[p.required,p.pattern(/^08[0-9]{8,11}$/)]]}),this.accountForm=this.fb.group({username:["",[p.required,p.minLength(3),p.pattern(/^[a-zA-Z0-9_]+$/)]],email:["",[p.required,p.email]],password:["",[p.required,vt()]],confirmPassword:["",p.required],agreeTerms:[!1,p.requiredTrue]},{validators:yt("password","confirmPassword")})}nextStep(){let m=this.currentStep===0?this.personalForm:this.accountForm;if(m.invalid){m.markAllAsTouched();return}this.currentStep++}prevStep(){this.currentStep>0&&this.currentStep--}get allValues(){return _e(_e({},this.personalForm.value),this.accountForm.value)}onSubmit(){this.personalForm.invalid||this.accountForm.invalid||(this.isSubmitting=!0,setTimeout(()=>{this.isSubmitting=!1,this.snackBar.open("Registrasi berhasil!","OK",{duration:3e3}),this.router.navigate(["/account"])},1500))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-register-wizard"]],decls:15,vars:10,consts:[[1,"wizard-container"],[1,"wizard-header"],["mode","determinate",3,"value"],[1,"step-labels"],["class","step-panel",4,"ngIf"],[1,"step-panel"],[3,"next","form"],[3,"next","prev","form"],[3,"prev","submit","allValues","isSubmitting"]],template:function(a,r){a&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),t(3,"Daftar Akun Baru"),e(),s(4,"mat-progress-bar",2),n(5,"div",3)(6,"span"),t(7,"1. Data Pribadi"),e(),n(8,"span"),t(9,"2. Akun"),e(),n(10,"span"),t(11,"3. Review"),e()()(),h(12,_n,2,1,"div",4)(13,fn,2,1,"div",4)(14,xn,2,2,"div",4),e()),a&2&&(c(4),d("value",r.currentStep/2*100),c(2),I("active",r.currentStep===0),c(2),I("active",r.currentStep===1),c(2),I("active",r.currentStep===2),c(2),d("ngIf",r.currentStep===0),c(),d("ngIf",r.currentStep===1),c(),d("ngIf",r.currentStep===2))},dependencies:[k,M,V,kt,gt,se,pe,ue],styles:['.wizard-container[_ngcontent-%COMP%]{padding:32px 24px;max-width:860px;margin:0 auto;min-height:100vh}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]{margin-bottom:32px;text-align:center}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 24px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{height:6px;border-radius:3px;margin-bottom:16px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:48px;font-size:14px;font-weight:500}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);position:relative;transition:color .3s ease}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:600}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-22px;left:50%;transform:translate(-50%);width:10px;height:10px;border-radius:50%;background:var(--mat-sys-outline-variant);transition:all .3s ease}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]:before{background:var(--mat-sys-primary);box-shadow:0 0 0 4px var(--mat-sys-primary-container)}.wizard-container[_ngcontent-%COMP%]   .step-panel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeSlideIn .35s ease-out}@keyframes _ngcontent-%COMP%_fadeSlideIn{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.wizard-container[_ngcontent-%COMP%]{padding:20px 16px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]{margin-bottom:24px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}.wizard-container[_ngcontent-%COMP%]   .wizard-header[_ngcontent-%COMP%]   .step-labels[_ngcontent-%COMP%]{gap:24px;font-size:13px}}']})};var gn=[{path:"",component:he}],be=class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=T({imports:[ke.forChild(gn),ke]})};var Ft=class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=T({imports:[k,be]})};export{Ft as RegisterModule};
