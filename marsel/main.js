const client = {
    name: "Ilnaz",
    age: 22,
    address: {
      city: "Nab Chelny",
    }
  };
 
  
const clientCopy = structuredClone(client);
console.log(client !== clientCopy); 

client.name = "Kamil";
client.address.city = "Kazan";


console.log(client.name);
console.log(clientCopy.name);

console.log(client.age);
console.log(clientCopy.age);

console.log(client.address.city);
console.log(clientCopy.address.city);

