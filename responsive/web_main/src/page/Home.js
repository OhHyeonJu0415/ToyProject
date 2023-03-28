import { data } from "../info/main.js";

class Home {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  makeMain() {
    const div = document.createElement("div");
    div.classList.add("mainPic");
    const h1 = document.createElement("h1");
    h1.classList.add("mainTitle");
    h1.innerHTML = `A<br/> Relaxing Holiday<br/> In<br/>Türkiye`;
    div.appendChild(h1);
    this.$container.appendChild(div);
  }

  makePart(num) {
    const article = document.createElement("article");
    article.classList.add(`part${num}`);

    //이미지 생성 및 추가
    const div = document.createElement("div");
    div.classList.add("mainPage", `subPic${num}`);
    article.appendChild(div);

    //설명 생성
    const div1 = document.createElement("div");
    div1.classList.add("mainPage", `introduce${num}`);

    const div2 = document.createElement("div");
    num % 2 == 0 ? div2.classList.add("even") : div2.classList.add("odd");

    div2.innerHTML = data[num - 1];

    div1.appendChild(div2);
    article.appendChild(div1);

    return article;
  }

  render() {
    this.makeMain();

    const section = document.createElement("section");
    for (let i = 1; i <= 4; i++) {
      section.appendChild(this.makePart(i));
    }
    this.$container.appendChild(section);
  }
}

export default Home;
