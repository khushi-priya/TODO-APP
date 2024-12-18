document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input");
    const todoList = document.querySelector(".todo-list");
  
    // Handle form submission to add a new task
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form refresh
  
      const taskText = input.value.trim();
      if (!taskText) {
        alert("Please enter a task!");
        return;
      }
  
      // Create a new TODO item
      const todoItem = document.createElement("li");
      todoItem.className = "todo";
  
      // Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          todoItem.classList.add("completed");
        } else {
          todoItem.classList.remove("completed");
        }
      });
  
      // Label for the task
      const label = document.createElement("label");
      label.textContent = taskText;
  
      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      //deleteButton.textContent = "Delete"
      deleteButton.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
      });
  
      // Append elements to the TODO item
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
      todoItem.appendChild(deleteButton);
  
      // Add the new item to the list
      todoList.appendChild(todoItem);
  
      // Clear the input field
      input.value = "";
    });
  });
  