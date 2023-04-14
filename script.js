//global variables
let quizQuestions = document.getElementById("questions");
let quizAnswers = document.getElementById("answers");
let resultsScore = document.getElementById("results");
let finalScoreInitials = document.getElementById("initials");
let endGame = document.getElementById("theEnd")
let gameTimer = document.getElementById("timer");
let startGame = document.getElementById("startbutton");
let restart = document.getElementById("restartGame");
let aButton = document.getElementById("a");
let bButton = document.getElementById("b");
let cButton = document.getElementById("c");
let dButton = document.getElementById("d");
let questionDisplayEl = document.getElementById("question-display");
let questionResponse = document.getElementById("response");




//array with questions, answers, and correct answers
var gameQuestions = [{

    question: "What does HTML stand for?",
    answers: {
        a: "Home Technology Mobile Language",
        b: "Hub Tech Machine Lag",
        C: "Hypertext Markup Language",
        d: "None of the above"
    },
    correctAnswer: "C",
},
{
    question: "What boolean operators does JavaScript support?",
    answers: {
        a: " +- ",
        b: "!-",
        c: "<!  -->",
        d: "&& ||"
    },
    correctAnswer: "d"

},
{
    question: "How do you use a style sheet? ",
    answers: {
        a: "When you comment out the html",
        b: "When you make a button run a function",
        C: "When you change the style formatting of a document",
        d: "When you use the console log to see how a page is running"
    },
    correctAnswer: "c",

},
{

    question: "What is <article> in html?",
    answers: {
        a: "a container for navigation links",
        b: "a self-contained article",
        C: "a footer for a document or section",
        d: "a header for a document or section"
    },
    correctAnswer: "b",
},
{
    question: "What is a button tag?",
    answers: {
        a: "something to put if you have an article for buttons",
        b: "to create a button",
        C: "to define a container",
        d: "connects css to html files"
    },
    correctAnswer: "b",
},

];


//global variables
var score = 0;
let time = 60;
let questionTracker = 0;
questionTracker++;

let answerTracker = 0;
answerTracker++;

correctAnswerResult = gameQuestions[questionTracker].correctAnswer;
console.log(correctAnswerResult);

//Startgame button, click starts timer and shows questions and answers
startButton.addEventListener("click", function () {
    console.log(gameQuestions)

    timerInterval = setInterval(
        function () {
            time--;
            gameTimer.textContent = "Seconds Left" + time;

            if (time === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    showQuestions();
    showAnswerChoices();

});

function showQuestions() {
    questionDisplayEl.textContent = gameQuestions[questionTracker].question;
}

function showAnswerChoices() {
    aButton.textContent = "A: " + gameQuestions[answerTracker].answers.a;
    bButton.textContent = "B: " + gameQuestions[answerTracker].answers.b;
    cButton.textContent = "C: " + gameQuestions[answerTracker].answers.c;
    dButton.textContent = "D: " + gameQuestions[answerTracker].answers.d;



}



//links answer buttons function when pressed they say correct or incorrect
//moves on to next question
aButton.addEventListener("click", function () {


    if (correctAnswerResult === "a") {
        alert("Correct");
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();


    } else {
        alert("Incorrect");
        time = time - 15;
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();


    }
}
)
bButton.addEventListener("click", function () {
    if (correctAnswerResult === "b") {
        alert("Correct");
        questionTracker++;
        showQuestions();
        showAnswerChoices();
    } else {
        alert("Incorrect")
        time = time - 15;
        questionTracker++;
        showQuestions();
        showAnswerChoices();
    }
})
cButton.addEventListener("click", function () {
    if (correctAnswerResult === "c") {
        alert("Correct")
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();
    } else {
        alert("Incorrect")
        time = time - 15;
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();
    }

})

dButton.addEventListener("click", function () {
    if (correctAnswerResult === "d") {
        alert("Correct");
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();
    } else {
        alert("Incorrect")
        time = time - 15;
        questionTracker = questionTracker + 1;
        showQuestions();
        showAnswerChoices();

    }
})

//write a function to have scorePage show

//have intials save button work

//play again button 
restart.addEventListener("click", function () {

    timerInterval = setInterval(
        function () {
            time--;
            gameTimer.textContent = "Seconds Left" + time;

            if (time === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    showQuestions();
    showAnswerChoices();

});
 
