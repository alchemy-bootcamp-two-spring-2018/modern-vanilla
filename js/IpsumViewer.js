import Template from './Template.js';

const template = new Template((ipsumItem) => {
    return `
    <h3>${ipsumItem.title}</h3>
    <ul class="view-item">
        <li><strong>Category:</strong> ${ipsumItem.category}</li>
        <li><strong>Author:</strong> ${ipsumItem.author}</li>
        <li><strong>URL:</strong> <a href=${ipsumItem.authorUrl}>${ipsumItem.authorUrl}</a></li>
        <li><strong>Date Published:</strong> ${ipsumItem.publishedOn}</li>
        <li>${ipsumItem.body}</li>
    </ul>
    `;
});

export default class IpsumViewer {

    update(selectedItem) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        this.section.textContent = ''; // remove 'please select' text
        this.section.appendChild(template.render(selectedItem));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an ipsum option';
        return this.section;
    }
}