import Template from './Template.js';

const template = new Template(({ author, title, publishedOn, body, image }) => {
    return `
    <img id="image" src=${image}>
    <h1 id="book-title">${title}</h1>
    <h4 id="author">${author}</h4>
    <h6 id="date-published">Published: ${publishedOn}</h6>
    <p id="about-book">${body}</p>
    `;
});

export default class IpsumViewer {
    update(data) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        this.section.appendChild(template.render(data));
    }

    render(){
        this.section = document.createElement('section');
        this.section.textContent = 'Click a book on the left to see more detail!';
        return this.section;
    }
}