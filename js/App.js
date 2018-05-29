import Template from './Template.js';
import IpsumList from './IpsumList.js';

const template = new Template (() => {
    return `
        <main>
            <h1>Master Detail Viewer</h1>
            <section id="list"></section>
            <section id="viewer"></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();
        
        const IpsumList = new IpsumList(selected);

        const section = dom.getElementById('list');
        const listDom = IpsumList.render();
        section.appendChild(listDom);

        return dom;


    }
}
