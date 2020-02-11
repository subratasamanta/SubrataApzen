trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    
    
List<BatchLeadConvertErrors__c> batchconverterrors= new List<BatchLeadConvertErrors__c>();
    
    for(BatchApexErrorEvent event: trigger.new){
        
        BatchLeadConvertErrors__c  eventerrors= new BatchLeadConvertErrors__c ();
        
        eventerrors.AsyncApexJobId__c= event.AsyncApexJobId;
        eventerrors.Records__c=event.JobScope;
        eventerrors.StackTrace__c=event.StackTrace;     
        batchconverterrors.add(eventerrors);    
    }
    
    if(batchconverterrors.size()>0){
        
        insert batchconverterrors;
    }
}