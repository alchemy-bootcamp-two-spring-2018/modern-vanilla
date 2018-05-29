import Template from './Template.js';
import IpsumViewer from './IpsumViewer.js';
import IpsumList from './IpsumList.js';

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

        const ipsumListSection = dom.getElementById('list');
        const ipsumListComponent = new IpsumList((selected) => {
            ipsumViewerComponent.update(selected);
        });
        ipsumListSection.appendChild(ipsumListComponent.render());

        const ipsumViewerSection = dom.getElementById('viewer');
        const ipsumViewerComponent = new IpsumViewer();
        ipsumViewerSection.appendChild(ipsumViewerComponent.render());


        return dom;
    }
}