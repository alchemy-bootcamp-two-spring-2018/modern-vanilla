import Template from './Template.js';
import data from './data.js';

const listTemplate = new Template(({ length }) => `
    <h2>${length} Books</h2>
    <ul class="list"></ul>
`);


const dataTemplate = new Template(({ author, title }) => `
    <li class="data"> 
        <strong>${author}:</strong> <em>${title}</em>
    </li>
    
`);

export default class IpsumList {
    constructor(onSelect) {
        this.dataList = data;
        this.onSelect = onSelect;
    }

    render() {
        const dom = listTemplate.render(this.dataList);
        const ul = dom.querySelector('ul');
        this.dataList.map(data => {
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