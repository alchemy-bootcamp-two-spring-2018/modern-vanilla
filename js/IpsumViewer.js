import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    return `
    <h4>${title} (${category})</h4>
    <ul>
        <li>Author: ${author}</li>
        <li>Link: ${authorUrl}</li>
        <li>Published: ${publishedOn}</li>
        <li>Sample: ${body}</li>
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
        this.section.textContent = '<<< Please select an ipsum type';
        return this.section;
    }
}