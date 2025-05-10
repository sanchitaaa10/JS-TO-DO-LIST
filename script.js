const inputText = document.querySelector("#input-text");
const addTaskButton = document.querySelector("#add-task-button");
var taskName = "abc"

inputText.addEventListener("keyup", (e) => {
    taskName = e.target.value;
});

const taskContainer = document.querySelector("#task-container")

addTaskButton.addEventListener("click", () => {
    const taskItem = document.createElement("div");

    const deleteButton = document.createElement("div");
    deleteButton.innerhtml = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })


    taskItem.classList.add("#task-item");
    taskItem.innerHTML = taskName;
    taskItem.append(deleteButton);
    taskContainer.appendChild(taskItem);
    taskName = "";
    inputText.value = "";

})