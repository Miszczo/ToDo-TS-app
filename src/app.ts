// const submitButton = document.getElementById('submit-btn')! as HTMLInputElement;
// const taskNameInput = document.getElementById('title')! as HTMLInputElement;
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(taskNameInput.value);
//   console.log('click');
// });
interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string;
}

class RenderFromInputs {
  submitButton: HTMLInputElement;
  taskNameInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  datePickerInput: HTMLInputElement;
  taskData: object[] = [];

  constructor() {
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
    this.taskNameInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById(
      "description"
    )! as HTMLInputElement;
    this.datePickerInput = document.getElementById("date")! as HTMLInputElement;

    console.log(this.datePickerInput.value);
    this.render();
  }

  render() {
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      let dataObject: ObjectWithData;
      if (
        this.datePickerInput.value === "" &&
        this.taskNameInput.value === "" &&
        this.descriptionInput.value === ""
      ) {
        alert("please fill all the fields");
      } else {
        this.taskData.push(
          (dataObject! = {
            taskName: `title: ${this.taskNameInput.value}`,
            taskDescription: `description: ${this.descriptionInput.value}`,
            taskDate: `date: ${this.datePickerInput.value}`,
          })
        );
        // console.log(dataObject);
      }

      console.log(this.datePickerInput.value);
      console.log("clickk");
      console.log(this.taskData);
    });
  }

  // addTaskToList(this.taskNameInput.value:string, this.descriptionInput.value, this.datePickerInput.value){

  // }
}

const RenderData = new RenderFromInputs();
