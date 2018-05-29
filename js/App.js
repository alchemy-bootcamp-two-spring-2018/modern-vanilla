import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumViewer from './IpsumViewer.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <section id="content">
                <section id="list"></section>
                <section id="viewer"></section>
            </section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();

        const ipsumList = new IpsumList(selected => {
            ipsumViewer.update(selected);
        });

        const listSection = dom.getElementById('list');
        const listDom = ipsumList.render();
        listSection.appendChild(listDom);

        const ipsumViewer = new IpsumViewer();
        const viewerSection = dom.getElementById('viewer');
        viewerSection.appendChild(ipsumViewer.render());

        return dom;
    }
}