/*var slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}
*/
let slideIndex = 0
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  let y = document.getElementsByClassName("slidetext")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "inline-block"; 
  y[slideIndex-1].style.display = "inline-block";
  setTimeout(carousel, 8000);
}