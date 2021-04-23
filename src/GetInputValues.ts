import { ObjectWithData, GetInputValuesInterface } from "./interfaces.js";

export class GetInputValues implements GetInputValuesInterface {
  datePickerInput: HTMLInputElement;
  taskNameInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;

  get inputsValues() {
    let dataObject: ObjectWithData;
    dataObject = {
      taskName: this.taskNameInput.value,
      taskDescription: this.descriptionInput.value,
      taskDate: this.datePickerInput.value,
    };
    return dataObject;
  }

  constructor() {
    this.taskNameInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById(
      "description"
    )! as HTMLInputElement;
    this.datePickerInput = document.getElementById("date")! as HTMLInputElement;
    console.log("ja zbieram wartosci")
  }
  
}

// export const newDataObject = new GetInputValues().inputsValues;
