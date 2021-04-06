const submitButton = document.getElementById('submit-btn')! as HTMLInputElement;
const taskNameInput = document.getElementById('title')! as HTMLInputElement;

if(submitButton){
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(taskNameInput.value);
    console.log('click');
  });
  
}

