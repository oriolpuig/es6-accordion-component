export default class CustomElement {
    constructor(type = 'div', id = '', className = '') {
        this._type = type;
        this._id = id;
        this._className = className;
    }

    create() {
        const element = document.createElement(this._type);
        element.id = this._id;
        element.className = this._className;
        this._element = element;
        return this._element;
    }
}