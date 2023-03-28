import Routers from "./router/routers.js";
import { setClickEvent } from "./component/setEvent.js";

class App {
  constructor($container) {
    this.$container = $container;
    this.render();
  }
  render() {
    const navbar = document.getElementsByClassName("nav");

    for (let i = 0; i < navbar.length; i++) {
      setClickEvent(navbar[i]);
    }
    const routes = new Routers(this.$container);
    routes.render();
  }
}

export default App;
