var e,t,n,_,r,o,l={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var _,r,o,l=arguments,u={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return f(e,u,_,r,null)}function f(t,n,_,r,o){var l={type:t,props:n,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(l),l}function p(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function y(r){(!r.__d&&(r.__d=!0)&&t.push(r)&&!m.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(m)}function m(){for(var e;m.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,_,r,o,l,u;e.__d&&(l=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(_=c({},o)).__v=o.__v+1,r=$(u,o,_,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?d(o):l,o.__h),S(n,o),r!=l&&v(o)))}))}function g(e,t,n,_,r,o,i,c,a,h){var v,y,m,g,b,w,x,E=_&&_.__k||u,C=E.length;for(a==l&&(a=null!=i?i[0]:C?d(_,0):null),n.__k=[],v=0;v<t.length;v++)if(null!=(g=n.__k[v]=null==(g=t[v])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?f(null,g,null,null,g):Array.isArray(g)?f(p,{children:g},null,null,null):null!=g.__e||null!=g.__c?f(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=E[v])||m&&g.key==m.key&&g.type===m.type)E[v]=void 0;else for(y=0;y<C;y++){if((m=E[y])&&g.key==m.key&&g.type===m.type){E[y]=void 0;break}m=null}b=$(e,g,m=m||l,r,o,i,c,a,h),(y=g.ref)&&m.ref!=y&&(x||(x=[]),m.ref&&x.push(m.ref,null,g),x.push(y,g.__c||b,g)),null!=b?(null==w&&(w=b),a=k(e,g,m,E,i,b,a),h||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&m.__e==a&&a.parentNode!=e&&(a=d(m))}if(n.__e=w,null!=i&&"function"!=typeof n.type)for(v=i.length;v--;)null!=i[v]&&s(i[v]);for(v=C;v--;)null!=E[v]&&L(E[v],E[v]);if(x)for(v=0;v<x.length;v++)P(x[v],x[++v],x[++v])}function k(e,t,n,_,r,o,l){var u,i,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),u=null;else{for(i=l,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==o)break e;e.insertBefore(o,l),u=l}return void 0!==u?u:o.nextSibling}function b(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function w(e,t,n,_,r){var o,l,u;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||b(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||b(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,u=o?E:x,n?_||e.addEventListener(t,u,o):e.removeEventListener(t,u,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function x(t){this.l[t.type+!1](e.event?e.event(t):t)}function E(t){this.l[t.type+!0](e.event?e.event(t):t)}function C(e,t,n){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&C(r,t,n),t=k(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function $(t,n,_,r,o,l,u,i,s){var a,f,d,v,y,m,k,b,w,x,E,$=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,i=n.__e=_.__e,n.__h=null,l=[i]),(a=e.__b)&&a(n);try{e:if("function"==typeof $){if(b=n.props,w=(a=$.contextType)&&r[a.__c],x=a?w?w.props.value:a.__:r,_.__c?k=(f=n.__c=_.__c).__=f.__E:("prototype"in $&&$.prototype.render?n.__c=f=new $(b,x):(n.__c=f=new h(b,x),f.constructor=$,f.render=A),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=x,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=$.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,$.getDerivedStateFromProps(b,f.__s))),v=f.props,y=f.state,d)null==$.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==$.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,x)||n.__v===_.__v){f.props=b,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,f.__h.length&&u.push(f),C(n,i,t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}f.context=x,f.props=b,f.state=f.__s,(a=e.__r)&&a(n),f.__d=!1,f.__v=n,f.__P=t,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=c(c({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),E=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(t,Array.isArray(E)?E:[E],n,_,r,o,l,u,i,s),f.base=n.__e,n.__h=null,f.__h.length&&u.push(f),k&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=H(_.__e,n,_,r,o,l,u,s);(a=e.diffed)&&a(n)}catch(t){n.__v=null,(s||null!=l)&&(n.__e=i,n.__h=!!s,l[l.indexOf(i)]=null),e.__e(t,n,_)}return n.__e}function S(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function H(e,t,n,_,r,o,i,c){var s,a,f,p,h,d=n.props,v=t.props;if(r="svg"===t.type||r,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,o[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),o=null,c=!1}if(null===t.type)d===v||c&&e.data===v||(e.data=v);else{if(null!=o&&(o=u.slice.call(e.childNodes)),f=(d=n.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=o)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||w(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||w(e,o,t[o],n[o],_)})(e,v,d,r,c),p?t.__k=[]:(s=t.props.children,g(e,Array.isArray(s)?s:[s],t,n,_,"foreignObject"!==t.type&&r,o,i,l,c)),c||("value"in v&&void 0!==(s=v.value)&&(s!==e.value||"progress"===t.type&&!s)&&w(e,"value",s,d.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&w(e,"checked",s,d.checked,!1))}return e}function P(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function L(t,n,_){var r,o,l;if(e.unmount&&e.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||P(r,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){e.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&L(r[l],n,_);null!=o&&s(o)}function A(e,t,n){return this.constructor(e,n)}function N(t,n,_){var o,i,c;e.__&&e.__(t,n),i=(o=_===r)?null:_&&_.__k||n.__k,t=a(p,null,[t]),c=[],$(n,(o?n:_||n).__k=t,i||l,l,void 0!==n.ownerSVGElement,_&&!o?[_]:i?null:n.childNodes.length?u.slice.call(n.childNodes):null,c,_||l,o),S(c,t)}function T(e,t,n){var _,r,o,l=arguments,u=c({},e.props);for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);return null!=n&&(u.children=n),f(e.type,u,_||e.key,r||e.ref,null)}e={__e:function(e,t){for(var n,_,r,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},h.prototype.render=p,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=l,o=0;var U=function(e,t,n,_){var r;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],u=t[o]?(t[0]|=l?1:2,n[t[o++]]):t[++o];3===l?_[0]=u:4===l?_[1]=Object.assign(_[1]||{},u):5===l?(_[1]=_[1]||{})[t[++o]]=u:6===l?_[1][t[++o]]+=u+"":l?(r=e.apply(u,U(e,u,n,["",null])),_.push(r),u[0]?t[0]|=2:(t[o-2]=0,t[o]=r)):_.push(u)}return _},D=new Map;var F=function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=U(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,_=1,r="",o="",l=[0],u=function(e){1===_&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,r):3===_&&(e||r)?(l.push(3,e,r),_=2):2===_&&"..."===r&&e?l.push(4,e,0):2===_&&r&&!e?l.push(5,0,!0,r):_>=5&&((r||!e&&5===_)&&(l.push(_,0,r,n),_=6),e&&(l.push(_,e,0,n),_=6)),r=""},i=0;i<e.length;i++){i&&(1===_&&u(),u(i));for(var c=0;c<e[i].length;c++)t=e[i][c],1===_?"<"===t?(u(),l=[l],_=3):r+=t:4===_?"--"===r&&">"===t?(_=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(u(),_=1):_&&("="===t?(_=5,n=r,r=""):"/"===t&&(_<5||">"===e[i][c+1])?(u(),3===_&&(l=l[0]),_=l,(l=l[0]).push(2,0,_),_=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(u(),_=2):r+=t),3===_&&"!--"===r&&(_=4,l=l[0])}return u(),l}(e)),t),arguments,[])).length>1?t:t[0]}.bind(a);let M;var W,q,O,R=0,j=[],I=e.__b,z=e.__r,B=e.diffed,G=e.__c,V=e.unmount;function J(t,n){e.__h&&e.__h(q,t,R||n),R=0;var _=q.__H||(q.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function K(e){return R=1,Q(oe,e)}function Q(e,t,n){var _=J(W++,2);return _.t=e,_.__c||(_.__=[n?n(t):oe(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=q),_.__}function X(t,n){var _=J(W++,3);!e.__s&&re(_.__H,n)&&(_.__=t,_.__H=n,q.__H.__h.push(_))}function Y(e){return R=5,Z((function(){return{current:e}}),[])}function Z(e,t){var n=J(W++,7);return re(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ee(){j.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(ne),n.__H.__h.forEach(_e),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}})),j=[]}e.__b=function(e){q=null,I&&I(e)},e.__r=function(e){z&&z(e),W=0;var t=(q=e.__c).__H;t&&(t.__h.forEach(ne),t.__h.forEach(_e),t.__h=[])},e.diffed=function(t){B&&B(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==j.push(n)&&O===e.requestAnimationFrame||((O=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),te&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);te&&(t=requestAnimationFrame(n))})(ee)),q=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(ne),t.__h=t.__h.filter((function(e){return!e.__||_e(e)}))}catch(o){n.some((function(e){e.__h&&(e.__h=[])})),n=[],e.__e(o,t.__v)}})),G&&G(t,n)},e.unmount=function(t){V&&V(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(ne)}catch(t){e.__e(t,n.__v)}};var te="function"==typeof requestAnimationFrame;function ne(e){var t=q;"function"==typeof e.__c&&e.__c(),q=t}function _e(e){var t=q;e.__c=e.__(),q=t}function re(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function oe(e,t){return"function"==typeof t?t(e):t}const le=(e,t,n)=>{if(t&&"click"===t.type){const _=t.target.closest("a[href]");if(!_||_.origin!=location.origin)return e;t.preventDefault(),n=!0,t=_.href.replace(location.origin,"")}else"string"!=typeof t&&(t=location.pathname+location.search);return!0===n?history.pushState(null,"",t):!1===n&&history.replaceState(null,"",t),t};function ue(e){const[t,n]=Q(le,location.pathname+location.search),_=Z(()=>{const e=new URL(t,location.origin),_=e.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:_,query:Object.fromEntries(e.searchParams),route:n}},[t]);return X(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)})),a(ue.ctx.Provider,{value:_},e.children)}function ie(e){const[,t]=Q(e=>e+1,0),n=ce(),{url:_,path:r,query:o}=n,l=Y(n),u=Y(),i=Y(),c=Y(),s=Y();_!==l.current.url&&(s.current=null,u.current=l.current,c.current=i.current,l.current=n),this.componentDidCatch=e=>{e&&e.then&&(s.current=e)},X(()=>{let n=s.current;const r=()=>{l.current.url===_&&s.current===n&&(e.onLoadEnd&&e.onLoadEnd(_),u.current=c.current=null,t(0))};n?(e.onLoadStart&&e.onLoadStart(_),n.then(r)):r()},[_]);const a=[].concat(...e.children);let f=a.filter(e=>e.props.path===r);return 0==f.length&&(f=a.filter(e=>e.props.default)),i.current=f.map((e,t)=>T(e,{path:r,query:o})),i.current.concat(c.current||[])}ie.Provider=ue,ue.ctx=function(e,t){var n={__c:t="__cC"+o++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,_){return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(y)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}({});const ce=()=>function(e){var t=q.context[e.__c],n=J(W++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(q)),t.props.value):e.__}(ue.ctx);function se(e){return this.componentDidCatch=ae,e.children}function ae(e){e&&e.then?this.__d=!0:this.props.onError&&this.props.onError(e)}function fe(e){if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}null;const pe="home_7pwwsk";function he(){const[e,t]=K(0);return F`
			<section class=${pe}>
				<h1>Home</h1>
				<p>This is the home page.</p>
				${F`
					<button style=${{width:30}} onClick=${()=>t(e-1)}>
						-
					</button>
					<output style=${{padding:10}}>Count: ${e}</output>
					<button style=${{width:30}} onClick=${()=>t(e+1)}>
						+
					</button>
				`}
			</section>
		`}const de=()=>F`<section>
		<h1>404: Not Found</h1>
		<p>It's gone :(</p>
	</section>`;function ve(){const{url:e}=ce();return F`<header>
			<nav>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/error">Error</a>
			</nav>
			<label>
				URL:
				<input readonly value=${e} ref=${e=>e&&(e.size=e.value.length)}/>
			</label>
		</header>`}const ye=function(e){let t,n;return _=>{t||(t=e().then(e=>(n=e&&e.default||e,1)));const[,r]=K(0),o=Y(n);if(o.current||(o.current=t.then(r)),void 0===n)throw t;return a(n,_)}}(()=>import("./chunks/index.a482333c.js"));function me(){return F`<${ue}>
			<div class="app">
				<${ve}/>
				<${se}>
					<${ie}>
						<${he} path="/"/>
						<${ye} path="/about"/>
						<${de} default/>
					</${ie}>
				</${se}>
			</div>
		</${ue}>`}async function ge(e){const{default:t}=await import("./chunks/prerender.b50494d6.js");return await t(F`<${me} ...${e}/>`)}!function(e,t){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!M&&n?function(e,t){N(e,t,r)}(e,t):N(e,t),M=!0}(F`<${me}/>`);export{me as App,F as m,e as n,p,ge as prerender,T as q,fe as s,a as v};