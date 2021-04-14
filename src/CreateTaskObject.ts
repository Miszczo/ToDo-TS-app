import { GetInputValues, newValues } from "./GetInputValues.js";

export interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string[];
}

export class CreateTaskObject extends GetInputValues {
  submitButton: HTMLInputElement;
  private taskData: object[] = [];

  constructor() {
    super();
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
  }

  mergeDataToObject() {
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      let dataObject: ObjectWithData;
      // dataObject = arrayWithInputsData;
      
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
          taskDate: newValues.inputsValues
        };

        this.taskData.push(dataObject);

        console.log("added!");
        console.log(this.taskData);
        console.log(...newValues.inputsValues);
      }
      // console.log(dataObject);
    });
    
  }
  
}

export const newTaskObject = new CreateTaskObject();
