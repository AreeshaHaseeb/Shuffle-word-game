// Variables for the DOM elements

const words = ["dependent", "dog", "superficial", "admit", "juice", "javascript", "developer", "airplane", "great", "fun", "manipulate", "cat", "transition", "school", "computer", "programming", "drag", "loving", "north"];
let word_one = document.getElementById("word");
let input = document.getElementById("text");
let scoreElement = document.getElementById("score");
let timerAddition = document.getElementById("time");
const updateTimerDisplay = function () {
    timerAddition.textContent = `${time}s`;
};
let endGameContainer = document.getElementById("end-game-container");
let time = 10;
let score = 0; 
let i = 0;
word_one.innerHTML = words[i];
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const getRandomWord = function () {
        return words[Math.floor(Math.random() * words.length)];};
        word_one.innerHTML = getRandomWord();
        input.value = "";
        const updateScore = function () {
            score++; 
            scoreElement.textContent = score;};
        const updateTimer = function () {
            time += 5
            timerAddition.textContent = `${time}s`; 
            updateTimerDisplay();
        };
        updateScore(); 
        updateTimer();
    };
    
});
const timerInterval = setInterval(function () {
    if (time > 0) {
        time--;
        updateTimerDisplay(); 
    } 
    if (time === 0) {
        clearInterval(timerInterval); 
        endGameContainer.innerHTML = `
            <h1>Game Over!</h1>
            <p>Your final score is: ${score}</p>
            <button id="restart-btn">Restart</button>
        `;
        endGameContainer.style.display = "block"; 
    }
}, 1000);
document.getElementById("restart-btn");
endGameContainer.addEventListener("click", function () {
    location.reload(); 
});

/*let input = document.getElementById("text");
let word_one = document.getElementById("word");
let i = 0;
let g = 1;
word_one.innerHTML = secret_words[i];
input.addEventListener("keydown", function (e)
{
    if(e.key == "Enter" && input.value == secret_words[i])
    {
        if(i < secret_words.length - 1)
        {
            i++;
        }

        word_one.innerHTML = secret_words[g]
        input.value = "";
    }
});
/*let i = 0;         word_one.innerHTML = secret_words[i].shuffle();
word_one = document.getElementById("word");
word_one.innerHTML = secret_words[i];*/