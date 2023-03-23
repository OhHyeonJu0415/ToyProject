const VH = window.screen.height;
const container = document.getElementsByClassName("container");
const auroras = container[1].children;
const sunrises = container[2].children;
const mountains = container[3].children;
const rains = container[4].children;

function aurora(cursor) {
  auroras[0].classList.remove("hidden");
  auroras[0].classList.add("auroraLeft");
  if (cursor > VH * 0.85) {
    auroras[3].classList.remove("hidden");
    auroras[3].classList.add("auroraRight");
  } else if (cursor > VH * 0.7) {
    auroras[2].classList.remove("hidden");
    auroras[2].classList.add("auroraLeft");
  } else if (cursor > VH * 0.55) {
    auroras[1].classList.remove("hidden");
    auroras[1].classList.add("auroraRight");
  }
}

function sunrise(cursor) {
  sunrises[3].classList.remove("hidden");
  sunrises[3].classList.add("sunrisesTop");
  if (cursor > VH * 2 - VH * 0.35) {
    sunrises[0].classList.remove("hidden");
    sunrises[0].classList.add("sunrisesBottom");
  } else if (cursor > VH * 2 - VH * 0.5) {
    sunrises[1].classList.remove("hidden");
    sunrises[1].classList.add("sunrisesTop");
  } else if (cursor > VH * 2 - VH * 0.65) {
    sunrises[2].classList.remove("hidden");
    sunrises[2].classList.add("sunrisesBottom");
  }
}

function mountain(cursor) {
  mountains[0].classList.add("mountaintop");
  mountains[0].classList.remove("hidden");
  if (cursor > VH * 3 - VH * 0.45) {
    mountains[2].classList.remove("hidden");
    mountains[2].classList.add("mountainRight");
  } else if (cursor > VH * 3 - VH * 0.55) {
    mountains[1].classList.remove("hidden");
    mountains[0].classList.add("mountainLeft");
  }
}

function rain(cursor) {
  if (cursor > VH * 3) {
    rains[2].classList.remove("hidden");
    rains[2].classList.add("rainBottom");

    rains[1].classList.remove("hidden");
    rains[1].classList.add("rainMid");
  }
}

function division() {
  //현재 어디에 있는지 구분하기
  let data = window.scrollY;

  if (data > VH * 3 + VH * 0.2) {
    rain(data);
  } else if (data > VH * 3 - VH * 0.7) {
    mountain(data);
  } else if (data > VH * 2 - VH * 0.8) {
    sunrise(data);
  } else if (data > VH * 0.4) {
    aurora(data);
  }
}

function optimizeAnimation(callback) {
  let ticking = false;

  return () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    }
  };
}

window.addEventListener("scroll", optimizeAnimation(division), {
  passive: true,
});
