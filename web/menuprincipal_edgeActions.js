
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Symbol_1}","click",function(sym,e){sym.$("multimedia_event_tone_4")[0].currentTime=2;window.open("test.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'boton'
(function(symbolName){})("boton");
//Edge symbol end:'boton'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'button_btn'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_button_btn}","click",function(sym,e){window.open("apertura.html","_self");});
//Edge binding end
})("button_btn");
//Edge symbol end:'button_btn'
})(jQuery,AdobeEdge,"EDGE-154795532");