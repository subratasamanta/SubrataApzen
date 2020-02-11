({
    clickReimbursed: function(component, event, helper) {
        var expense = component.get("v.expense");
        var updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        updateEvent.fire();
    },
    handleUpdateExpense: function(component, event, helper) {
    var updatedExp = event.getParam("expense");
    helper.updateExpense(component, updatedExp);
}
})