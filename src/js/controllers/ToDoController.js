export default class ToDoController {
  constructor(model, view) {
    this.view = view;
    this.model = model;
    this.model.bindDataChanged(this.bindDataChanged.bind(this));
    this.view.bindDeleteItem(this.bindDeleteItem.bind(this));
    this.view.bindRenderList(this.bindRenderList.bind(this));
    this.view.bindItemEdit(this.bindItemEdit.bind(this));
    this.view.bindItemComplete(this.bindItemComplete.bind(this));
    this.view.bindItemAdd(this.bindItemAdd.bind(this));

    this.bindDataChanged(this.model.items);
  }
  bindDataChanged(data) {
    this.view.render(data);
  }
  bindDeleteItem(id) {
    this.model.deleteItem(id);
  }
  bindRenderList() {
    this.model.renderList();
  }
  bindItemEdit(id, value) {
    this.model.editItem(id, value);
  }
  bindItemComplete(id, completed) {
    this.model.itemComplete(id, completed);
  }
  bindItemAdd() {
    this.model.itemAdd();
  }
}
