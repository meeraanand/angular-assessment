function outerFunc(param){
	
  var innerFunc = function (input){
     
    var multiplication = input*param;
     console.log('multiplication of input and param is '+multiplication);

  }
  return innerFunc;
}
var closureFunc = outerFunc(12);
closureFunc(4);  


