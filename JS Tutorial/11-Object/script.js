/*var mercedes = ["Mercedes" ,"c200" , "2022" ];
var porsche = ["Porsche" ,"cayenna" , "2020" ];
var range = ["Range Rover" ,"sport" , "2023" ];

console.log(mercedes); */

var mercedes = {
    marka: "Mercedes",
    model: "c200",
    yil: "2022",
    renk: "beyaz",
    otomatik: true
};
console.log(mercedes);

console.log(mercedes.marka);
console.log(mercedes.otomatik);
console.log(mercedes["renk"]);

var porsche = new Object();
porsche.marka = "Porsche";
porsche.model = "cayenna";
porsche.yil = "2021";
porsche.renk = "siyah";
porsche.otomatik = true;


porsche.model = "cip";//degerleri boyle degistirebiliriz.

var arabalar = [
    {
        marka: "Mercedes",
        model: "c200",
        yil: "2022",
        renk: "beyaz",
        otomatik: true
    },
    {
        marka: "Porsche",
        model: "cayenna",
        yil: "2021",
        renk: "siyah",
        otomatik: true
    }



];


console.log(arabalar[1].model);

for(var i = 0;i<arabalar.length;i++){
    console.log(arabalar[i]);
    console.log(arabalar[i].marka);
}
