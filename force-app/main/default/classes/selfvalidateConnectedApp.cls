public class selfvalidateConnectedApp{
   

   

    

    public static string invokeMyConnectApp(){
    
    String clientId = '3MVG9ZL0ppGP5UrCeAgQFhnVF._bvR7L7j86yEiD2am5YgbOIjubMoyl5eaV.Xhwk8_dHWLij0ATgqv8lhpzc';
    String clientSecret = '5808027200724128865';
    String username='subrata@apzen.com';
    String password='adtpb3394a';
    String endPointURl ='https://apzen-tech-dev-ed.my.salesforce.com/services/oauth2/token'; // End point url to get the token
    
    String reqbody = 'grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;
    
    
    String jsonstr ='{"name" : "Optimize1"}';
    //public String destinationUrl ='';
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint(endPointURl);    
        
        HttpResponse res = h.send(req);
        System.debug('RESPONSE===> '+res.getbody());
        
        OAuth2 objAuthenticationInfo = (OAuth2)JSON.deserialize(res.getbody(), OAuth2.class);            
        return objAuthenticationInfo.access_token;
       /* if(objAuthenticationInfo.access_token!=null){
            Http h1 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer '+objAuthenticationInfo.access_token);
            req1.setHeader('Content-Type','application/json');
            req1.setHeader('accept','application/json');

            req1.setBody(jsonstr);
            
            req1.setMethod('POST');
            req1.setEndpoint('https://cloudexpert-dev-ed.my.salesforce.com/services/apexrest/portal/');
            HttpResponse res1 = h1.send(req1);
            system.debug('RESPONSE_BODY -------> '+res1 .getbody());
        }*/
        
    }
    
    public class OAuth2{
        public String id{get;set;}
        public String issued_at{get;set;}
        public String instance_url{get;set;}
        public String signature{get;set;}
        public String access_token{get;set;}    
    }
}