public class Listattachments {
@AuraEnabled
      public static List <ContentDocument> getAttachments() {
        return [SELECT Id, Title, OwnerId FROM ContentDocument WHERE OwnerId =: UserInfo.getUserId()];
      }
}