const texts = document.getElementsByClassName("stressed");

let posi = 111;

for (let i = 0; i < 8; i++) {
  texts[i].style.transform = `translate(calc(${posi * (i + 1)}px - 50%), -50%)`;
}

setTimeout(
  () => {
    for (let i = 0; i < 8; i++) {
      texts[i].classList.add(`Ani${i}`);
    }
  },

  1000
);
