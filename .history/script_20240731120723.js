document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.getElementById("box-container");
  const newBoxBtn = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  let boxColor = "null";
  let boxCounter = 0;

  function addNewBox(){
    const box= document.createElement('div');
    box.setAttribute("data-box-id",boxIdCounter.toString()); 
    box.textContent=`Box ${boxIdCounter}`;
    box.className="box";
    box.style.backgroundColor=boxColor;
    boxContainer.appendChild(box);
    boxIdCounter++;
  }
  colorForm.addEventListener("submit",function(e){
    e.preventDefault();
    const newColor=colorInput.value.trim();
    const boxes = document.querySelectorAll(".box");
    for (const box of boxes){
      box.style.backgroundColor= newColor;
    }
    colorInput.value='';
    boxColor=newColor;
  });
  newBoxBtn.addEventListener("click",function(){
    addNewBox();
  })
  document.addEventListener("dblclick", function(e){
    if (e.target.classList.contains("box")){
      e.target.remove();
    }
  });
  document.addEventListener("mouseover", function(e){
    if (e.target.classList.contains("box")){
      e.target.textContent=`x:${e.pageX}, y:${e.pageY}`;
    } 
    });
    
    window.addEventListener("keydown", function(e){
      if(e.target.id ==="color-input"){
        return;
      }
      if (e.key ==="n" || e.key==="N"){
        addNewBox();
      }
      
    })
  }

  )



})
