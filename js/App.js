import Template from './Template.js';

const template = new Template (() => {
    return `
        <main>
            <h1>Master Detail Viewer</h1>
            <section id="list"></section>
            <section id="viewer"></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();
        
        const section = dom.getElementById{'list'};
        const listDom = ipsumList.render();
        section.appendCh


        return dom;
    }
}
