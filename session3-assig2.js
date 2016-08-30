
function add(x,y)
{ 
	var z= 'hi'; 
	alert('private variable add function:'+z); 
	return console.log('Addition : '+(x+y));
 }
function sub(x,y)
{ 
	var z= 'hi'; 
	alert('private variable sub function:'+z);
	 return console.log('Subtraction : '+(x-y));
	  }
function mul(x,y)
{ 
	var z= 'hi';
	 alert('private variable mul function:'+z); 
	 return console.log('Multiplication : '+x*y);
	  }
function div(x,y){
 var z= 'hi'; 
 alert('private variable div function:'+z);
  return console.log('Division : '+x/y); 
}

var a = 10, b = 5;
add(a,b);
sub(a,b);
mul(a,b);
div(a,b);

