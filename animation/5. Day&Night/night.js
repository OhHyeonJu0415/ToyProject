const nightButton = document.getElementById("nightButton");

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
  document.getElementById("textDay").classList.add("visibleHidden");
  //   document.getElementById("dayTitle").style.removeProperty("animation");

  //밤 글씨 띄우기
  //   document.getElementById("textNight").style.transition = "2s";
  document.getElementById("textNight").classList.remove("visibleHidden");
  document.getElementById("text1").style.animation = "text1 2s 2s infinite";

  //ufo 애니메이션
  document.getElementById("ufo").style.animation = "ufoMove 10s 1s infinite";

  // document.getElementById("vim").style.animation =
  //   "ufoAttack 10s 1s infinite;";
});
