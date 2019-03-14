import Environment from './components/Environment';
import Accordion from './components/Accordion';
import data from './data/index';

const environment = new Environment(process.env.NODE_ENV);
environment.render();

const accordion = new Accordion(data.elements);
accordion.render();


accordion.addTab({ title: 'Oriol', message: 'Oriol Content!!' })