({
    handleClick: function(component,event,helper){        	
        	var buttMessage =event.getSource().get("v.label");
            component.set("v.message",buttMessage);     	   
    }	
})