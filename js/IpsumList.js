
import Template from './Template.js';
import ipsumData from './data.js';

// expects to receive the list from data
const template = new Template(({ length }) => `
    <h2>${length} Ipsum Options</h2>
    <ul class="list"></ul>
`);

// expects to receive an individual item from the list
const itemTemplate = new Template(({ title, category }) => `
    <li class="item">
        <strong>${title}</strong> (${category})
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.IpsumList = ipsumData; // ipsumData is imported above
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.IpsumList);
        const ul = dom.querySelector('ul');

        this.IpsumList.map(ipsumItem => {
            const dom = itemTemplate.render(ipsumItem);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsumItem);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}
