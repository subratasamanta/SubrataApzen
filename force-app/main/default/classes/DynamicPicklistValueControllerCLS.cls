public class DynamicPicklistValueControllerCLS{ 


    public List<SelectOption> objList{get;set;}
    public List<SelectOption> pickFieldList{get;set;}
    public string selectedObject{get;set;}
    public string selectedObjectAPI{get;set;}
    public string selectedPicklistAPI{get;set;}
    public string newpickVal{get;set;}
    public Map<String,String> lableValueMap{get;set;}
    public Map<String,String> recordTypeMap{get;set;}
    public List<SelectOption> selections{ get; set; }
    public List<SelectOption> options{ get; set; }
    public List<wrapperClS> listWrapCLS{get;set;}


    public DynamicPicklistValueControllerCLS(){
        objList = new List<SelectOption>();
        objList.add(new SelectOption('','--None--'));
        List<Schema.SObjectType> gd = Schema.getGlobalDescribe().Values();  
        for(Schema.SObjectType f : gd){
             String name = f.getDescribe().getName();
             
             if (!f.getDescribe().isCustomSetting() && f.getDescribe().getRecordTypeInfos().size() > 0 && f.getDescribe().isCreateable() &&
                !name.containsignorecase('history') && !name.containsignorecase('tag') && !name.containsignorecase('share') && !name.containsignorecase('feed')) {   
                     objList.add(new SelectOption(f.getDescribe().getLabel()+' ('+f.getDescribe().getName()+')',f.getDescribe().getLabel()+'('+f.getDescribe().getName()+')'));
             }
             
        }
        objList.sort();
    }
    
    
    public String getPicklistFields() {
        selectedObjectAPI = selectedObject.substringBetween('(',')');
        pickFieldList = new List<SelectOption>();
        pickFieldList.add(new SelectOption('','--None--'));
        
        lableValueMap = new Map<String,String>();
        recordTypeMap = new Map<String,String>();
            
        Map <String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        List<String> entities = new List<String>(schemaMap.keySet());
        Map <String, Schema.SObjectField> fieldMap = schemaMap.get(selectedObjectAPI).getDescribe().fields.getMap();
            
        for(Schema.SObjectField sfield : fieldMap.Values()){
            schema.describefieldresult dfield = sfield.getDescribe();
            if(dfield.getType() == Schema.DisplayType.PICKLIST){
                pickFieldList.add(new SelectOption(dfield.getName(),dfield.getName()));
                lableValueMap.put(String.Valueof(dfield.getName()),String.Valueof(dfield.getLabel()));
            }                        
        }
        recordTypeMap = getRecordType(selectedObjectAPI);        
        
        return null;
    }
    
    
    public PageReference UpdatePicklistField(){
    
        MetadataService.MetadataPort service = createService(); // open metadata service
        /*----Prepare the picklist values for applicable picklist---->*/
        String[] recordTypeNames = new String[]{}; // get your list of record types either through a query or a describe call and put them into a list 
        for(wrapperClS echElement :listWrapCLS){
            if(echElement.checked){
                recordTypeNames.add('Account.'+recordTypeMap.get(echElement.recordTypeName));
            }
        }
        
        // Get the record type from the API
        Map<String,Set<String>> recTypeMap = new Map<String,Set<String>>();
        Set<String> picklistValSet = new Set<String>();
        picklistValSet.add(newpickVal);
        MetadataService.Metadata[] mdRecordTypes = service.readMetadata('RecordType', recordTypeNames).getRecords();  
        System.debug('^^^^^^^'+mdRecordTypes);          
        MetadataService.RecordType[] recordTypes = (MetadataService.RecordType[]) mdRecordTypes;
        System.debug('1111111'+mdRecordTypes);       
        for(MetadataService.RecordType eachMetadat : recordTypes){
            System.debug(eachMetadat.picklistValues+'=====>'+eachMetadat.fullName);
            for ( MetadataService.RecordTypePicklistValue rpk : eachMetadat.picklistValues ) {
                if ( selectedPicklistAPI == rpk.picklist ) {
                    System.debug('**************************'+rpk);
                    for ( MetadataService.PicklistValue pk : rpk.values ) {
                        System.debug('*******'+pk.fullName ); 
                        picklistValSet.add(pk.fullName);
                    }    
                }
            }
        }
        /*----Prepare the picklist values for applicable picklist------END---->*/
        
        /*---PIcklist entry for field------>*/        
        MetadataService.CustomField customField = new MetadataService.CustomField();
        customField.fullName = selectedObjectAPI+'.'+selectedPicklistAPI;
        customField.label = lableValueMap.get(selectedPicklistAPI);
        customField.type_x = 'Picklist';
        
        metadataservice.Picklist pt = new metadataservice.Picklist();
        pt.sorted= false;
        pt.controllingField ='State__c';
        
        List<String> listStr = new List<String>();
        listStr.add('Karnataka');
        
        List<metadataservice.PicklistValue> picklistValList = new List<metadataservice.PicklistValue>();
        for(String eachPickVal : picklistValSet ){
            metadataservice.PicklistValue two = new metadataservice.PicklistValue();
            two.fullName= eachPickVal;
            two.controllingFieldValues = listStr ;
            two.default_x=false;
            picklistValList.add(two);
        }
        
        pt.picklistValues = picklistValList;
        customField.picklist = pt ;
        
        List<MetadataService.SaveResult> results =  service.updateMetadata( new MetadataService.Metadata[] { customField });        
        /*---Picklist entry for field  ----END ------>*/
        
        /*---Picklist entry for record type------>*/
        if(results[0].success){
            MetadataService.PickListValue[] pickVals = customField.picklist.picklistValues;           
                
            // initialize the list of record type picklist values
            MetadataService.RecordTypePicklistValue[] rtPickValues = new MetadataService.RecordTypePicklistValue[]{};
            
            MetadataService.RecordTypePicklistValue rtPickValue = new MetadataService.RecordTypePicklistValue();            
            // Create the recordtypepicklist and add it to the list of picklist fields for the record type
            rtPickValue.picklist = selectedPicklistAPI;
            rtPickValue.values = pickVals;
            rtPickValues.add(rtPickValue);
            // loop through the record types and set the picklist values
            for(MetadataService.RecordType RT : recordTypes){
                RT.PicklistValues = rtPickValues;
            }

            // Update the record type
            service.updateMetadata(mdRecordTypes);
            
            /*---Picklist entry for record type----END------>*/               
        }
        
        String message = handleSaveResults(results[0]);        
        ApexPages.AddMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM,message));       
        return null;  
    }
    
    
    public MetadataService.MetadataPort createService(){
        MetadataService.MetadataPort service = new MetadataService.MetadataPort();
        service.SessionHeader = new MetadataService.SessionHeader_element();
        service.SessionHeader.sessionId = UserInfo.getSessionId();
        return service;    
    }
    
    
    /**
     * Example helper method to interpret a SaveResult, throws an exception if errors are found
     **/
    public static String handleSaveResults(MetadataService.SaveResult saveResult){
        // Nothing to see?
        if(saveResult==null || saveResult.success)
            return 'Saved successfully';
        // Construct error message and throw an exception
        if(saveResult.errors!=null){
            List<String> messages = new List<String>();
            messages.add(
                (saveResult.errors.size()==1 ? 'Error ' : 'Errors ') +
                    'occured processing component ' + saveResult.fullName + '.');
            for(MetadataService.Error error : saveResult.errors)
                messages.add(
                    error.message + ' (' + error.statusCode + ').' +
                    ( error.fields!=null && error.fields.size()>0 ?
                        ' Fields ' + String.join(error.fields, ',') + '.' : '' ) );
            if(messages.size()>0)
                throw new MetadataServiceExamplesException(String.join(messages, ' '));
        }
        if(!saveResult.success){
            throw new MetadataServiceExamplesException('Request failed with no specified error.');
        }
        return 'Error';
    }
     
     
    public class MetadataServiceExamplesException extends Exception { }
    
    
    public Map<String,String> getRecordType(String objectApi){
        Map<String,String> recTypeMap = new Map<String,String>();
        listWrapCLS = new List<wrapperClS>();
        //options = new List<SelectOption>();
        for(recordtype eachRecType :[Select recordtype.Name,DeveloperName from recordtype where sobjectType=:objectApi]){
            wrapperClS wc = new wrapperClS();
            wc.recordTypeName = eachRecType.Name;
            wc.checked = false;
            listWrapCLS.add(wc);
            recTypeMap.put(eachRecType.Name,eachRecType.DeveloperName);
            //options.add(new SelectOption(eachRecType.Name,eachRecType.DeveloperName));
        }        
        return recTypeMap;
    }
    
    
    public class wrapperClS{
        public String recordTypeName{get;set;}
        public boolean checked{get;set;}
    }
  
}