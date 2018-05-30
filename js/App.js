import Template from './Template.js';
import ipsum from './ipsumList.js';
import ipsumViewer from './ipsumViewer.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <section id="list"></section>
            <section id="viewer"></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();

        const ipsumList = new IpsumList(selected => {
            ipsumViewer.update(selected);
        });

        const section = dom.getElementById('list');
        const listDom = ipsumList.render();
        section.appendChild(listDom);

        const ipsumViewer = new IpsumViewer();
        const viewer = dom.getElementById('viewer');
        viewer.appendChild(ipsumViewer.render());

        return dom;
    }
}