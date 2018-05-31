import Template from './Template.js';

const template = new Template(({ title, author, category, publishedOn, body }) => {
    return `
    <h4>${title} <em> by  </em> ${author} </h4>
    <ul>
        <li>Category: ${category}</li>
        <li>Published On: ${publishedOn}</li> 
        <li>Body: ${body}</li> 
        
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
        this.section.textContent = 'Please select an ipsum';
        return this.section;
    }
}