import { GetInputValues, newValues } from "./GetInputValues.js";
import { CreateTaskObjectInterface } from "./interfaces.js";
import { RenderNewDiv } from "./RenderNewDiv.js";

export class CreateTaskObject
  extends GetInputValues
  implements CreateTaskObjectInterface {
  submitButton: HTMLInputElement;
  taskData: object[] = [];
  renderContainer: HTMLDivElement;

  constructor() {
    super();
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
    this.renderContainer = document.querySelector(
      ".tasks-render"
    ) as HTMLDivElement;
  }

  pushDataObjectToArray() {
    const dataArray = this.taskData;

    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        this.datePickerInput.value === "" ||
        this.taskNameInput.value === "" ||
        this.descriptionInput.value === ""
      ) {
        alert("fill all inputs");
        return;
      } else {
        const dataObject = newValues.inputsValues;
        dataArray.push(dataObject);
        const newDiv = new RenderNewDiv();
        newDiv.createNewDiv();
      }
    });
  }
}

export const newTaskObject = new CreateTaskObject();
