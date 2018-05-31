import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    
    return `
    <h4> ${title} </h4>

    <ul>
        <li class="choice">Category: ${category}</li>
        <li class="choice">Author: ${author}</li>
        <li class="choice">Author URL: ${authorUrl}</li>
        <li class="choice">Published on: ${publishedOn}</li>
        <li><strong>Sample Text: </strong>${body}</li>
    </ul> 
    `;
});
//display on click, but after list of titles and categories


export default class IpsumViewer {
    update(ipsum) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();

        }
        this.section.appendChild(template.render(ipsum));
    }
    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an ipsum';
        return this.section;
        //'please select' string showing at bottom of page. 
    }     
}