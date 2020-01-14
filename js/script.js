function plus () {
	let num1,num2,result;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);

	result = num1* num2* 300;
	let res = document.getElementById('res');

	res.value = result;
};
menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === "top-nav") {
		x.className += " responsive";
	}else {
		x.className = "top-nav";
	}
};