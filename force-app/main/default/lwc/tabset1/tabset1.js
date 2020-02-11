import { LightningElement,api } from 'lwc';

export default class TabsetBasic extends LightningElement {
    @api recordId =sessionStorage.getItem("recordId");

}