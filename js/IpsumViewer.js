import Template from './Template.js';

const template = new Template(({ title, author, category, authorUrl, publishedOn, body }) => {
    return `
    <h3>${title} by: ${author}</h3>
    <ul>
        <li><h4>Category: ${category}</h4></li>
        <li><h4>Author: ${author}</h4></li>
        <li><h4><a href="${authorUrl}">Link to Work</a></h4></li>
        <li><h4>Published on: ${publishedOn}</h4></li>
    </ul>
    <p class="bodyInfo">${body}</p>
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
        let spanElement = document.createElement('span');
        spanElement.textContent = 'Please Choose a Document.';
        this.section.appendChild(spanElement);
        return this.section;
    }
}