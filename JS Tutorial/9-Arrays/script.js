var marka = ["range rover","ferrari","porsche","mercedes"];
var model = new Array("sports","classic","panemera","c200");

console.log(marka);
console.log(model[1]);

marka[0]="Lambo";
console.log(marka[0]);

var cla = ["mercedes","cla",42,true];
console.log(cla);
cla.push("white");//sayfayı yenilesek en sonra white eklenir.
cla.unshift("sanuf");//en başa eklenir.
cla.pop();//son eleman silinir.
cla.unshift();//ilk eleman silinir.

for(var i = 0;i<marka.length;i++){
    console.log(marka[i]);
}


if(marka.indexOf("porsche")!==-1){
    console.log("bulundu.");
}else{
    console.log("aranılan araba bulunamadı.");
}


/*Splice*/

var meyveler = [ "elma", "armut","muz","şeftali","kiraz"];
meyveler.splice(2,0,"erik"); //2. indexe git 0 tane sil ve erik ekle.
document.write(meyveler);
