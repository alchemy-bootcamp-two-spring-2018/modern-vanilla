import Template from './Template.js';

const viewerTemplate = new Template(() => {
    return `
        <h2>VIEWER</h2>
    `;

});



export default class IpsumViewer {
    update(ipsum) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(viewerTemplate.render());
    }
    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select an Ipsum';


        return this.section;
    }
}