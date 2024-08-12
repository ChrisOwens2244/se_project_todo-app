import todoCounter from "../pages/index.js";
class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    this._todoCheckboxEl.addEventListener("click", () => {
      todoCounter.updateCompleted(this._todoCheckboxEl.checked);
    });
  }

  _setEventListeners() {
    this._generateCheckboxEl();
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      todoCounter.updateTotal(false);
      if (this._todoCheckboxEl.checked) {
        todoCounter.updateCompleted(false);
      }
    });
  }

  getView() {
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");

    todoNameEl.textContent = this._data.name;
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
