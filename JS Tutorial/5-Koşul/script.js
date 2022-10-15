var marka = "Mercedes";
var model = "Jeep";
var otomatik = "Yes";

if(otomatik=="Yes"){
    console.log("Araç otomatiktir.")
}else{
    console.log("Araç otomatik değildir.")
}

otomatik=true;

if(otomatik){
    console.log(marka + " " + model + " otomatik.");
}

if(otomatik=="true"){ //true yazmaz 
    console.log("true");
}

if(10=="10"){
    console.log("sayilar eşit");
}

if(10==="10"){ //yazmaz cünkü ilk once tip kontrol eder.
    console.log("sayilar eşit");
}

var vites = "1";
//1 manuel 2 otomatik

if(vites==1){
    console.log("Araç manual");
}else if(vites=="2"){
    console.log("Araç otomatik.")
}else{
    console.log("Yanlış deger.")
}

/*SWITCH */

switch(vites){
    case "1":
        console.log("Araç manual");
        break;
    case"2":
        console.log("araç otomatik");
    default:
        console.log("yanlış deger")
}