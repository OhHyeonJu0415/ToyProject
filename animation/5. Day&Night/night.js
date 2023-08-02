const nightButton = document.getElementById("nightButton");
const dayTitle = document.getElementById("textDay");
const textNight = document.getElementById("textNight");

nightButton.addEventListener("click", () => {
  //배경 밤으로
  document.getElementById("turn").style.transform = "rotate(180deg)";
  document.body.classList.add("bodyChangeColor");

  //버튼 색 바꾸기
  document.getElementById("dayButton").style.color = "white";
  document.getElementById("dayButton").style.border = "0.2rem white solid";
  document.getElementById("nightButton").style.color = "white";
  document.getElementById("nightButton").style.border = "0.2rem white solid";

  //낮 글씨 지우기
  dayTitle.classList.add("visibleHidden");

  //밤 글씨 띄우기
  textNight.classList.remove("visibleHidden");

  //ufo 애니메이션
  document.getElementById("ufo").style.animation = "ufoMove 10s 1s infinite";

  // document.getElementById("vim").style.animation =
  //   "ufoAttack 10s 1s infinite;";
});
