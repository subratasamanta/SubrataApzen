({
    doInit : function(component, event, helper) {
        helper.getListItem(component);
    },
    doClickCreateRecordBtn : function(component, event, helper) {
        alert('js'+component); 
        helper.createRecord(component,event, helper);
    },
    createClient : function(component, event, helper){
        console.log('xyz');
    }
})