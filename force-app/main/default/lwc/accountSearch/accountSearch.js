import { LightningElement, api } from 'lwc';

export default class AccountSearch extends LightningElement {

    keyword;
    handleSearch(event) {
        this.keyword = event.detail;
    }
    
}