export interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string;
}

export class CreateTaskObject {
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

    // console.log(this.datePickerInput.value);
    this.mergeDataToObject();
    console.log(this.taskData);
  }

  mergeDataToObject() {
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      let dataObject: ObjectWithData;
      if (
        this.datePickerInput.value === "" ||
        this.taskNameInput.value === "" ||
        this.descriptionInput.value === ""
      ) {
        alert("please fill all the inputs");
        return;
      } else {
        dataObject = {
          taskName: this.taskNameInput.value,
          taskDescription: this.descriptionInput.value,
          taskDate: this.datePickerInput.value,
        };
        this.taskData.push(dataObject);
        console.log("done!");
        
      }
    });
  }
}
