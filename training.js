$(document).ready(function () {  
    triggeral2(); 
    });

function triggeral2(){
var a = 10;
var b = 20;
$('.body').append('<div>Value of a is ' +a +' at line 6</div><div>Value of b '+b+' is at line 7 </div>');
//sdfjisfgjhogkgefofgh
function run(a,b){
    var a  = a * a;
	var b = b * a;
	var c = a * b;
	$('.body').append('<div>Value of  a  within function  on line 11 is '+a+'</div><div>Value of b within function on line 12 is '+b+' </div>');
	return c
	
}
$('.topic').text('Learning Sciope in JS');
var c = run(a,b);
$('.body').append('<div>Value of c '+c+'</div>')	
}