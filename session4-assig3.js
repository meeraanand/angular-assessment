	var animal = { eats: true }

function Rabbit(name) {

  this.name = name;
}

Rabbit.__proto__ == animal
var rabbit = new Rabbit('John')

console.log( rabbit.eats );