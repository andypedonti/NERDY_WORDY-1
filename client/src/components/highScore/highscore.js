let score = 0;
let userName = "";
let user = [];
let highscore = [];
let secondsLeft = 60;
//creates the countdown
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //when you run out of time, timer stops
    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "Out of Time";
      endScreen();
    }
  }, 1000);
}
//creates a post quiz screen that tells you your score and allows you to input your name for highscore
function endScreen() {
  startDisplay.style.display = "none";
  q.style.display = "none";
  answerCheckDiv.style.display = "none";
  secondsLeft = 0;
  const inputBox = document.createElement("INPUT");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("value", "Your name here");
  const submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  const scoreDisplay = document.createElement("p");
  scoreDisplay.textContent = "Your score: " + score;

  submitButton.onclick = function (event) {
    event.preventDefault;
    let userName = inputBox.value;
    console.log(userName);

    //the following two functions save the username and score
    function storeHighscore() {
      localStorage.setItem("highscore", JSON.stringify(score));
    }
    function storeUser() {
      localStorage.setItem("user", JSON.stringify(userName));
    }

    //the username and score get stored IF the current score is higher than the previous stored highscore
    if (score > JSON.parse(localStorage.getItem("highscore"))) {
      storeHighscore();
      storeUser();
    }
    inputBox.style.display = "none";
    submitButton.style.display = "none";
    scoreDisplay.style.display = "none";
    highscoreDisplay();
  };
  document.body.appendChild(inputBox);
  document.body.appendChild(submitButton);
  document.body.appendChild(scoreDisplay);
}

//this creates a on click event that displays the locally saved highscore
const highscoreButton = document.getElementById("highscorebtn");
highscoreButton.onclick = function () {
  event.preventDefault;
  highscoreDisplay();
};

function highscoreDisplay() {
  startDisplay.style.display = "none";
  q.style.display = "none";

  secondsLeft = 0;
  const highscoreHeader = document.createElement("h1");
  const hsText = document.createTextNode("High score: ");
  const latestHighscore = document.createElement("h2");
  const latestHighscoreText = document.createTextNode(
    JSON.parse(localStorage.getItem("user")) +
      ": " +
      JSON.parse(localStorage.getItem("highscore")) +
      " points"
  );
  const backToQuiz = document.createElement("button");
  backToQuiz.innerHTML = "Retry Quiz";
  backToQuiz.onclick = function (event) {
    event.preventDefault;
    window.location.reload();
  };
  const clearHighscore = document.createElement("button");
  clearHighscore.innerHTML = "Clear Highscore";
  clearHighscore.onclick = function (event) {
    event.preventDefault;
    window.localStorage.clear();
  };
  highscoreHeader.appendChild(hsText);
  document.body.appendChild(highscoreHeader);
  latestHighscore.appendChild(latestHighscoreText);
  document.body.appendChild(latestHighscore);
  document.body.appendChild(backToQuiz);
  document.body.appendChild(clearHighscore);
}
