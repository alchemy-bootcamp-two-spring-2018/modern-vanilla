import Template from './Template.js';
import data from './data.js';

const template = new Template(({ length }) => {`
    <h2>${length} Title></h2>
    <ul class="list">Unordered List</ul>
    `;
});

export default class IpsumList {
    constructor(onSelect) {
        this.dataList = data;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.dataList);
        // const ul = dom.querySelector('ul');
        // this.dataList.map(ipsums => {
        //     this.onSelect(ipsums):
        // });
        

        return dom;
    }
}