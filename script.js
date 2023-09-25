document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = ""; // Clear the input field

            listItem.querySelector(".delete").addEventListener("click", function() {
                listItem.remove(); // Remove the task when the delete button is clicked
            });
        }
    });

    // Allow adding tasks by pressing Enter
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
