import { RenderNewDiv } from "./RenderNewDiv.js";
import { ShowHideSectionSwitch } from "./ShowHideSectionSwitch.js";

new ShowHideSectionSwitch().showHideSection();

const submitButton = document.getElementById("submit-btn")! as HTMLInputElement;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  new RenderNewDiv().checkIfTheFieldsAreFilled();
});
