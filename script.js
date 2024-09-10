const questions= [
    {
        question: "Purpose of JavaScript in web development?",
        ans:[
            {text:"To add interactivity", correct: true},
            {text:"To style web page", correct: false},
            {text:"To structure web page", correct: false},
            {text:"To store data on server", correct: false},
        ]
    },
    {
        question: "Variables in JavaScript?",
        ans:[
            {text:"Var", correct: false},
            {text:"Let", correct: false},
            {text:"Const", correct: false},
            {text:"All the above", correct: true},
        ]
    },
    {
        question: "Output of console.log(typeof null)?",
        ans:[
            {text:"Null", correct: false},
            {text:"Object", correct: true},
            {text:"Undefined", correct: false},
            {text:"Number", correct: false},
        ]
    },
    {
        question: "Which is not a loop structure?",
        ans:[
            {text:"If", correct: true},
            {text:"While", correct: false},
            {text:"Do-while", correct: false},
            {text:"For", correct: false},
        ]
    },
    {
        question: "what keyword is used to terminate a case in JavaScript?",
        ans:[
            {text:"End", correct: false},
            {text:"Stop", correct: false},
            {text:"Cut", correct: false},
            {text:"Break", correct: true},
        ]
    },
    {
        question: "What is the output of the code, var a=10; console.log(a);?",
        ans:[
            {text:"'10'", correct: false},
            {text:"10", correct: true},
            {text:"Null", correct: false},
            {text:"Number", correct: false},
        ]
    },
    {
        question: "What is the purpose of a function in JavaScript?",
        ans:[
            {text:"To store data", correct: false},
            {text:"To create UI", correct: false},
            {text:"To encapsulate code that performs a task", correct: true},
            {text:"To create web page", correct: false},
        ]
    },
    {
        question: "What does 'this' keyword refers to in JavaScript?",
        ans:[
            {text:"Defines variable", correct: false},
            {text:"Currently calling object", correct: true},
            {text:"Data types", correct: false},
            {text:"Used as a parameter", correct: false},
        ]
    },
    {
        question: "Which is used to add an element to the end of an array?",
        ans:[
            {text:"Pop()", correct: false},
            {text:"Unhift()", correct: false},
            {text:"Push()", correct: true},
            {text:"Shift()", correct: false},
        ]
    },
    {
        question: "How do you create a new object in javascript?",
        ans:[
            {text:"Object.create()", correct: false},
            {text:"New Object()", correct: false},
            {text:"Neither A nor B", correct: false},
            {text:"Both A and B", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuesIndex = 0;
let score = 0;

function startQuiz(){
    currentQuesIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.ans.forEach(answer =>{
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
});
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length};`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuesIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




