(function(){var window=this;var d=this;var N=function(a){N[" "](a);return a};N[" "]=function(){};var m=function(){return d.googletag||(d.googletag={})};var q={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:.01,17:1,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,36:!1,37:.01,38:.001,46:!1,47:1E-4,53:"",54:0,57:.05,58:1,60:.01,61:.05,63:0,65:.5,66:1E-5,67:.95,68:.95,69:.95,70:.001,71:.05,72:1,73:.001,74:.01,75:"",76:"",77:.001,78:.01,79:.95,80:.001,81:0,82:0,83:0,84:0};
q[6]=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(c){}return!0}(window);q[49]=(new Date).getTime();var r=function(){var a={},b;for(b in q)a[b]=q[b];this.a=a};r.prototype.get=function(a){return this.a[a]};r.prototype.set=function(a,b){this.a[a]=b};r.getInstance=function(){return r.a?r.a:r.a=new r};var t=r.getInstance().a,f=m(),u=f._vars_,g;for(g in u)t[g]=u[g];f._vars_=t;var n=function(){return"105"},p=m();p.hasOwnProperty("getVersion")||(p.getVersion=n);var v=N("www.googletagservices.com"),w="",x="",h=r.getInstance().get(46)&&!r.getInstance().get(6),w=h?"http:":"https:",x=r.getInstance().get(h?2:3);var k=m(),C=(k.fifWin||window).document,y=[],E=m();E.hasOwnProperty("cmd")||(E.cmd=y);
if(k.evalScripts)k.evalScripts();else{var D=C.currentScript,l;var e=r.getInstance().get(76);if(e)l=e;else{var z="",A="partner.googleadservices.com",B=r.getInstance().get(6)?"https:":"http:",F;if(!F){b:{var G=["21060059","21060061","21060060"];if(!(1E-4>Math.random())){var H=Math.random();if(.003>H){var J=window;try{var L=new Uint32Array(1);J.crypto.getRandomValues(L);H=L[0]/65536/65536}catch(a){H=Math.random()}F=G[Math.floor(H*G.length)];break b}}F=null}F&&(r.getInstance().set(75,F),z="?v=105","21060061"==
F?(B=w,A=x):"21060060"==F&&(A=v))}e=B+"//"+A+"/gpt/pubads_impl_105.js"+z;r.getInstance().set(76,e);l=e}if(!("complete"==C.readyState||"loaded"==C.readyState||D&&D.async)){var I="gpt-impl-"+Math.random();try{C.write('<script id="'+I+'" src="'+l+'">\x3c/script>'),k._syncTagged_=!0}catch(a){}C.getElementById(I)&&(k._loadStarted_=!0)}if(!k._loadStarted_){var K=C.createElement("script");K.src=l;K.async=!0;(C.head||C.body||C.documentElement).appendChild(K);k._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
