import { LightningElement,api,track,wire } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';
import getAllObjDetails from '@salesforce/apex/ObjectDetails.getAllObjDetails';
const columns = [{
        label: 'Object Label',
        fieldName: 'MasterLabel',
        type: 'text',
        sortable: false
    },
    {
        label: 'Object API',
        fieldName: 'QualifiedApiName',
        type: 'text',
        sortable: false
    },
    {
        label: 'Record Count',
        fieldName: 'RecordCount',
        type: 'number',
        sortable: false
    },
    {
        label: 'Record Size',
        fieldName: 'RecordSize',
        type: 'number',
        sortable: true,
        cellAttributes: { alignment: 'right' }
    }

    ];
export default class ObjDetailsWizard extends LightningElement {
    @api objectAPList;
    @api recordId;
    @track data = [];
    @track columns = columns;  
    @wire(getAllObjDetails) 
    wiredOpps({
        error,
        data
    }) {
        if (data) {            
            this.data = data;
        } else if (error) {
            console.log('error'+JSON.stringify(error));
            this.error = error;
        }
    } 
    // on selection of rows
    getSelectedObjs(event) {
        var objectAPI =[];
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows

        for (let i = 0; i < selectedRows.length; i++){
            objectAPI.push(selectedRows[i].QualifiedApiName);
            //console.log('sssss'+selectedRows[i].QualifiedApiName);
            this.objectAPList = objectAPI;
                        
        }
    }
}