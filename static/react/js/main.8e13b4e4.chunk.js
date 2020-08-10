(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),o=n.n(s),c=(n(27),n(2)),i=n(5),l=n(3),u=n(4),d=(n(28),n(7)),m=n.n(d),v=n(14),g=n(20),f=n(8),h=n(1),y=n(35),p=n(17),k=n(21),b=(n(30),function(e){var t=Object(a.useState)(0),n=Object(k.a)(t,2),s=n[0],o=n[1],c=Object(a.useRef)(null),i=e.size,l=e.progress,u=e.strokeWidth,d=e.circleOneStroke,m=e.circleTwoStroke,v=i/2,g=i/2-u/2,f=2*Math.PI*g;return Object(a.useEffect)((function(){o((100-l)/100*f),c.current.style="transition: stroke-dashoffset 850ms ease-in-out"}),[o,l,f,s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{className:"svg",width:i,height:i},r.a.createElement("circle",{className:"svg-circle-bg",stroke:d,cx:v,cy:v,r:g,strokeWidth:u}),r.a.createElement("circle",{className:"svg-circle",ref:c,stroke:m,cx:v,cy:v,r:g,strokeWidth:u,strokeDasharray:f,strokeDashoffset:s}),r.a.createElement("text",{x:"".concat(v),y:"".concat(v),className:"svg-circle-text"},l,"%")))}),w=n(15),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).notMobileAlert=function(){setTimeout((function(){alert("This web can only be used on mobile, since it needs access to the gyroscope and accelator..")}),1e3)},a.startDataInterval=function(){var e=setInterval(a.handleDataTransmission,a.state.dataPeriod);a.setState({interval:e})},a.handleDataTransmission=function(){var e=a.state.msInterval+a.state.dataPeriod;a.setState({msInterval:e}),document.getElementById("intervalSeconds").innerHTML=e+"ms",console.log(e),e<2e3?a.sendDataUpstream(a.state.currentData,!1):a.stopAll()},a.stopAll=function(){clearInterval(a.state.interval),a.sendDataUpstream({},!0),a.setState({resultMovement:"Waiting for results..."}),a.stopTrackingSensors();a.setState(Object(f.a)(Object(f.a)({},a.state),{},{currentData:{x_acc:0,y_acc:0,z_acc:0,x_gyr:0,y_gyr:0,z_gyr:0}})),a.setState({msInterval:0})},a.sendDataUpstream=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a.state.webSocket.onopen=function(a){this.state.webSocket.send(JSON.stringify({last_one:t,is_message:n,data:e}))}},a.startCountDown=function(){var e=4,t=setInterval(function(){e--;var n="Tracking starts in: ".concat(e);this.setState({resultMovement:n}),e<=0&&(clearInterval(t),this.startMovement(),this.startDataInterval())}.bind(Object(h.a)(a)),1e3)},a.startMovement=function(){a.setState({resultMovement:"Tracking...."}),a.state.gyrSensor.addEventListener("reading",a.readGyr),a.state.accSensor.addEventListener("reading",a.readAcc),a.state.gyrSensor.start(),a.state.accSensor.start()},a.readGyr=function(e){a.setState(Object(f.a)(Object(f.a)({},a.state.currentData),{},{x_gyr:+e.target.x.toFixed(2),y_gyr:+e.target.y.toFixed(2),z_gyr:+e.target.z.toFixed(2)})),console.log(),document.getElementById("statusGyr").innerHTML="x: ".concat(+e.target.x.toFixed(2),", y: ").concat(+e.target.y.toFixed(2),", z: ").concat(+e.target.z.toFixed(2))},a.readAcc=function(e){a.setState(Object(f.a)(Object(f.a)({},a.state.currentData),{},{x_acc:+e.target.x.toFixed(2),y_acc:+e.target.y.toFixed(2),z_acc:+e.target.z.toFixed(2)})),document.getElementById("statusAcc").innerHTML="x: ".concat(+e.target.x.toFixed(2),", y: ").concat(+e.target.y.toFixed(2),", z: ").concat(+e.target.z.toFixed(2))},a.stopTrackingSensors=function(){a.state.gyrSensor.stop(),a.state.accSensor.stop(),a.state.gyrSensor.removeEventListener("reading",a.readGyr),a.state.accSensor.removeEventListener("reading",a.readAcc)},a.state={isTracking:!1,listnersAdded:!1,deviceMotionPermission:!1,deviceOrientationPermission:!1,isSendingData:!1,accSensor:new p.a,gyrSensor:new p.b({frequency:15}),webSocket:{},messages:[],dataPeriod:50,msInterval:0,currentData:{x_acc:0,y_acc:0,z_acc:0,x_gyr:0,y_gyr:0,z_gyr:0},interval:{},resultAccuracy:0,resultMovement:"",resultColor:"#d9edfe",colorDefault:"#d9edfe",colorGood:"#4FFF33",colorMedium:"#F6D645",colorBad:"#F06925"},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setupWebSocket(),this.startTracking=this.startTracking.bind(this),w.isBrowser&&this.notMobileAlert()}},{key:"setupWebSocket",value:function(){var e=this,t=new WebSocket("ws://mcwp.vsc.app:8000/");this.setState({webSocket:t}),t.onmessage=function(t){var n=JSON.parse(t.data);console.log(n);var a=+(100*n.accuracy).toFixed(0),r=a>70?e.state.colorGood:e.state.colorMedium;a<50&&(Object(g.a)("resultColor"),r=e.state.colorBad),e.setState({resultAccuracy:a,resultMovement:n.movement,resultColor:r,isTracking:!1})},t.onclose=function(e){console.error("Chat socket closed unexpectedly")}}},{key:"requestDeviceMotionPermission",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof DeviceMotionEvent.requestPermission){e.next=5;break}return e.next=3,DeviceMotionEvent.requestPermission().then((function(e){"granted"===e&&(console.log("Device Motion granted"),t.setState({deviceMotionPermission:!0}))})).catch(console.error);case 3:e.next=6;break;case 5:console.log("Non ios 13 device");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"requestDeviceOrientationPermission",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof DeviceOrientationEvent.requestPermission){e.next=5;break}return e.next=3,DeviceOrientationEvent.requestPermission().then((function(e){"granted"===e&&(console.log("Device Orientation granted"),t.setState({deviceOrientationPermission:!0}))})).catch(console.error);case 3:e.next=6;break;case 5:console.log("Non ios 13 device");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"startTracking",value:function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.isBrowser){e.next=4;break}this.notMobileAlert(),e.next=12;break;case 4:if(this.setState({resultAccuracy:0,resultMovement:"",resultColor:this.state.colorDefault,isTracking:!0}),this.sendDataUpstream({message:"Tracking starts.."},!1,!0),this.state.deviceMotionPermission&&this.state.deviceOrientationPermission){e.next=11;break}return e.next=9,this.requestDeviceMotionPermission();case 9:return e.next=11,this.requestDeviceOrientationPermission();case 11:this.startCountDown();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isTracking?"Disabled":"Start";return r.a.createElement("div",{className:"dark-vazkir"},r.a.createElement("div",{className:"mb-2 center"},r.a.createElement(b,{progress:this.state.resultAccuracy,size:200,strokeWidth:15,circleOneStroke:this.state.colorDefault,circleTwoStroke:this.state.resultColor}),r.a.createElement("h3",null,this.state.resultMovement),r.a.createElement("br",null),r.a.createElement(y.a,{disabled:this.state.isTracking,variant:"success",size:"lg",style:{width:"28rem",height:"6rem"},onClick:this.state.isTracking?this.stopAll:this.startTracking},e)),r.a.createElement("p",{id:"statusGyr"},"Gyroscope waiting..."),r.a.createElement("p",{id:"statusAcc"},"Accelerometer waiting..."),r.a.createElement("p",{id:"intervalSeconds"},"0ms"))}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App dark-vazkir"},r.a.createElement(x,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);window.component=window.component||"App",window.reactRoot=window.reactRoot||document.getElementById("react"),window.props=window.props||{},window.props.ref=function(e){window.reactComponent=e},o.a.render(r.a.createElement(S,null),document.getElementById("react")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8e13b4e4.chunk.js.map