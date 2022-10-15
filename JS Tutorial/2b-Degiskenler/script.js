var x = "javascript ile web tasarım ogreniyorum ile";

var y= x.indexOf("web");

var z = x.length;

var a = x.slice(8); // x.slice(8,15); Kesicegi yeri aralık olarakta verebiliriz.

//slice metodunu - degerler ile de kullanabiliriz sondan baslamıs olur.

var b = x.replace("ile" , "beraber"); //ile yerine beraber koyacaktır.

//Harf duyarlılıgını göz ardı etmek için.

var c = x.replace(/İLE/i,"ama"); // i  insensitive demektir.

var d = x.replace(/ile/g,"ama"); // Bütün ilelerin yerine ama koyar.

var e = x.toUpperCase();

var h = x.toLowerCase();

var t = "a,b,c,d";

var f = t.split(","); // Stringi arraye dönüştürme yolu.

document.write(f[0]);











