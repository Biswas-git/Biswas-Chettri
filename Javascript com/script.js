const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Don't add empty tasks
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Click on the task to mark it done
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // prevents the "done" toggle when deleting
    li.remove();
  });

  // Add the delete button to the list item
  li.appendChild(deleteBtn);

  // Add the list item to the list
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = "";
}

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Also add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});