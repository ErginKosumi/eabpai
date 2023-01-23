import {
    questions
} from "./array.js";

var colors = ["linear-gradient(to right, #0f2027, #203a43, #2c5364)", "linear-gradient(to right, #000000, #EB5757)"]
var sColors = ["linear-gradient(to right, #ef473a, #cb2d3e)", "#0f2027"]
var sidebar = document.getElementById("sidebar");

var buttons = document.querySelectorAll(".btn");
var btnClear = document.getElementById("btn-delete");
var changeBtn = document.getElementById("change-mode");
var myData = document.getElementById("my-data");
var btnLogout = document.getElementById("btn-logout");
var index = 0;
let currentColor = 0;
let currentsColor = 0;

var btnNew = document.getElementById("btn-new");
var chat = document.getElementById("chat-body");

var question = document.getElementById("q1");
var answer = document.getElementById("a1");
var time = document.getElementById("time");
var tableData = document.getElementById("table-data");
var submit = document.getElementById("submit");

var input = document.getElementById("input");
var chatBody = document.getElementById("div1");

if (!localStorage.getItem("username") && !localStorage.getItem("password")) {
    window.location.replace("signup.html");
}

myData.addEventListener("click", () => {
    chatBody.style.display = "none";
    if (tableData.style.visibility === "visible") {
        tableData.style.visibility = "hidden";
        chatBody.style.display = "block";
    } else {
        tableData.style.visibility = "visible";
    }
})

changeBtn.addEventListener("click", function () {
    currentColor = (currentColor + 1) % colors.length;
    currentsColor = (currentsColor + 1) % sColors.length;
    document.body.style.background = `${colors[currentColor]}`;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("blue")
    }
    if (currentColor === 0) {
        sidebar.style.background = sColors[1];
    } else if (currentColor === 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("blue")
        }
        sidebar.style.background = sColors[0];
    }
});

btnNew.addEventListener("click", function () {
    tableData.style.visibility = "hidden";
    chat.style.opacity = 0;
    setTimeout(function () {
        chat.style.display = "block";
        const fadeIn = setInterval(function () {
            if (chat.style.opacity < 1) {
                chat.style.opacity = parseFloat(chat.style.opacity) + 0.1;
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    }, 500);
});

// Treguesi i kohes
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let actualTime = hours + ":" + minutes;
// ===================

function generate() {
    for (let i = 0; i < questions.length; i++) {
        if (input.value == questions[i].ask) {
            const question = document.createElement("div");
            question.classList.add("question");
            const questionP = document.createElement("p");
            questionP.id = "question";
            questionP.textContent = input.value;
            question.appendChild(questionP);
            div1.appendChild(question);
            input.value = "";

            setTimeout(function () {
                const answer = document.createElement("div");
                answer.classList.add("answer");
                const answerP = document.createElement("p");
                answerP.id = "answer";
                answerP.textContent = questions[i].response;
                answer.appendChild(answerP);
                div1.appendChild(answer);
                // Copy answer
                answer.addEventListener("click", () => {
                    let textToCopy = answerP.textContent;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        alert("Copied text: " + textToCopy);
                    }, () => {
                        console.log("Failed to copy text");
                    });
                });
            }, 2000);
            localStorage.removeItem("time");
            // Save data on table
            const newQuestionTd = document.createElement("td");
            localStorage.setItem("question", questionP.textContent);
            newQuestionTd.textContent = localStorage.getItem("question");
            newQuestionTd.id = "q1";

            const newAnswerTd = document.createElement("td");
            localStorage.setItem("answer", questions[i].response);
            newAnswerTd.textContent = localStorage.getItem("answer");
            newAnswerTd.id = "a1";

            const newTimeTd = document.createElement("td");
            localStorage.setItem("time", actualTime);
            newTimeTd.id = "time";
            newTimeTd.textContent = actualTime.toString();

            const newRow = document.createElement("tr");
            newRow.appendChild(newQuestionTd);
            newRow.appendChild(newAnswerTd);
            newRow.appendChild(newTimeTd);
            tableData.appendChild(newRow);
            // ===================
            clearTimeout(noData);
        }
    }


    calculate();

    noQuestion();

}
// If there are 2 or more words similar to a question


function calculate() {

    let inputValue = input.value;
    let numbers = inputValue.match(/\d+|\D+/g);
    if (numbers.length >= 3) {
        let operator = numbers[1];
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[2]);

        function sum() {
            const question = document.createElement("div");
            question.classList.add("question");
            const questionP = document.createElement("p");
            questionP.id = "question";
            questionP.textContent = input.value;
            question.appendChild(questionP);
            div1.appendChild(question);
            input.value = "";
            startTimeout();
            clearTimeout(noData);

            function startTimeout() {
                calculateNumbers = setTimeout(function () {
                    const answer = document.createElement("div");
                    answer.classList.add("answer");
                    const answerP = document.createElement("p");
                    answerP.id = "answer";
                    answerP.textContent = num1 + num2;
                    answer.appendChild(answerP);
                    div1.appendChild(answer);
                    // Copy answer
                    answer.addEventListener("click", () => {
                        let textToCopy = answerP.textContent;
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert("Copied text: " + textToCopy);
                        }, () => {
                            console.log("Failed to copy text");
                        });
                    });
                }, 2000);
            }
        }

        function minus() {
            const question = document.createElement("div");
            question.classList.add("question");
            const questionP = document.createElement("p");
            questionP.id = "question";
            questionP.textContent = input.value;
            question.appendChild(questionP);
            div1.appendChild(question);
            input.value = "";
            startTimeout();
            clearTimeout(noData);

            function startTimeout() {
                calculateNumbers = setTimeout(function () {
                    const answer = document.createElement("div");
                    answer.classList.add("answer");
                    const answerP = document.createElement("p");
                    answerP.id = "answer";
                    answerP.textContent = num1 - num2;
                    answer.appendChild(answerP);
                    div1.appendChild(answer);
                    // Copy answer
                    answer.addEventListener("click", () => {
                        let textToCopy = answerP.textContent;
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert("Copied text: " + textToCopy);
                        }, () => {
                            console.log("Failed to copy text");
                        });
                    });
                }, 2000);
            }
        }

        function multiplication() {
            const question = document.createElement("div");
            question.classList.add("question");
            const questionP = document.createElement("p");
            questionP.id = "question";
            questionP.textContent = input.value;
            question.appendChild(questionP);
            div1.appendChild(question);
            input.value = "";
            startTimeout();
            clearTimeout(noData);

            function startTimeout() {
                calculateNumbers = setTimeout(function () {
                    const answer = document.createElement("div");
                    answer.classList.add("answer");
                    const answerP = document.createElement("p");
                    answerP.id = "answer";
                    answerP.textContent = num1 * num2;
                    answer.appendChild(answerP);
                    div1.appendChild(answer);
                    // Copy answer
                    answer.addEventListener("click", () => {
                        let textToCopy = answerP.textContent;
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert("Copied text: " + textToCopy);
                        }, () => {
                            console.log("Failed to copy text");
                        });
                    });
                }, 2000);
            }
        }

        function divide() {
            const question = document.createElement("div");
            question.classList.add("question");
            const questionP = document.createElement("p");
            questionP.id = "question";
            questionP.textContent = input.value;
            question.appendChild(questionP);
            div1.appendChild(question);
            input.value = "";
            startTimeout();
            clearTimeout(noData);

            function startTimeout() {
                calculateNumbers = setTimeout(function () {
                    const answer = document.createElement("div");
                    answer.classList.add("answer");
                    const answerP = document.createElement("p");
                    answerP.id = "answer";
                    answerP.textContent = num1 / num2;
                    answer.appendChild(answerP);
                    div1.appendChild(answer);
                    // Copy answer
                    answer.addEventListener("click", () => {
                        let textToCopy = answerP.textContent;
                        navigator.clipboard.writeText(textToCopy).then(() => {
                            alert("Copied text: " + textToCopy);
                        }, () => {
                            console.log("Failed to copy text");
                        });
                    });
                }, 2000);
            }
        }
        switch (operator) {
            case "+":
                sum();
                break;

            case "-":
                minus();
                break;
            case "*":
                multiplication();
                break;
            case "/":
                divide();
                break;
            default:
                noQuestion();
        }
    }

}


// If no matching question is found, append a message saying so
function noQuestion() {
    const question = document.createElement("div");
    question.classList.add("question");
    const questionP = document.createElement("p");
    questionP.id = "question";
    questionP.textContent = input.value;
    question.appendChild(questionP);
    div1.appendChild(question);
    input.value = "";
    startTimeout();

    function startTimeout() {
        noData = setTimeout(function () {
            const answer = document.createElement("div");
            answer.classList.add("answer");
            const answerP = document.createElement("p");
            answerP.id = "answer";
            answerP.textContent = "Sorry, I don't understand your question.";
            answer.appendChild(answerP);
            div1.appendChild(answer);
        }, 2000);
    }
}

submit.addEventListener("click", generate);

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        generate();
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "signup.html";
}

btnLogout.addEventListener("click", logout);

function clearConversation() {
    div1.innerHTML = "";
}

btnClear.addEventListener("click", () => {
    let btnYes = document.getElementById("btn-yes");
    let btnNo = document.getElementById("btn-no");

    btnYes.style.display = "inline";
    btnNo.style.display = "inline";
    btnClear.style.display = "none";
    btnYes.addEventListener("click", () => {
        if (div1.innerHTML !== "") {
            clearConversation();
            btnYes.style.display = "none";
            btnNo.style.display = "none";
            btnClear.style.display = "block";
        } else {
            alert("There is nothing to clear.");
            btnYes.style.display = "none";
            btnNo.style.display = "none";
            btnClear.style.display = "block";
        }
    })
    btnNo.addEventListener("click", () => {
        btnYes.style.display = "none";
        btnNo.style.display = "none";
        btnClear.style.display = "block";
    })
});

let calculateNumbers;
// Calculator

// Welcome message
let h1 = document.querySelector("#welcome")
h1.textContent += localStorage.getItem("username")