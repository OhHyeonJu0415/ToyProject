import Home from "../page/Home.js";
import Ankara from "../page/Ankara.js";
import Antalya from "../page/Antalya.js";
import Cappadocia from "../page/Cappadocia.js";
import Pamukkale from "../page/Pamukkale.js";

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
    element: Home,
  },
  {
    path: /^\/Ankara$/,
    element: Ankara,
  },
  {
    path: /^\/Antalya$/,
    element: Antalya,
  },
  {
    path: /^\/Cappadocia$/,
    element: Cappadocia,
  },
  {
    path: /^\/Pamukkale$/,
    element: Pamukkale,
  },
];
