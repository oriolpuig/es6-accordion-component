import Component from './Component';
import CustomElement from '../domain/CustomElement';

export default class Accordion extends Component {
    constructor(elements) {
        super('MyAccordion');
        this._elements = elements || [];
        this._collection = null;
    }

    title(title) {
        const titleElement = new CustomElement('dt').create();
        titleElement.innerHTML = title;
        return titleElement;
    }

    content(content) {
        const contentElement = new CustomElement('dd').create();
        const paragraphElement = new CustomElement('p').create();
        paragraphElement.innerHTML = content;
        contentElement.append(paragraphElement);
        return contentElement;
    }

    addElementToCollection(element) {
        if (!element) return;
        this._collection.append(element);
    }

    html() {
        if (this._elements && this._elements.length > 0) {
            this._collection = this._collection || new CustomElement('dl', this._id).create();
            this._elements.forEach(it => {
                const title = this.title(it.title);
                const content = this.content(it.message);

                this.addElementToCollection(title);
                this.addElementToCollection(content);
            });
        }

        return this._collection;
    }

    addTab(tab) {
        this.remove();
        this._elements.push(tab);
        this.render();
    }
}