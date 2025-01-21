const toDoList = Array.of(
  'принять доставку',
  'сделать задачу по массивам',
  'покушать'
)
toDoList[1] = 'забрать заказ'
console.log(toDoList)


const lastTask = toDoList.pop()
console.log(lastTask)
console.log(toDoList)


const task = toDoList.push('отдохнуть')
console.log(toDoList)


toDoList.splice(2, 0, 'посадить ребёнка', 'вырастить машину')
console.log(toDoList)


for (const task of toDoList) {
console.log(task)
}