({
	myAction : function(component, event, helper) {
		
	},
    checkErrors : function(component, event, helper){
    
        var message=$A.get("$Label.c.CriteriaValidation");
        var sourceID=event.getSource().getLocalId();
        var val=component.find(sourceID).get("v.value");
        if(!$A.util.isUndefinedOrNull(val)&& !$A.util.isEmpty(val)){
            component.find(sourceID).set("v.errors",null);
        }else{
            component.find(sourceID).set("v.errors",[{message : message}]);
        }
    },
    validateEmail:function(component, event, helper){
       var acc=component.get("v.portalAccRec");
       var email=acc['Email_address__c'];
       var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
        console.log("type::"+re.test(email));
        if(re.test(email)){
        	   	var sourceID=event.getSource().getLocalId();
        		var val=component.find(sourceID).get("v.value");
        		if(!$A.util.isUndefinedOrNull(val)){
            		component.find(sourceID).set("v.errors",null);
        		}
        }else{
            component.find("emailId").set("v.errors", [{message: "Please enter a valid email."}]);
         
        }
       
    },
    checkCodeErrors:function(component, event, helper){
       var pcode=component.get("v.postalCode");
       var addr=component.get("v.accountAddress");
       var addr_list=component.get("v.accountAddresses");
       var addr_list_veeva=component.get("v.accountAddresses_veeva");
       var message=$A.get("$Label.c.CriteriaValidation");
        console.log("type::"+isNaN(pcode));
        if(!isNaN(pcode)){
        	   	var sourceID=event.getSource().getLocalId();
        		var val=component.find(sourceID).get("v.value");
        		if(!$A.util.isUndefinedOrNull(val)&& !$A.util.isEmpty(val)){
            		component.find(sourceID).set("v.errors",null);
                }else{
                    component.find(sourceID).set("v.errors",[{message : message }]);
                }
            if(addr!=undefined && addr!=null){
                addr['Postal_Code__c']=val;
            }
            if(addr_list!=undefined && addr_list!=null){
               
               component.set("v.accountAddresses",null); 
            }if(addr_list_veeva!=undefined && addr_list_veeva!=null){
               
                component.get("v.accountAddresses_veeva",null);
            }
        }else{
           component.find("pcodeId").set("v.errors", [{message: "Please enter a valid postcode"}]);  
         
        }
       
    }
})