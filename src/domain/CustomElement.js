
export default class CustomElement {
    constructor(type = 'div', id = '') {
        this._type = type;
        this._id = id;
    }
    create() {
        const element = document.createElement(this._type);
        element.id = this._id;
        this._element = element;
        return this._element;
    }
}