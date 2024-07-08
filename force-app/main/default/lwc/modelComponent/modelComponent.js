import { LightningElement,api } from 'lwc';
export default class ModelComponent extends LightningElement {
    @api headerText;
    @api bodyText;
    closeHandler() {
        this.dispatchEvent(new CustomEvent('close'));
    }

}