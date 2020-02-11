import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { loadScript } from 'lightning/platformResourceLoader';
import connectionJs from '@salesforce/resourceUrl/connection';
 
 
export default class FlexiPage1 extends NavigationMixin(LightningElement){
//export default class FlexiPage1 extends LightningElement {
    @api recordId;
    renderedCallback() {
        debugger;
        Promise.all([
           
            loadScript(this, connectionJs),
        ])
            .then(() => {
                alert('Files loaded.'+sforce.connection.sessionId);

            })
            .catch(error => {
                alert(error.body.message);
            });
    }
    handleClick(){
        console.log('11111');
        console.log('aaaaa'+this.recordId);
        console.log('Base URL id==> '+window.location.origin);
        window.open('https://apzen-tech-dev-ed.my.salesforce.com/apex/lwcURLTest?id='+this.recordId,'_blank');
        /*this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://apzen-tech-dev-ed.my.salesforce.com/apex/lwcURLTest?id='+this.recordId,
                    target : "_blank"
                }
            }) */       
        }    
}