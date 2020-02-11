public with sharing class ObjectDetails {
    @AuraEnabled(cacheable=true)
    public static List<TableData> getAllObjDetails(){
        List<String> apiList = new List<String>();
        Map<String,String> apiLabelMap = new Map<String,String>();
        List<TableData> data = new List<TableData>();
        List<EntityDefinition> listEntitiy =[ SELECT Id, MasterLabel,DeveloperName, QualifiedApiName 
        FROM EntityDefinition WHERE IsApexTriggerable = true ORDER BY MasterLabel desc];
        for(EntityDefinition eachEntity : listEntitiy){
            apiList.add(eachEntity.QualifiedApiName);
            apiLabelMap.put(eachEntity.QualifiedApiName,eachEntity.MasterLabel);
        }
        JSON2Apex js = ObjectDetails.countRecords(apiList); 
        
        for(JSON2Apex.SObjects eachRow: js.sObjects){
            /*TableData eachTableRoe = new TableData();
            eachTableRoe.MasterLabel = apiLabelMap.get(eachRow.name);
            eachTableRoe.QualifiedApiName = eachRow.name;
            eachTableRoe.RecordCount = eachRow.count;
            eachTableRoe.RecordSize = eachRow.count * 2;*/
            data.add(new TableData(apiLabelMap.get(eachRow.name),eachRow.name,eachRow.count,eachRow.count * 2));
        } 
        data.sort();        
        return data;      
    }

    public static JSON2Apex countRecords(List<String> apiList){
        AuthClass.OAuth ref = AuthClass.getAccessToken();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://apzen-tech-dev-ed.my.salesforce.com/services/data/v40.0/limits/recordCount?sObjects=='+String.join(apiList,','));
        req.setHeader('Authorization', 'OAuth ' + ref.access_token );  
        req.setHeader('Content-Type', 'application/json');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);        
        System.debug(res.getBody());
        return JSON2Apex.parse(res.getBody());
    }
    
    public class TableData implements Comparable {
    @AuraEnabled 
    public String MasterLabel;
    @AuraEnabled
    public String QualifiedApiName;
    @AuraEnabled
    public integer RecordCount;
    @AuraEnabled
    public integer RecordSize;
 
        public TableData (String MasterLabel,String QualifiedApiName,integer RecordCount,integer RecordSize) {
            this.MasterLabel =MasterLabel;
            this.QualifiedApiName = QualifiedApiName;
            this.RecordCount =RecordCount;        
            this.RecordSize = RecordSize;
        }
     
        public Integer compareTo(Object objToCompare) {
            TableData  obj= (TableData)objToCompare;
            if (RecordSize== obj.RecordSize){
                return 0;
            }
            else if (RecordSize > obj.RecordSize){
                return -1;
            }
            else{
                return 1;        
            }
        }
    }         
}