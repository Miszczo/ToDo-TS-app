import { CreateTaskObject, ObjectWithData } from "./CreateTaskObject.js";

export class RenderTasks extends CreateTaskObject{
  constructor() {
    super();

    this.renderTasksInHtml();
  }

  renderTasksInHtml() {
    let dataObject: ObjectWithData;
    dataObject! = {
      taskName: this.taskNameInput.value,
      taskDescription: this.descriptionInput.value,
      taskDate: this.datePickerInput.value,
    };
    console.log(this.taskNameInput.value, this.descriptionInput.value);
    const pushInputValues = function(this) {
      const inputValues = this.taskNameInput.value
    }
  }
}
