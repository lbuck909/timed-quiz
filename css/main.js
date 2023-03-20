// setup all needed elements
const continueBtn = document.querySelector(".continue");
const rules_box = document.querySelectory(".rules_box");
// const quit = rules_box.querySelectory(".quit");
const questionBoxElement = document.getElementById('#question_box');
// const continue = rules_box.querySelectory(".continue");

function startQuiz() {
  console.log("clicked");
  questionBox.removeAttribute("class");
}
//When Begin Button clicked
continueBtn.onclick = () => {
  startQuiz();
};
// If user clicks Quit Quiz
quit.oneclick = () => {
  rules_box.rules_list.remove("activeInfo"); // hide the rules once
};
