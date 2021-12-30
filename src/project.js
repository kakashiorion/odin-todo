function Project(name, lists, projectId) {
    this.name = name;
    this.lists = lists;
    this.projectId = projectId;

    setName = (newName) => {
        this.name = newName;
    }
    getName = () => {
        return this.name;
    }
    setLists = (newLists) => {
        this.notes = newLists;
    }
    getLists = () => {
        return this.lists;
    }
    setProjectId = (newProjectId) => {
        this.projectId = newProjectId;
    }
    getProjectId = () => {
        return this.projectId;
    }


    this.removeLists = function () {
        this.lists = [];
    }
}