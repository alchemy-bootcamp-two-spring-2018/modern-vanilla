import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumViewer from './IpsumViewer.js';

const template = new Template(() => {return `
    <main>
        <section id="list"></section>
        <section id="viewer"></section>
    </main>
`;
});

export default class App {
    render() {
        const dom = template.render();

        const sectionList = dom.getElementById('list');
        const ipsumList = new IpsumList((selected) => {
            while(this.sectionViewer.lastElementChild) {
                this.sectionViewer.lastElementChild.remove();
            }
            this.sectionViewer.appendChild(ipsumViewer.update(selected));
        });

        this.sectionViewer = dom.getElementById('viewer');
        const ipsumViewer = new IpsumViewer();

        sectionList.appendChild(ipsumList.render());
        this.sectionViewer.appendChild(ipsumViewer.render());
        dom.appendChild(sectionList);
        dom.appendChild(this.sectionViewer);
        return dom;
    }
}