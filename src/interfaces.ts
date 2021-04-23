export interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string;
  [key: string]: string;
}

export interface GetInputValuesInterface {
  datePickerInput: HTMLInputElement;
  taskNameInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  inputsValues: {};
}

export interface RenderNewDivInterface {
  renderContainer: HTMLDivElement;
  submitButton: HTMLInputElement;

  checkIfTheFieldsAreFilled(): void;
  createDiv(): void;
  fillDivWithTaskData(): void;
}
