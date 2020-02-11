public class SubscriberecordCtr {
    @Auraenabled
    public static void subscribeRec(String recordId){
        EntitySubscription entitySubscription = new EntitySubscription();
        entitySubscription.ParentId = Id.valueOf(recordId);
        entitySubscription.NetworkId = Network.getNetworkId();
      	entitySubscription.SubscriberId = UserInfo.getUserId();
        insert entitySubscription;
    }
}