import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(() => `

    <h2># of Ipsums</h2>

    <ul></ul>
`);

const ipsumTemplate = new Template(({ title, author }) => `
    <li>
        ${title} (${author})
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = ipsum;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render();
        //ref to ul
        const ul = dom.querySelector('ul');

        //map ipsum list
        this.ipsumList.map(ipsum => {
            //dom
            const dom = ipsumTemplate.render(ipsum);
            //ref to li
            const li = dom.querySelector('li');
            //add event listener to li- click
            li.addEventListener('click', () => {
                this.onSelect(ipsum);
            });
            //append to dom
            ul.appendChild(dom);
        });

        return dom;
    }
}