import { LightningElement,api,track,wire } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';
import getDetails from '@salesforce/apex/ShowParentChildCtrlr.getDetails';

export default class ShowParentChild extends LightningElement {
    @api objectAPList;
    @track mapOfListValues =[];
    connectedCallback(){        
        getDetails({
            objectAPList : this.objectAPList
        })
            .then(result => {
                if(result){
                    for(let key in result) {
                        if (result.hasOwnProperty(key)) {
                            this.mapOfListValues.push({key: key, value: result[key]});
                        }
                    }
                }           
            })
            .catch(error => {
                this.error = error;
            });
    }
    getParentRows(event){
        const selectedRows = event.detail.selectedRows;
        console.log('====>'+JSON.stringify(selectedRows));
    
    }    
}