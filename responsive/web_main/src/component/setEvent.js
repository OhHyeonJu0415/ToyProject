import { navigate } from "../router/navigate.js";

const BASE_URL = "http://127.0.0.1:5500";

export const setClickEvent = (element) => {
  element.addEventListener("click", (e) => {
    try {
      //a 태그 클릭 막기
      e.preventDefault();
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }

      //url 설정
      const targetURL = e.target.href.replace(BASE_URL, "");
      navigate(targetURL);
    } catch (error) {
      console.log(error);
    }
  });
};
