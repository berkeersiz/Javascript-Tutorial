var ad= "Berke";
var ogrno = "162";
var cinsiyet = true; //erkek=true kadın=false
var dersadi = "matematik";
var midterm = 75; 
var final = 90;
var ort= (midterm + final)/2;


console.log(ad + ogrno + " nolu ogrencinin not ortalamasi : " + ort)

var ad= prompt("Adiniz");
var ogrno = prompt("Numaraniz")
var cinsiyet = prompt("Cinsiyet"); //erkek=true kadın=false
var dersadi = prompt("Ders Adi");
var midterm = prompt("Midterm Notunuz");
var final = prompt("Final Notunuz");
var ort= (Number(midterm) + Number(final))/2;//Number yazmazsak string sanar prompttan aldigimiz degeri.
console.log("Ortalamaniz : " + ort);
