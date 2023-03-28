// setup all needed elements
const startButton = document.querySelector(".start-btn");
const continueBtn = document.querySelector(".continue");
const nextBtn = document.querySelector(".next");
const rules_box = document.querySelector(".rules_box");
const quit = document.querySelector(".quit");
const answer = document.querySelectorAll("answer");
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
  currentQuestion = 0
  
  questionBoxElement.classList.remove('hide')
  
}

function getNextQuestion () {
  console.log("getNextQuestion")
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
      "Makes all webpages slow down",
       "Developed by aliens",
      "Client-side scripting language", 
      "Help with Starbucks orders only", 
    ],
    correctAnswer: "Client-side scripting language"
  },
  {
    question: "What is NaN in JavaScript?",
    answers: [
      "Sodium and Nitrogen", 
       "Not Applicable", 
      "New Attribute", 
      "Not a legal Number answer", 
    ],
    correctAnswer: "Not a legal Number answer"
  },


  {
    question: "This is a JavaScript Data Type",
    answers: [
      "Pauses", 
       "Id Tags", 
       "ASP script", 
       "Boolean", 
    ],
    correctAnswer: "Boolean"
  },

  {
    question: "What is a Prompt Box?",
    answers: [
       "A box that tells the user game over", 
       "Allows user to enter input within a text box", 
       "Tells the creator Name of application", 
       "A warning alert", 
    ],
    correctAnswer: "Allows user to enter input within a text box"
  },

  {
    question: "Which in not a working timer in JavaScript?",
    answers: [
       "seTimeout", 
       "clearInterval", 
       "setInterval", 
       "addTimer answer", 
    ],
    correctAnswer: "addTimer answer"
  },
];
