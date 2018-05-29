import Template from './Template.js';
import ipsums from './data.js';


const template = new Template(() => {return `
    <h1>iPsum Shizz</h1>
    <ul class="list"></ul>
`;
});

const ipsumTemplate = new Template((ipsums) => {return `
    <li>${ipsums.title}</li>
`;
});

export default class IpsumList {

    constructor(onSelect) {
        this.ipsumList = ipsums;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render();
        const ul = dom.querySelector('ul');

        this.ipsumList.map(ipsums => {
            const dom = ipsumTemplate.render(ipsums);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsums);   
            });
            ul.appendChild(dom);
        });

        dom.appendChild(ul);

        return dom;
    }
}
