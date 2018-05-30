import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsums </h2>
    <ul></ul>
`);
//removed after title below: author, authorUrl, publishedOn, body
const ipsumTemplate = new Template(({ title, category }) => `
    <li>
        ${title} (${category})
    </li>
`);
//removed from above after ${title} (${category}): ${author} ${authorUrl} ${publishedOn} ${body}

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
            li.addEventListener('click', () => {
                this.onSelect(ipsum);

            });
            ul.appendChild(dom);
        });

        console.log(ul);
        return dom;
    }
}