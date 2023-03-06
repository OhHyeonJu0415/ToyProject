const seasons = document.getElementsByClassName("photo");
const clickText = document.getElementsByClassName("click");
const seasonText = document.getElementsByClassName("season");
const mainPhoto = document.getElementById("mainPhoto");
const photoList = document.getElementById("list");
const closeBtn = document.getElementById("close");

for (let i = 0; i < 4; i++) {
  seasons[i].addEventListener("click", (e) => {
    for (let j = 0; j < 4; j++) {
      photoList.classList.add("floatRight");
      mainPhoto.classList.add("mainPhoto");
      seasons[j].classList.add("changeH");
      clickText[j].classList.add("displayNone");
      seasonText[j].classList.add("margin10");
      if (i != j) {
        seasons[j].classList.remove("changeBorder");
      } else {
        seasons[j].classList.add("changeBorder");
      }
    }

    const mainPic = getComputedStyle(seasons[i]);

    console.log(mainPic.backgroundImage.slice(86));

    //linear-gradient 제외하고 넣기
    mainPhoto.style.backgroundImage = mainPic.backgroundImage.slice(86);
    mainPhoto.classList.add("mainPic");

    //닫기버튼
    closeBtn.classList.remove("displayNone");
  });
}

closeBtn.addEventListener("click", () => {
  for (let j = 0; j < 4; j++) {
    photoList.classList.remove("floatRight");
    mainPhoto.classList.remove("mainPhoto");
    seasons[j].classList.remove("changeH");
    clickText[j].classList.remove("displayNone");
    seasonText[j].classList.remove("margin10");
    seasons[j].classList.remove("changeBorder");
    closeBtn.classList.add("displayNone");
  }
});
