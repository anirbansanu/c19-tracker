(this["webpackJsonpc19-tracker"]=this["webpackJsonpc19-tracker"]||[]).push([[0],{35:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),i=a.n(c),o=(a(35),a(24)),r=a.n(o),l=a(25),m=a(7),d=a(8),h=a(15),b=a(10),j=a(9),u=a(46),O=a(44),f=a(45),p=a(47),g=(a(37),a(49)),x=a(1),T=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)(g.a,{style:{background:this.props.bg,height:"245px"},children:Object(x.jsxs)(g.a.Body,{className:"p-5",children:[Object(x.jsx)(g.a.Title,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)("h5",{children:[Object(x.jsx)("font",{style:{fontSize:"0.8rem",float:"bottom"},children:this.props.smTitle}),this.props.lgTitle]})}),Object(x.jsx)(g.a.Text,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(x.jsx)("font",{className:"mdl-text",style:{textAlign:"center",fontSize:this.props.mainFontSize?this.props.mainFontSize:"3.8"},children:this.props.main})})]})})}}]),a}(n.Component),y=a(48),S=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)(g.a,{style:{background:this.props.bg,height:"125px"},children:Object(x.jsx)(g.a.Body,{className:"p-1",style:{display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:Object(x.jsxs)("h4",{children:[Object(x.jsx)("font",{style:{fontSize:"0.8rem",float:"bottom"},children:this.props.smTitle}),this.props.lgTitle]})})})}}]),a}(n.Component),v={AN:{name:"Andaman and Nicobar Islands",color:"#e67e22"},AP:{name:"Andhra Pradesh",color:"#27ae60"},AS:{name:"Assam",color:"#8e44ad"},BR:{name:"Bihar",color:"#e74c3c"},CH:{name:"Chandigarh",color:"#2980b9"},CT:{name:"Chhattisgarh",color:"#e74c3c"},DL:{name:"Delhi",color:"#fd9644"},DN:{name:"Dadra and Nagar Haveli and Daman and Diu",color:"#f7b731"},GA:{name:"Goa",color:"#eb3b5a"},GJ:{name:"Gujrat",color:"#f39c12"},HP:{name:"Himachal Pradesh",color:"#3867d6"},HR:{name:"Haryana",color:"#8e44ad"},JH:{name:"Jharkhand",color:"#e74c3c"},JK:{name:"Jammu and Kashmir",color:"#8854d0"},KA:{name:"Karnataka",color:"#eb3b5a"},KL:{name:"Kerala",color:"#2980b9"},LA:{name:"Ladakh",color:"#0fb9b1"},LD:{name:"Lakshadweep",color:"#eb3b5a"},MH:{name:"Maharastra",color:"#fd9644"},MP:{name:"Madhya Pradesh",color:"#8854d0"},MZ:{name:"Mizoram",color:"#8e44ad"},NL:{name:"Nagaland",color:"#0fb9b1"},OR:{name:"Orissa",color:"#eb3b5a"},PB:{name:"Punjab",color:"#e74c3c"},PY:{name:"Pondicherry",color:"#3867d6"},RJ:{name:"Rajasthan",color:"#fd9644"},SK:{name:"Sikkim",color:"#8e44ad"},TG:{name:"Telangana",color:"#f39c12"},TN:{name:"Tamil Nadu",color:"#0fb9b1"},TR:{name:"Tripura",color:"#e74c3c"},UP:{name:"Uttar Pradesh",color:"#27ae60"},UT:{name:"Uttarakhand",color:"#2980b9"},WB:{name:"West Bengal",color:"#e67e22"}},C=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(x.jsx)(y.a,{show:this.props.show,centered:!0,keyboard:!1,fullscreen:!0,children:Object(x.jsxs)(y.a.Body,{children:[Object(x.jsx)("button",{type:"button",title:"close",onClick:this.props.onHide,className:"modal-btn-close border-0",style:{float:"right",outline:"0px"},"aria-label":"Close",children:"\u2716"}),Object(x.jsx)("h4",{children:this.props.title}),Object(x.jsx)(O.a,{className:"mt-4",children:Object.keys(v).map((function(t,a){return Object(x.jsx)(f.a,{sm:6,md:4,lg:3,className:"mt-2 mb-2",onClick:e.props.onHide,children:Object(x.jsx)("div",{onClick:function(){var a=e.props.stateWise[t];a.statename=v[t].name.substr(0,20),e.props.handleCovidDataByState(a)},children:Object(x.jsx)(S,{bg:v[t].color,lgTitle:v[t].name.substr(0,20)})})},a)}))})]})})}}]),a}(n.Component),N=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={showModal:!1,data:[],stateName:"WEST BENGAL",stateData:[],stateMeta:[]},n.getCovidData=n.getCovidData.bind(Object(h.a)(n)),n.handleShowModal=n.handleShowModal.bind(Object(h.a)(n)),n.handleCovidDataByState=n.handleCovidDataByState.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleCovidDataByState",value:function(e){this.setState({stateName:e.statename,stateData:e.total,stateMeta:e.meta})}},{key:"getCovidData",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://data.covid19india.org/v4/min/data.min.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a,stateData:a.WB.total,stateMeta:a.WB.meta}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getCovidData()}},{key:"handleShowModal",value:function(){this.setState({showModal:!0})}},{key:"render",value:function(){var e=this;return Object(x.jsxs)(u.a,{fluid:!0,className:"mb-4",children:[Object(x.jsx)(O.a,{children:Object(x.jsx)(f.a,{className:"p-2",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)("h2",{className:"p-2 text-light",children:["Covid-19 Tracker \xa0",Object(x.jsx)("font",{style:{fontSize:"1.8rem"},children:Object(x.jsx)(p.a,{className:"glow",pill:!0,bg:"danger",children:"Live"})})]})})}),Object(x.jsxs)(O.a,{children:[Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,onClick:function(){return e.setState({showModal:!0})},children:Object(x.jsx)(T,{bg:"#fa8231",smTitle:"SELECT",lgTitle:"STATE",mainFontSize:"2.8rem",main:this.state.stateName})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#20bf6b",smTitle:"TOTAL",lgTitle:"TESTED",mainFontSize:"3rem",main:this.state.stateData.tested})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#f7b731",smTitle:"TOTAL",lgTitle:"CONFIRMED",mainFontSize:"3rem",main:this.state.stateData.confirmed})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#2d98da",smTitle:"TOTAL",lgTitle:"DEATHS",mainFontSize:"3rem",main:this.state.stateData.deceased})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#a55eea",smTitle:"TOTAL",lgTitle:"RECOVERED",mainFontSize:"3rem",main:this.state.stateData.recovered})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#eb3b5a",smTitle:"LAST",lgTitle:"UPDATED",mainFontSize:"2.4rem",main:this.state.stateMeta.date})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#5f27cd",smTitle:"FIRST",lgTitle:"VACCIN",mainFontSize:"3rem",main:this.state.stateData.vaccinated1})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,children:Object(x.jsx)(T,{bg:"#2d98da",smTitle:"LAST",lgTitle:"VACCINATED",mainFontSize:"3rem",main:this.state.stateData.vaccinated2})}),Object(x.jsx)(f.a,{className:"mt-3",sm:6,md:6,lg:4,onClick:function(){return e.setState({showModal:!0})},children:Object(x.jsx)(T,{bg:"#fa8231",smTitle:"OUR",lgTitle:"COUNTRY",mainFontSize:"2.8rem",main:"WEST BENGAL"})})]}),Object(x.jsx)(C,{stateWise:this.state.data,handleCovidDataByState:this.handleCovidDataByState,title:"Choose States",show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}})]})}}]),a}(n.Component);a(41);var D=function(){return Object(x.jsx)(N,{})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.9ff2d6ed.chunk.js.map