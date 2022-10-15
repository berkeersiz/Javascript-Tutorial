var dogum = prompt("Dogum yılınızı giriniz");
var yil = 2022;
var yas = yil - dogum;
console.log(yas);

if (yas < 18) {
    console.log("Ehliyet alamazsınız.");
    var kalan = 18 - yas;
    console.log("Ehliyet alabilmek için kalan süre : " + kalan + " yıl");
} else if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz.");
} else {
    console.log("Yanlış bir deger.");
}

var ay = prompt("Ay bilgisini giriniz (1-12) : ");

switch (ay) {
    case "1":
    case "2":
    case "12":
        console.log("Kış");
        break;
    case "3":
    case "4":
    case "5":
        console.log("İlkbahar");
        break;
    case "6":
    case "7":
    case "8":
        console.log("Yaz");
        break;
    case "9":
    case "10":
    case "11":
        console.log("Sonbahar");
        break;
    default:
        console.log("Yanlış bir ay");

}