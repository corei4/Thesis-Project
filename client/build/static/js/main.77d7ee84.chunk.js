(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(291)},117:function(e,t,a){},138:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(27),i=a.n(r),o=a(54),s=a(49),c="ADD_ARTICLE",m="ADD_AGE",u="ADD_USER",h="SIGN_UP",p={articles:[{title:"azhar",id:Math.random()}],age:0,user:[],email:"",password:"",firstName:"",lastName:""};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type===c?Object.assign({},e,{articles:e.articles.concat(t.payload)}):(t.type===m?e.age+=t.age:t.type===u?e.user.push(t.user):t.type===h&&(e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,e.password=t.payload.password,e.email=t.payload.email),e)},g=Object(s.b)(d),E=(a(117),a(5)),b=a(6),f=a(8),v=a(7),O=a(9),y=a(295),N=a(297),C=a(292),j=a(107),S=a(294),k=function(e){var t=e.component,a=Object(j.a)(e,["component"]);console.log("entered here");var n=null!==localStorage.getItem("token");return console.log("is logged in",n),l.a.createElement(C.a,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement(S.a,{to:{pathname:"/SignIn",state:{from:e.location}}})}}))},x=a(15),w=a.n(x),P=a(2),I=a(21),T=a.n(I),D=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={test:[]},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("/userOrganizations").then(function(t){console.log(t,"RESPONSE"),e.setState({test:t.data})}).catch(function(e){console.log(e,"charities error")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P.r,null,this.state.test.map(function(e){return l.a.createElement(P.h,{sm:"3",key:e.userId},l.a.createElement(P.b,{body:!0},l.a.createElement(P.c,null,l.a.createElement(P.g,null,e.firstName),l.a.createElement(P.e,null,e.firstName)),l.a.createElement("img",{width:"100%",src:e.image,alt:"Card cap"}),l.a.createElement(P.c,null,l.a.createElement(P.f,null,e.email),l.a.createElement(P.f,null,e.telephone),l.a.createElement("button",{href:"#"},"Add Fundarising"))))})))}}]),t}(n.Component),R=a(19),F=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white "},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new event"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"content"},"Event Details"),l.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink darken-2 z-depth-0 text-white"},"Create"))))}}]),t}(n.Component),A=a(293),L=a(296),z=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).signOut=function(){localStorage.removeItem("token"),a.props.history.push("/")},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return localStorage.getItem("token")?l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"nav-wrapper purple darken-4 col s1"},l.a.createElement(A.a,{to:"/",className:" brand-logo ",style:{textDecoration:"none",color:"white"}},"Charitable"),l.a.createElement("ul",{className:" right"},l.a.createElement("li",null,l.a.createElement(A.a,{to:"/",style:{textDecoration:"none",color:"white"}},"Home")),l.a.createElement("li",null,l.a.createElement(A.a,{to:"/Organizations",style:{textDecoration:"none",color:"white"}},"Organizations")),l.a.createElement("li",{onClick:this.signOut},l.a.createElement(A.a,{to:"/Signup",style:{textDecoration:"none",color:"white"}},"Sign Out")),l.a.createElement("li",null,l.a.createElement(A.a,{to:"/profile",style:{textDecoration:"none",color:"white"}},"Profile"))))):l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"nav-wrapper purple darken-4 col s1"},l.a.createElement(A.a,{to:"/",className:" brand-logo ",style:{textDecoration:"none",color:"white"}},"Charitable"),l.a.createElement("ul",{className:" right"},l.a.createElement("li",null,l.a.createElement(A.a,{to:"/",style:{textDecoration:"none",color:"white"}},"Home")),l.a.createElement("li",null,l.a.createElement(A.a,{to:"/Organizations",style:{textDecoration:"none",color:"white"}},"Organizations")),l.a.createElement("li",null,l.a.createElement(A.a,{to:"/Signin",style:{textDecoration:"none",color:"white"}},"Log In")),l.a.createElement("li",null,l.a.createElement(A.a,{to:"/Signup",style:{textDecoration:"none",color:"white"}},"Sign Up")))))}}]),t}(n.Component),U=Object(L.a)(z),_=(a(138),a(70)),q=a.n(_),B=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"progress",value:function(){return Math.floor(this.props.item.amount_received/this.props.item.amount*100)}},{key:"render",value:function(){return l.a.createElement(P.h,{className:"HomeCard",sm:"4"},l.a.createElement(P.b,{body:!0},l.a.createElement(P.g,null,this.props.item.name),l.a.createElement(P.g,null,this.props.item.location),l.a.createElement(P.e,null,this.props.item.description),l.a.createElement("div",{className:"HomeCardImg"},l.a.createElement("img",{width:"100%",src:this.props.item.image,alt:"Card cap"})),l.a.createElement(P.e,null,"Amount to raise: ",this.props.item.amount),l.a.createElement(P.q,{color:"success",value:this.progress()}),l.a.createElement(P.e,null,"Total received: ",this.props.item.amount_received),l.a.createElement(P.a,null,"Donate")))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).allCharities=function(){a.props.history.push("/AllCharities")},a.state={modal:!1,test:[]},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.a.get("/charities").then(function(t){console.log(t,"RESPONSE"),e.setState({test:t.data.slice(0,6)})}).catch(function(e){console.log(e,"charities error")})}},{key:"render",value:function(){return this.state.test?l.a.createElement("div",null,l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:q.a,alt:"not loading"}),l.a.createElement(A.a,{to:"/AllCharities",style:{textDecoration:"none",color:"white"}},l.a.createElement("button",{onClick:this.allCharities,className:"btn btn-lg"},"Start Fundraising"))),l.a.createElement("div",null,l.a.createElement(P.r,null,l.a.createElement("div",{className:"HomeCards"},this.state.test.map(function(e){return l.a.createElement(B,{key:e.id,item:e})})))),l.a.createElement("div",{className:"ButtonRaise"},l.a.createElement("button",null,"See All Charities"))):l.a.createElement("div",null,l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:q.a,alt:"not loading"}),l.a.createElement(A.a,{to:"/AllCharities",style:{textDecoration:"none",color:"white"}},l.a.createElement("button",{onClick:this.allCharities,className:"btn btn-lg"},"Start Fundraising"))),l.a.createElement("div",null,l.a.createElement(P.r,null,l.a.createElement("div",{className:"HomeCards"},l.a.createElement("h1",null,"loading")))),l.a.createElement("div",{className:"ButtonRaise"},l.a.createElement("button",null,"See All Charities")))}}]),t}(l.a.Component),M=Object(L.a)(J),H=a(53),G=a.n(H);var V=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){var t={firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,password:a.state.password,telephone:a.state.phoneNumber,image:a.state.image};T()({method:"post",url:"/account/signup",data:t}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),e.preventDefault()},a.state={email:"",password:"",firstName:"",lastName:"",phoneNumber:"",isNotUpload:!0},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"getFiles",value:function(e){var t=this;this.setState({files:e[0].base64});var a=e[0].base64.substr(22);console.log("files new: ",a),w.a.ajax({url:"https://api.imgur.com/3/image",type:"POST",data:JSON.stringify(a),headers:{Authorization:"Client-ID 0d9a88ca2265606"},contentType:"undefined",success:function(e){console.log("image uploaded",e.data.link),t.setState({isNotUpload:!1,image:e.data.link})},error:function(e){console.error("image not uploaded",e)}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"row black-text"},"Sign Up"),l.a.createElement("div",{className:"row "},l.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"first_name",type:"text",className:"validate",value:this.state.firstName,onChange:function(t){return e.setState({firstName:t.target.value})}}),l.a.createElement("label",{htmlFor:"first_name"},"First Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"last_name",type:"text",className:"validate",value:this.state.lastName,onChange:function(t){return e.setState({lastName:t.target.value})}}),l.a.createElement("label",{htmlFor:"last_name"},"Last Name"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"email",type:"email",className:"validate",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",className:"validate",value:this.state.phoneNumber,onChange:function(t){return e.setState({phoneNumber:t.target.value})}}),l.a.createElement("label",{htmlFor:"tel"},"Phone Number"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"password",type:"password",className:"validate",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement(G.a,{multiple:!0,onDone:this.getFiles.bind(this)}),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn purple lighten-1 z-depth-0",disabled:this.state.isNotUpload},"Sign Up")))))}}]),t}(n.Component),W=Object(o.b)(function(e){return console.log(e,"state"),{state:e.articles}},function(e){return{signUp:function(t){return e(function(e){return{type:h,payload:e}}(t))}}})(V),K=a(13),Q=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){var t={email:a.state.email,password:a.state.password},n=Object(K.a)(Object(K.a)(a));T()({method:"post",url:"/account/signin",data:t}).then(function(e){localStorage.setItem("token",e.data.token),n.setState({isLoggedIn:!0})}).catch(function(e){console.log(e)}),e.preventDefault(),console.log(a.state)},a.state={email:"",password:"",isLoggedIn:!1},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return this.state.isLoggedIn?l.a.createElement(S.a,{to:"/profile"}):l.a.createElement("div",{className:"container "},l.a.createElement("h3",{className:"row black-text"},"Sign In"),l.a.createElement("div",{className:"row  "},l.a.createElement("form",{className:"col s12 ",id:"reg-form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"input-field  col s6"},l.a.createElement("input",{id:"email",type:"email",className:"validate",required:!0,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"password",type:"password",className:"validate ",minLength:"6",required:!0,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement("div",{className:"input-field "},l.a.createElement("button",{className:"btn btn-register purple waves-light",type:"submit",name:"action"},"Sign In")))))}}]),t}(n.Component),X=a(3),Y=a.n(X),Z=function(e){function t(){return Object(E.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(P.h,{className:"HomeCard",sm:"4"},l.a.createElement(P.b,{body:!0},l.a.createElement("img",{src:this.props.item.image,alt:"Card Cap"}),l.a.createElement("div",{className:"DonationCard"},l.a.createElement(P.g,null," Donated To: ",l.a.createElement("p",{className:"donate-p"},this.props.item.name)),l.a.createElement(P.e,null,"Donated Amount: ",this.props.item.amount))))}}]),t}(n.Component),$=a(0),ee=a.n($),te=(a(56),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).handleRemove=function(e){console.log("removeBTN",e.target.id);var t=e.target,a=JSON.parse(t.id);w.a.ajax({type:"DELETE",url:"/delCharities",dataType:"text",data:{id:a},success:function(e){console.log("successfully deleted"),console.log("response",e)}})},a.state={toggle:!1},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(P.h,{sm:"3"},l.a.createElement(P.b,{body:!0},l.a.createElement(P.c,null,l.a.createElement(P.g,null,this.props.item.name),l.a.createElement(P.e,null,this.props.item.name)),l.a.createElement("img",{width:"100%",src:this.props.item.image,alt:"Card cap"}),l.a.createElement(P.c,null,l.a.createElement(P.f,null,this.props.item.name),l.a.createElement(P.f,null,this.props.item.description),l.a.createElement(P.f,null,this.props.item.amount),l.a.createElement(P.f,null,this.props.item.location),l.a.createElement("button",{href:"#",id:this.props.item.id,onClick:this.handleRemove},"Remove"),l.a.createElement("button",{href:"#",id:this.props.item.id,onClick:this.handleRemove},"Edit"))))}}]),t}(l.a.Component));P.i.propTypes={fluid:ee.a.bool},P.r.propTypes={noGutters:ee.a.bool,form:ee.a.bool};var ae=ee.a.oneOfType([ee.a.number,ee.a.string]),ne=ee.a.oneOfType([ee.a.string,ee.a.number,ee.a.bool,ee.a.shape({size:ee.a.oneOfType([ee.a.bool,ee.a.number,ee.a.string]),order:ae,offset:ae})]);P.h.propTypes={xs:ne,sm:ne,md:ne,lg:ne,xl:ne,widths:ee.a.array};var le=te,re=a(106),ie=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={pager:{}},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize,l=this.state.pager;if(!(e<1||e>l.totalPages)){l=this.getPager(a.length,e,n);var r=a.slice(l.startIndex,l.endIndex+1);this.setState({pager:l}),this.props.onChangePage(r)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,l,r=Math.ceil(e/a);r<=10?(n=1,l=r):t<=6?(n=1,l=10):t+4>=r?(n=r-9,l=r):(n=t-5,l=t+4);var i=(t-1)*a,o=Math.min(i+a-1,e-1),s=Object(re.a)(Array(l+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:n,endPage:l,startIndex:i,endIndex:o,pages:s}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",{className:1===t.currentPage?"disabled":""},l.a.createElement("button",{onClick:function(){return e.setPage(1)}},"First")),l.a.createElement("li",{className:1===t.currentPage?"disabled":""},l.a.createElement("button",{onClick:function(){return e.setPage(t.currentPage-1)}},"Previous")),t.pages.map(function(a,n){return l.a.createElement("li",{key:n,className:t.currentPage===a?"active":""},l.a.createElement("button",{onClick:function(){return e.setPage(a)}},a))}),l.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":""},l.a.createElement("button",{onClick:function(){return e.setPage(t.currentPage+1)}},"Next")),l.a.createElement("li",{className:t.currentPage===t.totalPages?"disabled":""},l.a.createElement("button",{onClick:function(){return e.setPage(t.totalPages)}},"Last")))}}]),t}(l.a.Component);ie.defaultProps={initialPage:1,pageSize:4};var oe=ie,se=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).toggle=a.toggle.bind(Object(K.a)(Object(K.a)(a))),a.state={activeTab:"1",exampleItems:[],pageOfItems:[]},a.onChangePage=a.onChangePage.bind(Object(K.a)(Object(K.a)(a))),a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"onChangePage",value:function(e){this.setState({pageOfItems:e}),console.log(e)}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"componentDidMount",value:function(){var e=this;T.a.post("/userCharities",{owner_id:window.localStorage.getItem("id")}).then(function(t){console.log(t),e.setState({exampleItems:t.data})}).catch(function(e){console.log(e)}),console.log(this.state.exampleItems,"exampleItems")}},{key:"render",value:function(){return l.a.createElement("div",{className:"centerTab"},l.a.createElement(P.r,null,l.a.createElement(P.h,{sm:"12"},l.a.createElement(P.r,null,this.state.pageOfItems.map(function(e){return l.a.createElement(le,{key:e.id,item:e})})),l.a.createElement("div",null,l.a.createElement(oe,{items:this.state.exampleItems,onChangePage:this.onChangePage})))))}}]),t}(l.a.Component),ce=(a(141),a(143)),me=function(e){function t(e){var a;Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).toggleTab=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a.toggleEP=function(){a.setState({modalEP:!a.state.modalEP})},a.toggleOR=function(){a.setState({modalOR:!a.state.modalOR})},a.handleSubmitEP=function(){a.toggleEP(),console.log("handleSubmit");var e={firstName:a.state.name,lastName:a.state.amount,phoneNumber:a.state.phoneNumber,image:a.state.image};console.log("profileObj: ",e),w.a.ajax({url:"/editUserInfo",type:"PUT",data:JSON.stringify(e),contentType:"application/json",success:function(e){console.log("ad charities in Db",e)},error:function(e){console.error("errorrrrrr",e)}})},a.handleInputChangeOR=function(e){console.log("hi");var t=e.target,n=t.name,l=t.value;a.setState(Object(R.a)({},n,l)),console.log("this.state.nameOR",a.state.nameOR)},a.handleSubmitOR=function(){a.toggleOR(),console.log("handleSubmit");var e={name:a.state.nameOR,about:a.state.aboutOR,location:a.state.locationOR,description:a.state.descriptionOR,userId:window.localStorage.getItem("id")};console.log("profileObj: ",e),w.a.ajax({url:"/becomeOganization",type:"POST",data:JSON.stringify(e),contentType:"application/json",success:function(e){console.log("ad charities in Db",e)},error:function(e){console.error("errorrrrrr",e)}})},a.handleAccept=function(){console.log("accept")},a.handleDecline=function(){console.log("decline")};var n=ce(localStorage.getItem("token")).result,l=n[0].email,r=n[0].firstName,i=n[0].lastName,o=n[0].telephone,s=n[0].imgUrl,c=[{id:1,name:"Azhar"}].map(function(e){return{id:e.id,name:e.name}});return a.state={exampleItems:c,pageOfItems:[],modal:!1,test:[],value:"",files:[],isNotUpload:!0,image:"",activeTab:"1",modalEP:!1,email:l,firstName:r,lastName:i,telephone:o,imgUrl:s,modalOR:!1,requests:[],Donations:[],admin:1===window.localStorage.getItem("userTypeId")},a.toggle=a.toggle.bind(Object(K.a)(Object(K.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(K.a)(Object(K.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(K.a)(Object(K.a)(a))),a.onChangePage=a.onChangePage.bind(Object(K.a)(Object(K.a)(a))),a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log();var e={user_id:ce(localStorage.getItem("token")).result[0].id},t={owner_id:window.localStorage.getItem("id")};console.log("here owner_id: 1",t),w.a.ajax({url:"/userCharities",type:"POST",data:JSON.stringify(t),contentType:"application/json",success:function(e){return console.log(e,"/charities/charities/charities/charities"),this.setState({test:e}),e}.bind(this),error:function(e,t,a){console.error(this.props.url,t,a.toString())}.bind(this)}),w.a.ajax({url:"/profile",type:"POST",data:JSON.stringify(e),contentType:"application/json",success:function(e){return console.log(e,"Donations data"),this.setState({Donations:e}),e}.bind(this),error:function(e,t,a){console.error(this.props.url,t,a.toString())}.bind(this)}),w.a.ajax({url:"/getRequests",dataType:"json",type:"GET",success:function(e){return console.log(e,"app in ajax "),this.setState({requests:e}),console.log("all charities",this.state.test),e}.bind(this),error:function(e,t,a){console.error(this.props.url,t,a.toString())}.bind(this)})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleSubmit",value:function(){this.toggle();var e={name:this.state.name,amount:this.state.amount,description:this.state.description,location:this.state.location,owner_id:window.localStorage.getItem("id"),image:this.state.image};console.log("charityObj: ",e),w.a.ajax({url:"/addCharities",type:"POST",data:JSON.stringify(e),contentType:"application/json",success:function(e){console.log("ad charities in Db",e)},error:function(e){console.error("errorrrrrr/*/*/*/*/*/*/*/*/*/",e)}})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},a,n))}},{key:"getFiles",value:function(e){var t=this;this.setState({files:e[0].base64});var a=e[0].base64.substr(22);console.log("files new: ",a),w.a.ajax({url:"https://api.imgur.com/3/image",type:"POST",data:JSON.stringify(a),headers:{Authorization:"Client-ID 0d9a88ca2265606"},contentType:"undefined",success:function(e){console.log("image uploaded",e.data.link),t.setState({isNotUpload:!1,image:e.data.link})},error:function(e){console.error("image not uploaded",e)}})}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",null,l.a.createElement(P.n,{tabs:!0},l.a.createElement(P.o,null,l.a.createElement(P.p,{className:Y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},"Profile")),l.a.createElement(P.o,null,l.a.createElement(P.p,{className:Y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},"Donations")),l.a.createElement(P.o,null,l.a.createElement(P.p,{className:Y()({active:"3"===this.state.activeTab}),onClick:function(){e.toggleTab("3")}},"Charities")),l.a.createElement(P.o,null,l.a.createElement(P.p,{disabled:this.state.admin,className:Y()({active:"4"===this.state.activeTab,admin:this.state.admin}),onClick:function(){e.toggleTab("4")}},"Requests"))),l.a.createElement(P.s,{activeTab:this.state.activeTab},l.a.createElement(P.t,{tabId:"1"},l.a.createElement(P.r,null,l.a.createElement(P.h,{sm:"12"},l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-body",id:"profile"},l.a.createElement("div",null,l.a.createElement("img",{src:this.state.imgUrl,alt:"User",height:"none"})),l.a.createElement("div",null),l.a.createElement("h4",{className:"card-title"}," ",l.a.createElement("strong",null,this.state.firstName)," "),l.a.createElement("h5",{className:"card-text"}," ",this.state.email," "),l.a.createElement("h5",{className:"card-text"}," ",this.state.telephone," "),l.a.createElement(P.a,{className:"btn btn-success",onClick:this.toggleEP},this.props.buttonLabel,"Edit profile"),l.a.createElement(P.a,{href:"#",className:"btn btn-primary",onClick:this.toggleOR},"Become an Organization"),l.a.createElement(P.a,{className:"btn btn-success",onClick:this.toggle},this.props.buttonLabel,"Add Charity"),l.a.createElement(P.j,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(P.m,{toggle:this.toggle},"Add Charities"),l.a.createElement(P.k,null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"input the name of charity",value:this.state.name,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Amount"),l.a.createElement("input",{type:"number",name:"amount",id:"amount",placeholder:"input amount",value:this.state.amount,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Description"),l.a.createElement("input",{type:"text",name:"description",id:"description",placeholder:"input description",value:this.state.description,onChange:this.handleInputChange})),l.a.createElement(G.a,{multiple:!0,onDone:this.getFiles.bind(this)}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Location"),l.a.createElement("input",{type:"text",name:"location",id:"location",placeholder:"input location",value:this.state.location,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"})),l.a.createElement(P.a,{color:"primary",onClick:this.handleSubmit,disabled:this.state.isNotUpload},"Submit")," ",l.a.createElement(P.a,{color:"secondary",onClick:this.toggle},"Cancel"))),l.a.createElement(P.l,null)),l.a.createElement(P.j,{isOpen:this.state.modalEP,toggle:this.toggleEP,className:this.props.className},l.a.createElement(P.m,{toggle:this.toggleEP},"Edit Profile"),l.a.createElement(P.k,null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"First Name"),l.a.createElement("input",{type:"text",name:"firstName",id:"firstName",value:this.state.firstName,onChange:this.handleInputChangeEP})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Last Name"),l.a.createElement("input",{type:"text",name:"lastName",id:"lastName",value:this.state.lastName,onChange:this.handleInputChangeEP})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Phone Number"),l.a.createElement("input",{type:"number",name:"PhoneNumber",id:"PhoneNumber",value:this.state.telephone,onChange:this.handleInputChangeEP})),l.a.createElement(P.a,{color:"primary",onClick:this.handleSubmitEP,disabled:this.state.isNotUpload},"Submit")," ",l.a.createElement(P.a,{color:"secondary",onClick:this.toggleEP},"Cancel"))),l.a.createElement(P.l,null)),l.a.createElement(P.j,{isOpen:this.state.modalOR,toggle:this.toggleOR,className:this.props.className},l.a.createElement(P.m,{toggle:this.toggleOR},"Become an Organization"),l.a.createElement(P.k,null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Name of Organization"),l.a.createElement("input",{type:"text",name:"nameOR",id:"nameOR",placeholder:"input the name of charity",value:this.state.nameOR,onChange:this.handleInputChangeOR})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"About the Organization"),l.a.createElement("input",{type:"text",name:"aboutOR",id:"aboutOR",placeholder:"input details",value:this.state.aboutOR,onChange:this.handleInputChangeOR})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Acceptance Reason"),l.a.createElement("input",{type:"text",name:"descriptionOR",id:"descriptionOR",placeholder:"input description",value:this.state.descriptionOR,onChange:this.handleInputChangeOR})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Location"),l.a.createElement("input",{type:"text",name:"locationOR",id:"locationOR",placeholder:"input location",value:this.state.locationOR,onChange:this.handleInputChangeOR})),l.a.createElement(P.a,{color:"primary",onClick:this.handleSubmitOR},"Submit")," ",l.a.createElement(P.a,{color:"secondary",onClick:this.toggleOR},"Cancel"))),l.a.createElement(P.l,null)))))))),l.a.createElement(P.t,{tabId:"2"},l.a.createElement("div",null,this.state.Donations.map(function(e){return l.a.createElement(Z,{key:e.DonId,item:e})}))),l.a.createElement(P.t,{tabId:"3"},l.a.createElement(se,null)),l.a.createElement(P.t,{tabId:"4"},l.a.createElement("div",null,this.state.requests.map(function(t){return l.a.createElement(P.b,{key:t.id},l.a.createElement(P.c,null,l.a.createElement(P.g,null,t.name),l.a.createElement(P.e,null,t.location),l.a.createElement(P.f,null,t.description),l.a.createElement(P.d,{href:"#",color:"success",onClick:e.handleAccept},"Accept"),l.a.createElement(P.d,{href:"#",onClick:e.handleDecline},"Decline")))}))))))}}]),t}(l.a.Component),ue=a(103),he=(a(147),function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={number:"",name:"",expiry:"",cvc:"",focused:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleClick=function(e){a.setState({focused:e.target.id})},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(ue.a,{number:this.state.number,name:this.state.name,expiry:this.state.expiry,cvc:this.state.cvc,focused:this.state.focused})),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"tel",id:"number",placeholder:"Card Number",minLength:"16",maxLength:"16",onChange:this.handleChange,onClick:this.handleClick}),l.a.createElement("div",null,"E.g.: 49..., 51..., 36..., 37...")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",id:"name",placeholder:"Name",onChange:this.handleChange,onClick:this.handleClick})),l.a.createElement("div",null,l.a.createElement("input",{type:"tel",id:"expiry",placeholder:"Valid Thru",maxLength:"6",onChange:this.handleChange,onClick:this.handleClick}),l.a.createElement("input",{type:"tel",id:"cvc",placeholder:"CVC",maxLength:"4",onChange:this.handleChange,onClick:this.handleClick}))))}}]),t}(n.Component)),pe=a(104),de=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={toggle:!1,value:""},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(P.i,null,l.a.createElement(P.r,{className:"subRow",style:{backgroundColor:"#F2F3F9",width:"1200px"}},l.a.createElement(P.h,{xs:"3"},l.a.createElement("div",{style:{backgroundColor:"#F2F3F9",marginLeft:"5px",marginTop:"10px",marginBottom:"10px",float:"inherit"}},l.a.createElement("img",{style:{width:"100%",marginLeft:"25px",marginTop:"25px",marginBottom:"25px"},src:this.props.item.image,alt:""}))),l.a.createElement(P.h,{xs:"5"},l.a.createElement("div",{style:{backgroundColor:"#F2F3F9",marginLeft:"5px",marginTop:"10px",marginBottom:"10px",float:"inherit"}},l.a.createElement("h5",{style:{marginLeft:"25px",marginTop:"30px"}},l.a.createElement("strong",null,this.props.item.name)," "),l.a.createElement("p",{style:{marginLeft:"25px"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy . "),l.a.createElement("h6",{style:{marginLeft:"25px"}},this.props.item.amount),l.a.createElement("p",{style:{marginLeft:"25px"}},this.props.item.location," "),l.a.createElement(P.a,{style:{float:"left",marginBottom:"23px",marginLeft:"25px",backgroundColor:"#FFC44F !important"}},"DONATE")," ")),l.a.createElement(P.h,{xs:"4"},l.a.createElement("div",{style:{backgroundColor:"#F2F3F9",marginRight:"0px"}},l.a.createElement(pe.a,{style:{marginTop:"200px"},data:{labels:["Amount","Fund"],datasets:[{label:"Amount",data:[this.props.item.amount,5e3],backgroundColor:["rgba(74, 20, 140,0.6)","rgba(74, 20, 140, 1)","rgba(255, 206, 86, 0.6)"]}]},options:{title:{display:this.props.displayTitle,fontSize:12},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))))}}]),t}(l.a.Component);de.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right"};var ge=de,Ee=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).updateSearch=function(e){a.setState({search:e.target.value.substr(0,20)}),console.log(e.target.value),console.log(a.state.test.name)},a.state={test:[],search:""},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){w.a.ajax({url:"/charities",dataType:"json",type:"GET",success:function(e){return console.log(e,"app in ajax "),this.setState({test:e}),console.log("all charities",this.state.test),e}.bind(this),error:function(e,t,a){console.error(this.props.url,t,a.toString())}.bind(this)})}},{key:"render",value:function(){var e=this,t=this.state.test.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())});return l.a.createElement("div",{className:"container"},l.a.createElement("input",{type:"text",placeholder:"search here for any charity",value:this.state.search,onChange:this.updateSearch}),l.a.createElement("div",null,l.a.createElement(P.r,null,l.a.createElement("div",null,t.map(function(e){return l.a.createElement(ge,{key:e.id,item:e,legendPosition:"bottom"})})))))}}]),t}(n.Component),be=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).isLoggedIn=function(e,t){console.log("token test"),console.log(localStorage.getItem("token")),localStorage.getItem("token")||(console.log("not logged in"),t({pathname:"/SignIn"}))},a.state={modal:!1,test:[]},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(U,null),l.a.createElement(N.a,null,l.a.createElement(C.a,{exact:!0,path:"/",component:M}),l.a.createElement(C.a,{path:"/Home",component:M}),l.a.createElement(C.a,{path:"/organizations",component:D}),l.a.createElement(C.a,{path:"/Signup",component:W}),l.a.createElement(C.a,{path:"/SignIn",component:Q}),l.a.createElement(k,{path:"/profile",component:me}),l.a.createElement(C.a,{path:"/create",component:F}),l.a.createElement(C.a,{path:"/creditcard",component:he}),l.a.createElement(C.a,{path:"/AllCharities",component:Ee}))))}}]),t}(n.Component);i.a.render(l.a.createElement(o.a,{store:g},l.a.createElement(be,null)),document.getElementById("root"))},56:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/redone.26d12cec.jpg"}},[[108,2,1]]]);
//# sourceMappingURL=main.77d7ee84.chunk.js.map