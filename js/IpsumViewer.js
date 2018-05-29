import Template from './Template.js';

const template = new Template((ipsumItem) => {
    return `
    <h4>${ipsumItem.title}</h4>
    <ul>
        <li>Title: ${ipsumItem.title}</li>
        <li>Category: ${ipsumItem.category}</li>
        <li>Author: ${ipsumItem.author}</li>
        <li>URL: ${ipsumItem.authorUrl}</li>
        <li>Date Published: ${ipsumItem.publishedOn}</li>
    </ul>
    `;
});

export default class IpsumViewer {

    update(ipsumOptions) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(ipsumOptions));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select a ipsum option';
        return this.section;
    }
}