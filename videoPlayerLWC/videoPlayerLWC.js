import { LightningElement, api, wire, track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import URL_FIELD from '@salesforce/schema/Contact.Video_URL__c';

const fields = [URL_FIELD];

export default class VideoPlayerLWC extends LightningElement {
    @api recordId;
    @track isModalOpen = false;

    @wire(getRecord, { recordId: '$recordId', fields })
    contact;

    get videoUrl(){
        return getFieldValue(this.contact.data, URL_FIELD);
    }
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}