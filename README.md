# Simple Todo App

An html application that allows the user to create a todo task, add the task to a list, mark the task as completed, and delete the task.

## Functionality

The user can click the add task button to open a modal with a form that asks for a name for a new task as well as a due date. The name is required, but the date is not required. Once the user inputs a valid name along with a valid date if inputed, the user can hit the save button. Now a new task will appear on the todo list. From here a user can click a checkbox besides the task to mark it as completed. The user can also remove a task by clicking its corrisponding delete button.

## Technology

For this project, seperate Javascript files were made for a Todo class, a FormValidator class, a Section class, a TodoCounter class, a Popup class, a PopupWithForm class, and the constant objects. The classes and objects where then exported from their respective files and imported into the index.js file to be called upon at an appropiate time. This was done not only to help clean up the index.js file by keeping long chucks of code in a sepreate file, but also have so that index.html only needs to call index.js a module instead of having to call mulitiple Javascript files. The index.js file also imports the uuid code from an external source inorder to generate a unique id for each todo task. The PopupWithForm class is a child of the Popup class, which will allow the PopupWithForm class to use their parents methods and variables with out rewriting them, while also having unique methods and variables that Popup class does not need.

## Deployment

This project is deployed on GitHub Pages:

-https://chrisowens2244.github.io/se_project_todo-app/
