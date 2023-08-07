const inputs = document.getElementsByTagName("input");

inputs[0].addEventListener("click", () => {
  console.log(inputs[0].nextElementSibling);
  inputs[0].nextElementSibling.classList.add("label_posi");
});
