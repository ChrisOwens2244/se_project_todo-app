import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Section from "../utils/Section.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const todoCounter = new TodoCounter({
  todos: initialTodos,
  selector: ".counter__text",
});

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  const checkboxEl = todoElement.querySelector(".todo__completed");
  const deleteBtn = todoElement.querySelector(".todo__delete-btn");
  checkboxEl.addEventListener("click", () => {
    todoCounter.updateCompleted(checkboxEl.checked);
  });
  deleteBtn.addEventListener("click", () => {
    todoCounter.updateTotal(false);
    if (checkboxEl.checked) {
      todoCounter.updateCompleted(false);
    }
  });
  return todoElement;
};

const todoSection = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    todoSection.addItem(todo);
  },
  containerSelector: ".todos__list",
});
todoSection.renderItems();

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputList) => {
    const name = inputList[0].name;
    const date = new Date(inputList[1].date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();

    const values = { id, name, date };
    const todo = generateTodo(values);
    todoSection.addItem(todo);
    addTodoPopup.close();
    todoCounter.updateTotal(true);
    validator.resetValidation();
  },
});

addTodoPopup.setEventListeners();
const addTodoButton = document.querySelector(".button_action_add");
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const validator = new FormValidator(
  validationConfig,
  document.querySelector(".popup__form")
);
validator.enableValidation();
