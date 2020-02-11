({
	createRecord : function(component) {
		var createRecordEvent = $A.get("e.force:createRecord");
    	createRecordEvent.setParams({
        "entityApiName": "Contact"
    });
    createRecordEvent.fire();
	}
})