import { routes } from "./navigate.js";

class Routers {
  constructor($container) {
    this.$container = $container;
  }

  findRoute(route) {
    if (route.path.test(location.pathname)) {
      return true;
    }
  }

  route = () => {
    const data = routes.find(this.findRoute);
    data.element();
  };

  init = () => {
    window.addEventListener("historyChange", ({ detail }) => {
      const { move, isReplace } = detail;

      if (isReplace || move === location.pathname) {
        history.replaceState(null, "", move);
      } else {
        //이동할 페이지 히스토리 스택에 추가
        history.pushState(null, "", move);
      }

      this.route();

      window.addEventListener("popstate", () => {
        route();
      });
    });
  };

  render() {
    this.init();
    this.route();
  }
}

export default Routers;
