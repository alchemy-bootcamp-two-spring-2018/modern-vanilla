import Template from './Template.js';

const template = new Template(({ title, author, category, authorUrl, publishedOn, body }) => {
    return `
    <h2 id="h2-viewer">${title}</h2>
    <ul id="viewer">
        <li class="ipsum" >Author: ${author}</li>
        <li class="ipsum" >Category: ${category}</li>
        <li class="ipsum" >Author Url: ${authorUrl}</li>
        <li class="ipsum" >Published on: ${publishedOn}</li>
        <li class="ipsum" >Sample Text: ${body}</li>
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
        
        return this.section;
    }
}