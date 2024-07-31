document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.getElementById("box-container");
  const newBoxBtn = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  let boxColor = "green";
  let boxCounter = 1;

  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    boxColor = colorInput.value;
    colorInput.value = "";

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.style.backgroundColor = boxColor;
    });
  });

  newBoxBtn.addEventListener('dblclick',(e){
if(e.target.classList.contains('box')) {
  const box= e.target;
  const rect = box.getBoundingClientRect
}
  })

});
