import { navigate } from "./router/navigate.js";
import Routers from "./router/routers.js";

class App {
  constructor($container) {
    this.$container = $container;
    this.BASE_URL = "http://127.0.0.1:5500";
    this.render();
  }

  render() {
    const navbar = document.getElementsByClassName("nav");

    for (let i = 0; i < navbar.length; i++) {
      navbar[i].addEventListener("click", (e) => {
        try {
          e.preventDefault();
          if (!(e.target instanceof HTMLAnchorElement)) {
            return;
          }
          const targetURL = e.target.href.replace(this.BASE_URL, "");
          navigate(targetURL);
        } catch (error) {
          console.log(error);
        }
      });
    }

    const routes = new Routers(this.$container);
    routes.render();
  }
}

export default App;
