/* eslint indent: "off" */
import Template from './Template.js';
import loremIpsumType from './data.js';

const template = new Template(({length}) => `
    <h2>${length} Lorem Ipsum Options: </h2>
    <ul class="list" style="list-style-type:none"></ul>
`);

const ipsumTemplate = new Template(({ title, category}) => `
    <li class="ipsum">
        ${title} (${category})
    </li>
`);

export default class MasterIpsumList {
    constructor(onSelect) {
        this.masterIpsumList = loremIpsumType;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.masterIpsumList);
        const ul = dom.querySelector('ul');

        this.masterIpsumList.map(ipsum => {
            const dom = ipsumTemplate.render(ipsum);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsum);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}