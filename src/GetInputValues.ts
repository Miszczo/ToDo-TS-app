export interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string;
}

export class GetInputValues {
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
    this.datePickerInput = document.getElementById("date")! as HTMLInputElement;
    this.taskNameInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById(
      "description"
    )! as HTMLInputElement;
  }
}

export const newValues = new GetInputValues();
