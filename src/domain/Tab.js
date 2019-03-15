export default class Tab {
    constructor(title, content) {
        this._isActive = false;
        this._title = title;
        this._content = content;
    }
    get title() { return this._title; }
    get content() { return this._content; }

    expand() {
        this._isActive = true;
    }
    collapse() {
        this._isActive = false;
    }
    isActive() {
        return this._isActive;
    }
}