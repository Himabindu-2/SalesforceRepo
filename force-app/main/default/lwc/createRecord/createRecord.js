import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

import NAME_FIELD from '@salesforce/schema/Contact.Name';

import LeadSource from '@salesforce/schema/Contact.LeadSource';

import AcountName from '@salesforce/schema/Contact.AccountId';



export default class CreateRecord extends LightningElement {

    contactObject = CONTACT_OBJECT;

    myFields = [NAME_FIELD,LeadSource,AcountName];



    handleContactCreated(){

        // Run code when account is created.

        

    }

}