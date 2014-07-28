	
function demo(){
	//'use strict';


	var fn = function(){};

	
	var xxx = 1;
	
	var data = [1,2, fn];
	var data2 = new Array();

	console.log(data);


	var o = {item: 1, data2: data};

	console.log(o);



	data = 'Some other data';
	console.log(data);


o = undefined;	
	if (o){
		console.log("o is true");
	} else{
		console.log("o is false");
	}
	
	data = undefined;
	if (data && data.length){
		console.log("data is not empty");
	} else{
		console.log("DATA IS EMPTY");
	}
	
	
	if (false === "false"){
		console.log("equal");
	} else {
		console.log("Not equal");
	}
	
	
	if (o){
	}

	if (!!o){
	}
	
	
	data = [1,2,3,4,5];
	data[8] = 8;
	for	(var i = 0; i < data.length; i++){
		console.log(data[i]);
	}	

	data.forEach(function(item){
		console.log(item);
		console.log(arguments.length, arguments);
	});
	
	
	function add() {
		var sum = 0;
		for(var i=0; i< arguments.length; i++){
			sum += (+arguments[i]);
		}
		return sum;
	}
	
	console.log(add(1,2));
	console.log(add(1));
	console.log(add(1,2, 3));
	console.log(add(1,"2", 3));
	
	
	function fn2() {
		return {
			x:1
		};
	}
	
	var o = fn2();
	console.log(o);


	var date = new Date(2014, -1, -11131);
	
	console.log(date);
	
	console.log(JSON.stringify(date))
	
	
	function outer(){
		var x = 1;
		
		return function inner(){
			console.log(x);
			x++;
		}
	}
	
	
	var fnInner = outer();
	fnInner();
	fnInner();
	fnInner();


	function Dog(name){
		if (this === window){
			throw new Error("Please use new!");
		}
		
		this.name = name;
		console.log(this);
		//return this; Don't do this!!!!!!
	}
	
	Dog.prototype.bark = function(){
		console.log(this.name + " barks");
	}
	
	
	var pluto = new Dog("pluto");
	var brutus = new Dog("Brutus");
	
	console.log(pluto.name);
	// pluto.bark();
}

demo();
