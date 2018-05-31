import Template from './Template.js';
import IpsumViewer from './IpsumViewer.js';
import IpsumList from './IpsumList.js';

const template = new Template(() => {
    return `
        <main>
            <header>
                <h1>fill the void</h1>
            </header>
            <section id="title">
                <h1>ipsumArchive</h1>
            </section>
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