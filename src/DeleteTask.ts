// import { DeleteTaskInterface } from "./interfaces.js";

export class DeleteTask {
  deleteButton: HTMLElement;

  constructor() {
    this.deleteButton = document.querySelector(
      ".delete-button"
    ) as HTMLElement;

    this.deleteSelectedTask();
  }

  deleteSelectedTask() {
    if(this.deleteButton){
      this.deleteButton.addEventListener("click", () => {
        console.log("hej hej klik");
      });
    } 
  }
}
export const newDelete = new DeleteTask();
