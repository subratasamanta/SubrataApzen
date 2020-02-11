({
   Calculate : function(component, event, helper) {
      var a = component.find("n1").get("v.value");
      var b = component.find("n2").get("v.value");
      var res = parseInt(a) + parseInt(b);
      res = res + '';
      var evt = $A.get("e.c:NavigateToC2");
      evt.setParams({ "result": res});
      evt.fire();
   }
})