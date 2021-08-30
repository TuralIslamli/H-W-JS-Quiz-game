const questions = [document.getElementById("question-card-1"), document.getElementById("question-card-2"), document.getElementById("question-card-3"), document.getElementById("question-card-4"), document.getElementById("question-card-5"), document.getElementById("question-card-6"), document.getElementById("question-card-7"), document.getElementById("question-card-8"), document.getElementById("question-card-9"), document.getElementById("question-card-10")];
const correctAnswers = [document.getElementById("correct-1"), document.getElementById("correct-2"), document.getElementById("correct-3"), document.getElementById("correct-4"), document.getElementById("correct-5"), document.getElementById("correct-6"), document.getElementById("correct-7"), document.getElementById("correct-8"), document.getElementById("correct-9"), document.getElementById("correct-10")];
const incorrectAnswers = [document.getElementsByClassName("answer-1"), document.getElementsByClassName("answer-2"), document.getElementsByClassName("answer-3"), document.getElementsByClassName("answer-4"), document.getElementsByClassName("answer-5"), document.getElementsByClassName("answer-6"), document.getElementsByClassName("answer-7"), document.getElementsByClassName("answer-8"), document.getElementsByClassName("answer-9"), document.getElementsByClassName("answer-10")];
let trueCount = 0;
let falseCount = 0;

for (let z = 0; z < questions.length; z++) {
    correctAnswers[z].addEventListener("click", function () {
        trueCount++;
        document.getElementById("trueCount").innerHTML = trueCount;
        console.log(trueCount);
        correctAnswers[z].style.backgroundColor = "green";
        questions[z].style.backgroundColor = "yellowgreen";
        correctAnswers[z].disabled = true;
        for (let i = 0; i < incorrectAnswers[z].length; i++) {
            incorrectAnswers[z][i].disabled = true;
        }
    })
}

for (let z = 0; z < questions.length; z++) {
    for (let i = 0; i < incorrectAnswers[z].length; i++) {
        incorrectAnswers[z][i].addEventListener("click", function () {
            falseCount++;
            document.getElementById("falseCount").innerHTML = falseCount;
            console.log(falseCount);
            correctAnswers[z].style.backgroundColor = "green";
            questions[z].style.backgroundColor = "darkred";
            correctAnswers[z].disabled = true;
            for (let j = 0; j < incorrectAnswers[z].length; j++) {
                incorrectAnswers[z][j].disabled = true;
                incorrectAnswers[z][j].style.backgroundColor = "red";
            }
        })
    }
}

