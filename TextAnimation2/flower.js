const flower = document.getElementById("flowerContainer");
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
];

for (let i = 0; i < 12; i++) {
  const div = document.createElement("div");
  div.classList.add("leaf");
  div.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;
  div.style.backgroundColor = colorRainbow[i];
  flower.appendChild(div);
}

const circleDiv = document.createElement("div");
circleDiv.classList.add("circle");

flower.appendChild(circleDiv);
