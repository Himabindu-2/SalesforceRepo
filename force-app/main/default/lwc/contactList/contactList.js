import { LightningElement ,api, wire, track} from 'lwc';

import getContactList from '@salesforce/apex/CoantactCreateHelper.getContactList';

export default class DisplayContactRecords extends LightningElement {

    @track columns = [{

            label: 'Contact name',

            fieldName: 'Name',

            type: 'text',

            sortable: true

        },

        {

            label: 'Email',

            fieldName: 'Email',

            type: 'Email',

            sortable: true

        },

        {

            label: 'Phone',

            fieldName: 'Phone',

            type: 'phone',

            sortable: true

        },

        

    ];

 

    @track error;

    @track conList ;

    @wire(getContactList)

    wiredContacts({

        error,

        data

    }) {

        if (data) {

            this.conList = data;

        } else if (error) {

            this.error = error;

        }

    }

}