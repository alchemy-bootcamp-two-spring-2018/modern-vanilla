import Template from './Template.js';
import ipsum from './ipsumList.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsums</h2>
    <ul class = "list"></ul>
`);