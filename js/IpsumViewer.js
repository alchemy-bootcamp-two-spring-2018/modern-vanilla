import Template from './Template.js';

const template = new Template(({ title, author, body }) => {
    return `
        <h4>${title} - ${author}</h4>
        <ul>
            <li>${body}</li>
        </ul>
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
        this.section.textContent = 'Please select an ipsum';
        return this.section;
    }
}