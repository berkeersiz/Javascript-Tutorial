var isBlue = false;
var blue = document.getElementById("mavi");

setInterval(function(){

    if(isBlue){
        blue.style.background="green";
        isBlue=false;
    }
    else{
        blue.style.background="blue";
        isBlue=true;
    }
    //isBlue=!isBlue; ifelse içinde yazmak yerine böylede yapılabilir.

},1000);