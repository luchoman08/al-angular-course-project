webpackJsonp([2],{jVUv:function(l,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=d("WT6e"),u=function(){},a=d("Xjw4"),p=d("jXzF"),o=d("bfOx"),m=d("JiGa"),t=d("jcNc"),c=(d("Qo4Q"),d("T25p"),{W92:t.a.W45,W154:t.a.W185,H632:t.a.H632,ORIGINAL:t.a.ORIGINAL}),i=function(){function l(l,n){this.route=l,this.imageService=n,this.mode="determinate",this.person=new p.b}return l.prototype.ngOnInit=function(){var l=this;this.route.data.subscribe(function(n){console.log(n),l.person=n.person,l.profileImagePath=l.imageService.get(l.person.profile_path,c.W154)})},l}(),r=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,31,null,null,null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](2,0,null,null,28,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](4,0,null,null,25,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](6,0,null,null,3,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](8,0,null,null,0,"img",[["alt","person_profile_image"],["srcset",""]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](11,0,null,null,17,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](13,0,null,null,1,"h2",[["class","name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,[""," "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](16,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,["Tambien conocido como: ",""])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](20,0,null,null,7,"div",[["class","biography"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](22,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Bibliografia"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](26,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],null,function(l,n){var d=n.component;l(n,8,0,e["\u0275inlineInterpolate"](1,"",d.profileImagePath,"")),l(n,14,0,d.person.name),l(n,18,0,d.person.also_known_as.join(", ")),l(n,26,0,d.person.biography)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](1,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,1,0,n.component.person)},null)}var g=e["\u0275ccf"]("app-person-detail",i,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-person-detail",[],null,null,null,f,r)),e["\u0275did"](1,114688,null,0,i,[o.a,m.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),b=d("INQx"),h=d("zI1e"),v=d("ItHS"),N=d("1Qgv"),O=d("USGn"),C=d("X+YA"),D=d("Kqp/"),I=d("weva"),M=d("D5ak"),T=d("cMCD"),j=d("9Sd6"),y=d("XHgV"),E=d("U/+3"),U=d("a9YB"),R=d("z7Rf"),S=d("OE0E"),k=d("YEB1"),w=d("Uo70"),F=d("1T37"),L=d("+j5Y"),Z=d("Mcof"),_=d("7u3n"),z=d("8tOD"),W=d("NwsS"),X=d("T4hI"),A=function(){function l(l,n){this.peopleService=l,this.router=n}return l.prototype.resolve=function(l){var n=this;return this.peopleService.get(l.params.id,!0,!0).pipe(Object(X.a)(function(l){return n.router.navigateByUrl("/")}))},l}(),B=function(){},q=d("u87A"),H=d("gsbp"),P=d("bq7Y"),Y=d("bkcK"),G=d("Oz7M"),K=d("j06o"),Q=d("TBIh"),x=d("704W"),J=d("yvW1"),V=d("q2BM"),$=d("+76Z"),ll=d("kJ/S"),nl=d("Bp8q"),dl=d("Xbny"),el=d("ZuzD"),ul=d("sqmn"),al=d("vfax");d.d(n,"PeopleModuleNgFactory",function(){return pl});var pl=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[g,b.a,h.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275a"]]]),e["\u0275mpd"](4608,v.i,v.o,[a.DOCUMENT,e.PLATFORM_ID,v.m]),e["\u0275mpd"](4608,v.p,v.p,[v.i,v.n]),e["\u0275mpd"](5120,v.a,function(l){return[l,new N.a]},[v.p]),e["\u0275mpd"](4608,v.l,v.l,[]),e["\u0275mpd"](6144,v.j,null,[v.l]),e["\u0275mpd"](4608,v.h,v.h,[v.j]),e["\u0275mpd"](6144,v.b,null,[v.h]),e["\u0275mpd"](4608,v.f,v.k,[v.b,e.Injector]),e["\u0275mpd"](4608,v.c,v.c,[v.f]),e["\u0275mpd"](4608,O.a,O.a,[v.c]),e["\u0275mpd"](4608,C.a,C.a,[O.a]),e["\u0275mpd"](4608,D.a,D.a,[O.a]),e["\u0275mpd"](4608,m.a,m.a,[]),e["\u0275mpd"](4608,I.a,I.a,[v.c]),e["\u0275mpd"](4608,M.a,M.a,[O.a]),e["\u0275mpd"](4608,T.a,T.a,[]),e["\u0275mpd"](6144,j.b,null,[a.DOCUMENT]),e["\u0275mpd"](4608,j.c,j.c,[[2,j.b]]),e["\u0275mpd"](4608,y.a,y.a,[]),e["\u0275mpd"](4608,E.i,E.i,[y.a]),e["\u0275mpd"](4608,E.h,E.h,[E.i,e.NgZone,a.DOCUMENT]),e["\u0275mpd"](136192,E.d,E.b,[[3,E.d],a.DOCUMENT]),e["\u0275mpd"](5120,E.l,E.k,[[3,E.l],[2,E.j],a.DOCUMENT]),e["\u0275mpd"](5120,E.g,E.e,[[3,E.g],e.NgZone,y.a]),e["\u0275mpd"](5120,U.b,U.c,[[3,U.b]]),e["\u0275mpd"](5120,R.d,R.a,[[3,R.d],[2,v.c],S.DomSanitizer,[2,a.DOCUMENT]]),e["\u0275mpd"](4608,k.a,k.a,[]),e["\u0275mpd"](4608,w.a,w.a,[]),e["\u0275mpd"](5120,F.d,F.b,[[3,F.d],e.NgZone,y.a]),e["\u0275mpd"](5120,F.g,F.f,[[3,F.g],y.a,e.NgZone]),e["\u0275mpd"](4608,L.g,L.g,[F.d,F.g,e.NgZone,a.DOCUMENT]),e["\u0275mpd"](5120,L.c,L.h,[[3,L.c],a.DOCUMENT]),e["\u0275mpd"](4608,L.f,L.f,[F.g,a.DOCUMENT]),e["\u0275mpd"](5120,L.d,L.k,[[3,L.d],a.DOCUMENT]),e["\u0275mpd"](4608,L.a,L.a,[L.g,L.c,e.ComponentFactoryResolver,L.f,L.d,e.ApplicationRef,e.Injector,e.NgZone,a.DOCUMENT]),e["\u0275mpd"](5120,L.i,L.j,[L.a]),e["\u0275mpd"](4608,Z.d,Z.d,[y.a]),e["\u0275mpd"](135680,Z.a,Z.a,[Z.d,e.NgZone]),e["\u0275mpd"](5120,_.b,_.c,[L.a]),e["\u0275mpd"](5120,z.b,z.c,[L.a]),e["\u0275mpd"](4608,z.d,z.d,[L.a,e.Injector,[2,a.Location],[2,z.a],z.b,[3,z.d],L.c]),e["\u0275mpd"](5120,W.a,W.b,[L.a]),e["\u0275mpd"](4608,A,A,[D.a,o.k]),e["\u0275mpd"](512,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](512,o.m,o.m,[[2,o.r],[2,o.k]]),e["\u0275mpd"](512,B,B,[]),e["\u0275mpd"](512,v.e,v.e,[]),e["\u0275mpd"](512,v.d,v.d,[]),e["\u0275mpd"](512,q.a,q.a,[]),e["\u0275mpd"](512,j.a,j.a,[]),e["\u0275mpd"](256,w.b,!0,[]),e["\u0275mpd"](512,w.d,w.d,[[2,w.b]]),e["\u0275mpd"](512,y.b,y.b,[]),e["\u0275mpd"](512,w.j,w.j,[]),e["\u0275mpd"](512,E.a,E.a,[]),e["\u0275mpd"](512,H.c,H.c,[]),e["\u0275mpd"](512,P.a,P.a,[]),e["\u0275mpd"](512,Y.f,Y.f,[]),e["\u0275mpd"](512,G.d,G.d,[]),e["\u0275mpd"](512,R.c,R.c,[]),e["\u0275mpd"](512,k.b,k.b,[]),e["\u0275mpd"](512,K.b,K.b,[]),e["\u0275mpd"](512,Q.b,Q.b,[]),e["\u0275mpd"](512,x.a,x.a,[]),e["\u0275mpd"](512,J.c,J.c,[]),e["\u0275mpd"](512,V.a,V.a,[]),e["\u0275mpd"](512,$.c,$.c,[]),e["\u0275mpd"](512,F.c,F.c,[]),e["\u0275mpd"](512,L.e,L.e,[]),e["\u0275mpd"](512,ll.h,ll.h,[]),e["\u0275mpd"](512,Z.c,Z.c,[]),e["\u0275mpd"](512,_.d,_.d,[]),e["\u0275mpd"](512,z.f,z.f,[]),e["\u0275mpd"](512,nl.b,nl.b,[]),e["\u0275mpd"](512,w.h,w.h,[]),e["\u0275mpd"](512,w.g,w.g,[]),e["\u0275mpd"](512,dl.a,dl.a,[]),e["\u0275mpd"](512,W.c,W.c,[]),e["\u0275mpd"](512,w.e,w.e,[]),e["\u0275mpd"](512,el.a,el.a,[]),e["\u0275mpd"](512,ul.a,ul.a,[]),e["\u0275mpd"](512,al.a,al.a,[]),e["\u0275mpd"](512,u,u,[]),e["\u0275mpd"](1024,o.i,function(){return[[{path:":id",component:i,resolve:{person:A}}]]},[]),e["\u0275mpd"](256,v.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,v.n,"X-XSRF-TOKEN",[]),e["\u0275mpd"](256,ll.a,!1,[]),e["\u0275mpd"](256,_.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[])])})}});