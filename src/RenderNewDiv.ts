import { newValues } from "./GetInputValues.js";
import { RenderNewDivInterface } from "./interfaces.js";

export class RenderNewDiv implements RenderNewDivInterface {
  renderContainer: HTMLDivElement;

  constructor() {
    this.renderContainer = document.querySelector(
      ".tasks-render"
    ) as HTMLDivElement;
  }
  createNewDiv() {
    const dataObject = newValues.inputsValues;
    const newDataDiv = document.createElement("div");
    newDataDiv.classList.add("data-div");
    this.renderContainer.appendChild(newDataDiv);

    this.renderContainer.innerHTML += `task: ${dataObject.taskName}, description: ${dataObject.taskDescription}, deadline: ${dataObject.taskDate} <i class="fas fa-pencil-alt"></i> <i class="fas fa-trash-alt"></i>`;
  }
}
