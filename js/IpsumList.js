import Template from './Template.js';
import data from './data.js';

const listTemplate = new Template(() => {
    return `
        <h2>IPSUM LIST</h2>
        <ul class="list"></ul>
    `;

});

const ipsumTemplate = new Template(({ title }) => {
    return `
        <li>${title}</li>
    `;
});

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = data;
        this.onSelect = onSelect;
    }

    render() {
        const dom = listTemplate.render();
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