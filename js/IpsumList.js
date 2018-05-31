import Template from './Template.js';
import ipsumData from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsum</h2>
    <ul class="list"></ul>
`);

const ipsumTemplate = new Template(({ title }) => `
    <li class="ipsum-title">
        ${title}
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

        this.IpsumList.map(ipsumData => {
            const dom = ipsumTemplate.render(ipsumData);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsumData);
            });
            ul.appendChild(dom);
        });
        
        return dom;
    }
}