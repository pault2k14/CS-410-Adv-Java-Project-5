$wnd.showcase.runAsyncCallback4("function up(b,a){b.multiple=a}\nfunction yab(a,b,c){this.a=a;this.c=b;this.b=c}\nfunction PGb(a){DGb();OGb.call(this);up((mvb(),this.hb),a)}\nfunction LGb(a,b){var c,d;ePb((mvb(),a.hb),'',b);d=a.hb.options.length;for(c=0;c<d;c++){ePb(a.hb.options[c],b,'item'+c)}}\nfunction k$(a){var b,c;b=vB(yZb(a.a,Jac),5);if(b==null){c=IA(CA(UU,1),M5b,2,6,['Cars','Sports','Vacation Spots']);BZb(a.a,Jac,c);return c}else{return b}}\nfunction j$(a){var b,c;b=vB(yZb(a.a,Iac),5);if(b==null){c=IA(CA(UU,1),M5b,2,6,['compact','sedan','coupe','convertible','SUV','truck']);BZb(a.a,Iac,c);return c}else{return b}}\nfunction m$(a){var b,c;b=vB(yZb(a.a,Lac),5);if(b==null){c=IA(CA(UU,1),M5b,2,6,['Carribean','Grand Canyon','Paris','Italy','New York','Las Vegas']);BZb(a.a,Lac,c);return c}else{return b}}\nfunction l$(a){var b,c;b=vB(yZb(a.a,Kac),5);if(b==null){c=IA(CA(UU,1),M5b,2,6,['Baseball',Gac,'Football','Hockey','Lacrosse','Polo','Soccer','Softball',Hac]);BZb(a.a,Kac,c);return c}else{return b}}\nfunction vab(a,b,c){var d,e;(mvb(),b.hb).options.length=0;e=null;switch(c){case 0:e=j$(a.a);break;case 1:e=l$(a.a);break;case 2:e=m$(a.a);}for(d=0;d<e.length;d++){EGb(b,e[d])}}\nfunction uab(a){var b,c,d,e,f,g,h;d=new SFb;d.e[_9b]=20;b=new PGb(false);f=k$(a.a);for(e=0;e<f.length;e++){EGb(b,f[e])}LGb(b,'cwListBox-dropBox');c=new vPb;c.e[_9b]=4;sPb(c,new gCb('<b>Select a category:<\\/b>'));sPb(c,b);PFb(d,c);g=new PGb(true);LGb(g,Mac);(mvb(),g.hb).style[x6b]='11em';g.hb.size=10;h=new vPb;h.e[_9b]=4;sPb(h,new gCb('<b>Select all that apply:<\\/b>'));sPb(h,g);PFb(d,h);Mh(b,new yab(a,g,b),(zt(),zt(),yt));vab(a,g,0);LGb(g,Mac);return d}\nvar Iac='cwListBoxCars',Jac='cwListBoxCategories',Kac='cwListBoxSports',Lac='cwListBoxVacations',Mac='cwListBox-multiBox';XW(398,1,y8b,yab);_.Rc=function zab(a){vab(this.a,this.c,gh(this.b).selectedIndex);LGb(this.c,Mac)};var GL=SVb(L8b,'CwListBox/1',398);XW(399,1,G8b);_.Bc=function Cab(){kZ(this.b,uab(this.a))};XW(75,244,B6b,PGb);I5b(Bl)(4);\n//# sourceURL=showcase-4.js\n")
