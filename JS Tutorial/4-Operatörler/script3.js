/*Matematiksel*/

var x = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x-y);
console.log(y/x);
console.log(x*y);
console.log(x*y+z);
console.log((x+y)*z);

x++;
console.log(x);
x--;
console.log(x);

/*Karşılaştırma*/

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>0);
console.log(x==y);
console.log(x=="10");
console.log(x==="10");/*İlk önce tipine bakar eşit değilse direkt false verir. */
console.log(x!=z);

/*Mantıksal*/

console.log((20<10) && (30<=20));
console.log((20<30) || (30<=20));
console.log(!(20<10) && (30<=20));




