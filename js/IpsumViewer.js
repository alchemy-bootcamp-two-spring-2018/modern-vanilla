import Template from './Template.js';

const viewerTemplate = new Template(() => {
    return `
        <h2>VIEWER</h2>
    `;

});



export default class IpsumViewer {
    render() {
        const dom = viewerTemplate.render();

        return dom;
    }
}