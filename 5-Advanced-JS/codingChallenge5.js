(function() {
function Question (question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ": " + this.answers[i]);
  }
}

Question.prototype.checkAnswer = function(ans) {
  if (ans === this.correct) {
    console.log("That's the right answer!");
  } else {
    console.log("Sorry, try again");
  }
}

var q1 = new Question('What is the capital of Indiana?', ['Kalamazoo','Colombus','Indianapolis'], 2);
var q2 = new Question('What does the c stand for in the famous equation E=m*c^2?', ['Energy', 'mass', 'speed of light', 'weight'], 2);
var q3 = new Question('How many forms of matter are there?', ['2', '3', '4', '5'], 3);

var questions = [q1, q2, q3];
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);
})();
