
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_boton}","click",function(sym,e){window.open("test.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'vid'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_video}","mouseover",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var vid=sym.$("Rectangle");vid.html(´<video width="640"height="480"src="video/intro2.mp4"type"video/mp4"controls="controls"</video>´);});
//Edge binding end
})("vid");
//Edge symbol end:'vid'

//=========================================================

//Edge symbol: 'play'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Ellipse}","click",function(sym,e){sym.play("vid");});
//Edge binding end
})("play");
//Edge symbol end:'play'

//=========================================================

//Edge symbol: 'boton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","click",function(sym,e){window.open("http://decisiones.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",38000,function(sym,e){window.open("decisiones.html","_self");});
//Edge binding end
})("boton");
//Edge symbol end:'boton'
})(jQuery,AdobeEdge,"EDGE-99415954");