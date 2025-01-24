const number = [2, 4, 6, 8, 10, 12, 14, 16]; //Первая задачка
number.forEach(number => {
  console.log(`Number is ${number}`);
});


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion']; //вторая задача
const longWord = animals.find(word => word.length>7)
console.log(longWord)


const numbers = [1, 11, -2, 3, -10, 4]     //третья задача
const negativeNumbers = numbers.filter(numbers => numbers<0)
console.log(negativeNumbers)


const num = [1, 11, -2, 3, -10, 4];  //Четвёртая
const absoluteValues = num.map(number => Math.abs(number));

console.log(absoluteValues);


const  digit = [1, 11, -2, 3, -10, 4];  // пятая
const sortedDigit = digit.sort((a, b) => a - b);
console.log(sortedDigit); 
