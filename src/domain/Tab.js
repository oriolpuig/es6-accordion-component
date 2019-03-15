import CustomElement from './CustomElement';

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

    renderHeader(idx, onClickCallback) {
        const titleElement = new CustomElement('dt').create();
        titleElement.className = `accordion ${this.isActive() ? 'active' : ''}`;
        titleElement.innerHTML = this.title;
        titleElement.onclick = () => { onClickCallback(idx); }
        return titleElement;
    }

    renderPanel() {
        const contentElement = new CustomElement('dd').create();
        contentElement.className = 'panel';
        const paragraphElement = new CustomElement('p').create();
        paragraphElement.innerHTML = this.content;
        contentElement.append(paragraphElement);
        return contentElement;
    }
}