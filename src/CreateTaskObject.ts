import { GetInputValues, newValues } from "./GetInputValues.js";

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

      this.taskData.push(newValues.inputsValues);
      console.log("taskData", this.taskData);
    });
  }
}

export const newTaskObject = new CreateTaskObject();
