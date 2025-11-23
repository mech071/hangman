const words = [
    "india",
    "france",
    "italy",
    "spain",
    "australia",
    "argentina",
    "brazil",
    "canada",
    "china",
    "america",
    "russia",
    "germany"
];

const word = words[Math.floor(Math.random() * words.length)];
console.log("Chosen word:", word);

const container = document.querySelector(".word-container");

for (let i = 0; i < word.length; i++) {
    const box = document.createElement("div");
    box.className = "letters";
    box.textContent = "*";
    container.appendChild(box);
}
let chances = 3;
const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess-input");
const roundInfo = document.querySelector(".round-info");
const display = document.querySelector(".prompts");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const letter = input.value.trim().toLowerCase();
    if (letter) {
        console.log("Player guessed:", letter);
        game(letter);
    }

    form.reset();
});

function game(letter) {
    const n = word.length
    let flag = false;
    const boxes = Array.from(document.querySelectorAll(".letters"));
    let prompts=["Good Guess!","Amazing!","Keep Going!","Perfect!"];
    for (let i = 0; i < n; i++) {
        if (word[i] == letter)
        {
            boxes[i].textContent = letter;
            flag=true;
        }
    }
    if(flag) roundInfo.textContent = `${prompts[Math.floor(Math.random() * prompts.length)]}`;
    if (!flag) {
        chances--;
        roundInfo.textContent = `Wrong Guess! Chances remaining ${chances}`;
        if (chances<=0) {
            
            roundInfo.textContent = `GAME OVER! Your word: ${word}`;
            display.remove();
            form.remove();
            return;
        }
    }

    const won = boxes.every(box => box.textContent !== "*");
    if (won) {
        roundInfo.textContent = `You Won!`;
        display.remove();
        form.remove();
    }
}