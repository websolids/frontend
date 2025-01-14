const phoneBook = {
    
        "Ruslan": 545235455,
        "Mother": 965685863,
        "Father": 880055355,
        "Bro": 65656566556
        }
    console.log(phoneBook)
const copyPhoneBook = phoneBook; 
copyPhoneBook['Ernar'] = +71923120803912
console.log(phoneBook)

const original = {
    name: "Динар",
    surname: "Габдрахманов",
    age: 21,
    city: "Казань"
}
const copy = structuredClone(original)
console.log(copy !== original)

console.log(copy.name)
console.log(copy.surname)
console.log(copy.age)
console.log(copy.city)

original.name = "Юный"
original.surname = "Фронтенд разработчик JS"
console.log("Ориг", copy)
console.log("Пока не сбылось", original)