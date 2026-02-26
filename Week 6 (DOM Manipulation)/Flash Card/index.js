import { capitals, flags } from "./data.js"

const topicSelection = document.getElementById("topics")
const questionInput = document.getElementById("number-of-question")
const startButton = document.getElementById("start")
const flashcardArea = document.getElementById("flashcard-area")

let currentQtn = 0, score = 0;
let topic, questions, data;

startButton.addEventListener("click", startGame);

function startGame() {
    flashcardArea.innerHTML = '';
    topic = topicSelection.value
    questions = questionInput.value


    if (!topic || !questions) {
        alert("Please selct a topic and number of question")
    }

    if (questions > 10 || questions < 1) {
        alert("Please select a number between 1 to 10")
    }

    autoFillData()
    createFlashCard()
}

function autoFillData() {
    switch (topic) {
        case "capitals":
            data = capitals
            break;
        case "flags":
            data = flags
            break;
        default:
            break;
    }
}

function autoFillFlashCard(question) {
    switch (topic) {
        case "capitals":
            return `    
                <div class="flashcard-front bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl p-8 space-y-5 shadow-2xl">
                    <p class="font-bold text-center text-white text-xl">🌍 Capital of <span class="text-3xl block mt-2">${question[0].question}</span>?</p>
                    <input id="answer" type="text" placeholder="Enter name of capital" class="px-5 py-3 w-full border-3 border-white rounded-xl bg-white bg-opacity-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-lg">
                    <button class="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-blue-700 px-6 py-4 rounded-xl font-bold w-full transition transform hover:scale-105 shadow-xl text-lg" id="check-answer">✓ Submit</button>
                </div>
                <div class="flashcard-back bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-2xl p-8 space-y-5 shadow-2xl text-center flex flex-col justify-center gap-6">
                    <p class="text-white text-lg font-semibold opacity-90">✅ Correct Answer:</p>
                    <p class="font-bold text-5xl text-white drop-shadow-lg">${question[0].answer}</p>
                    <button class="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-green-700 px-6 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-xl text-lg" id="next-btn">→ Next Question</button>
                </div>
            `
        case "flags":
            return `    
                <div class="flashcard-front bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 space-y-5 shadow-2xl flex flex-col justify-center items-center gap-5">
                    <p class="text-white font-bold text-lg">What country is this?</p>
                    <img src=${question[0].question} class="h-48 w-64 object-cover rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition">
                    <input id="answer" type="text" placeholder="Enter name of country" class="px-5 py-3 w-full border-3 border-white rounded-xl bg-white bg-opacity-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-lg">
                    <button class="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-indigo-700 px-6 py-4 rounded-xl font-bold w-full transition transform hover:scale-105 shadow-xl text-lg" id="check-answer">✓ Submit</button>
                </div>
                <div class="flashcard-back bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl p-8 space-y-5 shadow-2xl text-center flex flex-col justify-center gap-6">
                    <p class="text-white text-lg font-semibold opacity-90">🎯 The country is:</p>
                    <p class="font-bold text-5xl text-white drop-shadow-lg">${question[0].answer}</p>
                    <button class="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-red-700 px-6 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-xl text-lg" id="next-btn">→ Next Question</button>
                </div>
            `
        default:
            break;
    }
}

function createFlashCard() {
    const randomIndex = Math.floor(Math.random() * data.length)
    const question = data.splice(randomIndex, 1);

    const containerDiv = document.createElement("div")
    containerDiv.setAttribute("class", "flashcard-container border rounded-2xl w-full sm:w-3/5 lg:w-2/5 m-auto")

    const flashcardDiv = document.createElement("div")
    flashcardDiv.setAttribute("class", "flashcard")

    flashcardDiv.innerHTML = autoFillFlashCard(question)
    containerDiv.append(flashcardDiv)
    flashcardArea.append(containerDiv)

    const checkAnswer = document.getElementById("check-answer")
    checkAnswer.addEventListener("click", function () {
        const correctAnswer = question[0].answer.toLowerCase()
        const answer = document.getElementById("answer").value.toLowerCase()
        if (correctAnswer == answer) {
            score++;
        }
        flashcardDiv.classList.add("flipped")
    })

    const nextButton = document.getElementById("next-btn")
    nextButton.addEventListener("click", nextQuestion)
}


function nextQuestion() {
    flashcardArea.innerHTML = ""
    currentQtn++;
    if (currentQtn < questions) {
        createFlashCard()
    } else {
        flashcardArea.innerHTML = `
        <div class="flex flex-col items-center justify-center">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl p-12 w-2/5 text-center">
                <h1 class="text-4xl font-bold text-white mb-4">🎉 Quiz Complete!</h1>
                <p class="text-lg text-blue-100 mb-6">Your Final Score</p>
                <div class="bg-white rounded-lg p-8 mb-4">
                    <p class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">${score} / ${questions}</p>
                    <p class="text-gray-600 text-lg mt-2">${Math.round((score / questions) * 100)}% Correct</p>
                </div>
                <button onclick="location.reload()" class="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition w-full">
                    Play Again
                </button>
            </div>
        </div>
        `
    }
}