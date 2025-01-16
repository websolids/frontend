const phoneBook = {
    list: {
      "Анастасия": 41589164,
      "Анна": 41687147918,
      "Дарья": 9514161616
    },
    add(name, number) {
      this.list[name] = number; 
    },
    delete(name) {
      delete this.list[name]; 
    }
  };
  
  
  phoneBook.add("Алла Витальевна", 9413415135);
  console.log(phoneBook.list['Алла Витальевна']); 
  
  
  phoneBook.delete("Анастасия");
  console.log(phoneBook.list['Анастасия']); 
  
  
  for (const name in phoneBook.list) {
    console.log(name + " - " + phoneBook.list[name]);
  }
  
  