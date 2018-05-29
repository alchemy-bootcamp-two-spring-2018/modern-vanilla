import Template from './Template.js';
import Ipsum from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Data Objects</h2>
    <ul class ="list"></ul>
`);






// render () {
//     const dom = template.render(this.)
// }