const video = document.getElementById("forest");

video.addEventListener("mouseenter", () => {
  video.addEventListener("mousemove", (event) => {
    let per = (event.clientX / (window.innerWidth / 2)) * 100 - 50;
    let temp = per + 0.1;
    video.style.background = `linear-gradient(90deg, rgba(235, 162, 60, 0.8) ${per}%, transparent ${temp}%)`;
  });
});
