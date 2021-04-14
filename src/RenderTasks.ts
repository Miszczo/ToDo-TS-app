// import { CreateTaskObject, ObjectWithData } from "./CreateTaskObject.js";

// export class RenderTasks extends CreateTaskObject {
//   renderDiv: any;
//   constructor() {
//     super();

//     this.renderDiv = document.querySelector(".tasks-render")! as HTMLDivElement;
//     this.renderTasksInHtml();
//   }

//   renderTasksInHtml(this: RenderTasks) {
//     let dataObject: ObjectWithData;
//     dataObject! = {
//       taskName: this.taskNameInput.value,
//       taskDescription: this.descriptionInput.value,
//       taskDate: this.datePickerInput.value,
//     };
//     console.log(this.taskNameInput.value, this.descriptionInput.value);
//     const pushInputValues = function (this: RenderTasks) {
//       this.renderDiv.innerHTML = dataObject;
//       console.log("added!");
//     };
//     this.submitButton.addEventListener("click", pushInputValues);
//   }
// }

