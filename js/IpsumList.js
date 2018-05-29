import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(
    //# of Ipsums
    //ul section
);

const ipsumTemplate = new Template(
    //li of Ipsum properties
);

export default class IpsumList {
    constructor() {
        this.ipsumList = ipsum;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render();
        //ref to ul

        //map ipsum list
            //dom
            //ref to li
            //add event listener to li- click
            //append to dom

        return dom;
    }
}