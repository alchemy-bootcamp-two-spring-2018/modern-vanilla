import Template from './Template.js';

const template = new Template(({ title, body }) =>`
    <h1>${ title }</h1>
    <p>${ body }</p>
`);


export default class IpsumList {

    update(selected) {
        return template.render(selected);
    }

    render() {
        return template.render({ title: 'choos an iPsome plz', body: '' });
    }
}