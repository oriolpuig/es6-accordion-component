import Component from './Component';
import CustomElement from '../domain/CustomElement';

export default class Environment extends Component {
    constructor(env = 'development') {
        super('Environment');
        this._env = env;
    }
 
    html() {
        const div = new CustomElement('div', this._id).create();
        div.className = `${this._id} ${this._id}--${process.env.NODE_ENV}`;
        div.append(this._env);
        return div;
    }
}