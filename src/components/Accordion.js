import Component from './Component';
import CustomElement from '../domain/CustomElement';
import Tab from '../domain/Tab';
import './Accordion.scss';

export default class Accordion extends Component {
    constructor(elements = []) {
        super('MyAccordion');
        this._tabs = this.mapElementsToTabs(elements);
        this._collection = null;
        this._selectedIndex = 0;
    }

    mapElementsToTabs(elements = []) {
        if (elements.length === 0) return elements;
        return elements.map(it => new Tab(it.title, it.message));
    }

    title(tab, idx) {
        const titleElement = new CustomElement('dt').create();
        titleElement.className = `accordion ${tab.isActive() ? 'active' : ''}`;
        titleElement.innerHTML = tab.title;
        titleElement.onclick = () => { this.expand(idx); }
        return titleElement;
    }

    content(content) {
        const contentElement = new CustomElement('dd').create();
        contentElement.className = 'panel';
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
        if (this._tabs && this._tabs.length > 0) {
            this._collection = this._collection || new CustomElement('dl', this._id).create();
            this._tabs.forEach((it, idx) => {
                if (idx === this._selectedIndex) {
                    it.expand();
                }
                const title = this.title(it, idx);
                const content = this.content(it.content);
                this.addElementToCollection(title);
                this.addElementToCollection(content);
            });
        }

        return this._collection;
    }

    addTab(element) {
        this.remove();
        this._tabs.push(new Tab(element.title, element.message));
        this.render();
    }

    expand(idx) {
        this.remove();
        this.collapseAll();
        this._selectedIndex = idx;
        this.render();
        console.log('Expand --> ' + idx);
    }
    collapse(idx) {
        this.remove();
        this.collapseAll();
        this._selectedIndex = null;
        console.log('Collapse --> ' + idx);
    }

    collapseAll() {
        this._tabs.forEach(it => it.collapse());
    }
}