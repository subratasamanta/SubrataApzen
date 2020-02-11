trigger AccountTrigger on Account (before delete, before insert, before update,after delete, after insert, after update,after undelete)
{
    
    TriggerFactory.createTriggerDispatcher(Account.sObjectType);
    
}