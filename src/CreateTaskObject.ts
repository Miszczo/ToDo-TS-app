import { GetInputValues, newValues } from "./GetInputValues.js";
import { CreateTaskObjectInterface } from "./interfaces.js";

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
        console.log(typeof dataArray);
        console.log("taskData", dataArray);

        const newDataDiv = document.createElement("div");
        newDataDiv.classList.add("data-div");
        this.renderContainer.appendChild(newDataDiv);
        
        this.renderContainer.innerHTML += `task: ${dataObject.taskName}, description: ${dataObject.taskDescription}, deadline: ${dataObject.taskDate} `;
      }
    });
  }
}

export const newTaskObject = new CreateTaskObject();
