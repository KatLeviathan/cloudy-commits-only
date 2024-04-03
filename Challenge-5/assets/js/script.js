// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() { //1
//randomaize some numbers to make a task id
}

// Todo: create a function to create a task card
function createTaskCard(task) { //3
//how would I create a new element
//create a section or div
//put in title, date, description, and a delete button on there
//append to To Do portion 
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() { //4
    //make cards remder
        //populate-> which means that we make them show in another place
    // make dragable
        //annimation or if not bootstrap?  if not YOUTUBE / GOOGLE
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){ //2

    //be able to add ot localstaorage 
//access local storage, 
//get the unque ID generateTaskId()
//Key/value pair (taskBoardid, task)
//1. put items in local storage then create task card
//creatTeataskCard(task)
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){ //5
//find the id that matches to the one you want to delete
//find them in localstorage 
//remove from local storage
//run task card again to reflect local storage change
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//put intoanother section 
//YOUTUBE ar Bootcamp spot
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
//local storage 
//if empty ignroe else for each item with thisid pattern,createTaskCard(task)
});
