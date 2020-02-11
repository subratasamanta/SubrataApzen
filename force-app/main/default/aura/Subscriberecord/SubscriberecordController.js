({
	handleClick : function(component, event, helper) {
		var action = component.get('c.subscribeRec');        
        action.setParams({
            "recordId" : component.get('v.recordId') 
        });
        action.setCallback(this, function(a){
            var state = a.getState(); 
            if(state == 'SUCCESS') {
                alert('Shared for subscribe');
            }
        });
        $A.enqueueAction(action);
	}
})