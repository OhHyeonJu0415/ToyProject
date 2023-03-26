import Home from "../page/Home.js";
import Ankara from "../page/Ankara.js";
import Antalya from "../page/Antalya.js";
import Cappadocia from "../page/Cappadocia.js";
import Pamukkale from "../page/Pamukkale.js";

const $container = document.querySelector("#app");

export function navigate(move, isReplace = false) {
  const historyEvent = new CustomEvent("historyChange", {
    detail: {
      move,
      isReplace,
    },
  });

  dispatchEvent(historyEvent);
}

export const routes = [
  {
    path: /^\/$/,
    element: () => {
      new Home($container);
    },
  },
  {
    path: /^\/Ankara$/,
    element: () => {
      new Ankara($container);
    },
  },
  {
    path: /^\/Antalya$/,
    element: () => {
      new Antalya($container);
    },
  },
  {
    path: /^\/Cappadocia$/,
    element: () => {
      new Cappadocia($container);
    },
  },
  {
    path: /^\/Pamukkale$/,
    element: () => {
      new Pamukkale($container);
    },
  },
];
