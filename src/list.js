function List(title, desc, dueDate, listId, parentProjectId) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.listId = listId;
    this.parentProjectId = parentProjectId;
}


export function createAndStoreList(listTitle, listDesc, listDueDate, listId, parentProjectId) {
    let newList = new List(listTitle, listDesc, listDueDate, listId, parentProjectId);
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    parentProject.lists[listId] = newList;
    localStorage.setItem(parentProjectId.toString(), JSON.stringify(parentProject));
}

export function getAllLists(parentProjectId) {
    let newProject = JSON.parse(localStorage.getItem(parentProjectId.toString()));
    let allLists = [];
    for (let item in newProject.lists) {
        if (item != 'lCounter') {
            allLists.push(newProject.lists[item])
        }
    }
    return allLists;
}

export function getSingleList(listId, parentProjectId) {
    let newProject = JSON.parse(localStorage.getItem(parentProjectId.toString()));
    return newProject.lists[listId];
}

export function getListCounter(parentProjectId) {
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    return parseInt(parentProject.lists['lCounter']);
}

export function setListCounter(parentProjectId, value) {
    let parentProject = JSON.parse(localStorage.getItem(parentProjectId));
    parentProject.lists['lCounter'] = value.toString();
    localStorage.setItem(parentProjectId.toString(), JSON.stringify(parentProject));
}

export function updateListDetails(title, desc, dueDate, listId, parentProjectId) {
    let newProject = JSON.parse(localStorage.getItem(parentProjectId.toString()));
    let newList = newProject.lists[listId];
    newList.title = title;
    newList.desc = desc;
    newList.dueDate = dueDate;
    newProject.lists[listId] = newList;
    localStorage.setItem(parentProjectId.toString(), JSON.stringify(newProject));
}

export function updateListParent(listId, oldParentProjectId, newParentProjectId) {
    let oldProject = JSON.parse(localStorage.getItem(oldParentProjectId.toString()));
    let newProject = JSON.parse(localStorage.getItem(newParentProjectId.toString()));
    let newList = oldProject.lists[listId];
    delete oldProject[listId];
    let lc = getListCounter(newParentProjectId);
    lc += 1;
    let newListId = 'listId' + lc.toString() + newParentProjectId.toString();
    setListCounter(newParentProjectId, lc);
    newList.listId = newListId;
    newList.parentProjectId = newParentProjectId;
    newProject.lists[newListId] = newList;
    localStorage.setItem(newParentProjectId.toString(), JSON.stringify(newProject));
}