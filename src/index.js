import Environment from './components/Environment';
import Accordion from './components/Accordion';
import data from './data/index';
import '../public/style.css';

const environment = new Environment(process.env.NODE_ENV);
environment.render();

const accordion = new Accordion(data.elements);
accordion.render();
