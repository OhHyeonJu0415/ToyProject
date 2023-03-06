const seasons = document.getElementsByClassName("photo");
const clickText = document.getElementsByClassName("click");
const seasonText = document.getElementsByClassName("season");
const mainPhoto = document.getElementById("mainPhoto");

for (let i = 0; i < 4; i++) {
  seasons[i].addEventListener("click", (e) => {
    for (let j = 0; j < 4; j++) {
      mainPhoto.classList.add("mainPhoto");
      seasons[j].classList.add("changeH");
      clickText[j].classList.add("displayNone");
      seasonText[j].classList.add("margin10");
      if (i != j) {
        seasons[j].classList.remove("displayWidthNone");
        seasonText[j].classList.remove("displayNone");
      } else {
        seasons[j].classList.add("displayWidthNone");
        seasonText[j].classList.add("displayNone");
      }
    }

    const mainPic = getComputedStyle(seasons[i]);

    console.log(mainPic.backgroundImage.slice(86));

    //linear-gradient 제외하고 넣기
    mainPhoto.style.backgroundImage = mainPic.backgroundImage.slice(86);
    mainPhoto.classList.add("mainPic");
  });
}
