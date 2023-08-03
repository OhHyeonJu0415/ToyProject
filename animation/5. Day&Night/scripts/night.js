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

nightButton.addEventListener("click", () => {
  //배경 밤으로
  turn.classList.add("rotateBack");
  document.body.classList.add("bodyChangeColor");

  //버튼 색 바꾸기
  dayButton.classList.add("dayChanged");
  nightButton.classList.add("dayChanged");

  //낮 글씨 지우기
  dayTitle.classList.add("visibleHidden");

  //밤 글씨 띄우기
  nightTitle.classList.remove("visibleHidden");

  //낮 애니메이션 지우기
  cloud.classList.remove("Ani_clouds");
  airPlane.classList.remove("Ani_fly");

  //ufo 애니메이션 띄우기
  ufo.classList.remove("visibleHidden");
  ufo.classList.add("Ani_ufo");
  vim.classList.add("Ani_vim");
});
