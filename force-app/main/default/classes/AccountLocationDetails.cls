public with sharing class AccountLocationDetails {

    //Called from lwc component to get geolocation list within the provided distance of current record    
    //rad is used to take length of radius in km. We can also get in miles    
    //accId is for current account id
    @AuraEnabled(cacheable=true)
    public static List<Location> getAccount(integer rad,String accId){
        List<Location> listLoc = new List<Location>();  
              
        // to get the current record's address geolocation 
        AccountLocationDetails.GeoLocation accLoc = AccountLocationDetails.getcurrentAccountGioLoc(accId);
        Double latVal = accLoc.Latitude;
        Double longVal = accLoc.Longitude;
        
        
        // get all the mathched location list of provided distance
        List<Account> acc =[SELECT Name,Office_Address__c,Office_Address__latitude__s, Office_Address__longitude__s FROM Account WHERE DISTANCE(Office_Address__c, GEOLOCATION(:latVal,:longVal), 'km') <: rad ORDER BY DISTANCE(Office_Address__c, GEOLOCATION(:latVal,:longVal), 'km')LIMIT 30];
        for(Account a : acc){
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

    // get current accounts geolocation from "Office_Address__c" custom field of geolocation type. 
    public static GeoLocation getcurrentAccountGioLoc(String accId){
        Account currenrRec = [SELECT Office_Address__c,Office_Address__latitude__s,Office_Address__longitude__s from Account WHERE id=:accId];
        GeoLocation currentGeo = new GeoLocation();
        currentGeo.Latitude = currenrRec.Office_Address__latitude__s;
        currentGeo.Longitude = currenrRec.Office_Address__longitude__s;
        return currentGeo;
    } 
    
    // Wrapper class for geolocation
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
}