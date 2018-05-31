import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    return `
    <h4>${title}</h4>
    <ul>
        <li>Category: ${category}</li>
        <li>Author: ${author}</li>
        <li>Address: ${authorUrl}</li>
        <li>Published on: ${publishedOn}</li>
        <li>Sample text: ${body}</li>
    </ul>
    `;
});

export default class IpsumViewer {
    update(ipsumList) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(ipsumList));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an ipsum';
        return this.section;
    }
}