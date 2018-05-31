import Template from './Template.js';

const template = new Template(({ title, category, body }) => {
    return `
    <h3>${title}</h3>
    <h4>${category}</h4>
    <p>${body}</p>
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
        this.section.textContent = 'Please Select one of the Lorem Ipsum Options';
        return this.section;
    }
}