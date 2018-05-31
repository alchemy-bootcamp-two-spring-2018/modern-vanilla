import Template from './Template.js';

const template = new Template(({ title, category, author, body }) => {
    return `
        <h2>${title}</h2>
        <h3>Category: ${category}</h3>
        <h4>Author: ${author}</h4>
        <p>${body}</p>
    `;
});

export default class IpsumViewer {

    update(data) {
        this.header.textContent = '';
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(data));
        return this.section;
    }

    render() {
        this.section = document.createElement('section');
        this.header = document.createElement('h2');
        this.header.textContent = 'Select an Ipsum';
        this.section.appendChild(this.header);
        return this.section;
    }
}