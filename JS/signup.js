const form = document.getElementById('form');
const firstName = document.getElementById('firstnameInput');
const lastName = document.getElementById('secondnameInput')


form.addEventListener('submit', (e)=> {
	e.preventDefault();
	inputError();
});

function inputError() {
  const first = firstName.value.trim();
  const last =  lastName.value.trim();

  if(first === ''){
   setError(firstName,'This field cannot be blank')
  }else{
   setClear(firstName)
  }

  // if(last === ''){
  //  setError(lastName)
  // }else{
  //  setClear(lastName)
  // }


}

function setError(input,message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	// small.innerText= 'This field cannot be blank';
	// small.className='text-danger';
	small.innerText = message;

	formControl.className='form-control error ';
}

function setClear(input){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	// formControl.removeChild(small);

	formControl.className='form-control' ;


}

