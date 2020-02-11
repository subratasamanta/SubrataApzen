({
    clickCreateExpense: function(component, event, helper) {
    if(helper.validateExpenseForm(component)){
        // Create the new expense
        var newExpense = component.get("v.newExpense");
        helper.createExpense(component, newExpense);
    }
},
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
    debugger;    
	alert('===='+$Api.c.Session_ID);
    // Create the action
    var action = component.get("c.getExpenses");

    // Add callback behavior for when response is received
    action.setCallback(this, function(response) {
        var state = response.getState();
        console.log('XXXXXXXX'+response.getReturnValue());
        if (component.isValid() && state === "SUCCESS") {
            component.set("v.expenses", response.getReturnValue());
        }
        else {
            console.log("Failed with state: " + state);
        }
    });

    // Send action off to be executed
    $A.enqueueAction(action);
},
})