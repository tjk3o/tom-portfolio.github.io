(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),d=n(r("q1tI")),c=n(r("17x9")),u=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),A=function(e){var t=u(e),r=p(t);return g[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,v=new WeakMap;function x(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),d.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+l+r+n+t+i+a+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=d.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(B,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?d.default.createElement("picture",null,a(n),l):l})),B=d.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&A(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!m&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(m||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,A=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,v=e.itemProp,y=e.loading,C=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,s.default)({opacity:k?1:0,transition:N?"opacity "+b+"ms":"none"},l),L="boolean"==typeof m?"lightgray":m,O={transitionDelay:b+"ms"},R=(0,s.default)((0,s.default)((0,s.default)({opacity:this.state.imgLoaded?0:1},N&&O),l),f),P={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:v};if(g){var z=g,Q=h(g);return d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:Q.maxWidth?Q.maxWidth+"px":null,maxHeight:Q.maxHeight?Q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},d.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),L&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),Q.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:Q.base64,spreadProps:P,imageVariants:z,generateSources:S}),Q.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:Q.tracedSVG,spreadProps:P,imageVariants:z,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(z),d.default.createElement(B,{alt:r,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)((0,s.default)({alt:r,title:t,loading:y},Q),{},{imageVariants:z}))}}))}if(A){var Y=A,F=h(A),H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},L&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},N&&O)}),F.base64&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:P,imageVariants:Y,generateSources:S}),F.tracedSVG&&d.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:P,imageVariants:Y,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(Y),d.default.createElement(B,{alt:r,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)((0,s.default)({alt:r,title:t,loading:y},F),{},{imageVariants:Y}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});N.propTypes={resolutions:j,sizes:L,fixed:c.default.oneOfType([j,c.default.arrayOf(j)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=N;t.default=O},EK0E:function(e,t,r){"use strict";var n,a=r("dyZX"),i=r("CkkT")(0),o=r("KroJ"),l=r("Z6vF"),s=r("czNK"),d=r("ZD67"),c=r("0/R4"),u=r("s5qY"),f=r("s5qY"),p=!a.ActiveXObject&&"ActiveXObject"in a,h=l.getWeak,g=Object.isExtensible,A=d.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(c(e)){var t=h(e);return!0===t?A(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(u(this,"WeakMap"),e,t)}},w=e.exports=r("4LiD")("WeakMap",m,b,d,!0,!0);f&&p&&(s((n=d.getConstructor(m,"WeakMap")).prototype,b),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=w.prototype,r=t[e];o(t,e,(function(t,a){if(c(t)&&!g(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("bWfx"),r("ioFf"),r("V+eJ"),r("91GP");var n=r("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function s(e){return function(t){return n.createElement(d,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,s=e.title,d=l(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,l=function(e,t,r,n){var a=String(i(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("yBb5"),o=r("/4kY"),l=r("vOnD"),s=r("fwso"),d=r("Xgal");function c(){var e=m(["\n    justify-content: space-between;\n  "]);return c=function(){return e},e}function u(){var e=m(["\n    -webkit-text-stroke-width: 4px;\n    font-size: 160px;\n    line-height: 80px;\n  "]);return u=function(){return e},e}function f(){var e=m(["\n    font-size: 100px;\n    -webkit-text-stroke-width: 3px;\n    "]);return f=function(){return e},e}function p(){var e=m(["\n    width: 1200px;\n  "]);return p=function(){return e},e}function h(){var e=m(["\n    width: 1000px;\n  "]);return h=function(){return e},e}function g(){var e=m(["\n    width: 900px;\n  "]);return g=function(){return e},e}function A(){var e=m(["\n  margin-bottom: -100px;\n  width: 500px;\n  "]);return A=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var b=l.c.section.withConfig({displayName:"Section__SectionContainer",componentId:"sc-8gk3sk-0"})(["margin-bottom:-50px;"," "," "," ",";"],s.b.tabletPortrait_up(A()),s.b.tabletLandscape_up(g()),s.b.desktop_up(h()),s.b.desktopLarge_up(p())),w=l.c.h1.withConfig({displayName:"Section__Heading",componentId:"sc-8gk3sk-1"})(["font-family:sans-serif;font-size:60px;line-height:30px;margin:0 0 0 8px;font-weight:800;position:relative;z-index:2;",";"," ",""],(function(e){return e.headingColor?"color: "+e.headingColor:"color: "+d.a.black}),s.b.tabletPortrait_up(f()),s.b.tabletLandscape_up(u())),v=l.c.div.withConfig({displayName:"Section__SectionSubContainer",componentId:"sc-8gk3sk-2"})(["width:100%;display:flex;flex-wrap:wrap;border-radius:15px 15px 0 0;overflow:hidden;",";",""],(function(e){return e.backgroundColor?"background-color: "+e.backgroundColor:"background-color: "+d.a.white}),s.b.tabletPortrait_up(c())),x=function(e){var t=e.heading,r=e.headingColor,n=e.backgroundColor,i=e.children;return a.a.createElement(b,null,a.a.createElement(w,{headingColor:r},t),a.a.createElement(v,{backgroundColor:n},i))},y=r("ma3e");function E(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    margin-top: 110px;\n  "]);return E=function(){return e},e}var S=l.c.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1g0xvwb-0"})(["margin:60px 0 20px;width:115px;display:flex;justify-content:space-between;",";"],s.b.tabletPortrait_up(E())),C=function(){return a.a.createElement(S,null,a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/tjk3o"},a.a.createElement(y.b,{color:d.a.white,size:"35px"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:enquiries@tomkeogh.co.uk"},a.a.createElement(y.a,{color:d.a.white,size:"35px"})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tom_keogh1/"},a.a.createElement(y.c,{color:d.a.white,size:"35px"})))},k=r("fyBa"),I=r("9eSz"),_=r.n(I),B=function(){var e=k.data;return a.a.createElement(_.a,{fluid:e.placeholderImage.childImageSharp.fluid})};function N(){var e=R(["\n    width: 440px;\n    max-height: 650px;\n  "]);return N=function(){return e},e}function j(){var e=R(["\n    font-size: 35px;\n    line-height: 40px;\n    width: 100%;\n  "]);return j=function(){return e},e}function L(){var e=R(["\n  font-size: 58px;\n  "]);return L=function(){return e},e}function O(){var e=R(["\n    height: 100%;\n    width: calc(50% - 100px);\n    padding: 15px 50px 0;\n  "]);return O=function(){return e},e}function R(e,t){return t||(t=e.slice(0)),e.raw=t,e}var P=l.c.div.withConfig({displayName:"Contact__ContactLeftContainer",componentId:"fea8p5-0"})(["width:100%;margin:45px 30px 80px;height:65%;",";"],s.b.tabletLandscape_up(O())),z=l.c.a.withConfig({displayName:"Contact__ContactHeading",componentId:"fea8p5-1"})(["color:",";font-weight:400;font-size:33px;overflow-wrap:anywhere;margin:0;text-decoration:none;&:hover{text-decoration:underline;}",";"],d.a.white,s.b.tabletPortrait_up(L())),Q=l.c.hr.withConfig({displayName:"Contact__Rule",componentId:"fea8p5-2"})(["width:50%;margin:30px 0;border:none;height:4px;background-color:",";"],d.a.offWhite),Y=l.c.p.withConfig({displayName:"Contact__Paragraph",componentId:"fea8p5-3"})(["color:",";font-size:16px;line-height:30px;width:60%;",";"],d.a.white,s.b.tabletPortrait_up(j())),F=l.c.div.withConfig({displayName:"Contact__ContactRightContainer",componentId:"fea8p5-4"})(["width:100%;height:100%;overflow:hidden;",";"],s.b.tabletLandscape_up(N())),H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(z,{href:"mailto:enquiries@tomkeogh.co.uk"},"enquiries@",a.a.createElement("br",null),"tomkeogh.co.uk"),a.a.createElement(Q,null),a.a.createElement(Y,null,"Please feel free to get in touch with the link above."),a.a.createElement(C,null)),a.a.createElement(F,null,a.a.createElement(s.a,null,a.a.createElement(B,null))))};function V(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin: 140px auto 180px;\n  font-size: 35px;\n  line-height: 40px;\n  "]);return V=function(){return e},e}var M=l.c.p.withConfig({displayName:"About__AboutHeading",componentId:"sc-17b76mg-0"})(["width:60%;text-align:left;color:",";line-height:20px;margin:45px 30px 80px;font-size:16px;line-height:30px;",""],d.a.white,s.b.tabletPortrait_up(V())),W=function(){return a.a.createElement(M,null,"My name’s Tom. I’m a JavaScript developer based in South London. If you’re interested in seeing some of my work then please follow the links below.")};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(x,{heading:"About me.",headingColor:d.a.black,backgroundColor:d.a.sectionBlue},a.a.createElement(W,null)),a.a.createElement(x,{style:{position:"relative",zIndex:"1"},heading:"Say hi.",headingColor:d.a.white,backgroundColor:d.a.sectionGreen},a.a.createElement(H,null)))}},ZD67:function(e,t,r){"use strict";var n=r("3Lyj"),a=r("Z6vF").getWeak,i=r("y3w9"),o=r("0/R4"),l=r("9gX7"),s=r("SlkY"),d=r("CkkT"),c=r("aagx"),u=r("s5qY"),f=d(5),p=d(6),h=0,g=function(e){return e._l||(e._l=new A)},A=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};A.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var r=m(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var d=e((function(e,n){l(e,d,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&s(n,r,e[i],e)}));return n(d.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(u(this,t)).delete(e):r&&c(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?g(u(this,t)).has(e):r&&c(r,this._i)}}),d},def:function(e,t,r){var n=a(i(t),!0);return!0===n?g(e).set(t,r):n[e._i]=r,e},ufstore:g}},fyBa:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAAFAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdgShGrUFL32Ms6P/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxEQEiL/2gAIAQEAAQUCduitfbXxaNRQXMsPirVfYr6AY1uH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgECBwAAAAAAAAAAAAAAAREAEBICAyBBUWFx/9oACAEBAAY/AmmY8eWLeQaeFy24ruhm+n//xAAcEAACAgMBAQAAAAAAAAAAAAABEQAhEEFRMbH/2gAIAQEAAT8hrTBQHTLwt2lBYcXFqQLIuwwaIO+bi19+/IsMF4DLU//aAAwDAQACAAMAAAAQwMEA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHxABAAMBAAICAwAAAAAAAAAAAQARITFBUWGBwdHw/9oACAEBAAE/EK6gF+rObEQwQuAfNRBDiWTQlDHxZ+YbHJUKQRf1OcwjXG0oG65MHBpbon8v6ghfIgWbPMX1Nhue5//Z","aspectRatio":0.6666666666666666,"src":"/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/4fe8c/portrait.jpg","srcSet":"/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/aabdf/portrait.jpg 150w,\\n/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/9dc27/portrait.jpg 300w,\\n/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/4fe8c/portrait.jpg 600w,\\n/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/9842e/portrait.jpg 900w,\\n/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/47498/portrait.jpg 1200w,\\n/tom-portfolio-two/static/89b0355068d20de206bf28fe5ffd0a5e/40f82/portrait.jpg 3744w","sizes":"(max-width: 600px) 100vw, 600px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-02109c436115caf6a6dd.js.map