(this.webpackJsonpdeoxa=this.webpackJsonpdeoxa||[]).push([[6],{124:function(e,t,a){e.exports=a.p+"static/media/logo-dark.5395fdff.png"},125:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(0),i=a.n(o),r=a(11),c=a.n(r),l=a(36),u=a.n(l),d=a(37),p={light:c.a.bool,dark:c.a.bool,full:c.a.bool,fixed:c.a.string,sticky:c.a.string,color:c.a.string,role:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,expand:c.a.oneOfType([c.a.bool,c.a.string])},v=function(e){var t,a=e.expand,o=e.className,r=e.cssModule,c=e.light,l=e.dark,p=e.fixed,v=e.sticky,f=e.color,g=e.tag,h=Object(s.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),m=Object(d.mapToCssModules)(u()(o,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a),((t={"navbar-light":c,"navbar-dark":l})["bg-"+f]=f,t["fixed-"+p]=p,t["sticky-"+v]=v,t)),r);return i.a.createElement(g,Object(n.a)({},h,{className:m}))};v.propTypes=p,v.defaultProps={tag:"nav",expand:!1},t.a=v},126:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(0),i=a.n(o),r=a(11),c=a.n(r),l=a(36),u=a.n(l),d=a(37),p={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},v=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(t,"navbar-brand"),a);return i.a.createElement(o,Object(n.a)({},r,{className:c}))};v.propTypes=p,v.defaultProps={tag:"a"},t.a=v},127:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(0),i=a.n(o),r=a(11),c=a.n(r),l=a(36),u=a.n(l),d=a(37),p={tag:d.tagPropType,type:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.node},v=function(e){var t=e.className,a=e.cssModule,o=e.children,r=e.tag,c=Object(s.a)(e,["className","cssModule","children","tag"]),l=Object(d.mapToCssModules)(u()(t,"navbar-toggler"),a);return i.a.createElement(r,Object(n.a)({"aria-label":"Toggle navigation"},c,{className:l}),o||i.a.createElement("span",{className:Object(d.mapToCssModules)("navbar-toggler-icon",a)}))};v.propTypes=p,v.defaultProps={tag:"button",type:"button"},t.a=v},129:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(0),i=a.n(o),r=a(11),c=a.n(r),l=a(36),u=a.n(l),d=a(37),p={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},v=function(e){var t=e.className,a=e.cssModule,o=e.tabs,r=e.pills,c=e.vertical,l=e.horizontal,p=e.justified,v=e.fill,f=e.navbar,g=e.card,h=e.tag,m=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=Object(d.mapToCssModules)(u()(t,f?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":o,"card-header-tabs":g&&o,"nav-pills":r,"card-header-pills":g&&r,"nav-justified":p,"nav-fill":v}),a);return i.a.createElement(h,Object(n.a)({},m,{className:b}))};v.propTypes=p,v.defaultProps={tag:"ul",vertical:!1},t.a=v},130:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(0),i=a.n(o),r=a(11),c=a.n(r),l=a(36),u=a.n(l),d=a(37),p={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},v=function(e){var t=e.className,a=e.cssModule,o=e.active,r=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(t,"nav-item",!!o&&"active"),a);return i.a.createElement(r,Object(n.a)({},c,{className:l}))};v.propTypes=p,v.defaultProps={tag:"li"},t.a=v},131:function(e,t,a){"use strict";var n=a(1),s=a(10),o=a(38),i=a(8),r=a(0),c=a.n(r),l=a(11),u=a.n(l),d=a(36),p=a.n(d),v=a(37),f={tag:v.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.active,i=e.tag,r=e.innerRef,l=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(v.mapToCssModules)(p()(t,"nav-link",{disabled:l.disabled,active:o}),a);return c.a.createElement(i,Object(n.a)({},l,{ref:r,onClick:this.onClick,className:u}))},t}(c.a.Component);g.propTypes=f,g.defaultProps={tag:"a"},t.a=g},238:function(e,t,a){e.exports=a.p+"static/media/logo-light.d558d139.png"},580:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),o=a(5),i=a(4),r=a(0),c=a.n(r),l=a(125),u=a(42),d=a(126),p=a(127),v=a(91),f=a(129),g=a(130),h=a(131),m=a(17),b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).scrollSection=function(){var e;s.scrollTargetIds.forEach((function(t,a){e=document.getElementById(t).offsetTop-(s.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t)):(s.getNavLinkElement(t).classList.remove(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.remove(s.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&a===s.scrollTargetIds.length-1&&(s.getNavLinkElement(t).classList.add(s.activeNavClass),s.getNavLinkElement(t).parentNode.classList.add(s.activeNavClass),s.clearOtherNavLinkActiveStyle(t))}))},s.props=e,s.scrollTargetIds=s.props.scrollTargetIds,s.activeNavClass=s.props.activeNavClass,s.scrollDuration=Number(s.props.scrollDuration)||1e3,s.headerBackground="true"===s.props.headerBackground,s.props.router&&"HashRouter"===s.props.router?(s.homeDefaultLink="#/",s.hashIdentifier="#/#"):(s.homeDefaultLink="/",s.hashIdentifier="#"),s.scrollSection.bind(Object(m.a)(s)),s}return Object(s.a)(a,[{key:"easeInOutQuad",value:function(e,t,a,n){return(e/=n/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,a){var n=this,s=t-e,o=0;!function t(){o+=10;var i=n.easeInOutQuad(o,e,s,a);window.scrollTo(0,i),o<a&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(a){a.preventDefault();var n=e.getNavToSectionID(t.getAttribute("href"));if(n){var s=document.getElementById(n).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,s,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.forEach((function(a,n){a!==e&&(t.getNavLinkElement(a).classList.remove(t.activeNavClass),t.getNavLinkElement(a).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return c.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),a}(r.Component),E=a(238),N=a.n(E),O=a(124),y=a.n(O),T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).toggle=function(){s.setState({isOpenMenu:!s.state.isOpenMenu})},s.state={isOpenMenu:!1},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.navItems.map((function(e){return e.idnm}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{expand:"lg",fixed:"top",className:"navbar-custom sticky sticky-dark "+this.props.navClass},c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"logo",href:"/"},!0===this.props.imglight?c.a.createElement("img",{src:N.a,alt:"",height:"21"}):c.a.createElement("img",{src:y.a,alt:"",height:"21"})),c.a.createElement(p.a,{onClick:this.toggle},c.a.createElement("i",{className:"mdi mdi-menu"})),c.a.createElement(v.a,{id:"navbarCollapse",isOpen:this.state.isOpenMenu,navbar:!0},c.a.createElement(b,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"true",activeNavClass:"active",className:"navbar-collapse"},c.a.createElement(f.a,{navbar:!0,className:"ml-auto navbar-center",id:"mySidenav"},this.props.navItems.map((function(e,t){return c.a.createElement(g.a,{key:t,className:"Home"===e.navheading?"active":""},c.a.createElement(h.a,{href:"#"+e.idnm}," ",e.navheading))}))),c.a.createElement("div",{className:"call-no"},c.a.createElement(h.a,{href:"#",className:!0===this.props.isLight?"text-white":"text-warning"},c.a.createElement("i",{className:"mdi mdi-phone mr-1"})," +00 1234 5678 90")))))))}}]),a}(r.Component);t.default=T},91:function(e,t,a){"use strict";var n,s=a(1),o=a(10),i=a(38),r=a(8),c=a(49),l=a(0),u=a.n(l),d=a(11),p=a.n(d),v=a(36),f=a.n(v),g=a(82),h=a(37),m=Object(c.a)({},g.Transition.propTypes,{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:h.tagPropType,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),b=Object(c.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.TransitionTimeouts.Collapse}),E=((n={})[h.TransitionStatuses.ENTERING]="collapsing",n[h.TransitionStatuses.ENTERED]="collapse show",n[h.TransitionStatuses.EXITING]="collapsing",n[h.TransitionStatuses.EXITED]="collapse",n);function N(e){return e.scrollHeight}var O=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(i.a)(a))})),a}Object(r.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:N(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,i=t.className,r=t.navbar,l=t.cssModule,d=t.children,p=(t.innerRef,Object(o.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),v=this.state.height,m=Object(h.pick)(p,h.TransitionPropTypeKeys),b=Object(h.omit)(p,h.TransitionPropTypeKeys);return u.a.createElement(g.Transition,Object(s.a)({},m,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return E[e]||"collapse"}(t),o=Object(h.mapToCssModules)(f()(i,n,r&&"navbar-collapse"),l),p=null===v?null:{height:v};return u.a.createElement(a,Object(s.a)({},b,{style:Object(c.a)({},b.style,{},p),className:o,ref:e.props.innerRef}),d)}))},t}(l.Component);O.propTypes=m,O.defaultProps=b,t.a=O}}]);
//# sourceMappingURL=6.4514f435.chunk.js.map