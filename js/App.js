import Template from './Template.js';
import IpsumList from './IpsumList.js';
// import IpsumView from './IpsumViewer.js';

const template = new Template (() => {
    return `
        <main>
            <h1>Ipsum Book List</h1>
            <section id="list"></section>
            <section id="viewer">viewer</section>
        </main>
    `;
});
export default class App {
    render() {
        const dom = template.render();

        const ipsumList = new IpsumList(selected => {
            console.log(selected);
        });
        const section = dom.getElementById('list');
        const listDom = ipsumList.render();

        section.appendChild(listDom);
        return dom;
    }
}