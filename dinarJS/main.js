const OriginaltoDoList = [
  { task: "do practice today", status: "In progress" },
  { task: "learn JS today", status: "In progress" },
  { task: "drink power drink", status: "In progress" }
];

OriginaltoDoList.push({ task: "прогуляться", status: "to do" }); 
console.log(OriginaltoDoList)

const filteredtoDoList = OriginaltoDoList.filter(tasks => tasks.status != "In progress") /*по мне сделал проще, ввёл новую константу и теперь задачу можно удалять по типу статуса, либо по названию задачи
const deleteTask = OriginaltoDo.list.filter(tasks => task.task != taskName) */
console.log("Фильтрованные задачи")
console.log(filteredtoDoList)

console.log("Все задачи:")
OriginaltoDoList.forEach((task, index) => { 
console.log(task.task + "-" + task.status);
})


