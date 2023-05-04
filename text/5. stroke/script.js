const ball = document.querySelector(".ball");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});
