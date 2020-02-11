import { LightningElement, track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class HelloWorld extends NavigationMixin(LightningElement)  {
    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
    handleClick(){
        sessionStorage.setItem("recordId","Subrata");
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'FullSizeTab'
            }
           
            /*type: 'standard__component',
            attributes: {
                componentName: 'tabset1'
            },
            state: {
                recordId : '5'
            }*/
        });
        //window.open('https://www.w3schools.com');
    }
}