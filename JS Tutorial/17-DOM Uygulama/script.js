/*none yap 
var todolist=document.getElementById("todolist");
todolist.style.listStyleType="none";



Tüm liste elemanlarının üstünü çiz. 
var listitems = document.querySelectorAll("li");
listitems.forEach(function (item) {
    item.style.textDecoration = "line-through";
});*/


/*----------------------------- */
var date = new Date();
var hour = date.getHours();
var element;

for (var i = hour; i >= 8; i--) {
    element = document.getElementById("item" + i);
    element.style.textDecoration = "line-through";
    element.querySelector("input").checked = true;
}