global class LightningLoginFormControllerClone {

    public LightningLoginFormControllerClone() {
        
    } 
    
    @AuraEnabled
    public static String login(String username, String password, String startUrl) {
			String jsonstr ='{"Company" : "Optimize6"}';            
             Http h1 = new Http();
            HttpRequest req1 = new HttpRequest();
            //req1.setHeader('Authorization','Bearer '+UserInfo.getSessionId());
            req1.setHeader('Authorization','Bearer '+selfvalidateConnectedApp.invokeMyConnectApp());
            req1.setHeader('Content-Type','application/json');
            req1.setHeader('accept','application/json');

            req1.setBody(jsonstr);
            
            req1.setMethod('POST');
            req1.setEndpoint('https://apzen-tech-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Lead/00Q2800000SAM4f?_HttpMethod=PATCH');
            HttpResponse res1 = h1.send(req1);
System.debug('dddddd'+res1);
            return 'sdsds';
    /*try{           
                ApexPages.PageReference lgn = Site.login(username, password, startUrl);
                aura.redirect(lgn);
                return null;              
        } 
        catch (Exception ex) {
          
                return ex.getMessage();
               
        }*/
    }
    
    @AuraEnabled
    public static Boolean getIsUsernamePasswordEnabled() {
        Auth.AuthConfiguration authConfig = getAuthConfig();
        return authConfig.getUsernamePasswordEnabled();
    }

    @AuraEnabled
    public static Boolean getIsSelfRegistrationEnabled() {
        Auth.AuthConfiguration authConfig = getAuthConfig();
        return authConfig.getSelfRegistrationEnabled();
    }

    @AuraEnabled
    public static String getSelfRegistrationUrl() {
        Auth.AuthConfiguration authConfig = getAuthConfig();
        if (authConfig.getSelfRegistrationEnabled()) {
            return authConfig.getSelfRegistrationUrl();
        }
        return null;
    }

    @AuraEnabled
    public static String getForgotPasswordUrl() {
        Auth.AuthConfiguration authConfig = getAuthConfig();
        return authConfig.getForgotPasswordUrl();
    }
    
    private static Auth.AuthConfiguration getAuthConfig(){
        Id networkId = Network.getNetworkId();
        Auth.AuthConfiguration authConfig = new Auth.AuthConfiguration(networkId,'');
        return authConfig;
    }
    @AuraEnabled
    public static boolean hcpAvailableInVeeva() {
        
        
        return false;
        
    }
}