import Template from './Template.js';

const template = new Template(({ title, body }) =>`
    <h1>${ title }</h1>
    <p>${ body }</p>
`);

export default class IpsumList {

    update(selected) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        this.section.appendChild(template.render(selected));
    }

    render() {
        this.section = 'Choos an ipsum plz';
        // console.log(this.section);
        return this.section;
    }
}