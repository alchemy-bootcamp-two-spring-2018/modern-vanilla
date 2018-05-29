/* eslint indent: "off" */
import Template from './Template.js';
import ipsumData from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsum Options</h2>
    <ul class="list"></ul>
`);

const itemTemplate = new Template(({ title, category }) => `
    <li class="item">
        ${title} (${category})
    </li>
`);


export default class IpsumList {
    constructor(onSelect) {
        this.IpsumList = ipsumData;
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
