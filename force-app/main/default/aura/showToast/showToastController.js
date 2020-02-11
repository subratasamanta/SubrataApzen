({
	showToast : function(component, event, helper) {
        debugger;
    var toastEvent = $A.get("e.force:showToast");
        var withBreaks = "1Hello World."+"\n"+" 2My name is Jennifer." +"\n"+" 3What is your name?";
        component.set("v.yourString",withBreaks);
    toastEvent.setParams({
        "title": "Success!",
        "mode":"sticky",
        "message": unescape(component.get("v.yourString"))
    });
    toastEvent.fire();
}
})