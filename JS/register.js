const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');

function showError(input,message){
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
 }

 function showSuccess(input){
 	const formControl = input.parentElement;
   formControl.className = 'form-control success';
 }

 function isValidEmail(email){
 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }

 function passwordMatchCheck(input1,input2){
  if(input1.value !== input2.value){
  	showError(input2,'Passwords do not match')
  }
 }



form.addEventListener('submit', function(e){
	e.preventDefault();
	inputError();
    passwordMatchCheck(password,passwordConfirm);
})

function inputError(){
	var userTrim = username.value.trim();
	var emailTrim = email.value.trim();
	var passwordTrim = password.value.trim();
	var passwordConfirmTrim = passwordConfirm.value.trim();

	if (userTrim === '') {
		showError(username,'Username is required');
	}else {
		showSuccess(username);
	}

	if (emailTrim === '') {
		showError(email,'Email is required');
	}else if(!isValidEmail(email.value)){
        showError(email,'Email is invalid')
	} else {
		showSuccess(email);
	}

	if (passwordTrim === '') {
		showError(password,'password is required');
	}else {
		showSuccess(password);
	}

	if (passwordConfirmTrim === '') {
		showError(passwordConfirm,'password is required');
	}else {
		showSuccess(passwordConfirm);
	}
}
   
   var state = false;

   function viewPass(){

    if(state){
    document.getElementById('password').setAttribute('type','password');
    document.getElementById('eye').style.color = '#7a797e';
    state=false;
    
    }else{
    document.getElementById('password').setAttribute('type','text');
    document.getElementById('eye').style.color = '#5887ef';
    state=true;
   } 

}

  function viewConfirmPass(){

    if(state){
    document.getElementById('confirm-password').setAttribute('type','password');
    document.getElementById('eye1').style.color = '#7a797e';
    state=false;
    
    }else{
    document.getElementById('confirm-password').setAttribute('type','text');
    document.getElementById('eye1').style.color = '#5887ef';
    state=true;
   } 

 }  