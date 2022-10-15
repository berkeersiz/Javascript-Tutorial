var a = ["üzüm","Elma","Erik","Şeftali","Kayısı"];
document.write(a);
a.sort();
document.write(a);

a.reverse();//Arrayi terse çevirmeye yarar.

var b = [100,15,45,6,89,42];

document.write(b);
b.sort();//Sıralayamadı.
document.write(b);


b.sort(function(x,y){ return x-y}); // x-y yaparsak küçükten büyüğe.  y-x yaparsak büyükten küçüğe.

//x'ler y'ler aynı taraftaysa kücükten büyüğe zıt ise büyükten küçüğe!!! 

// x eksi y negatifse x küçüktür y olacagı için x'i başa koyar.
// x eksi y pozitifse y küçüktür x olacagı için y'i başa koyar.
//Eşitse değiştirme yapmaz.
document.write(b);



