const template = document.createElement('template');

export default class Template {
    constructor(template) {
        this.template = template;
    }

    render(data) {
        template.innerHTML = this.template(data);
        return template.content;
    }
}