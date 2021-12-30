import './project.js';
import './list.js';

// Main Container
let container = document.getElementById("container");

// Header (Static app headline)
let header = document.createElement("div");
header.id = 'header';
header.innerHTML = 'To Do List';
container.append(header);

// Content UI (This will show all the dynamic content)
let content = document.createElement("div");
content.id = 'content';

// Project Pane (which will show projects and lists list on the left)
let projectPane = document.createElement("div");
projectPane.id = 'projectPane';
// projectPane.innerHTML = 'My Projects';

// list Pane (which will show the list details on the right)
let listPane = document.createElement("div");
listPane.id = 'listPane';

content.append(projectPane);
content.append(listPane);
container.append(content);

//list title div
let listTitleDiv = document.createElement("div");
listTitleDiv.id = "listTitle";

//list DueDate Div
let listDueDateDiv = document.createElement("div");
listDueDateDiv.id = "listDueDate";

//list Content Div
let listContentDiv = document.createElement("div");
listContentDiv.id = "listContent";

//list Action buttons
let listActionDiv = document.createElement("div");
listActionDiv.id = "listAction";

//list parent project
let listparentProjectDiv = document.createElement("div");
listparentProjectDiv.id = "listParentProject";
listparentProjectDiv.innerHTML = "Parent Project:";

function updateProjectDropdownValues() {
    let projectList = document.getElementById('projectPane').getElementsByClassName('projects');
    listParentProjectDropdown.innerHTML = "";
    for (let item of projectList) {
        console.log(item);
        let dropdownItem = document.createElement("option");
        dropdownItem.classList.add("projectDropdownValue");
        dropdownItem.value = item.firstChild.innerText;
        dropdownItem.innerHTML = item.firstChild.innerText;
        listParentProjectDropdown.append(dropdownItem);
    }
}

//Dropdown
let listParentProjectDropdown = document.createElement("select");
listParentProjectDropdown.id = "listParentProjectDropdown";
listparentProjectDiv.append(listParentProjectDropdown);

listPane.append(listTitleDiv);
listPane.append(listDueDateDiv);
listPane.append(listContentDiv);
listPane.append(listActionDiv);
listPane.append(listparentProjectDiv);

// Button to add a new project
let newProjectButton = document.createElement('button');
newProjectButton.innerHTML = 'NEW PROJECT';
newProjectButton.id = 'newProjectButton';
content.append(newProjectButton);

//Button to add a new To do List
let newListButton = document.createElement('button');
newListButton.innerHTML = 'CREATE A LIST';
newListButton.id = 'newListButton';
content.append(newListButton);

//Ask for project name when a new project is being added
newProjectButton.addEventListener("click", () => {
    let newProjName = prompt('Enter Project Name');
    if (newProjName != '' && newProjName != null) {
        addProjectDivToPane(newProjName);
    }
});

//Function to add a project Div
function addProjectDivToPane(projectTitle) {
    let newProject = document.createElement('div');
    newProject.id = 'projId' + (projectPane.childNodes.length + 1);
    newProject.classList.add('projects');
    newProject.append(document.createElement('p'));
    newProject.firstChild.innerHTML = projectTitle;
    projectPane.append(newProject);
    return newProject.id;
}

//Function to add a list Div
function addlistDivToProjectDiv(listTitle, listDueDate, projectDivId) {
    let newlist = document.createElement('div');
    newlist.classList.add('lists');
    newlist.classList.add(projectDivId.toString());
    newlist.id = 'listId' + (document.getElementById(projectDivId).childNodes.length).toString() + projectDivId;

    let titleSpan = document.createElement('span');
    titleSpan.classList.add('titleSpan');
    titleSpan.innerHTML = listTitle;

    let dueSpan = document.createElement('span');
    dueSpan.innerHTML = listDueDate;
    dueSpan.classList.add('dueDateSpan');

    newlist.addEventListener("click", () => {
        showListDetails(newlist.id);
    });

    newlist.append(titleSpan);
    newlist.append(dueSpan);
    document.getElementById(projectDivId).append(newlist);
    return newlist.id;
}

function showListDetails(listId) {
    const list = document.getElementById(listId);
    listTitleDiv.innerHTML = list.firstChild.innerHTML;
    listDueDateDiv.innerHTML = list.children[1].innerHTML;
    console.log(list.parentNode.firstChild.innerHTML);
    listParentProjectDropdown.selectedIndex = parseInt(list.parentNode.id.toString().substring(6,)) - 1;

}




//TESTING
let projId = addProjectDivToPane('ABCD');
addlistDivToProjectDiv('pqwe', '23 Dec', projId);
addlistDivToProjectDiv('wer', '25 Dec', projId);
addlistDivToProjectDiv('wesdfdsfgr', '25 Dec', projId);
addlistDivToProjectDiv('wer', '25 Dec', projId);
addlistDivToProjectDiv('wer', '25 Dec', projId);
addlistDivToProjectDiv('wersdgdggggghhsdfdg', '25 Dec', projId);

let projId2 = addProjectDivToPane('EFGH');
addlistDivToProjectDiv('wer', '25 Dec', projId2);
addlistDivToProjectDiv('wer', '25 Dec', projId2);
addlistDivToProjectDiv('wer', '25 Dec', projId2);

addProjectDivToPane('PQRS');
addProjectDivToPane('WXYZ');
updateProjectDropdownValues();

