import Template from './Template.js';

const template = new Template(({ title, author, authorUrl, category, body }) => {
    return `
    <h3>${title}</h3>
    <ul>
    <li>Author: ${author}</li>
    <li>Author URL: ${authorUrl}</li>
    <li>Category: ${category}</li>
    </ul>
    <p><strong>Example: </strong><br>${body}</p>
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
        this.section.textContent = 'Please Select an Ipsum from the List';
        return this.section;
    }
}

