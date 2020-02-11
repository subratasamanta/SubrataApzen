({
    afterScriptsLoaded: function(cmp,evt,helper){
     //
     //debugger;
        //$(".datePicker-openIcon").hide();
    
       var url = window.location.href;
        var spliturl=url.split('?')[1];
        var id=spliturl.split('=')[1];
        var events = cmp.get("v.events");
	
        console.log('Community Calender Event is : '+events);
       
       if(!events.length)
        {
            helper.fetchEvents(cmp);
            //cmp.set('v.scriptloadedonce',true);
        }
        
        /*
         var tasks = cmp.get("v.Tasks");
        console.log('Community Calender Event is : '+tasks);
       
        helper.fetchTasks(cmp);
        document.getElementById("calendar").style.display = "none";
        document.getElementById("calendar1").style.display = "block";
        document.getElementById("calendar2").style.display = "none";
                
        var contacts = cmp.get("v.Contacts");
        console.log('Community Calender Event is : '+contacts);
       
        if(!contacts.length)
        {
            helper.fetchContacts(cmp);
        }*/
        
           var action = cmp.get("c.getCalendar");
        action.setParams({"idpassed" : id});

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
                 var resultfetched = response.getReturnValue();
                    for (var i = 0; i < resultfetched.length; i++) 
                    { 
                      cmp.set("v.selecteddate",resultfetched[i].Titration_Start_Date__c);
                      cmp.set("v.selecteddate1",resultfetched[i].NJ_Start_Date__c);
                     cmp.set("v.selecteddate2",resultfetched[i].PEG_J_Start_Date__c );
                    cmp.set("v.PortalRec.Titration_Start_Date_Confirmed__c",resultfetched[i].Titration_Start_Date_Confirmed__c);
                    cmp.set("v.PortalRec.NJ_Start_Date_Confirmed__c",resultfetched[i].NJ_Start_Date_Confirmed__c);
                     cmp.set("v.PortalRec.PEG_J_Start_Date_Confirmed__c",resultfetched[i].PEG_J_Start_Date_Confirmed__c);

                    }
               
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                        
                   
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
        
        
    },
    update: function(component, event, helper) {
         //debugger;
         event.preventDefault();
         var whichOne = event.getSource().getLocalId();                    
         
         if(whichOne=='Titration Check')
         {
           helper.fetchEvents(component,whichOne,event);
           component.set("v.Visible1",false);
             
         }
         else if(whichOne=='NJ Check')
         {
             
            helper.fetchEvents(component,whichOne,event);
           component.set("v.Visible1",false);
             
             
         }
             else if(whichOne=='NJ+PEGJ Check')
             {
               helper.fetchEvents(component,whichOne,event);
           component.set("v.Visible1",false);
             }
        
        },

 
    handleAppEventFired : function(component, event, helper) {
    //debugger;
     var buttonname = event.getParam("buttonid");
    if(buttonname !=null)
    {
    component.set("v.Buttonpressedname",buttonname);
    }
    console.log('buttonname -->'+component.get("v.Buttonpressedname"));
       helper.fetchEvents(component,buttonname,event); 

      },
      updatedate: function(component, event, helper)
    {
        //debugger;
         var url = window.location.href;
        var spliturl=url.split('?')[1]; //id=003O000001609dTIAQ&name=sandip-ghosh19aug118am
        
        var id=spliturl.split('=')[1];
       
        var action = component.get("c.UpdateCalendar");
        action.setParams({"idpassed" : id,"titration":component.get("v.selecteddate"),
                         "nj":component.get("v.selecteddate1"),"pegj":component.get("v.selecteddate2"),"conval":component.get("v.PortalRec")});

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
             //cmp.set("v.selecteddate",response.getReturnValue());
             var urlEvent = $A.get("e.force:navigateToURL");
                
    urlEvent.setParams({
      "url":$A.get("$Label.c.ABV_ANZ_RediretURI")+'contact/'+id+'/'+component.get("v.contactname")
      //"url": 'https://abvfsb-servicecloudtrial-155c0807bf-1584d39587b.cs6.force.com/DudopaHCPPortal/s/contact/' +id+'/'+component.get("v.contactname")
    });
    urlEvent.fire();
                
                var showToast = $A.get('e.force:showToast');

             //set the title and message params
               showToast.setParams(
            {
                 "title": "Success!",
                 "type": "success",
                 "message": " Record has been updated successfully."
            }
           );

        //fire the event
        showToast.fire();
                

            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                        var showToast = $A.get('e.force:showToast');

             //set the title and message params
               showToast.setParams(
            {
                 "title": "Error!",
                 "type": "error",
                 "message": " Record has been not being updated successfully."
            }
           );

        //fire the event
        showToast.fire();
                

                   
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
    },
      myAction : function(component, event) {
      
      }
	  
})