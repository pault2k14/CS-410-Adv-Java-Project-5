$wnd.showcase.runAsyncCallback24("function GUb(a){this.a=a}\nfunction IUb(a){this.a=a}\nfunction KUb(a){this.a=a}\nfunction PUb(a,b){this.a=a;this.b=b}\nfunction smc(a){return Yac(),a.hb}\nfunction wmc(a,b){pmc(a,b);fp((Yac(),a.hb),b)}\nfunction Pac(){var a;if(!Mac||Sac()){a=new dKc;Rac(a);Mac=a}return Mac}\nfunction Sac(){var a=$doc.cookie;if(a!=Nac){Nac=a;return true}else{return false}}\nfunction fp(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction Tac(a){Oac&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction DUb(a){var b,c,d,e;if(smc(a.c).options.length<1){Boc(a.a,'');Boc(a.b,'');return}e=smc(a.c).selectedIndex;b=tmc(a.c,e);c=(d=Pac(),qfb(b==null?_Ec(vKc(d.d,null)):LKc(d.e,b)));Boc(a.a,b);Boc(a.b,c)}\nfunction CUb(a,b){var c,d,e,f,g,h;gh(a.c).options.length=0;h=0;e=new nGc(Pac());for(d=(g=e.a.Uh().fc(),new sGc(g));d.a.Og();){c=(f=mfb(d.a.Pg(),36),qfb(f.$h()));omc(a.c,c);yCc(c,b)&&(h=gh(a.c).options.length-1)}um((nm(),mm),new PUb(a,h))}\nfunction Rac(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(Oac){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Wh(f,g)}}}\nfunction BUb(a){var b,c,d;c=new xkc(3,3);a.c=new ymc;b=new fec('Delete');Fh((Yac(),b.hb),iUc,true);Sjc(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');Vjc(c,0,1,a.c);Vjc(c,0,2,b);a.a=new Koc;Sjc(c,1,0,'<b><b>Name:<\\/b><\\/b>');Vjc(c,1,1,a.a);a.b=new Koc;d=new fec('Set Cookie');Fh(d.hb,iUc,true);Sjc(c,2,0,'<b><b>Value:<\\/b><\\/b>');Vjc(c,2,1,a.b);Vjc(c,2,2,d);Mh(d,new GUb(a),(Gt(),Gt(),Ft));Mh(a.c,new IUb(a),(zt(),zt(),yt));Mh(b,new KUb(a),(null,Ft));CUb(a,null);return c}\nICb(486,1,LQc,GUb);_.Sc=function HUb(a){var b,c,d;c=xoc(this.a.a);d=xoc(this.a.b);b=new ceb(eCb(kCb((new aeb).q.getTime()),lVc));if((vCc(),c).length<1){$wnd.alert('You must specify a cookie name');return}Uac(c,d,b);CUb(this.a,c)};var Prb=DBc($Qc,'CwCookies/1',486);ICb(487,1,MQc,IUb);_.Rc=function JUb(a){DUb(this.a)};var Qrb=DBc($Qc,'CwCookies/2',487);ICb(488,1,LQc,KUb);_.Sc=function LUb(a){var b,c;c=gh(this.a.c).selectedIndex;if(c>-1&&c<gh(this.a.c).options.length){b=tmc(this.a.c,c);Tac(b);wmc(this.a.c,c);DUb(this.a)}};var Rrb=DBc($Qc,'CwCookies/3',488);ICb(489,1,UQc);_.Bc=function OUb(){XEb(this.b,BUb(this.a))};ICb(490,1,{},PUb);_.Dc=function QUb(){this.b<gh(this.a.c).options.length&&xmc(this.a.c,this.b);DUb(this.a)};_.b=0;var Trb=DBc($Qc,'CwCookies/5',490);var Mac=null,Nac;tNc(Bl)(24);\n//# sourceURL=showcase-24.js\n")