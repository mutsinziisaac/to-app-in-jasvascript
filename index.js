let save = document.getElementById("push");
let newtask = document.getElementById("newtask");
let tasks = document.getElementById("task");

save.addEventListener("click",function(){
    const taskText = newtask.value;
    if(taskText.trim() === ""){
        alert("enter to do!");
        return;
    }
    const task = document.createElement("li");
    task.innerHTML = `
    <span class ="task-text">${taskText}</span>
    <button class="task-delete">delete</button>
    `;
     tasks.appendChild(task);
     newtask.value = "";
     const deleteButton = task.querySelector(".task-delete");
     deleteButton.addEventListener("click",function() {
        task.remove();
     })  
})



