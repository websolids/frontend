const todoList = {
    tasks: {
      "do practice today": "In progress",
      "learn JS today": "In progress",
      "drink power drink": "In progress",
    },

 changeStatus(task, status)  {
this.tasks[task] = status
},
addTask(task) {
this.tasks[task] = "to do"
},
deleteTask(task) {
delete this.tasks[task]
},
showlist() {
console.log(this.tasks)
},
}

todoList.addTask("watch shameless")
todoList.changeStatus("drink power drink", "done")
todoList.deleteTask("learn JS today")
todoList.showlist()