public class AccountAfterUpdateTriggerHandler extends TriggerHandlerBase {
    public override void mainEntry(TriggerParameters tp) {
         System.debug('$$$$$$$$$$$$$$$$$$AccountAfterUpdateTriggerHandler '); 
        process((List<Account>)tp.newList);
    }
    
    private void process(List<Account> listNewAccounts) {
        System.debug('$$$$$$$$$$$$$$$$$$AccountAfterUpdateTriggerHandler ');
        for(Account acct : listNewAccounts) {
            Account newAccount = new Account();
            newAccount.Id = acct.Id;
            newAccount.Website = 'www.salesforce.com';
            sObjectsToUpdate.put(newAccount.Id, newAccount);
        }
    }
    
    public override void inProgressEntry(TriggerParameters tp) {
        System.debug('$$$$$$$$$$$$$$$$$$AccountAfterUpdateTriggerHandler ');
        System.debug('This is an example for reentrant code...');
    }
    
    public override void updateObjects() {
        System.debug('$$$$$$$$$$$$$$$$$$AccountAfterUpdateTriggerHandler ');
        // for demonstration purposes, don't do anything here...
    }
}