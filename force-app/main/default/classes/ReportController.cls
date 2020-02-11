public class ReportController {
    
    @AuraEnabled
    public static ReportWrapper reportControllerdetails(){
        ReportWrapper rw = new ReportWrapper();
        List <Report> reportList = [SELECT Id,DeveloperName FROM Report where DeveloperName = 'Opportunity_Test'];
        String reportId = (String)reportList.get(0).get('Id');
        //Report metadata
        Reports.ReportResults results = Reports.ReportManager.runReport(reportId,true);
        Reports.ReportMetadata rm = results.getReportMetadata();
        
        Reports.ReportDescribeResult describe = Reports.ReportManager.describeReport(reportId);
		Reports.ReportMetadata reportMd = describe.getReportMetadata();
		results = Reports.ReportManager.runReport(reportId, true);

		Reports.ReportFilter filter = reportMd.getReportFilters()[0];
		//filter.setValue('0');
		results = Reports.ReportManager.runReport(reportId, reportMd,true);
        
        // Report data
        String factMapKey = 'T!T';
       	Reports.ReportFactWithDetails factDetails =    (Reports.ReportFactWithDetails)results.getFactMap().get(factMapKey);
        List<Reports.ReportDetailRow> detailRowList = factDetails.getRows();
        List<List<String>> mapRows = new List<List<String>>();
        Integer x =0;
        for (Reports.ReportDetailRow reportDetailRow: detailRowList) {
            x=x+1;
            List<String> listDisplayData = new List<String>();
            for (Reports.ReportDataCell reportDataCell: reportDetailRow.getDataCells()) {
                System.debug('=======>'+reportDataCell);
                System.debug('2222'+reportDataCell.getLabel());
                listDisplayData.add(reportDataCell.getLabel());
            }
            mapRows.add(listDisplayData);
        }    	
        rw.listOfDetailFld = rm.getDetailColumns();
        rw.listOFRows =mapRows;
        rw.jsonListRow = JSON.serialize(mapRows);
        return rw;        
    }
    
   
    public class ReportWrapper{
        @AuraEnabled
        public List<String> listOfDetailFld{get;set;}   
 		@AuraEnabled
        public List<List<String>> listOFRows{get;set;}  
        @AuraEnabled
        public string jsonListRow{get;set;}        
    }    
}