(this["webpackJsonpcounter-v2"]=this["webpackJsonpcounter-v2"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={outputBlock:"OutputBlock_outputBlock__3xNCy",outputValueWrapper:"OutputBlock_outputValueWrapper__2s9z9",outputValue:"OutputBlock_outputValue__5iwOp",outputValueMax:"OutputBlock_outputValueMax__2Xclv",outputValueText:"OutputBlock_outputValueText__3OAdr",outputValueTextError:"OutputBlock_outputValueTextError__1xIIA",buttonsWrapper:"OutputBlock_buttonsWrapper__3xttx"}},,,,function(e,t,a){e.exports={navbar:"Navbar_navbar__2HW4X",item:"Navbar_item__3L0tr",active:"Navbar_active__UtoJW"}},function(e,t,a){e.exports={inputForSettings:"InputForSettings_inputForSettings__1nQiW",inputTitle:"InputForSettings_inputTitle__sVhtz",input:"InputForSettings_input__3sf_y",error:"InputForSettings_error__1rlT4"}},function(e,t,a){e.exports={outputBlock:"OutputBlock_outputBlock__3vXCk",outputValueWrapper:"OutputBlock_outputValueWrapper__MAV7t",outputValue:"OutputBlock_outputValue__aZKAf",outputValueMax:"OutputBlock_outputValueMax__1RJM4",outputValueText:"OutputBlock_outputValueText__2bpud",outputValueTextError:"OutputBlock_outputValueTextError__2NZ4B",buttonsWrapper:"OutputBlock_buttonsWrapper__3IVHa"}},,,,,function(e,t,a){e.exports={counterWrapper:"Counter1_counterWrapper__6YQVi"}},,function(e,t,a){e.exports={App:"App_App__1qccB",installText:"App_installText__1pZNI"}},,,,,,,,function(e,t,a){e.exports={settingsBlock:"SettingsBlock_settingsBlock__1jAsu"}},function(e,t,a){e.exports={buttonsArea:"ButtonsAreaSettingsBlock_buttonsArea__3jzWU"}},function(e,t,a){e.exports={button:"Button_button__10iAS"}},function(e,t,a){e.exports={inputsArea:"InputsAreaSettingsBlock_inputsArea__yqHbF"}},function(e,t,a){e.exports={settingsBlock:"SettingsBlock_settingsBlock__2ouG3"}},function(e,t,a){e.exports={buttonsArea:"ButtonsAreaSettingsBlock_buttonsArea__QWHpn"}},function(e,t,a){e.exports={inputsArea:"InputsAreaSettingsBlock_inputsArea__3QnEH"}},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var u=a(0),n=a.n(u),r=a(17),l=a.n(r),s=(a(41),a(21)),o=a.n(s),c=a(12),i=a.n(c),p=a(10);var V=function(){return n.a.createElement("div",{className:i.a.navbar},n.a.createElement("div",{className:i.a.item},n.a.createElement(p.b,{to:"/counter1",activeClassName:i.a.active},"Counter v2.0")),n.a.createElement("div",{className:i.a.item},n.a.createElement(p.b,{to:"/counter2",activeClassName:i.a.active},"Counter v2.0.1")))},m=a(7),_=a(11),E=a(19),b=a.n(E),S=a(29),d=a.n(S),B=a(30),v=a.n(B),x=a(31),g=a.n(x),C=function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:g.a.button,onClick:function(){e.onClick()},disabled:e.disabled},e.title))},f=function(e){return n.a.createElement("div",{className:v.a.buttonsArea},n.a.createElement(C,{title:"set",onClick:e.setCounterValueSettings,disabled:e.isDisableSetButton}))},T=a(32),A=a.n(T),k=a(13),N=a.n(k),D=function(e){var t=e.isInputError?N.a.input+" "+N.a.error:N.a.input;return n.a.createElement("div",{className:N.a.inputForSettings},n.a.createElement("label",{className:N.a.inputTitle},e.title),n.a.createElement("input",{type:"number",className:t,onChange:function(t){var a=Number(t.currentTarget.value);e.onChange(a)},value:e.inputValue}))},O=function(e){var t=e.maxValue,a=e.startValue,u=a>=t,r=u||a<0;return n.a.createElement("div",{className:A.a.inputsArea},n.a.createElement(D,{title:"max value",isInputError:u,inputValue:t,onChange:e.updateMaxValue}),n.a.createElement(D,{title:"start value",isInputError:r,inputValue:a,onChange:e.updateStarsValue}))},R=function(e){return n.a.createElement("div",{className:d.a.settingsBlock},n.a.createElement(O,{startValue:e.startValue,maxValue:e.maxValue,updateStarsValue:e.updateStarsValue,updateMaxValue:e.updateMaxValue}),n.a.createElement(f,{setCounterValueSettings:e.setCounterValueSettings,isDisableSetButton:e.isDisableSetButton}))},I=a(8),h=a.n(I),w=function(e){var t=e.currentValue,a=e.maxValue,u=e.startValue,r=e.isDisableSetButton&&a>u&&u>=0,l=t<a?h.a.outputValue:h.a.outputValueMax,s=!e.isDisableSetButton,o=u>=a||u<0;return n.a.createElement("div",{className:h.a.outputBlock},n.a.createElement("div",{className:h.a.outputValueWrapper},r&&n.a.createElement("span",{className:l},t),s&&n.a.createElement("span",{className:h.a.outputValueText},"enter values and press 'set'"),o&&n.a.createElement("span",{className:h.a.outputValueTextError},"Incorrect value!")),n.a.createElement("div",{className:h.a.buttonsWrapper},n.a.createElement(C,{title:"inc",onClick:e.incrementCurrentValue,disabled:e.isDisableIncButton}),n.a.createElement(C,{title:"reset",onClick:e.resetCounterValueSettings,disabled:e.isDisableResetButton})))},U=function(e){return n.a.createElement("div",{className:b.a.counterWrapper},n.a.createElement(R,{startValue:e.state.startValue,maxValue:e.state.maxValue,isDisableSetButton:e.state.isDisableSetButton,setCounterValueSettings:e.setResetCounterValueSettings,updateStarsValue:e.updateStarsValue,updateMaxValue:e.updateMaxValue}),n.a.createElement(w,{currentValue:e.state.currentValue,startValue:e.state.startValue,maxValue:e.state.maxValue,isDisableIncButton:e.state.isDisableIncButton,isDisableSetButton:e.state.isDisableSetButton,isDisableResetButton:e.state.isDisableResetButton,resetCounterValueSettings:e.setResetCounterValueSettings,incrementCurrentValue:e.incrementCurrentValue}))},M=a(2),W="counter1/reducer/UPDATE_MAX_VALUE",j={startValue:0,maxValue:5,currentValue:0,isDisableSetButton:!0,isDisableIncButton:!1,isDisableResetButton:!1},L=Object(_.b)((function(e){return{state:e.counter1Page}}),(function(e){return{incrementCurrentValue:function(){e({type:"counter1/reducer/INCREMENT_CURRENT_VALUE"})},setResetCounterValueSettings:function(){e({type:"counter1/reducer/SET_RESET_COUNTER_VALUES"})},updateStarsValue:function(t){e(function(e){return{type:"counter1/reducer/UPDATE_START_VALUE",newValue:e}}(t))},updateMaxValue:function(t){e(function(e){return{type:W,newValue:e}}(t))}}}))(U),y=a(33),P=a.n(y),F=a(34),H=a.n(F),X=function(e){return n.a.createElement("div",{className:H.a.buttonsArea},n.a.createElement(C,{title:"set",onClick:e.setCounterValueSettings,disabled:e.isDisableSetButton}))},J=a(35),Q=a.n(J),z=function(e){var t=e.maxValue,a=e.startValue,u=a>=t,r=u||a<0;return n.a.createElement("div",{className:Q.a.inputsArea},n.a.createElement(D,{title:"max value",isInputError:u,inputValue:t,onChange:e.updateMaxValue}),n.a.createElement(D,{title:"start value",isInputError:r,inputValue:a,onChange:e.updateStarsValue}))},G=function(e){return n.a.createElement("div",{className:P.a.settingsBlock},n.a.createElement(z,{startValue:e.startValue,maxValue:e.maxValue,updateStarsValue:e.updateStarsValue,updateMaxValue:e.updateMaxValue}),n.a.createElement(X,{setCounterValueSettings:e.setCounterValueSettings,isDisableSetButton:e.isDisableSetButton}))},K=a(14),Z=a.n(K),q=function(e){var t=e.currentValue,a=t<e.maxValue?Z.a.outputValue:Z.a.outputValueMax;return n.a.createElement("div",{className:Z.a.outputBlock},n.a.createElement("div",{className:Z.a.outputValueWrapper},n.a.createElement("span",{className:a},t)),n.a.createElement("div",{className:Z.a.buttonsWrapper},n.a.createElement(C,{title:"inc",onClick:e.incrementCurrentValue,disabled:e.isDisableIncButton}),n.a.createElement(C,{title:"reset",onClick:e.resetCounterValue,disabled:e.isDisableResetButton}),n.a.createElement(C,{title:"set",onClick:e.showSettingsBlock})))},Y=function(e){var t=e.state.isShowSettingsBlock;return n.a.createElement("div",{className:b.a.counterWrapper},t&&n.a.createElement(G,{startValue:e.state.startValue,maxValue:e.state.maxValue,isDisableSetButton:e.state.isDisableSetButton,setCounterValueSettings:e.setResetCounterValueSettings,updateStarsValue:e.updateStarsValue,updateMaxValue:e.updateMaxValue}),!t&&n.a.createElement(q,{currentValue:e.state.currentValue,startValue:e.state.startValue,maxValue:e.state.maxValue,isDisableIncButton:e.state.isDisableIncButton,resetCounterValue:e.setResetCounterValueSettings,incrementCurrentValue:e.incrementCurrentValue,showSettingsBlock:e.showSettingsBlock}))},$={startValue:0,maxValue:5,currentValue:0,isDisableIncButton:!1,isDisableSetButton:!1,isShowSettingsBlock:!1},ee=Object(_.b)((function(e){return{state:e.counter2Page}}),(function(e){return{incrementCurrentValue:function(){e({type:"counter2/reducer/INCREMENT_CURRENT_VALUE"})},setResetCounterValueSettings:function(){e({type:"counter2/reducer/SET_RESET_COUNTER_VALUES"})},updateStarsValue:function(t){e(function(e){return{type:"counter2/reducer/UPDATE_START_VALUE",newValue:e}}(t))},updateMaxValue:function(t){e(function(e){return{type:"counter2/reducer/UPDATE_MAX_VALUE",newValue:e}}(t))},showSettingsBlock:function(){var t;e({type:"counter2/reducer/SHOW_SETTINGS_BLOCK",newValue:t})}}}))(Y),te=function(){return n.a.createElement("div",{className:o.a.App},n.a.createElement("p",{className:o.a.installText},"Select counter version"),n.a.createElement(V,null),n.a.createElement(m.a,{path:"/counter1",render:function(){return n.a.createElement(L,null)}}),n.a.createElement(m.a,{path:"/counter2",render:function(){return n.a.createElement(ee,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(16),ue=Object(ae.b)({counter1Page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"counter1/reducer/INCREMENT_CURRENT_VALUE":var a=e.currentValue+1,u=a===e.maxValue;return Object(M.a)(Object(M.a)({},e),{},{currentValue:a,isDisableIncButton:u});case"counter1/reducer/SET_RESET_COUNTER_VALUES":return Object(M.a)(Object(M.a)({},e),{},{currentValue:e.startValue,isDisableSetButton:!0,isDisableIncButton:!1,isDisableResetButton:!1});case"counter1/reducer/UPDATE_START_VALUE":var n=t.newValue,r=n<0||n>=e.maxValue;return Object(M.a)(Object(M.a)({},e),{},{startValue:n,isDisableSetButton:r,isDisableIncButton:!0,isDisableResetButton:!0});case W:var l=t.newValue,s=e.startValue,o=l<0||l<=s||s<0;return Object(M.a)(Object(M.a)({},e),{},{maxValue:t.newValue,isDisableSetButton:o,isDisableIncButton:!0,isDisableResetButton:!0});default:return e}},counter2Page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"counter2/reducer/INCREMENT_CURRENT_VALUE":var a=e.currentValue+1,u=a===e.maxValue;return Object(M.a)(Object(M.a)({},e),{},{currentValue:a,isDisableIncButton:u});case"counter2/reducer/SET_RESET_COUNTER_VALUES":return Object(M.a)(Object(M.a)({},e),{},{currentValue:e.startValue,isShowSettingsBlock:!1,isDisableIncButton:!1});case"counter2/reducer/UPDATE_START_VALUE":var n=t.newValue,r=n<0||n>=e.maxValue;return Object(M.a)(Object(M.a)({},e),{},{startValue:n,isDisableSetButton:r});case"counter2/reducer/UPDATE_MAX_VALUE":var l=t.newValue,s=e.startValue,o=l<0||l<=s||s<0;return Object(M.a)(Object(M.a)({},e),{},{maxValue:t.newValue,isDisableSetButton:o});case"counter2/reducer/SHOW_SETTINGS_BLOCK":return Object(M.a)(Object(M.a)({},e),{},{isShowSettingsBlock:!0});default:return e}}}),ne=Object(ae.c)(ue);window.store=ne;var re=ne;l.a.render(n.a.createElement(p.a,null,n.a.createElement(_.a,{store:re},n.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.a5cc6110.chunk.js.map