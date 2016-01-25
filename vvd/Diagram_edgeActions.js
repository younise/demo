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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("body").css("overflow", "hidden");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().scaleToBrowserSize();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Management_hotspot}", "mouseover", function(sym, e) {
         sym.getSymbol("Manage_Switch").play("hover");
         sym.getSymbol("Management2").play("hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Management_hotspot}", "mouseout", function(sym, e) {
         sym.getSymbol("Management2").playReverse("normal");
         sym.getSymbol("Manage_switch").playReverse("normal");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${edge_hotspot}", "mouseover", function(sym, e) {
         sym.getSymbol("edge_switch").play("hover");
         sym.getSymbol("edge").play("hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${edge_hotspot}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("edge_switch").playReverse("normal");
         sym.getSymbol("edge").playReverse("normal");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${compute_hotspot}", "mouseover", function(sym, e) {
         sym.getSymbol("compute_switch1").play("hover");
         sym.getSymbol("compute_switch2").play("hover");
         sym.getSymbol("compute_comp").play("hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${compute_hotspot}", "mouseout", function(sym, e) {
         sym.getSymbol("compute_switch1").playReverse("normal");
         sym.getSymbol("compute_switch2").playReverse("normal");
         sym.getSymbol("compute_comp").playReverse("normal");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${storage_hotspot}", "mouseover", function(sym, e) {
         sym.getSymbol("storage_switch").play("hover");
         sym.getSymbol("Storage2").play("hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${storage_hotspot}", "mouseout", function(sym, e) {
         sym.getSymbol("storage_switch").playReverse("normal");
         sym.getSymbol("Storage2").playReverse("normal");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${Transport_zone}", "mouseover", function(sym, e) {
         sym.getSymbol("Transport_zone").play("hover");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Transport_zone}", "mouseout", function(sym, e) {
         sym.getSymbol("Transport_zone").playReverse("normal");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4437, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4963, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Management_hotspot}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("popup1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5493, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5542, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6035, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6063, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6556, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6590, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7083, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${edge_hotspot}", "click", function(sym, e) {
         sym.play("popup2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${compute_hotspot}", "click", function(sym, e) {
         sym.play("popup3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${storage_hotspot}", "click", function(sym, e) {
         sym.play("popup4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Transport_zone}", "click", function(sym, e) {
         sym.play("popup5");
         sym.getSymbol("transportzone_details").getSymbol("hotspot1").play("start");
         sym.getSymbol("transportzone_details").getSymbol("hotspot2").play("start");
         sym.getSymbol("transportzone_details").getSymbol("hotspot3").play("start");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
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

   })("full_main");
   //Edge symbol end:'full_main'

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
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Management'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 424, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Management");
   //Edge symbol end:'Management'

   //=========================================================
   
   //Edge symbol: 'Manage_Switch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 427, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Manage_Switch");
   //Edge symbol end:'Manage_Switch'

   //=========================================================
   
   //Edge symbol: 'edge'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 405, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("edge");
   //Edge symbol end:'edge'

   //=========================================================
   
   //Edge symbol: 'edge_switch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 402, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("edge_switch");
   //Edge symbol end:'edge_switch'

   //=========================================================
   
   //Edge symbol: 'compute_switch1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("compute_switch1");
   //Edge symbol end:'compute_switch1'

   //=========================================================
   
   //Edge symbol: 'compute_switch2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("compute_switch2");
   //Edge symbol end:'compute_switch2'

   //=========================================================
   
   //Edge symbol: 'Storage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Storage");
   //Edge symbol end:'Storage'

   //=========================================================
   
   //Edge symbol: 'storage_switch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("storage_switch");
   //Edge symbol end:'storage_switch'

   //=========================================================
   
   //Edge symbol: 'Transport_zone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Transport_zone");
   //Edge symbol end:'Transport_zone'

   //=========================================================
   
   //Edge symbol: 'compute_comp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("compute_comp");
   //Edge symbol end:'compute_comp'

   //=========================================================
   
   //Edge symbol: 'close'
   (function(symbolName) {   
   
   })("close");
   //Edge symbol end:'close'

   //=========================================================
   
   //Edge symbol: 'manage_detail'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_M}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B1");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("manage_detail");
   //Edge symbol end:'manage_detail'

   //=========================================================
   
   //Edge symbol: 'edge_detail'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_E}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B2");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("edge_detail");
   //Edge symbol end:'edge_detail'

   //=========================================================
   
   //Edge symbol: 'compute_Detail'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_C}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B3");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("compute_Detail");
   //Edge symbol end:'compute_Detail'

   //=========================================================
   
   //Edge symbol: 'storage_detail'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_S}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B4");
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("storage_detail");
   //Edge symbol end:'storage_detail'

   //=========================================================
   
   //Edge symbol: 'transportzone_details'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_CT}", "click", function(sym, e) {
         sym.getComposition().getStage().playReverse("B5");
         
         sym.getSymbol("white").stop(0);
         sym.getSymbol("blue").stop(0);
         sym.getSymbol("yellow").stop(0);
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("white").play("go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("blue").play("go");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hotspot3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("yellow").play("go");

      });
      //Edge binding end

   })("transportzone_details");
   //Edge symbol end:'transportzone_details'

   //=========================================================
   
   //Edge symbol: 'data_one'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6378, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("data_one");
   //Edge symbol end:'data_one'

   //=========================================================
   
   //Edge symbol: 'data_two'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("data_two");
   //Edge symbol end:'data_two'

   //=========================================================
   
   //Edge symbol: 'dat_three'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19425, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("data_three");
   //Edge symbol end:'data_three'

   //=========================================================
   
   //Edge symbol: 'hotspot1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3010, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("hotspot3");
   //Edge symbol end:'hotspot3'

   //=========================================================
   
   //Edge symbol: 'hotspot1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3016, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("hotspot2");
   //Edge symbol end:'hotspot2'

   //=========================================================
   
   //Edge symbol: 'hotspot2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3015, function(sym, e) {
         // insert code here
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      })("hotspot1");
   //Edge symbol end:'hotspot1'

   //=========================================================
   
   //Edge symbol: 'white'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4652, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("white");
   //Edge symbol end:'white'

   //=========================================================
   
   //Edge symbol: 'blue'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("blue");
   //Edge symbol end:'blue'

   //=========================================================
   
   //Edge symbol: 'yellow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11325, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("yellow");
   //Edge symbol end:'yellow'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-786634510");