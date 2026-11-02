const tipButton = document.createElement("button");
tipButton.textContent = "Heat Safety Tip";
tipButton.className = "tip-button";

const popup = document.createElement("div");
popup.className = "tip-popup";

popup.innerHTML = `
  <div class="tip-popup-box">
    <button class="close-popup">×</button>
    <h2>Stay Safe During a Heatwave</h2>
    <p>Drink water regularly, avoid direct sunlight from 12 PM to 4 PM, and check on children and elderly family members.</p>
    <button class="close-tip">Got it</button>
  </div>
`;

document.body.appendChild(tipButton);
document.body.appendChild(popup);

const closeButton = popup.querySelector(".close-popup");
const gotItButton = popup.querySelector(".close-tip");

tipButton.addEventListener("click", function () {
  popup.classList.add("show");
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("show");
});

gotItButton.addEventListener("click", function () {
  popup.classList.remove("show");
});

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});