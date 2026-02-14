const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heart = document.getElementById("heart");
const card = document.querySelector(".card");

let noScale = 1;
let noClickCount = 0;

const noTexts = [
    "Really?",
    "Are you sure?",
    "Think again...",
    "Please 🥺",
    "Last chance..."
];

let yesClicked = false;

// YES klikšķis → mīlestība + milzu sirds, NO pazūd, YES nostājas zem NO vietas
yesBtn.addEventListener("click", () => {
    message.textContent = "I love you ❤️";
    heart.style.transform = "scale(3.5)";

    yesClicked = true;

    // NO poga pazūd
    noBtn.style.display = "none";

    // YES nostājas sākuma pozīcijā
    yesBtn.style.left = "20px";
    yesBtn.style.top = "0";
});

// NO klikšķis → NO palielinās + YES lec tikai, ja vēl nav nospiests YES
noBtn.addEventListener("click", () => {
    if (yesClicked) return; // YES nospiests → NO vairs nereaģē

    // NO palielinās
    noScale += 0.25;
    noBtn.style.transform = `scale(${noScale})`;

    // Maina tekstu
    if (noClickCount < noTexts.length) {
        noBtn.textContent = noTexts[noClickCount];
    }
    noClickCount++;

    // YES lec nejauši kartītes iekšpusē
    const yesWidth = yesBtn.offsetWidth;
    const yesHeight = yesBtn.offsetHeight;
    const maxLeft = card.clientWidth - yesWidth;
    const maxTop = card.clientHeight - yesHeight;

    const randomX = Math.random() * maxLeft;
    const randomY = Math.random() * maxTop;

    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
});
