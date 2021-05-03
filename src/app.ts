import { HamburgerMenu } from "./HamburgerMenu.js";
import { RenderNewDiv } from "./RenderNewDiv.js";
import { ShowHideSectionSwitch } from "./ShowHideSectionSwitch.js";

const submitButton = document.getElementById("submit-btn")! as HTMLInputElement;
new HamburgerMenu();
new ShowHideSectionSwitch().showHideSection();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  new RenderNewDiv().checkIfTheFieldsAreFilled();
  
});
