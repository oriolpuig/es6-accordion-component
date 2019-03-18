import Component from './Component';
import CustomElement from '../domain/CustomElement';

export default class Button extends Component {
    constructor(id, label, callback) {
        super(id);
        this._label = label || 'button';
        this._callback = callback || onDefaultCallback;
    }

    onDefaultClickCallback = (e) => { e.preventDefault() }

    html() {
        const btnElement = new CustomElement('input').create();
        btnElement.type = 'button';
        btnElement.value = this._label;
        btnElement.className = `${this._id}-button`;
        btnElement.onclick = this._callback;
        return btnElement;
    }
}
