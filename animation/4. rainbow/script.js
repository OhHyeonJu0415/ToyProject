const btn = document.getElementById("replay");
const cloud = document.getElementsByClassName("clouds");
const root = document.getElementsByClassName("container");
const rainbow = document.getElementsByClassName("rainbow");

const color = [
  "rgb(255, 61, 61)",
  "rgb(255, 163, 34)",
  "rgb(255, 220, 19)",
  "rgb(85, 234, 69)",
  "rgb(12, 150, 19)",
  "rgb(44, 101, 244)",
  "rgb(123, 34, 255)",
];

function setAni(element, d) {
  element.style.animation = `rainbow 2s ${d}s linear forwards`;
}

for (let i = 0; i < 7; i++) {
  let w = 500 - 40 * i;
  let h = w / 2;
  let d = 0.25 * i + 2;

  rainbow[i].style.width = `${w}px`;
  rainbow[i].style.height = `${h}px`;
  rainbow[i].style.borderColor = color[i];
  rainbow[i].style.filter = `drop-shadow(0 0 15px ${color[i]})`;
  setAni(rainbow[i], d);
}

btn.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    root[0].classList.remove("backgroundColor");
    cloud[i].classList.remove(`clouds${i + 1}`);
    void cloud[i].offsetWidth;
    void root[0].offsetWidth;
    cloud[i].classList.add(`clouds${i + 1}`);
    root[0].classList.add("backgroundColor");
  }
  for (let i = 0; i < 7; i++) {
    let d = 0.3 * i + 2;
    rainbow[i].style.animation = "none";
    void rainbow[i].offsetWidth;
    setAni(rainbow[i], d);
  }
});
