/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${one}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("popup1");
         sym.getSymbol("one").stop("go");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().scaleToBrowserSize();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${one}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("one").play("go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${one}", "mouseout", function(sym, e) {
         sym.getSymbol("one").playReverse("go_back");
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3023, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3148, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3641, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${two}", "click", function(sym, e) {
         sym.play("popup2");
         sym.getSymbol("two").stop("go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${two}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("two").play("go");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${two}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("two").playReverse("go_back");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "click", function(sym, e) {
         sym.play("popup3");
         sym.getSymbol("three").stop("go");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("three").play("go");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("three").playReverse("go_back");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4243, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4348, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4841, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("body").css("overflow", "hidden");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "click", function(sym, e) {
         sym.play("popup4");
         sym.getSymbol("four").stop("go");
         sym.getSymbol("popup4").getSymbol("circle_animation").play("A");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("four").play("go");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("four").playReverse("go_back");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'one'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("one");
   //Edge symbol end:'one'

   //=========================================================
   
   //Edge symbol: 'three'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("three");
   //Edge symbol end:'three'

   //=========================================================
   
   //Edge symbol: 'two'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("two");
   //Edge symbol end:'two'

   //=========================================================
   
   //Edge symbol: 'close'
   (function(symbolName) {   
   
   })("close");
   //Edge symbol end:'close'

   //=========================================================
   
   //Edge symbol: 'popup1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B1");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("popup1");
   //Edge symbol end:'popup1'

   //=========================================================
   
   //Edge symbol: 'full_screen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("full_screen");
   //Edge symbol end:'full_screen'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 334, function(sym, e) {
         // insert code here
         sym.play("0");

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'lights'
   (function(symbolName) {   
   
   })("lights");
   //Edge symbol end:'lights'

   //=========================================================
   
   //Edge symbol: 'popup1_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B2");
         
         
         
         
         
         
         
         
         

      });
         //Edge binding end

      })("popup2");
   //Edge symbol end:'popup2'

   //=========================================================
   
   //Edge symbol: 'popup2_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B3");
         
         
         
         
         
         
         
         
         

      });
            //Edge binding end

         })("popup3");
   //Edge symbol end:'popup3'

   //=========================================================
   
   //Edge symbol: 'popup3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B4");
         
         
         
         
         
         
         
         
         

      });
               //Edge binding end

            })("popup4");
   //Edge symbol end:'popup4'

   //=========================================================
   
   //Edge symbol: 'four'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("four");
   //Edge symbol end:'four'

   //=========================================================
   
   //Edge symbol: 'circle_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3879, function(sym, e) {
         // insert code here
         sym.play("B");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("circle_animation");
   //Edge symbol end:'circle_animation'

   //=========================================================
   
   //Edge symbol: 'exit_fullscreen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("exit_fullscreen");
   //Edge symbol end:'exit_fullscreen'

   //=========================================================
   
   //Edge symbol: 'full_main'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${full_screen}", "click", function(sym, e) {
         $(document).toggleFullScreen();
         sym.getSymbol("full_screen").stop("expand");
         sym.stop("exit_close");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${full_screen}", "mouseover", function(sym, e) {
         sym.getSymbol("full_screen").play("expand");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${full_screen}", "mouseout", function(sym, e) {
         sym.getSymbol("full_screen").playReverse("exit");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 116, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 142, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${exit_fullscreen}", "click", function(sym, e) {
         $(document).toggleFullScreen();
         sym.getSymbol("exit_fullscreen").stop("in");
         sym.play("full");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${exit_fullscreen}", "mouseover", function(sym, e) {
         sym.getSymbol("exit_fullscreen").play("out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${exit_fullscreen}", "mouseout", function(sym, e) {
         sym.getSymbol("exit_fullscreen").playReverse("in");

      });
      //Edge binding end

   })("full_main");
   //Edge symbol end:'full_main'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-14118920");