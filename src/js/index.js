import ToDoView from './views/ToDoView';
import ToDoContoller from './controllers/ToDoController'
import ToDo from './models/ToDo';

import '../scss/style.scss';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const model = new ToDo();
const view = new ToDoView();
new ToDoContoller(model, view);