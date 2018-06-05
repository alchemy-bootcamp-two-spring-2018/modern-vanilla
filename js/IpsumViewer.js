import Template from './Template.js';

const template = new Template (({ title, body }) => {
    return `
    <h2>${title}</h2>
    ${body}
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
        this.section.textContent = 'Please select a lorem ipsum';
        return this.section;
    }
}