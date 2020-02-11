public class AuthClass{

      /*End point Url to web service callout*/
    private final static String ENP_POINT_URL = 'https://login.salesforce.com/services/oauth2/token';
    private final static String REQUEST_BODY = 'grant_type=password&client_id={0}&client_secret={1}&username={2}&password={3}';
    private final static String USERNAME = 'subrata@apzen.com';
    private final static String PASSWORD = 'lxxe7857';
    private final static String CONSUMER_KEY = '3MVG9ZL0ppGP5UrCeAgQFhnVF._bvR7L7j86yEiD2am5YgbOIjubMoyl5eaV.Xhwk8_dHWLij0ATgqv8lhpzc';
    private final static String CONSUMER_SECRET = '5808027200724128865';
    
    /*To generate Access token Method*/
    public static OAuth getAccessToken(){
        try{
            HttpRequest req = new HttpRequest();
            req.setEndpoint(ENP_POINT_URL);
            req.setMethod('POST');          
            Blob headerValue = Blob.valueOf(USERNAME + ':' + PASSWORD);
            String authorizationHeader = 'BASIC ' +
            EncodingUtil.base64Encode(headerValue);
            req.setHeader('Authorization', authorizationHeader); 
            req.setBody(String.format(REQUEST_BODY ,new string[]{CONSUMER_KEY,CONSUMER_SECRET,
                                                                 USERNAME,PASSWORD}));
            req.setTimeout(60000);
            //system.debug('----req---'+req.getBody());
            Http http = new Http();
            HttpResponse res = http.send(req);
            //system.debug('----res---'+res.getBody());
            OAuth objAuthenticationInfo = (OAuth)JSON.deserialize(res.getbody(), OAuth.class);
            system.debug('----res---'+objAuthenticationInfo);
           // System.debug(UserInfo.getOrganizationId().substring(0, 15) + ' ' + objAuthenticationInfo.access_token.substring(15));
            return objAuthenticationInfo;
        }catch(CallOutException ce){
            throw ce;
        }
       
    }
    
   
    /*To get aouthentication detail Wrapper*/
    public class OAuth{
        public String id{get;set;}
        public String issued_at{get;set;}
        public String instance_url{get;set;}
        public String signature{get;set;}
        public String access_token{get;set;}    
    }   
}