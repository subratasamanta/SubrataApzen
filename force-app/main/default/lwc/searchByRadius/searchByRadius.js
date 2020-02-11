import { LightningElement,track,api } from 'lwc';
import getAccount from '@salesforce/apex/AccountLocationDetails.getAccount';
 
export default class RadiusSearchMap extends LightningElement {
    @api recordId;
    @track mapMarkers =[];
    @track currentlySelected ='10';   
    
    connectedCallback(){
        this.callServerMethod(this.currentlySelected);
    }  

    //seacrh with gio location lat and long
    callServerMethod(distance){
        getAccount({rad : distance, accId : this.recordId})
        .then(result => {
            this.mapMarkers =  result;
        })
        .catch(error => {            
            console.log(error);
        });       
    } 
    currentRadiusSelected(event){        
        this.currentlySelected = event.target.value;
		this.callServerMethod(event.target.value);
    }    
}