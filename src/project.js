function Project(name, lists, projectId) {
    this.name = name;
    this.lists = lists;
    this.projectId = projectId;
}


export function createAndStoreProject(projId, projName) {
    let newProject = new Project(projName, { 'lCounter': '0' }, projId);
    localStorage.setItem(projId.toString(), JSON.stringify(newProject));
}

export function getAllProjects() {
    let allProjects = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != 'pCounter') {
            let newProject = JSON.parse(localStorage.getItem(localStorage.key(i)));
            allProjects.push(newProject);
        }
    }
    return allProjects;
}

export function getProjectIndex(projectId) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    for (let i = 1; i < localStorage.length; i++) {
        if (localStorage.key(i) == newProject.name) {
            return i - 1;
        }
    }
}

export function getSingleProject(projectId) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    return newProject;
}

export function deleteProject(projectId) {
    localStorage.removeItem(projectId);
}

export function addListToProject(projectId, list) {
    let newProject = JSON.parse(localStorage.getItem(projectId.toString()));
    newProject.lists[list.listId] = list;
    localStorage.setItem(projId.toString(), JSON.stringify(newProject));
}

export function getProjectCounter() {
    return parseInt(localStorage.getItem('pCounter'));
}

export function setProjectCounter(value) {
    localStorage.setItem('pCounter', value.toString());
}