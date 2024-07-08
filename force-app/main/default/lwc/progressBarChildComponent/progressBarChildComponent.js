import { LightningElement,api,track } from 'lwc';
export default class ProgressBarChildComponent extends LightningElement {
defaultColor ="myBar";
    @track className = this.defaultColor;
    @api percentage;

    get getStyle() {
        return 'width:'+this.percentage+'%';
    }
}