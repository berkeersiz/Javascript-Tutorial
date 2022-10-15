var btn=document.querySelector("#changeText");
var btn2=document.querySelector("#changeText2");
var p=document.querySelector("p");

btn.addEventListener("click",function(){
   p.textContent="button clicked"; 
});
btn2.addEventListener("click",changeColor);

var h1 =document.querySelector("#title");
h1.addEventListener("click",changeColor);

function changeColor(){
    h1.style.color="red";
}

var lis=document.querySelectorAll("li");

lis.forEach(function(element){
    element.addEventListener("click",function(){
        this.style.color="blue";
        this.style.textDecoration="underline"

    });

});