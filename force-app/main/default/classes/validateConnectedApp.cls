public class validateConnectedApp{
   

    public String clientId = '3MVG9Y6d_Btp4xp4AD1.iJ7MwrM6TM2nhV4ViZ3k14R740_r_IAj3w76Y_AmbxA92t6GaN_Ztjk9M6YCZgBLb';
    public String clientSecret = '6336785264883522108';
    public String username='subrata@force.com';
    public String password='adtpb3394a';
    public String endPointURl ='https://cloudexpert-dev-ed.my.salesforce.com/services/oauth2/token'; // End point url to get the token
    
    public String reqbody = 'grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;
    
    
    public String jsonstr ='{"name" : "Optimize1"}';
    //public String destinationUrl ='';

    
    public validateConnectedApp(){
    }
    
    public void invokeMyConnectApp(){
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint(endPointURl);    
        
        HttpResponse res = h.send(req);
        System.debug('RESPONSE===> '+res.getbody());
        
        OAuth2 objAuthenticationInfo = (OAuth2)JSON.deserialize(res.getbody(), OAuth2.class);            
        System.debug('===>'+objAuthenticationInfo.access_token+'$$$$');
        if(objAuthenticationInfo.access_token!=null){
            Http h1 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer '+objAuthenticationInfo.access_token);
            req1.setHeader('Content-Type','application/json');
            req1.setHeader('accept','application/json');

            req1.setBody(jsonstr);
            
            req1.setMethod('POST');
            req1.setEndpoint('https://cloudexpert-dev-ed.my.salesforce.com/services/apexrest/portal/');
            //HttpResponse res1 = h1.send(req1);
            //system.debug('RESPONSE_BODY -------> '+res1 .getbody());
        }
        
    }
    
    public class OAuth2{
        public String id{get;set;}
        public String issued_at{get;set;}
        public String instance_url{get;set;}
        public String signature{get;set;}
        public String access_token{get;set;}    
    }
}