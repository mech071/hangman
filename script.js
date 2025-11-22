const words = [
    "mamba",
    "bunk",
    "attendance",
    "engineering",
    "mathematics",
    "physics",
    "humanities",
    "chatgpt",
    "perplexity",
    "claude",
    "gemini"
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
const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");

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
    for (let i = 0; i < n; i++) {
        if (word[i] == letter)
        {
            boxes[i].textContent = letter;
            flag=true;
        }
    }
    if (!flag) {
        chances--;
        if (chances<=0) {
            alert(`Game over! Word was: ${word}`);
            form.remove();
            return;
        }
    }

    const won = boxes.every(box => box.textContent !== "*");
    if (won) {
        alert("You won!");
        form.remove();
    }
}