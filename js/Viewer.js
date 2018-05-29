import Template from './Template.js';

const template = new Template(() => {
    return `
        <h2>NAME</h2>
    `;

});

export default class Viewer {
    render() {
        const dom = template.render();

        return dom;
    }
}