import Template from './Template.js';
import data from './data.js';

const template = new Template(() => {
    return `
        <h2>IPSUM LIST</h2>
        <ul class="list">
    `;

});

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = data;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render();

        return dom;
    }
}