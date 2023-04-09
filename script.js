let quizQuestions = document.getElementById("questions");
let quizAnswers = document.getElementById("answers");
let finalScoreInitials = document.getElementById("initials");
let endGame = document.getElementById("theEnd")
let gameTimer = document.getElementById("timer");
let startGame = document.getElementById("startbutton");
let restart = document.getElementById("restartGame");
let aButton = document.getElementById("a");
let bButton = document.getElementById("b");
let cButton = document.getElementById("c");
let dButton = document.getElementById("d");
let time =60;

var gameQuestions = [{
    id: 0,
    question: "What does HTML stand for?",
    answers: 
    [{text: "Home Technology Mobile Language", isCorrect: false},
    {text: "Hub Tech Machine Lag", isCorrect: false},
    {text: "Hypertext Markup Language", isCorrect: true},
     {text: "None of the above", isCorrect: false}]
},
{
    id: 1,
    question: "What boolean operators does JavaScript support?",
    answer: 
    [{text: "+-", isCorrect: false},
    {text: "!-", isCorrect: false},
    {text: "<!  -->", isCorrect: false},
    {text: "&& ||", isCorrect: true},
]
},
{   id: 2,
    question: "How do you use a style sheet? ",
    answer: 
    [{text: "When you comment out the html", isCorrect: false},
    {text: "When you make a button run a function", isCorrect: false},
    {text: "When you change the style formatting of a document", isCorrect: true},
    {text: "When you use the console log to see how a page is running", isCorrect: false}
]
},
{   id: 3,
    question: "What is <article> in html?",
    answer: 
    [{text:"a container for navigation links", isCorrect: false},
    {text: "a self-contained article", isCorrect: true},
    {text: "a footer for a document or section", isCorrect: false},
    {text: "a header for a document or section", isCorrect: false}
]
},

{   id: 4,
    question: "What is a button tag?",
    answer: 
    [{text:"something to put if you have an article for buttons", isCorrect: false},
    {text: "to create a button", isCorrect: true},
    {text: "to define a container", isCorrect: false},
    {text: "connects css to html files", isCorrect: false}
]
},
];

var state= {
    currentQuestion:0,
    score: 0
};







function startNow() {
    showQuizQuestions();

   

    timerInterval = setInterval(
        function () {
            time--;
            gameTimer.textContent = "Seconds Left" + time;

            if (time === 0) {
                clearInterval(timerInterval);
                showScore();
            }
        }, 1000);

}






//Startgame
startButton.addEventListener("click", startNow);
