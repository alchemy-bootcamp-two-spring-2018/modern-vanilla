import Template from './Template.js';
import IpsumList from './IpsumList.js';
// import IpsumViewer from './IpsumViewer.js';

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
        // const sections = dom.querySelectorAll('section');

        // console.log('seciton', sections);

        const sectionList = dom.getElementById('list');
        console.log(sectionList);
        const ipsumList = new IpsumList(() => {
            // ipsumViewer.update(selected);
        });

        // const sectionViewer = dom.getElementById('viewer');
        // console.log(sectionViewer);
        // const ipsumViewer = new IpsumViewer();

        // console.log(ipsumList.render());
        sectionList.appendChild(ipsumList.render());
        console.log(sectionList);
        // sectionViewer.appendChild(ipsumViewer.render());
        return dom;
    }
}