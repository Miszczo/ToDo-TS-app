import { GetInputValues } from "./GetInputValues.js";
import { RenderNewDivInterface } from "./interfaces.js";
import { DeleteTask } from "./DeleteTask.js";

export class RenderNewDiv
  extends GetInputValues
  implements RenderNewDivInterface {
  renderContainer: HTMLDivElement;
  submitButton: HTMLInputElement;

  constructor() {
    super();
    this.renderContainer = document.querySelector(
      ".tasks-render"
    ) as HTMLDivElement;
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
  }
  createNewDiv() {
    const dataObject = new GetInputValues().inputsValues;
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
        const newDataDiv = document.createElement("div");
        newDataDiv.classList.add("data-div");
        newDataDiv.id = `number-${this.renderContainer.childElementCount + 1}`;
        this.renderContainer.appendChild(newDataDiv);
        newDataDiv.innerHTML += `${this.renderContainer.childElementCount}
          <span class="task-title">task:</span> <p>${dataObject.taskName}</p>
          <span class="task-title">description:</span> <p>${dataObject.taskDescription}</p>
          <span class="task-title">deadline:</span> <p>${dataObject.taskDate}</p>
          <a href="#" class="tasks-icons edit-button"><i class="fas fa-pencil-alt"></i></a> <a href="#" class="tasks-icons"><i id="try" class="fas fa-trash-alt delete-button"></i></a>`;
        console.log(this.renderContainer.childElementCount);
        new DeleteTask();
        
      }
    });
  }
}
export const newTask = new RenderNewDiv();
