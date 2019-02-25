
var theFooter = document.querySelector("footer");
let x = 0;

var onFooterClick = function() {
      x ++;
      console.log("clique numéro "+x);
  }

theFooter.addEventListener("click",onFooterClick);

var theNavbar = document.getElementById("navbarHeader");


let hamburger = function() {
  theNavbar.classList.remove("collapse");
  }

theNavbar.addEventListener("click",hamburger);
