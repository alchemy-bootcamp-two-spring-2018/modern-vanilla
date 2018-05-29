import Template from './Template.js';
import Viewer from './Viewer.js';
import data from './data.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Ipsum Viewer</h1>
            <section id='list'></section>
            <section id='viewer'></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();

        const viewerSection = dom.getElementById('viewer');
        const viewerComponent = new Viewer();
        viewerSection.appendChild(viewerComponent.render());


        return dom;
    }
}