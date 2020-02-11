global class soapClass{
    webservice static string createContact(String lastname){
        Contact con = new Contact();
        con.lastName = lastname;
        insert con;
        return con.id;
    }
}