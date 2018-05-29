import Template from './Template.js';

const template = new Template(({ author, title, publishedOn, body, image }) => {
    return `
    <div>
    <img id="image" src=${image}>
    <h1 id="book-title">Title: ${title}</h1>
    <h4 id="author">Author: ${author}</h4>
    <h6 id="date-published">Published: ${publishedOn}</h6>
    <div id="about-book">
        <h4>About</h4>
        <p>${body}</p>
    </div>
    </div>
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