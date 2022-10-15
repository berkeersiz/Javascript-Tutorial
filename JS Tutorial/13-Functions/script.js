function topla(a,b){
    return a+b;
}

var sonuc = topla(10,20);
console.log(sonuc);

var now = 2022;

function yashesap(yas){
    return now-yas;

}

var berke = yashesap(1999);
 console.log(berke);

 function emeklilik(ad,yas){
     var k_yas=yashesap(yas);
     var emeklilik = 65 - k_yas;
     
     if(emeklilik > 0){
         console.log(emeklilik + " yıl kaldı.")
     }else{
         console.log("Zaten emekli.")
     }
 }