import { LightningElement,track,api } from 'lwc';
export default class ProgressBarChild1Component extends LightningElement {
    defaultColor ="myBar";
    dangerColor = "myBar danger";
    @track className = this.defaultColor;
    @api percentage;

    get getStyle() {
        return 'width:'+this.percentage+'%';
    }

    @api changeBarColor(){
        this.className =this.className === this.defaultColor ? this.dangerColor : this.defaultColor;
    }

}