import { dayButton, nightButton } from "./common.js"; //day button
import { dayTitle, nightTitle } from "./common.js"; //main title
import { turn } from "./common.js"; //background

dayButton.addEventListener("click", () => {
  turn.classList.remove("rotateBack");
  document.body.classList.remove("bodyChangeColor");

  //버튼 색 바꾸기
  dayButton.classList.remove("dayChanged");
  nightButton.classList.remove("dayChanged");

  //밤 글씨 지우기
  nightTitle.classList.add("visibleHidden");

  //낮 글씨 띄우기
  dayTitle.classList.remove("visibleHidden");

  //2초 뒤(배경 바뀌고 난 뒤) ufo 애니메이션 지우기
  setTimeout(
    () => document.getElementById("ufo").style.removeProperty("animation"),
    2000
  );
});
