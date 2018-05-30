import Template from './Template.js';

const template = new Template(({ title, category }) => {

    return `
    <h4>${title} ${category}</h4>
    
    <ul>
        <li>Title:</li>
        <li>Category:</li>
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
