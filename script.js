const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const heart = document.getElementById("heart");
const card = document.querySelector(".card");

let noScale = 1;
let noClickCount = 0;
const noTexts = ["Really?", "Are you sure?", "Think again...", "Please 🥺", "Last chance..."];
let yesClicked = false;

// YES klikšķis
yesBtn.addEventListener("click", () => {
    message.textContent = "I love you ❤️";
    heart.style.transform = "scale(3.5)";
    yesClicked = true;
    noBtn.style.display = "none"; // NO pazūd
    yesBtn.style.left = "20px";   // YES nostājas sākuma pozīcijā
    yesBtn.style.top = "0";
});

// NO klikšķis
noBtn.addEventListener("click", () => {
    if (yesClicked) return; // YES nospiests → NO nereaģē
    noScale += 0.25;
    noBtn.style.transform = `scale(${noScale})`;

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
