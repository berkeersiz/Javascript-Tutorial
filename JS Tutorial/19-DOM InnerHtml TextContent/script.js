/*Sadece textin içeriğini değiştirir.(strong vs dahil etmez.) */
/*var p =document.getElementsByTagName("p")[0];

p.textContent="Komple Web Geliştirme."

console.log(p);

var ul =document.querySelector("ul");
ul.textContent="liste";
console.log(ul.textContent);*/

var ul =document.getElementsByTagName("p")[0];

ul.innerHTML="<li>item1</li><li>item2</li>";
ul.innerHTML="<b>item2</b>"

/*inner ise içeriği ve yapıyı da değiştirebilir.*/