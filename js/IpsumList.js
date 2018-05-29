import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsum Types</h2>
    <ul class="list"></ul>
`);

const ipsumTemplate = new Template(({ title, category }) => `
    <li class="ipsum">
        ${title} (${category})
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = ipsum;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.ipsumList);
        const ul = dom.querySelector('ul');

        this.ipsumList.map(ipsum => {
            const dom = ipsumTemplate.render(ipsum);
            const li = dom.querySelector('li');
            //add event listener here
            ul.appendChild(dom);
        });

        return dom;
    }
}
