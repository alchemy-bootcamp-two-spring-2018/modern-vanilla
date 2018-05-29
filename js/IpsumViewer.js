import Template from './Template.js';

const template = new Template(({ title, author, category, authorUrl, publishedOn, body }) => {
    return `
    <h4>${title} ${author}</h4>
    <ul>
        <li>Category: ${category}</li>
        <li>Author Url: ${authorUrl}</li>
        <li>Published on: ${publishedOn}</li>
        <li>Sample Text: ${body}</li>
    </ul>
    `;
});

export default class IpsumViewer {

    update(ipsum) {
        //code block to update info every time user clicks on new ipsum
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(ipsum));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an Ipsum';
        return this.section;
    }
}