import {
  dayButton,
  nightButton,
  dayTitle,
  nightTitle,
  turn,
  ufo,
  vim,
  cloud,
  airPlane,
} from "./common.js"; //buttons, titles, background, animations

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

  //낮 애니메이션 띄우기
  cloud.classList.add("Ani_clouds");
  airPlane.classList.add("Ani_fly");

  // ufo 애니메이션 지우기
  ufo.classList.add("visibleHidden");
  ufo.classList.remove("Ani_ufo");
  vim.classList.remove("Ani_vim");
});
