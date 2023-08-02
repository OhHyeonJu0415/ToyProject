const dayButton = document.getElementById("dayButton");

dayButton.addEventListener("click", () => {
  document.getElementById("turn").style.transform = "rotate(0deg)";
  document.body.style.backgroundColor = "rgb(253, 250, 240)";

  //버튼 색 바꾸기
  document.getElementById("dayButton").style.color = "rgb(255, 148, 131)";
  document.getElementById("dayButton").style.border =
    "0.2rem rgb(255, 164, 157) solid";
  document.getElementById("nightButton").style.color = "rgb(124, 99, 237)";
  document.getElementById("nightButton").style.border =
    "0.2rem rgb(126, 104, 223) solid";

  //밤 글씨 지우기
  document.getElementById("textNight").style.opacity = "0";
  document.getElementById("text1").style.removeProperty("animation");

  //낮 글씨 띄우기
  document.getElementById("textDay").style.transition = "2s";
  document.getElementById("textDay").style.opacity = "1";
  document.getElementById("text0").style.animation = "text1 2s 2s infinite";

  //2초 뒤(배경 바뀌고 난 뒤) ufo 애니메이션 지우기
  setTimeout(
    () => document.getElementById("ufo").style.removeProperty("animation"),
    2000
  );
});
