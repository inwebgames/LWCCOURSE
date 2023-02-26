import { LightningElement } from 'lwc';

export default class SearchForm extends LightningElement {
    
    keyword = '';

    handleChange(event) {
        this.keyword = event.target.value;
    }

    handleClick() {
        const event = new CustomEvent('searchaccounts', { detail: this.keyword});
        this.dispatchEvent(event);
    }
}