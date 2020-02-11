public class ABVANZRegistration {
    
    @AuraEnabled
   public static List<Contact> getCalendar(string idpassed)  {
   Contact getCont;
   List<Contact> contList=new List<contact>();
   try
   {
   system.debug('Id passed-->'+ idpassed);
      getCont= [select Accountid from contact where id= :idpassed LIMIT 1];
      contList.add(getCont);
      }
      catch(Exception ex)
      {
      system.debug('Line no-->'+ex.getlinenumber());
      system.debug('Msg---->'+ex.getmessage());
      }
      return contList;
      
   }
   @AuraEnabled
   public static void UpdateCalendar(string idpassed,Datetime titration,Datetime nj,Datetime pegj,contact conval) {    
      
   }
    @AuraEnabled
    public static contact getcontactname(string id){
    contact conname=[select id,Name from contact where id=: id];
    return conname;
    }
    

}