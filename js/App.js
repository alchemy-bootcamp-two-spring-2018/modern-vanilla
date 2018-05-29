import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumView from './IpsumViewer.js';

const template = new Template (() => {
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
        return dom;

    }
}