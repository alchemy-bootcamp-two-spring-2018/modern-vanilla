import Template from './Template.js';
import data from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsums</h2>
    <h3>Select an Ipsum</h3>
    <ul class="list"></ul>
`);

const ipsumTemplate = new Template(({ title }) => `
    <li class="ipsum">
        ${title}
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = data;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.ipsumList);
        const ul = dom.querySelector('ul');
        

        this.ipsumList.map(data => {
            const dom = ipsumTemplate.render(data);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(data);
            });
            ul.appendChild(dom);
    
            
        });

        return dom;
    }
}