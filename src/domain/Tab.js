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

  renderContent(id) {
    const contentElement = new CustomElement('dd').create();
    contentElement.className = `${id}-content`;
    const paragraphElement = new CustomElement('p').create();
    paragraphElement.innerHTML = this.content;
    contentElement.append(paragraphElement);
    return contentElement;
  }

  renderHeader(id, idx, onClickCallback) {
    const titleElement = new CustomElement('dt').create();
    titleElement.className = `${id}-tab${this.isActive() ? ' is-active' : ''}`;
    titleElement.innerHTML = this.title;
    titleElement.onclick = () => { onClickCallback(idx); };
    return titleElement;
  }
}
