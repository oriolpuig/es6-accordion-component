export default class Component {
  constructor(id) {
    this._id = id;
    this._rootClass = this._id;
    this._rootElement = document.getElementById('root');
  }

  render() {
    this._rootElement.appendChild(this.html());
  }

  remove() {
    const element = document.getElementById(this._id);
    element.innerHTML = '';
    this._rootElement.appendChild(element);
  }
}
