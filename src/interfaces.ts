export interface ObjectWithData {
  taskName: string;
  taskDescription: string;
  taskDate: string;
}

export interface CreateTaskObjectInterface {
  submitButton: HTMLInputElement;
  readonly taskData: object[];
  
  pushDataObjectToArray(): void;
}

export interface GetInputValuesInterface {
  datePickerInput: HTMLInputElement;
  taskNameInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;

  inputsValues: {};
}

export interface RenderNewDivInterface {
  renderContainer: HTMLDivElement;

  createNewDiv(): void;
}