import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(() => `
    <h2>Ipsums</h2>
    <p>Please select an Ipsum</p>
    <ul id="list"></ul>
`);

const ipsumTemplate = new Template(({ title }) => `
    <li class="ipsum">
        ${title}
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = ipsum;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render();
        const ul = dom.querySelector('ul');

        this.ipsumList.map(ipsum => {
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