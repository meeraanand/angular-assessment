function person(name){
	this.name = name;

}
function student(){

}
var person1 = new person("Meera");
student.prototype = person1;
student.prototype.name="Dhanush";
