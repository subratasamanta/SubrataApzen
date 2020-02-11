({
	doInit : function(component, event, helper) {
        debugger;
		/*var action = component.get("c.reportControllerdetails");
		action.setCallback(this, function(res){
            //var reportResponseObj = JSON.parse(res.getReturnValue()); 
            component.set("v.listHeader", res.getReturnValue().listOfDetailFld);
            component.set("v.listOfRows", res.getReturnValue().listOFRows);            
            helper.doughnutData(component,event,component.get("v.listOfRows"));
            if(action.getState() ==='SUCCESS'){
             
            }else{
               
            }
        });
         $A.enqueueAction(action);*/
	},
    scriptsLoaded : function(component, event, helper) {
		var action = component.get("c.reportControllerdetails");
		action.setCallback(this, function(res){
            //var reportResponseObj = JSON.parse(res.getReturnValue()); 
            component.set("v.listHeader", res.getReturnValue().listOfDetailFld);
            component.set("v.listOfRows", res.getReturnValue().listOFRows);            
            helper.doughnutData(component,event,component.get("v.listOfRows"));
            if(action.getState() ==='SUCCESS'){
            	helper.showdoughnut(component, event, helper) 
            }else{
               
            }
        });
         $A.enqueueAction(action);
	
	}
})