import { GetInputValues } from "./GetInputValues.js";
import { RenderNewDivInterface } from "./interfaces.js";

export class RenderNewDiv
  extends GetInputValues
  implements RenderNewDivInterface {
  singleTaskRenderContainer: HTMLDivElement;
  allTasksRenderContainer: HTMLDivElement;
  submitButton: HTMLInputElement;
  newDataDiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  constructor() {
    super();

    this.singleTaskRenderContainer = document.querySelector(
      ".add-task__tasks-render-container"
    ) as HTMLDivElement;
    this.allTasksRenderContainer = document.querySelector(
      ".all-tasks-section__tasks-render-container"
    ) as HTMLDivElement;
    this.submitButton = document.getElementById(
      "submit-btn"
    )! as HTMLInputElement;
    this.allTasksRenderContainer = document.querySelector(
      ".all-tasks-section"
    ) as HTMLDivElement;
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
      this.showOnlyLastChildInContainer();
     
    }
  }

  private createDiv() {
    this.newDataDiv.classList.add("data-div");
    this.newDataDiv.id = `number-${ this.singleTaskRenderContainer.childElementCount + 1}`;
    this.singleTaskRenderContainer.appendChild(this.newDataDiv);
    this.showContainerWhenHasContent();
    this.fillDivWithTaskData();
  }

  private showContainerWhenHasContent() {
    if (this.singleTaskRenderContainer.children) {
      this.singleTaskRenderContainer.classList.remove("hide");
    }
  }

  private hideContainerWhenEmpty() {
    if (this.singleTaskRenderContainer.childElementCount === 0) {
      this.singleTaskRenderContainer.classList.add("hide");
    }
  }

  private showOnlyLastChildInContainer() {
    for (let children of this.singleTaskRenderContainer.children) {
      if (this.newDataDiv == this.singleTaskRenderContainer.lastChild) {
        children.classList.add("hide");
        this.singleTaskRenderContainer.lastElementChild!.classList.remove(
          "hide"
        );
      } else {
        this.singleTaskRenderContainer.lastElementChild!.classList.remove(
          "hide"
        );
      }
    }
  }

  private fillDivWithTaskData() {
    const dataObject = new GetInputValues();
    this.newDataDiv.innerHTML += `<p class="task-number">${this.singleTaskRenderContainer.childElementCount}</p>
          <span class="task-title">task:</span> <p>${dataObject.inputsValues.taskName}</p>
          <span class="task-title">description:</span> <p>${dataObject.inputsValues.taskDescription}</p>
          <span class="task-title">deadline:</span> <p>${dataObject.inputsValues.taskDate}</p>
          <a href="#" class="tasks-icons task__finished-button"><i class="fas fa-check"></i></a><a href="#" class="tasks-icons task__edit-button"><i class="fas fa-pencil-alt"></i></a> <a href="#" class="tasks-icons"><i id="delete-button" class="fas fa-trash-alt task__delete-button"></i></a>`;
    this.deleteTask();
  }

  private deleteTask() {
    const deleteButton = document.querySelectorAll(".task__delete-button");
    for (let i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener("click", (e: any) => {
        e.currentTarget.parentNode.parentNode.remove();
        this.refreshTaskNumberWhenDelete();
        this.hideContainerWhenEmpty();
        this.showOnlyLastChildInContainer();
      });
    }
  }

  private refreshTaskNumberWhenDelete() {
    let taskNumber = document.querySelectorAll(".data-div .task-number");
    for (let i = 0; i < taskNumber.length; i++) {
      taskNumber[i].innerHTML = "";
      taskNumber[i].innerHTML = `${i + 1}`;
    }
  }
}
