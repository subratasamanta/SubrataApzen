public with sharing class AccountLocation {
    public AccountLocation() {

    }
    @AuraEnabled
    public static picklistClass preparePicklist(){
        picklistClass pickCls = new picklistClass();
        List<String> lsiofSTate = new List<String>();
        List<String> pincodeList1 = new List<String>();
        List<String> pincodeList2 = new List<String>();
        Map<String,List<String>> stateMap = new Map<String,List<String>>();

        lsiofSTate.add('Alabama');
        pincodeList1.add('36008');
        pincodeList1.add('36749');
        stateMap.put('Alabama',pincodeList1);

        lsiofSTate.add('Alaska');        
        pincodeList2.add('99744');
        pincodeList2.add('99729');
        stateMap.put('Alaska',pincodeList2);

        pickCls.stateList = lsiofSTate;
        pickCls.statePinMap = stateMap;

        return pickCls;
    }
    @AuraEnabled(cacheable=true)
    public static List<Location> getAccount(integer rad){
        List<Location> listLoc = new List<Location>();
        // location are hard coded 
        List<Account> acc =[SELECT Name,Office_Address__c,Office_Address__latitude__s, Office_Address__longitude__s FROM Account WHERE DISTANCE(Office_Address__c, GEOLOCATION(22.4768,88.34655), 'km') <: rad ORDER BY DISTANCE(Office_Address__c, GEOLOCATION(22.4768,88.34655), 'km')LIMIT 30];
        //Location loc1 = Location.newInstance(22.4768,88.34655);
        for(Account a : acc){
            //System.debug(a.Name+'==>'+Location.getDistance(loc1, a.Office_Address__c, 'km'));
            GeoLocation eachGio = new GeoLocation();
            eachGio.Latitude = a.Office_Address__latitude__s;
            eachGio.Longitude = a.Office_Address__longitude__s;

            Location eachLoc = new Location();
            eachLoc.icon = 'standard:account';
            eachLoc.title = a.Name;
            eachLoc.location =eachGio; 
            listLoc.add(eachLoc);
        }
        return listLoc;
    }
    @AuraEnabled(cacheable = true)
    public static List<Location> getAccountryByLoc(string fieldtype,string fieldvalue){
        List<Location> listLoc = new List<Location>();
        List<Account> acc = new List<Account>();
        if(fieldtype == 'State'){
            acc =[SELECT Name,Office_Address__c,Office_Address__latitude__s, Office_Address__longitude__s FROM Account where BillingState =:fieldvalue];
        }
        if(fieldtype == 'Country'){
            acc =[SELECT Name,Office_Address__c,Office_Address__latitude__s, Office_Address__longitude__s FROM Account where BillingCountry =:fieldvalue];
        }
        //Location loc1 = Location.newInstance(22.4768,88.34655);
        for(Account a : acc){
            //System.debug(a.Name+'==>'+Location.getDistance(loc1, a.Office_Address__c, 'km'));
            GeoLocation eachGio = new GeoLocation();
            eachGio.Latitude = a.Office_Address__latitude__s;
            eachGio.Longitude = a.Office_Address__longitude__s;

            Location eachLoc = new Location();
            eachLoc.icon = 'standard:account';
            eachLoc.title = a.Name;
            eachLoc.location =eachGio; 
            listLoc.add(eachLoc);
        }
        return listLoc;
    }

    @AuraEnabled(cacheable = true)
    public static List<Location> getAccountryByZipcode(string state,string zipcode){
        List<Location> listLoc = new List<Location>();
        List<Account> acc = new List<Account>();
        acc =[SELECT Name,Office_Address__c,Office_Address__latitude__s, Office_Address__longitude__s FROM Account where BillingState =:state and BillingPostalCode =:zipcode];

        //Location loc1 = Location.newInstance(22.4768,88.34655);
        for(Account a : acc){
            //System.debug(a.Name+'==>'+Location.getDistance(loc1, a.Office_Address__c, 'km'));
            GeoLocation eachGio = new GeoLocation();
            eachGio.Latitude = a.Office_Address__latitude__s;
            eachGio.Longitude = a.Office_Address__longitude__s;

            Location eachLoc = new Location();
            eachLoc.icon = 'standard:account';
            eachLoc.title = a.Name;
            eachLoc.location =eachGio; 
            listLoc.add(eachLoc);
        }
        return listLoc;
    }
    public class Location{
        @AuraEnabled
        public String icon{get;set;}
        @AuraEnabled
        public String title{get;set;}
        @AuraEnabled
        public GeoLocation location{get;set;}
    }
    public class GeoLocation{
        @AuraEnabled
        public decimal Latitude{get;set;}
        @AuraEnabled
        public decimal Longitude{get;set;}
    }
    public class picklistClass{
        @AuraEnabled
        public Map<String,List<String>> statePinMap{get;set;}
        @AuraEnabled
        public List<String> stateList{get;set;}
    }

}