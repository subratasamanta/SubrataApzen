({
      // Fetch the attachments from the Apex controller
      getAttachmentList: function(component) {
        var action = component.get('c.getAttachments');
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
         component.set('v.attachments', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
          var relatedListEvent = $A.get("e.force:navigateToRelatedList");
       relatedListEvent.setParams({
          "relatedListId": "Notes",
          "parentRecordId": "0010I00002MDBGJQA5"
       });
       relatedListEvent.fire();
      }
        
    })