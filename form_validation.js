document.getElementById("login-modal").onclick = function() {myFunction()};
function myFunction() {

var email=document.getElementById("login-email").value;
var re = /\S+@\S+\.\S+/;
var password=document.getElementById("login-password").value;

if(email==""){	
	document.getElementById("error").innerHTML="Please Enter valid Email ID or Mobile Number!";
	return;
	}
	
	if(!/\S+@\S+\.\S+/.test(email)){
	document.getElementById("error").innerHTML="Please Enter valid E-mail id!";
	return;
	}else{
	document.getElementById("error").innerHTML="";
	}
	
	if(password==""){
	document.getElementById("error1").innerHTML="Please Enter Password!";
	return;
	}else if(password.length<=5){
		document.getElementById("error1").innerHTML="Password-min 6  Characters!";
	return;
	}else{
	document.getElementById("error1").innerHTML="";
	}
}
