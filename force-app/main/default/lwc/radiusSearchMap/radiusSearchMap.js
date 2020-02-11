import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/AccountLocation.getAccount';
import preparePicklist from '@salesforce/apex/AccountLocation.preparePicklist';
import getAccountryByLoc from '@salesforce/apex/AccountLocation.getAccountryByLoc';
import getAccountryByZipcode from '@salesforce/apex/AccountLocation.getAccountryByZipcode';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
export default class RadiusSearchMap extends LightningElement {
    @track mapMarkers =[];
    //@track progress = 10;
    @track currentlySelected ='10';
    @track statevals;
    @track selectedState;
    @track pincodevals= null;
    @track selectedPin;
    @track statePinMap;
    
    //@track distanceArray =["0","10","20","30","50","100","currentRecState","currentRecCountry"];
    connectedCallback(){
        // eslint-disable-next-line no-undef
        this.callServerMethod(this.currentlySelected);
        this.getpicklistVals();
    }

    //to get picklist values
    getpicklistVals(){
        preparePicklist({})
        .then(result => {
            this.statevals =  result.stateList;
            this.statePinMap = result.statePinMap;            
        })
        .catch(error => {            
            console.log(error);
        });  
    }

    handleStateChange(event){  
        this.selectedState = event.target.value;     
        this.pincodevals = this.statePinMap[event.target.value];
    }
    handlePinChange(event){
        this.selectedPin = event.target.value; 
        this.callServerMethod3(this.selectedState,this.selectedPin);
    }

    //seacrh with gio location lat and long
    callServerMethod(distance){
        getAccount({rad : distance})
        .then(result => {
            this.mapMarkers =  result;
            console.log(JSON.stringify(result, null, '\t'));
        })
        .catch(error => {            
            console.log(error);
        });       
    }
    // search with state/country
    callServerMethod2(fieldtype,fieldvalue){
        getAccountryByLoc({fieldtype : fieldtype,fieldvalue :fieldvalue})
        .then(result => {
            this.mapMarkers =  result;
            console.log(JSON.stringify(result, null, '\t'));
        })
        .catch(error => {            
            console.log(error);
        });       
    }
     
    // search with state and zipcode
    callServerMethod3(state,zipcode){
        getAccountryByZipcode({state : state,zipcode :zipcode})
        .then(result => {
            this.mapMarkers =  result;
            console.log(JSON.stringify(result, null, '\t'));
        })
        .catch(error => {            
            console.log(error);
        });       
    }

    /*pressMinus(){
        console.log('-----M'+this.progress);
        if(this.progress > 0 && this.progress <= 100){
            this.progress = this.progress - 10;
            this.callServerMethod(this.progress);
        }
        else{
            if(this.progress === 0){
                this.showWarningToast('Min value reached.');
            }
        }
    }
    pressPlus(){
        if(this.progress >= 0 && this.progress < 100){
            this.progress = this.progress + 10;
            this.callServerMethod(this.progress);
        }        
        console.log('---P'+this.progress);
    }
    showWarningToast(msg) {
        const evt = new ShowToastEvent({
            title: 'Application Warning',
            message: msg,
            variant: 'warning',
            mode: 'pester'
        });
        this.dispatchEvent(evt);
    }*/
    currentRadiusSelected(event){
        console.log('FFFFF'+event.target.value);
        this.callServerMethod(event.target.value);
        this.currentlySelected = event.target.value;
    }    
    currentStepclicked6(){
        this.callServerMethod2('State','West Bengal');
        this.currentlySelected ='State';
    }
    currentStepclicked7(){
        this.callServerMethod2('Country','India');
        this.currentlySelected ='Country';
    }
    /*currentStepclicked8(){
        /*this.template.querySelectorAll('lightning-input-field').forEach(each => {
            console.log('AAAA'+this.template.querySelector('#stateId'));
            console.log('====>stateval1'+each.value);
        });
        
        this.callServerMethod3(this.selectedState,this.selectedPin);
        this.currentlySelected ='Country';
    }*/

}