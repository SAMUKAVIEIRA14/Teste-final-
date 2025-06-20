document.body.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

let holdTimer;
document.body.addEventListener("touchstart", () => {
  holdTimer = setTimeout(() => {
    const bigHeart = document.createElement("div");
    bigHeart.textContent = "💖";
    bigHeart.style.position = "fixed";
    bigHeart.style.top = "50%";
    bigHeart.style.left = "50%";
    bigHeart.style.transform = "translate(-50%, -50%)";
    bigHeart.style.fontSize = "5rem";
    document.body.appendChild(bigHeart);
    setTimeout(() => bigHeart.remove(), 2000);
  }, 5000);
});
document.body.addEventListener("touchend", () => clearTimeout(holdTimer));
