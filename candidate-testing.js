const input = require('readline-sync');

let candidateName = input.question ("Enter your name: ");

console.log ("\nHello", candidateName + "!");

console.log ("\nWelcome to Program. Please, take a quiz.");

let question = "Who was the first American womain in space? ";

let correctAnswer = "Sally Ride";

let candidateAnswer = "";

let questions = [
  "\n1) Who was the first American woman in space? ",
  "2) True or false: 5 kilometers == 5000 meters? ",
  "3) (5+3) / 2*10 = ? ",
  "4) Given the array [8, 'Orbit', 'Trajectory', '45], what entry is at index 2? ",
  "5) What is the minimum crew size for the ISS? "
];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswers = [];



function askForName(candidatesNames) {
  candidateName = input.question ("\nCandidate Full Name: ");
}

function askQuestion(quiz) {
  
for (let i = 0; i < questions.length; i++) {  

candidateAnswers[i] = input.question (questions[i]);
}
}
  


function gradeQuiz(candidateAnswers) {

let numberCorrect = 0;

let numberQuiz = candidateAnswers.length;

for (let i = 0; i < numberQuiz; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    numberCorrect += 1;
  }
  }
  

  let grade = (numberCorrect/numberQuiz)*100;

  let status = "PASSED";

  if (grade < 80) {
    status = "FAILED";
  }

console.log ("\n>>> Overall Grade: " + grade + "%");

console.log ("\n>>> Correct Answers: " + numberCorrect + " of " + numberQuiz);


console.log ("\n>>> Status: " + status);

return grade;
}


function runProgram() {
  askForName();
  
  

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

 





// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
