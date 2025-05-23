const addBtn = document.getElementById("add-btn")
const taskField = document.querySelector("[type='text']")
const taskContainer = document.querySelector(".task-list")

const addTask = function(event){
    console.log(event.target)
    var task = taskField.value
    const newElement = document.createElement("p")
    newElement.innerHTML=`<span>${task}</span>`
    taskContainer=appendChild(newElement)
    taskField.value = ""
}


addBtn.addEventListener("click", addTask)
taskField.addEventListener("keyup", addTask)