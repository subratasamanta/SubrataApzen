public class ContactAndLeadSearch {
    
    public static List<List<sObject>> searchContactsAndLeads(String lastName) {
        
        List<List<sObject>> searchList = [FIND :lastName IN NAME FIELDS 
                   RETURNING Contact(Name),Lead(FirstName)];
        System.debug(searchList);
        
        return searchList;
        
      }
}