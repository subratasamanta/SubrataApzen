({
    
    loadDataToCalendar :function(data,component,param1,event,taskarray){ 
        //debugger;
		 console.log('task array : '+ JSON.stringify(taskarray));
		
        //alert('Data-->'+data.title);
        var paramvalueget=param1;
        component.set("v.parameter",paramvalueget);
        
        //var d = new Date();
        //d.setTime(d.getTime() + (365*24*60*60*1000));
    	//var expires = "expires="+ d.toUTCString();
    	//document.cookie = 'Testing' + "=" + param1 + ";" + expires + ";path=/";
        //document.cookie = 'Testing' + "=" + param1 + ";" + ";path=/";
        
        calendarDayColorCodeMap["Testing"] = param1;
        console.log('calendarDayColorCodeMap Initial : '+ JSON.stringify(calendarDayColorCodeMap));
     	//alert('Test--->'+component.get("v.parameter"));
        var userlang = $A.get("$Locale.language");
        console.log('Test--->'+userlang);
        //calendarDayColorCodeMap["Task"] = taskarray;
        //console.log('calendarDayColorCodeMap Initial load : '+ JSON.stringify(calendarDayColorCodeMap));
    	$('#calendar').fullCalendar({
          	//alert('Data aaya-->'+component.get("v.parameter"));
            locale: userlang,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            }, 	
            viewRender: $A.getCallback(function( view, element ){
                //debugger;
                //alert('inside viewRender');
                //
               //$.each(listOfAvaObjects, function ( index, dateElem ) {
                	//$("td[data-date='"+index+"']").filter(".fc-widget-content").addClass('greyDiv');
            	//});
            	for(var i in taskarray)
                {
              var busy = taskarray[i].busy;
              var taskdate = taskarray[i].taskdate;
		       
		     if(busy==true)
		       {
	          $("td[data-date='"+taskdate+"']").filter(".fc-widget-content").addClass('busy');

		           }
		            else
		          {
			 $("td[data-date='"+taskdate+"']").filter(".fc-widget-content").addClass('notbusy');
		        }
               }
                
                
               $.each(calendarDayColorCodeMap, function ( index, dateElem ) {
                    
                    console.log('dateElem = '+ dateElem);
                    if( dateElem == "fc-cell-overlay"){
                        $("td[data-date='"+index+"']").filter(".fc-widget-content").addClass('fc-cell-overlay');
                    }
                     else if( dateElem == "NJClass" ){
                        $("td[data-date='"+index+"']").filter(".fc-widget-content").addClass('NJClass');
                    }
                      else if( dateElem == "NJPEGClass"){
                        $("td[data-date='"+index+"']").filter(".fc-widget-content").addClass('NJPEGClass');
                    }
             

                    
                });
                
            }),
         
            //alert('Data aaya-->'+component.get("v.parameter"));
             dayClick: $A.getCallback(function(date, jsEvent, view) {
              
           }),
            
            editable: true,
           
             events:data,
          
               eventClick: function(event,jsEvent, view) {
                   //debugger;
                   //alert(event.url);
                   console.log('event url:'+event.url);
                   console.log('event starttime:'+event.StartDateTime);
                   //component.find("expdate1").set("v.selecteddate",event.StartDateTime);
                    alert('test'+view.name);
                   //component.set()
                    },
                eventMouseover: function(event, jsEvent, view) {
       
                    $(jsEvent.target).attr('title', event.title);
        
                          }
              //alert('Hello'+paramvalueget);
            //this.eventhandlercall(component,event); 
        });
        
       // $('.fc-today-button').text('hoy');
	   
	  component.set('v.selecteddate', component.get('v.selecteddate'));
        $('.fc-today-button').hide();
        $('.fc-month-button').hide();
        $('.fc-basicWeek-button').hide();
          $('.fc-basicDay-button').hide();
        
       
            
             
        
       
        //alert('Hello-->'+component.get("v.param1"));
		//this.eventhandlercall(component,event);
        
    }, 
 
   
    
    tranformToFullCalendarFormat : function(component,events) {
           console.log('eventArr length-->'+events.length);
        var eventArr = [];
        /*
        for(var i = 0;i < events.length;i++){
            eventArr.push({
                'id':events[i].Id,
                'start':events[i].ActivityDate,
                
                'title':events[i].Subject
                 
                //'url':'/PatientPortal/s/event/'+events[i].Id
                
            });
        }*/
     
        return eventArr;
    },
  
    
    fetchEvents : function(component,param1,event) {
        var action = component.get("c.getTasks1"); 
        var self = this;
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                var eventArr = self.tranformToFullCalendarFormat(component,response.getReturnValue());
                console.log('eventArr--->'+eventArr);
                console.log('eventArr length fetch--->'+eventArr.length);
                if(eventArr.length >= 0)
                {
                self.loadDataToCalendar(eventArr,component,param1,event,response.getReturnValue());
                component.set("v.Tasks",eventArr);
                }
            }
        });

        $A.enqueueAction(action); 
    }
    
    
    
})