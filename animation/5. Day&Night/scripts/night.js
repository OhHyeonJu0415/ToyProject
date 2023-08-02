import { dayButton, nightButton } from "./common.js"; //night button
import { dayTitle, nightTitle } from "./common.js"; //main title

nightButton.addEventListener("click", () => {
  //배경 밤으로
  document.getElementById("turn").style.transform = "rotate(180deg)";
  document.body.classList.add("bodyChangeColor");

  //버튼 색 바꾸기
  dayButton.classList.add("dayChanged");
  nightButton.classList.add("dayChanged");

  //낮 글씨 지우기
  dayTitle.classList.add("visibleHidden");

  //밤 글씨 띄우기
  nightTitle.classList.remove("visibleHidden");

  //ufo 애니메이션
  document.getElementById("ufo").style.animation = "ufoMove 10s 1s infinite";

  // document.getElementById("vim").style.animation =
  //   "ufoAttack 10s 1s infinite;";
});
