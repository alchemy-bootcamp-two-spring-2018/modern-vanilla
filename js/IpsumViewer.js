import Template from './Template.js';

const viewerTemplate = new Template(({ title, category, author, authorUrl, publishedOn, body }) => {
    return `
    <section>
        <h2>${title}</h2>
        <h3>Category: ${category}</h3>
        <h4>Author: <a href="${authorUrl}" target="_blank">${author}</a></h4>
        <p>${body}</p>
        <h6>Published on: ${publishedOn}</h6>
    </section>
    `;

});



export default class IpsumViewer {
    update(ipsum) {
        this.section.textContent = '';
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        const viewer = viewerTemplate.render(ipsum);
        const section = viewer.querySelector('section');
        section.style.animation = 'fadein 2s';
        this.section.appendChild(viewer);
    }
    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'make a selection';
        return this.section;
    }
}