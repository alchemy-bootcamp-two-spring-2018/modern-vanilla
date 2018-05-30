import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumViewer from './IpsumViewer.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <div id="flex-container">
            <section id="ipsum-list-section"></section>
            <section id="ipsum-viewer-section"></section>
            </div>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();

        const ipsumList = new IpsumList(selected => {
            ipsumViewer.update(selected);
        });

        const section = dom.getElementById('ipsum-list-section');
        const listDom = ipsumList.render();
        section.appendChild(listDom);

        const ipsumViewer = new IpsumViewer();
        const viewer = dom.getElementById('ipsum-viewer-section');
        viewer.appendChild(ipsumViewer.render());

        return dom;
    }
}



