@RestResource(urlmapping = '/portal/*')
    Global with sharing Class PortalService{
    @Httppost
    global static string create_portal(string name){
        Contact con = new Contact();
        con.LastName = name;
        insert con;
        string s =UserInfo.getSessionId(); 
        return con.id;
    
    }
}