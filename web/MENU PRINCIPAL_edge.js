
(function($,Edge,compId){var _=null,y=true,n=false,e34='${_button_btn2}',x1='4.0.0',c='color',x3='rgba(0,0,0,0)',e17='${_menu_principal-background}',x43='rgba(4,66,103,0.52)',x39='rgba(25,117,172,1.00)',g='image',x28='boton',x37='rgba(0,0,0,0.00)',x42='rgba(0,123,195,0.52)',x41='rgba(144,214,255,0.68)',e12='${_Stage}',bc='border-color',x38='pointer',x36='button_btn',a='Base State',x35='250px',e18='${_menu_principal-caja}',x32='1px',x13='hidden',x22='264px',x23='26px',m='rect',e16='${_menu_principal-creditos}',e19='${_menu_principal-textos}',i='none',x27='rgba(192,192,192,1)',e15='${_menu_principal-titulo}',e29='${_RoundRect}',xc='rgba(0,0,0,1)',p='px',o='opacity',lf='left',x26='RoundRect',x25='10px',x33='Symbol_1',e30='${symbolSelector}',x31='button_btn2',x21='0px',e20='${_Symbol_1}',bg='background-color',x24='auto',x2='4.0.0.359',x11='rgba(255,255,255,1)',e14='${_menu_principal-marcos}',dt='Default Timeline',w='width',tp='top',e40='${_button_btn}',ql='linear',ov='overflow',h='height',x10='stage',s='style';var im='images/';var g5='menu_principal-caja.png',g9='menu_principal-textos.png',g7='menu_principal-marcos.png',g4='menu_principal-background.png',g8='menu_principal-creditos.png',g6='menu_principal-titulo.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'menu_principal-background',t:g,r:['-1px','0px','642px','480px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'menu_principal-caja',t:g,r:['154px','281px','294px','119px','auto','auto'],f:[x3,im+g5,'0px','0px']},{id:'menu_principal-titulo',t:g,r:['222px','38px','217px','156px','auto','auto'],o:1,f:[x3,im+g6,'0px','0px']},{id:'menu_principal-marcos',t:g,r:['14px','9px','608px','452px','auto','auto'],f:[x3,im+g7,'0px','0px']},{id:'menu_principal-creditos',t:g,r:['186px','230px','264px','26px','auto','auto'],o:1,f:[x3,im+g8,'0px','0px']},{id:'menu_principal-textos',t:g,r:['254px','304px','157px','73px','auto','auto'],f:[x3,im+g9,'0px','0px']},{id:'Symbol_1',t:m,r:['-261px','304px','auto','auto','auto','auto'],o:0.75471699331541},{id:'multimedia_event_tone_4',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:['sound/multimedia_event_tone_4.mp3'],pr:'auto'},{id:'Canton_The-Great-River',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],ap:'autoplay',lp:'loop',sr:['sound/Canton_The-Great-River.mp3'],pr:'auto'}],sI:[{id:'Symbol_1',sN:'Symbol_1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:387213,a:y,tt:[]}}},"boton":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x21,x21,x22,x23,x24,x24],br:[x25,x25,x25,x25],id:x26,s:[0,xc,i],t:m,f:[x27]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"Symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x31,t:m,r:[x32,x21,x24,x24,x24,x24],o:0.49}],sI:[{id:'button_btn2',sN:'button_btn',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:y,tt:[]}}},"button_btn":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,r:[x21,x21,x35,x23,x24,x24],br:[x25,x25,x25,x25],o:0.52,id:x36,s:[0,x37,i],cu:[x38],f:[x39]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:y,tt:[]}}}};var S1=symbols[x10];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e12).P(bg,x11,c).P(w,640).P(h,480).P(ov,x13);A1.A(e14).P(tp,9).P(h,452).P(w,608).P(lf,14).T(1,14).P(o,0,_,_,"").T(0.75,1,0.25,ql);A1.A(e15).P(h,156).P(lf,222).P(w,217).P(tp,55).T(2.39,55).P(o,0,_,_,"").T(1.75,1,0.64,ql);A1.A(e16).P(tp,230).P(h,26).P(lf,186).P(w,264).P(o,0,_,_,"").T(1.75,1,0.64,ql);A1.A(e17).P(h,480).P(lf,-1).P(w,642).P(o,0,_,_,"").T(0,1,0.75,ql);A1.A(e18).P(tp,281).P(h,119).P(w,294).P(lf,-304).T(1,186,0.25,ql);A1.A(e19).P(tp,304).P(h,73).P(lf,254).P(w,157).P(o,0,_,_,"").T(1.25,1,0.25,ql);A1.A(e20).P(o,0.75,_,_,"").P(lf,-261,_,_,p).T(2.39,208,0.48,ql).P(tp,300).T(2.87,300);var S2=symbols[x28];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e29).P(tp,0).P(lf,0).P(w,264);A2.A(e30).P(h,26).P(w,264);var S3=symbols[x33];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e34).P(lf,1).P(o,0.49,_,_,"");A3.A(e30).P(h,26).P(w,250);var S4=symbols[x36];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e30).P(h,26).P(w,250);A4.A(e40).P(o,0.52,_,_,"").P("cursor",x38).P(bc,x37,c).P(lf,0,_,_,p).P(tp,0).P(bg,x41,c).T(0,x41).T(0.5,x42).T(1,x43);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-154795532");