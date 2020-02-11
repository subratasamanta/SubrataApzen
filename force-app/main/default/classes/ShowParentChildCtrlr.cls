public with sharing class ShowParentChildCtrlr {
    @AuraEnabled(cacheable=true)
    public static Map<String,List<String>> getDetails(List<String> objectAPList){
        Map<String,List<String>> objectListMap = new Map<String,List<String>>();
        Schema.DescribeSobjectResult[] results = Schema.describeSObjects(objectAPList);
        for(Schema.DescribeSobjectResult res : results) {
            List<String> listSobj = new List<String>();
            Schema.ChildRelationship[] rels = res.getChildRelationships();
            for (Schema.ChildRelationship cr: rels) {
                listSobj.add(String.valueOf(cr.getChildSObject()));
            }
            List<String> listSobjNew = new List<String>(new Set<String>(listSobj));
            objectListMap.put(res.getLabel(), listSobjNew);
            System.System.debug('AAAAA'+objectListMap);
        }
        System.System.debug('BBB'+objectListMap);
        return objectListMap;    
    }
}