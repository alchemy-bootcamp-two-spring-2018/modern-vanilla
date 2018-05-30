import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    
    return `
    <h4>My ${title} </h4>
    
    <ul>
        <li>Category: ${category}</li>
        <li>Author: ${author}</li>
        <li>Author URL: ${authorUrl}</li>
        <li>Published on: ${publishedOn}</li>
        <li>Example: ${body}</li>
    </ul> 
    `;
});
//lis above displayed once and only showed for Bob Ross and at bottom of page. now gone.


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
        //please select showing at bottom of page. rendering after 
    }     
}