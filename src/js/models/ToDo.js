export default class ToDo {
  constructor() {
    this.items = [
      { id: 1, text: 'test 1', completed: false },
      { id: 2, text: 'test 2', completed: false },
      { id: 3, text: 'test 3', completed: false },
      { id: 4, text: 'test 4', completed: false },
    ];
  }
  _commit(items) {
    this.items = items;
    this.onDataChanged(items);
  }
  getItems() {
    return this.items;
  }
  bindDataChanged(callback) {
    this.onDataChanged = callback;
  }
  deleteItem(id) {
      const items = this.items.filter(i => i.id != id);
      this._commit(items);
  }
  editItem(id, value) {
    const index = this.items.findIndex(
      i => i.id == id
    );
    this.items[index].text = value;
  }
  addItem(item) {
    this.items.push(item);
  }
  renderList() {
    this.onDataChanged(this.items);
  }
  itemComplete(id, completed) {
    const index = this.items.findIndex(
      i => i.id == id
    );
    this.items[index].completed = completed;
    this.renderList();
  }
  itemAdd() {
    const ids = this.items.map(item => {
      return item.id;
    });
    const id = Math.max(...ids) + 1;
    const items = this.items;
    items.push({
      id: id,
      text: 'new item',
      completed: false,
    });
    this._commit(items);
  }
}
