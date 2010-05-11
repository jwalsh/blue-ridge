(function(){
   this.version = "1";
   this.__defineGetter__("exit", function(){ java.lang.System.exit(0); });
   this.__defineGetter__("quit", function(){ java.lang.System.exit(0); });
   
   print("=================================================");
   print(" Rhino JavaScript Shell v" + version);
   print(" To exit type 'exit', 'quit', or 'quit()'.");
   print("=================================================");

   var plugin_prefix = environment["blue.ridge.prefix"] || java.lang.System.getenv("BLUE_RIDGE_PREFIX") || ".";

   load(plugin_prefix + "/vendor/env.rhino.js");
   print(" Loaded env.js " + Envjs.version);

   window.location = plugin_prefix + "/generators/blue_ridge/templates/application.html";
   print(" Loaded DOM " + window.location.href);

   load(plugin_prefix + "/vendor/jquery-1.4.2.js");
   print(" Loaded jQuery " + jQuery.prototype.jquery);
   
   load(plugin_prefix + "/vendor/jquery.print.js");


   print("=================================================");
 })();
