// Get the modal
var modal1 = document.getElementById("myModal-one");
var modal2 = document.getElementById("myModal-two");
var modal3 = document.getElementById("myModal-three");
var modal4 = document.getElementById("myModal-four");
var modal5 = document.getElementById("myModal-five");
var modal6 = document.getElementById("myModal-six");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn-one");
var btn2 = document.getElementById("myBtn-two");
var btn3 = document.getElementById("myBtn-three");
var btn4 = document.getElementById("myBtn-four");
var btn5 = document.getElementById("myBtn-five");
var btn6 = document.getElementById("myBtn-six");




// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 ||event.target == modal5 || event.target == modal6 ) {
    modal1.style.display = "none";
        modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";

  }
}
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})