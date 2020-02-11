({
  doInit: function(component, event, helper){
        // Fetch the attachment list from the Apex controller
        helper.getAttachmentList(component);
      }  
})