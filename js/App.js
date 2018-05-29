import Template from './Template.js';
import ipsumList from './ipsumData.js';
import ipsumViewer from './ipsumViewer.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <section id = "list"></section>
            <section id = "viewer"></section>
        </main>
    `;
});

export default class App {
    render() {
        const ipsumList = new IpsumList(selected => {
            ipsumViewer.update(selected);
        });

const section = dom.getElementById('list');
const listDom = ipsumList.render();
section.appendChild(ipsumViewer.render());
    
    return dom;
    }
}
