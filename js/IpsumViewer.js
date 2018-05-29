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
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(data));
    }

    render() {
        this.section = document.createElement('section');
        // this.section.textContent = 'Please select an Ipsum';
        return this.section;
    }
}