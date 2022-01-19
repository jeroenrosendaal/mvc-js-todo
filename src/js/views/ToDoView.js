export default class ToDoView {
  constructor() {
    this.app = this.getContainer('app'); 
  }
  getContainer(id) {
    const app = document.getElementById(id);
    if (!app) throw `${id} not found!`;
    return app;
  }
  createElement(tagName) {
    return document.createElement(tagName);
  }
  buildListItem(data) {

    const item = document.createElement('div');
    item.className = 'item'; 
    item.setAttribute('data-id', data.id);

    const input = document.createElement('input');
    input.type = 'text';
    input.value = data.text;
    if (data.completed) {
      input.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data.completed;

    const deleteIconContainer = document.createElement('div');
    deleteIconContainer.className = 'delete-icon';
    deleteIconContainer.setAttribute('data-id', data.id);
    const deleteIcon = document.createElement('i');

    deleteIcon.className = 'far fa-minus-square';
    deleteIconContainer.appendChild(deleteIcon);

    //create item 
    item.appendChild(checkbox);
    item.appendChild(input);
    item.appendChild(deleteIconContainer);

    return item;
  }
  bindRenderList(handler) {
    this.app.addEventListener('click', (e) => {
      if (e.target.id == 'refresh') {
        handler();
      }
    });
  }
  bindItemComplete(handler) {
    this.app.addEventListener('change', (e) => {
      if (e.target.type == 'checkbox') {
        const id = e.target.parentNode.getAttribute('data-id');
        const value = e.target.checked;
        handler(id, value);
      }
    });
  }
  bindItemEdit(handler) {
    this.app.addEventListener('change', (e) => {
      if (e.target.type == 'text') {
        const id = e.target.parentNode.getAttribute('data-id');
        handler(id, e.target.value);
      }
    });
  }
  bindDeleteItem(handler) {
    this.app.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-icon')) {
        const id = e.target.getAttribute('data-id');
        handler(id);
      }
    })
  }
  bindItemAdd(handler) {
    this.app.addEventListener('click', (e) => {
      if (e.target.id == 'addNew') {
        handler();
      }
    });
  }
  buildList(items) {
    const list = this.createElement('div');
    list.className = 'list';
    for (let i = 0; i < items.length; i++) {
      const row = this.buildListItem(items[i]);
      list.appendChild(row);
    }
    return list;
  }
  render(items) {

    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('div');
    header.className = 'header';

    const title = document.createElement('h2');
    title.innerHTML = 'ToDo List';
    header.appendChild(title);

    const refreshIconContainer = document.createElement('div');
    refreshIconContainer.id = 'refresh';

    const refreshIcon = document.createElement('i');
    refreshIcon.className = 'fas fa-sync-alt';
    refreshIcon.id = 'refresh';
    refreshIconContainer.appendChild(refreshIcon);

    header.appendChild(refreshIconContainer);
    container.appendChild(header);
    
    const list = this.buildList(items);
    container.appendChild(list);

    const addNew = document.createElement('div');
    addNew.className = 'add-new';
    addNew.innerHTML = '<i class="far fa-plus-square"></i>';
    addNew.id = "addNew";
    container.appendChild(addNew);

    this.app.innerHTML = '';
    this.app.appendChild(container);
  }
}
