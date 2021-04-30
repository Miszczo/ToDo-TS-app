export class ShowHideSectionSwitch {
  addTaskSection: HTMLDivElement;
  allTasksSection: HTMLDivElement;
  finishedTasksSection: HTMLDivElement;

  constructor() {
    this.addTaskSection = document.querySelector(
      ".add-task-section"
    ) as HTMLDivElement;
    this.allTasksSection = document.querySelector(
      ".all-tasks-section"
    ) as HTMLDivElement;
    this.finishedTasksSection = document.querySelector(
      ".finished-tasks-section"
    ) as HTMLDivElement;
  }

  showHideSection() {
    const allPages = document.querySelectorAll(".page-selector");
    const sectionSelectorButtons = document.querySelectorAll(
      ".nav__section-button-selector"
    );
    for (let sectionButton of sectionSelectorButtons) {
      sectionButton.addEventListener("click", (e) => {
        e.preventDefault();
        for (let page of allPages) {
          if (sectionButton.id == page.id) {
            page.classList.remove("hide");
          } else {
            page.classList.add("hide");
          }
        }
      });
    }
  }
}
