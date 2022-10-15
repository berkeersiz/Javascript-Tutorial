var kutu = document.querySelectorAll(".kutu");

kutu.forEach(function(element){
    element.addEventListener("click",function(){
        this.style.display="none";
    });

});