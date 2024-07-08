import { LightningElement, track } from 'lwc';
export default class ParentComponent extends LightningElement {
    @track percentage = 10
    changeHandler(event){
        this[event.target.name] = event.target.value <= 100? event.target.value : 100;
    }
}