export class GetInputValues {
  datePickerInput: HTMLInputElement;
  taskNameInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;

  get inputsValues() {
    return [this.datePickerInput.value, this.taskNameInput.value, this.descriptionInput.value];
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


