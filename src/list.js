function List(title, desc, dueDate, priority, noteId, parentProjectId) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.listId = listId;
    this.parentProjectId = parentProjectId;

    setTitle = (newTitle) => {
        this.title = newTitle;
    }
    getTitle = () => {
        return this.title;
    }
    setDesc = (newDesc) => {
        this.desc = newDesc;
    }
    getDesc = () => {
        return this.desc;
    }
    setPriority = (newPriority) => {
        this.priority = newPriority;
    }
    getPriority = () => {
        return this.priority;
    }
    setDueDate = (newDueDate) => {
        this.dueDate = newDueDate;
    }
    getDueDate = () => {
        return this.dueDate;
    }
    setParentProjectId = (newParentProjectId) => {
        this.parentProjectId = newParentProjectId;
    }
    getParentProjectId = () => {
        return this.parentProjectId;
    }
    setListId = (newListId) => {
        this.listId = newListId;
    }
    getListId = () => {
        return this.listId;
    }
}

