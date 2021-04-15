export class RenderTasks {
  renderContainer: HTMLDivElement;
  
  constructor() {
    this.renderContainer = document.querySelector(".tasks-render") as HTMLDivElement;
  }
}
