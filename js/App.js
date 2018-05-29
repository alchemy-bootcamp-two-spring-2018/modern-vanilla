import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumViewer from './IpsumViewer.js';

//template instance
const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <section id="ipsum-list-section"></section>
            <section id="ipsum-viewer-section"></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();

        //ipsumList section
        const ipsumList = new IpsumList();

        const section = dom.getElementById('ipsum-list-section');
        const listDom = ipsumList.render();
        section.appendChild(listDom);

        //ipsumViewer section
        const ipsumViewer = new IpsumViewer();
        const viewer = dom.getElementById('ipsum-viewer-section');
        viewer.appendChild(ipsumViewer.render());

        return dom;
    }
}



