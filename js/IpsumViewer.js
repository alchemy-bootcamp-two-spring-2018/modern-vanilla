import Template from './Template.js';

const template = new Template (({ title, category }) => {
    return `
    <h4>${title} | ${category}</h4>
    <ul>
        <li>Stats example here</li>
    </ul>
    `;
});

export default class IpsumViewer {


    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please click on an ipsum';
        return this.section;
    }
}