import Template from './Template.js';

const template = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {

    return `
    <h4>${title} ${category} ${author} ${authorUrl} ${publishedOn} ${body}</h4>
    
    <ul>
        <li>Title: ${title}</li>
        <li>Category:${category}</li>
        <li>Author:${author}</li>
        <li>Author URL:${authorUrl}</li>
        <li>Published On:${publishedOn}</li>
        <li>Body:${body}</li>
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
        this.section.textCOntent = 'Please pick an ipsum';
        return this.section;

    }
     
}
