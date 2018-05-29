import Template from './Template.js';

const viewerTemplate = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    return `
        <h2>${title}</h2>
        <h3>Category: ${category}</h3>
        <h4>Author: ${author} / ${authorUrl}</h4>
        <p>${body}</p>
        <h6>Published on: ${publishedOn}</h6>
    `;

});



export default class IpsumViewer {
    update(ipsum) {
        this.section.textContent = '';
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        const viewer = viewerTemplate.render(ipsum);
        this.section.appendChild(viewer);
    }
    render() {
        this.section = document.createElement('section');
        this.section.classList = 'load';
        this.section.textContent = 'Please select an Ipsum';
        return this.section;
    }
}