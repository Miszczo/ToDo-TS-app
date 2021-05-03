export class HamburgerMenu {
  hamburugerMenuButton: HTMLElement;
  navigationList: HTMLElement;

  constructor() {
    this.hamburugerMenuButton = document.querySelector(
      ".hamburger-menu__button"
    ) as HTMLElement;
    this.navigationList = document.querySelector(
      ".navigation-wrapper__list"
    ) as HTMLElement;

    this.hamburgerMenuSwitch();
    this.hideMenuWhenClicked();
  }

  hamburgerMenuSwitch() {
    this.hamburugerMenuButton.addEventListener("click", () => {
      this.navigationList.classList.toggle("show");
    });
  }
  hideMenuWhenClicked() {
    const navigationListButtons = document.querySelectorAll(
      ".nav__section-button-selector"
    );
    for (let btn of navigationListButtons) {
      btn.addEventListener("click", () => {
        this.navigationList.classList.remove("show");
      });
    }
  }
}
