

function car(make,model,year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.carDetails  = function(){
		alert(this.make + this.model + this.year);
	}
}
var car1 = new car("Toyoto","Rav4" ,2000);
var car2 = new car("Honda","Civic",1999);
car1.carDetails();
car2.carDetails();