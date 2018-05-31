import Template from './Template.js';
import data from './data.js';

const template = new Template (({ length }) => `
    <h2>${length} Ipsums</h2>
    <ul class="list"></ul>
`);

const dataTemplate = new Template(({ title, author }) => `
    <li class="data">
        ${title} (${author})
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
            const dom = dataTemplate.render(data);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(data);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}