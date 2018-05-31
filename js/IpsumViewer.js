import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    return `
    <h4>${title}</h4>
    <ul>
        <li>category: ${category}</li>
        <li>author: ${author}</li>
        <li>authorUrl: ${authorUrl}</li>
        <li>publishedOn: ${publishedOn}</li>
        <li>body: ${body}</li>
    </ul>
    `;
});

export default class IpsumViewer {

    update(ipsum) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        this.section.appendChild(template.render(ipsum));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an Ipsum';
        return this.section;
    }
}