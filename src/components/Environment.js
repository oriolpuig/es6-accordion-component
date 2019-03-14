import Component from './Component';
import CustomElement from '../domain/CustomElement';

export default class Environment extends Component {
    constructor(env = 'development') {
        super('Environment');
        this._env = env;
    }

    html() {
        const div = new CustomElement('div', 'Environment').create();
        div.className = 'Environment';
        div.append(this._env);
        return div;
    }
}