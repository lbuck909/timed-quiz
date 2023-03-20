// setup all needed elements
const startButton = document.querySelector(".start-btn");
const continueBtn = document.querySelector(".continue");
const rules_box = document.querySelector(".rules_box");
const quit = document.querySelector(".quit");
const questionBoxElement = document.getElementById("question_box");
// const continue = rules_box.querySelector(".continue");

startButton.addEventListner('click', startQuiz)

//When Begin Button clicked
continueBtn.onclick = () => {
  startQuiz();
};

function startQuiz() {
  console.log("start");
  startButton.questionList.add('hide')
  questionBoxElement.questionList.remove('hide')
}

// If user clicks Quit Quiz
quit.oneclick = () => {
  rules_box.rules_list.remove("activeInfo"); // hide the rules once
};

const questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "Makes all webpages slow down", wrong: false },
      { text: "Developed by aliens", wrong: false },
      { text: "Client-side scripting language", correct: true },
      { text: "Help with Starbucks orders only", wrong: false },
    ],
  },
  {
    question: "What is NaN in JavaScript?",
    answers: [
      { text: "Sodium and Nitrogen", wrong: false },
      { text: "Not Applicable", wrong: false },
      { text: "New Attribute", wrong: false },
      { text: "Not a legal Number answer", correct: true },
    ],
  },

  {
    question: "This is a JavaScript Data Type",
    answers: [
      { text: "Pauses", wrong: false },
      { text: "Id Tags", wrong: false },
      { text: "ASP script", wrong: false },
      { text: "Boolean", correct: true },
    ],
  },

  {
    question: "What is a Prompt Box?",
    answers: [
      { text: "A box that tells the user game over", wrong: false },
      { text: "Allows user to enter input within a text box", correct: true },
      { text: "Tells the creator Name of application", wrong: false },
      { text: "A warning alert", wrong: false },
    ],
  },

  {
    question: "Which in not a working timer in JavaScript?",
    answers: [
      { text: "seTimeout", wrong: false },
      { text: "clearInterval", wrong: false },
      { text: "setInterval", wrong: false },
      { text: "addTimer answer", correct: true },
    ],
  },
];
