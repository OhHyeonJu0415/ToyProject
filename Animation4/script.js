const btn = document.getElementById("replay");
const cloud = document.getElementsByClassName("clouds");

btn.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    cloud[i].classList.remove(`clouds${i + 1}`);
    void cloud[i].offsetWidth;
    cloud[i].classList.add(`clouds${i + 1}`);
  }
});
