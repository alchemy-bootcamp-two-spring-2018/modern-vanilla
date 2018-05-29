import Template from './Template.js';
import data from './data.js';

const listTemplate = new Template(({ length }) => `
    <h2>${length} Ipsums!</h2>
    <ul class="list">Unordered List</ul>
    `
);

const dataTemplate = new Template(() => `
    <li class="data"> 
        li data template
    </li>
    
`);

export default class IpsumList {
    constructor(onSelect) {
        this.dataList = data;
    //     this.onSelect = onSelect;
    }

    render() {
        const dom = listTemplate.render(this.dataList);
        const ul = dom.querySelector('ul');
        this.dataList.map(ipsums => {
            const dom = dataTemplate.render(data);
            const li = dom.querySelector('li');
            // this.onSelect(ipsums):
            ul.appendChild(dom);

        });


        return dom;
    }
}