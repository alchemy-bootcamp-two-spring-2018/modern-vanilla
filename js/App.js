import Template from './Template.js';
import IpsumList from './IpsumList.js';
import IpsumViewer from './IpsumViewer.js';

//template instance
const template = new Template();

export default class App {
    render() {
        const dom = template.render();

        //ipsumList section

        //ipsumViewer section

        return dom;
    }
}



