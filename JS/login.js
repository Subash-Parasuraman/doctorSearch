const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

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


form.addEventListener('submit', function(e){
	e.preventDefault();
	inputError();
})

function inputError(){
	const emailTrim = email.value.trim();
	const passwordTrim = password.value.trim();

	if(emailTrim === ''){
		showError(email,'This field is required *')
	}else{
		showSuccess(email)
	}

	if(passwordTrim === ''){
		showError(password,'This field is required *')
	}else{
		showSuccess(password)
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