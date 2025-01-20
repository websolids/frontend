function showVerticalMessage(str) {
  if(str.length>7) {
  str= str.slice(0, 7);
  }
if (str[0].toLowerCase() === "s") {
str = str[0].toUpperCase() + str.slice(1);
}
for (let char of str) {
console.log(char);
}
}
showVerticalMessage('strada'); 
