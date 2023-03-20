// setup all needed elements
const startButton = document.querySelector(".start-btn");
const continueBtn = document.querySelector(".continue");
const nextBtn = document.querySelector(".next");
const rules_box = document.querySelector(".rules_box");
const quit = document.querySelector(".quit");
const questionBoxElement = document.getElementById("question_box");
const answerBtnElement = document.getElementById('answer-btns')
//const next = rules_box.querySelector(".continue");
let randomQuestions, currentQuestion

startButton.addEventListener('click', startQuiz)

//When Begin Button clicked
continueBtn.onclick = () => {
  startQuiz();
};

function startQuiz() {
  console.log("start")
  startButton.classList.add('hide')
  currentQuestion =0
  
  questionBoxElement.classList.remove('hide')
  
}

function getNextQuestion () {
  console.log("getNextQue")
  //resetState () 
  showQuestion(questions[currentQuestion])
}

function showQuestion(question) {
questionBoxElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText =answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', chooseAnswer)
  answerBtnElement.appendChild(button)
})
}
function resetState() {
  nextBtn.classList.add('hide')
  while (answerBtnElement.firstChild){
    answerBtnElement.removeChild
    (answerBtnElement.firstchild)
  }
}


//score results
function result() {
  var score=0;
  document.getElementById('')
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
