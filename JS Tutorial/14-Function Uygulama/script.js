function tekcift(number) {

    if (number % 2 == 0) {
        console.log("ççiifftt")
    } else {
        console.log("tekkk")

    }

}

function fakt(number) {

    if (number == 1) {
        return 1;
    }
    var fakto = number * fakt(number - 1);
    return fakto;

    var sonuc = 1;

    /*for (var i = 2; i <= number; i++) {
        sonuc *= i;
    }
    return sonuc;

    for(var i=2;number>=i;number--){
        sonuc *= number;
    }
    return sonuc;*/
}

var diziler = ["medcezir","ezel","kavakyelleri"];

function yazdir(dizi){
dizi.forEach(function(item) {
    console.log(item);
});

}
console.log(fakt(5));
console.log(tekcift(10));
yazdir(diziler);