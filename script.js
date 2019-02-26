

/////exo1

var theFooter = document.querySelector("footer");
let x = 0;

var onFooterClick = function() {
      x ++;
      console.log("clique numéro "+x);
  }

theFooter.addEventListener("click",onFooterClick);

//////exo2

let theNavbar = document.getElementById("navbarHeader");
let myHeader = document.getElementsByTagName("header");
let myButton = document.getElementsByClassName("navbar-toggler");

let hamburger = function() {
  if(theNavbar.classList[0]=="collapse" || theNavbar.classList[1]=="collapse" ){
  theNavbar.classList.remove("collapse");
  }
  else{
  theNavbar.classList.add("collapse");
  }
}
myButton[0].addEventListener("click",hamburger);

//////exo3
var button = document.getElementsByClassName('btn btn-sm btn-outline-secondary'); // element

button[0].addEventListener("click", function() {
    var text = document.getElementsByClassName("card-text");
    text[0].style.color = "#ff0000";

});

myEdit = document.getElementsByClassName("btn-outline-secondary");

  function changeColor(){
  cardTxt = document.getElementsByClassName("card-text");
  cardTxt[0].style.color="red"

}

myEdit[0].addEventListener("click",changeColor)


//////exo04

  function changeColorTwo(){
  cardTxt = document.getElementsByClassName("card-text");
  if(cardTxt[1].style.color==="green") {
  cardTxt[1].style.color="";
  }
  else{
  cardTxt[1].style.color="green";
  }
}
myEdit[1].addEventListener("click",changeColorTwo);

///////exo5

function nuclear() {

let navbarClick = document.querySelector("header");

  navbarClick.addEventListener("dblclick", function(){
    document.querySelector("link").disabled == true ? document.querySelector("link").disabled = false : document.querySelector("link").disabled = true ;
    });

}

nuclear()
