import { GetInputValues } from "./GetInputValues.js";
import { RenderNewDivInterface } from "./interfaces.js";

export class RenderNewDiv
  extends GetInputValues
  implements RenderNewDivInterface {
  renderContainer: HTMLDivElement;
  submitButton: HTMLInputElement;
  // deleteButton: HTMLElement;
  newDataDiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  constructor() {
    super();

    this.renderContainer = document.querySelector(
      ".tasks-render"
    ) as HTMLDivElement;
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
  }

  checkIfTheFieldsAreFilled() {
    if (
      this.datePickerInput.value === "" ||
      this.taskNameInput.value === "" ||
      this.descriptionInput.value === ""
    ) {
      alert("fill all inputs");
      return;
    } else {
      this.createDiv();
    }
  }

  createDiv() {
    this.newDataDiv.classList.add("data-div");
    this.newDataDiv.id = `number-${this.renderContainer.childElementCount + 1}`;
    this.renderContainer.appendChild(this.newDataDiv);
    this.fillDivWithTaskData();
  }

  fillDivWithTaskData() {
    const dataObject = new GetInputValues();
    this.newDataDiv.innerHTML += `<p class="task-number">${this.renderContainer.childElementCount}</p>
          <span class="task-title">task:</span> <p>${dataObject.inputsValues.taskName}</p>
          <span class="task-title">description:</span> <p>${dataObject.inputsValues.taskDescription}</p>
          <span class="task-title">deadline:</span> <p>${dataObject.inputsValues.taskDate}</p>
          <a href="#" class="tasks-icons task__finished-button"><i class="fas fa-check"></i></a><a href="#" class="tasks-icons task__edit-button"><i class="fas fa-pencil-alt"></i></a> <a href="#" class="tasks-icons"><i id="delete-button" class="fas fa-trash-alt task__delete-button"></i></a>`;
    this.deleteTask();
  }

  deleteTask() {
    const deleteButton = document.querySelectorAll(".task__delete-button");
    for (let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener("click", (e: any) => {
        e.currentTarget.parentNode.parentNode.remove();
        this.refreshTaskNumberWhenDelete();
      });
    }
  }

  refreshTaskNumberWhenDelete() {
    let taskNumber = document.querySelectorAll(".data-div .task-number");
    for (let i = 0; i < taskNumber.length; i++) {
      taskNumber[i].innerHTML = "";
      taskNumber[i].innerHTML = `${i + 1}`;
    }
  }
}
