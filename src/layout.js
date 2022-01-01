// import './project.js';
import * as listFunctions from "./list.js";
import * as projectFunctions from "./project.js";

// Main Container
let container = document.getElementById("container");

// Header (Static app headline)
let header = document.createElement("div");
header.id = "header";
header.innerHTML = "To Do List";
container.append(header);

// Content UI (This will show all the dynamic content)
let content = document.createElement("div");
content.id = "content";

// Project Pane (which will show projects and lists list on the left)
let projectPane = document.createElement("div");
projectPane.id = "projectPane";
// projectPane.innerHTML = 'My Projects';

// List Pane (which will show the list details on the right)
let listPane = document.createElement("div");
listPane.id = "listPane";

content.append(projectPane);
content.append(listPane);
container.append(content);

//list title div
let listTitleDiv = document.createElement("input");
listTitleDiv.id = "listTitle";
listTitleDiv.type = "text";

//list DueDate Div
let listDueDateDiv = document.createElement("input");
listDueDateDiv.id = "listDueDate";
listDueDateDiv.type = "text";

//list Content Div
let listContentDiv = document.createElement("input");
listContentDiv.id = "listContent";
listContentDiv.type = "text";

//List action buttons Div
let listActionDiv = document.createElement("div");
listActionDiv.id = "listAction";

//Save list button
let saveListButton = document.createElement("button");
saveListButton.id = "saveListButton";
saveListButton.innerHTML = "SAVE";
listActionDiv.append(saveListButton);
saveListButton.onclick = () => {
    updateList();
    showExistingProjects();
};

//Function to update currently open list
function updateList() {
    listFunctions.updateListDetails(
        listTitleDiv.value,
        listContentDiv.value,
        listDueDateDiv.value,
        currentList.listId,
        currentList.parentProjectId
    );
    if (
        listParentProjectDropdown.value !=
        projectFunctions.getSingleProject(currentList.parentProjectId).name
    ) {
        let projects = projectFunctions.getAllProjects();
        for (let p = 0; p < projects.length; p++) {
            if (projects[p].name == listParentProjectDropdown.value) {
                let newProjId = projects[p].projectId;
                let newId = listFunctions.updateListParent(
                    currentList.listId,
                    currentList.parentProjectId,
                    newProjId
                );
                currentList = listFunctions.getSingleList(newId, newProjId);
                break;
            }
        }
    }
}

//Delete list button
let deleteListButton = document.createElement("button");
deleteListButton.id = "deleteListButton";
deleteListButton.innerHTML = "DELETE";
listActionDiv.append(deleteListButton);
deleteListButton.onclick = () => {
    listFunctions.removeList(currentList.listId, currentList.parentProjectId);
    currentList = null;
    showExistingProjects();
    clearCurrentListUI();
};

function clearCurrentListUI() {
    listTitleDiv.value = "";
    listDueDateDiv.value = "";
    listContentDiv.value = "";
    listParentProjectDropdown.value = "";
}

//list parent project bar
let listparentProjectDiv = document.createElement("div");
listparentProjectDiv.id = "listParentProject";
listparentProjectDiv.innerHTML = "Parent Project:";

function updateProjectDropdownValues() {
    let projectList = projectFunctions.getAllProjects();
    listParentProjectDropdown.innerHTML = "";
    for (let item of projectList) {
        let dropdownItem = document.createElement("option");
        dropdownItem.classList.add("projectDropdownValue");
        let title = item.name;
        dropdownItem.value = title;
        dropdownItem.innerHTML = title;
        listParentProjectDropdown.append(dropdownItem);
    }
}

//Parent project Dropdown
let listParentProjectDropdown = document.createElement("select");
listParentProjectDropdown.id = "listParentProjectDropdown";
listparentProjectDiv.append(listParentProjectDropdown);

listPane.append(listTitleDiv);
listPane.append(listDueDateDiv);
listPane.append(listContentDiv);
listPane.append(listActionDiv);
listPane.append(listparentProjectDiv);

// Button to add a new project
let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "NEW PROJECT";
newProjectButton.id = "newProjectButton";
content.append(newProjectButton);

//Ask for project name when a new project is being added
newProjectButton.addEventListener("click", () => {
    let newProjName = prompt("Enter Project Name");
    if (newProjName && newProjName.trim()) {
        let newProjectId = addProjectDivToPane(newProjName);
        projectFunctions.createAndStoreProject(newProjectId, newProjName);
        updateProjectDropdownValues();
    }
});

//Button to add a new To do List
let newListButton = document.createElement("button");
newListButton.innerHTML = "CREATE A LIST";
newListButton.id = "newListButton";
content.append(newListButton);

//Function to add a project Div
function addProjectDivToPane(projectTitle) {
    let newProject = document.createElement("div");
    let pCounter = projectFunctions.getProjectCounter();
    pCounter += 1;
    newProject.id = "projId" + pCounter;
    newProject.classList.add("projects");
    newProject.append(document.createElement("div"));
    newProject.firstChild.classList.add("projectTitle");
    newProject.firstChild.innerHTML = projectTitle;
    newProject.firstChild.append(...addProjectActionButtons(newProject.id));
    projectPane.append(newProject);
    projectFunctions.setProjectCounter(pCounter);
    return newProject.id;
}

//Function for project action buttons
function addProjectActionButtons(projId) {
    //Add list button
    let addListButton = document.createElement("button");
    addListButton.classList.add(projId);
    addListButton.classList.add("addListButton");
    addListButton.innerHTML = "+";
    addListButton.onclick = () => {
        let newListTitle = prompt("Adding a new list. Give it a title:");
        if (newListTitle && newListTitle.trim()) {
            let listId = addlistDivToProjectDiv(newListTitle, "", projId);
            listFunctions.createAndStoreList(
                newListTitle,
                "",
                "",
                listId,
                projId
            );
            showListDetails(listId, projId);
        }
    };
    addListButton.onmouseenter = () => {
        addListButton.innerHTML = "+ List";
    };
    addListButton.onmouseleave = () => {
        addListButton.innerHTML = "+";
    };
    //Delete project button
    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add(projId);
    deleteProjectButton.classList.add("deleteProjectButton");
    deleteProjectButton.innerHTML = "-";
    deleteProjectButton.onclick = () => {
        if (
            Object.keys(projectFunctions.getSingleProject(projId).lists)
                .length == 1
        ) {
            projectFunctions.deleteProject(projId);
            showExistingProjects();
        } else {
            showDeleteProjectModal(
                "Are you sure you want to delete this?",
                "This project contains some lists. You will lose your data if you delete this project.",
                "Delete",
                "No",
                projId
            );
        }
    };
    return [addListButton, deleteProjectButton];
}

//Modal to display when clicking an action
let modal = document.createElement("div");
modal.id = "modal";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalTitle";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalContent";
modal.append(document.createElement("div"));
modal.lastChild.id = "modalButtons";
modal.lastChild.append(document.createElement("button"));
modal.lastChild.append(document.createElement("button"));
modal.lastChild.firstChild.id = "modalButton1";
modal.lastChild.lastChild.id = "modalButton2";
content.append(modal);

//Function to display delete project modal
function showDeleteProjectModal(title, content, buttonYes, buttonNo, projId) {
    modal.style.display = "grid";
    modal.firstChild.innerText = title;
    modal.childNodes[1].innerText = content;
    modal.lastChild.firstChild.innerText = buttonYes;
    modal.lastChild.firstChild.style.backgroundColor = "#EF626C";
    modal.lastChild.lastChild.innerText = buttonNo;
    modal.lastChild.lastChild.style.backgroundColor = "white";

    modal.lastChild.firstChild.onclick = () => {
        modal.style.display = "none";
        projectFunctions.deleteProject(projId);
        showExistingProjects();
    };
    modal.lastChild.lastChild.onclick = () => {
        modal.style.display = "none";
    };
}

//Function to add a list Div
function addlistDivToProjectDiv(listTitle, listDueDate, projectDivId) {
    let newlist = document.createElement("div");
    newlist.classList.add("lists");
    newlist.classList.add(projectDivId.toString());
    let lCounter = listFunctions.getListCounter(projectDivId);
    lCounter += 1;
    newlist.id = "listId" + lCounter.toString() + projectDivId;
    listFunctions.setListCounter(projectDivId, lCounter);

    let titleSpan = document.createElement("span");
    titleSpan.classList.add("titleSpan");
    titleSpan.innerHTML = listTitle;

    let dueSpan = document.createElement("span");
    dueSpan.innerHTML = listDueDate;
    dueSpan.classList.add("dueDateSpan");

    newlist.addEventListener("click", () => {
        showListDetails(newlist.id, projectDivId);
    });

    newlist.append(titleSpan);
    newlist.append(dueSpan);
    document.getElementById(projectDivId).append(newlist);
    return newlist.id;
}
let currentList = null;
//Function to show selected list's details
function showListDetails(listId, projId) {
    currentList = listFunctions.getSingleList(listId, projId);
    listTitleDiv.value = currentList.title;
    listDueDateDiv.value = currentList.dueDate;
    listContentDiv.value = currentList.desc;
    let projects = document.getElementsByClassName("projects");
    for (let p = 0; p < projects.length; p++) {
        if (projects[p].id == projId) {
            listParentProjectDropdown.selectedIndex = p;
            break;
        }
    }
    let allLists = document.getElementsByClassName("lists");
    for (let item of allLists) {
        item.style.backgroundColor = "white";
    }
    let thisList = document.getElementById(listId);
    thisList.style.backgroundColor = "#84dccf";
}

//Function to load all existing projects from storage
function showExistingProjects() {
    projectPane.innerHTML = "";
    let allProjects = projectFunctions.getAllProjects();
    for (let item of allProjects) {
        showProjectDiv(item);
    }
}

//Function to show a project from storage on UI
function showProjectDiv(projectObject) {
    let newProject = document.createElement("div");
    newProject.id = projectObject.projectId;
    newProject.classList.add("projects");
    newProject.append(document.createElement("div"));
    newProject.firstChild.classList.add("projectTitle");
    newProject.firstChild.innerHTML = projectObject.name;
    newProject.firstChild.append(...addProjectActionButtons(newProject.id));
    projectPane.append(newProject);
    let lists = listFunctions.getAllLists(projectObject.projectId);
    for (let child of lists) {
        showListDiv(child);
    }
}

//Function to show a list from storage on UI
function showListDiv(listObject) {
    let newlist = document.createElement("div");
    newlist.classList.add("lists");
    newlist.classList.add(listObject.parentProjectId);
    newlist.id = listObject.listId;

    let titleSpan = document.createElement("span");
    titleSpan.classList.add("titleSpan");
    titleSpan.innerHTML = listObject.title;

    let dueSpan = document.createElement("span");
    dueSpan.innerHTML = listObject.dueDate;
    dueSpan.classList.add("dueDateSpan");

    if (currentList && listObject.listId == currentList.listId) {
        newlist.style.backgroundColor = "#84dccf";
    }

    newlist.addEventListener("click", () => {
        showListDetails(newlist.id, listObject.parentProjectId);
    });

    newlist.append(titleSpan);
    newlist.append(dueSpan);
    document.getElementById(listObject.parentProjectId).append(newlist);
    return newlist.id;
}

//Execute on page load
if (localStorage.length == 0) {
    projectFunctions.setProjectCounter(0);
}
showExistingProjects();
updateProjectDropdownValues();
