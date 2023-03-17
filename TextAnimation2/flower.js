const flowerRainbow = document.getElementById("flowerRainbow");
const flowerGreen = document.getElementById("flowerGreen");
const flowerYellow = document.getElementById("flowerYellow");
const flowerBack = document.getElementById("flowerBack");
const colorRainbow = [
  "#fa3a25", //빨간색
  "#fe6720", //다홍색
  "#fe9c13", //주황색
  "#ffca08", //노란색
  "#f3eb43", //밝은 노랑
  "#6ed265", //옅은 초록
  "#36d57d", //진한 초록
  "#0abbb8", //에매랄드
  "#5edcfd", //하늘
  "#42589c", //남색
  "#5e59ba", //보라색
  "#ab64aa", //자주색
  "#FBFFD8",
  "#EE4F4F",
];

const mbti = document.getElementsByClassName("mbti");
const mbtiEx = document.getElementsByClassName("explanation");

function makeFlower(element, text, size, startColor = 0, endColor = 0) {
  let j = startColor;
  for (let i = 0; i < 12; i++) {
    const div = document.createElement("div");
    div.classList.add("leaf");
    div.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
    if (startColor == 0) {
      div.style.backgroundColor = colorRainbow[i];
    } else {
      div.style.backgroundColor = colorRainbow[j];
      j == startColor ? (j = endColor) : (j = startColor);
    }
    element.appendChild(div);
  }

  const circleDiv = document.createElement("div");
  circleDiv.classList.add("circle");
  circleDiv.style.fontSize = size;
  circleDiv.appendChild(document.createTextNode(text));

  element.appendChild(circleDiv);
}
// 😀☺😊😆😆😉🤩😏
makeFlower(flowerRainbow, "😝", "70px");
makeFlower(flowerGreen, "😉", "20px", 5, 12);
makeFlower(flowerYellow, "😊", "30px", 4, 12);
makeFlower(flowerBack, "😊", "30px");

for (let i = 0; i < 4; i++) {
  mbti[i].addEventListener("mouseover", () => {
    mbtiEx[i].classList.add("opacity1");
  });
  mbti[i].addEventListener("mouseout", () => {
    mbtiEx[i].classList.remove("opacity1");
  });
}
