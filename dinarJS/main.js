const todoList = {
    tasks: {
      "do practice today": "In progress",
      "learn JS today": "In progress",
      "drink power drink": "In progress",
    },

 changeStatus:(task, status) =>  {
todoList.tasks[task] = status
},
addTask:(task) => {
todoList.tasks[task] = "to do"
},
deleteTask:(task) => {
delete todoList.tasks[task]
},
showlist:() => {
console.log(todoList.tasks)
},
}

todoList.addTask("watch shameless")
todoList.changeStatus("drink power drink", "done")
todoList.deleteTask("learn JS today")
todoList.showlist()