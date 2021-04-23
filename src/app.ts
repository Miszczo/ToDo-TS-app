import { RenderNewDiv } from "./RenderNewDiv.js";

const submitButton = document.getElementById("submit-btn")! as HTMLInputElement;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  new RenderNewDiv().checkIfTheFieldsAreFilled();
});
