/*let visibleBtn = document.getElementById("visibleBtn");
let visible = document.getElementById("visible");
visibleBtn.addEventListener("click", ToggleEvent);
function ToggleEvent() {
  visible.classList.toggle("card-block");
  if (visible.classList.contains("card-block")) {
    visibleBtn.innerHTML = "Ver menos ofertas";
  } else {
    visibleBtn.innerHTML = "Ver más ofertas";
  }
}*/

let visibleBtn = document.getElementById("visibleBtn");
let visible = document.getElementsByClassName('visibleCard')



visibleBtn.addEventListener("click", ToggleEvent);
function ToggleEvent() {
  for(var i = 0; i < visible.length; i++){
    visible[i].classList.toggle("card-block");
  if (visible[i].classList.contains("card-block")) {
    visibleBtn.innerHTML = "Ver menos ofertas";
  } else {
    visibleBtn.innerHTML = "Ver más ofertas";
  }
  }
  
}