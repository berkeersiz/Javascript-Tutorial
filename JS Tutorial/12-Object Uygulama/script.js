var berke = {
    ad: "Berke",
    soyad: "ersiz",
    cinsiyet: "erkek",
    tel: "1124141243",
    adres: "istanbul",
    meslek: "frontend",
    diller: ["ingilizce", "turkce"],
    hobiler: ["futbol", "kitap"]

};


console.log(berke);

console.log(berke.diller.length);

console.log(berke.hobiler);

berke.hobiler.forEach(function (element) {
    console.log(element);
});


var kurucular = [
    {
        ad: "Berke",
        soyad: "ersiz",
        cinsiyet: "erkek",
        tel: "1124141243",
        adres: "istanbul",
        meslek: "frontend",
        diller: ["ingilizce", "turkce"],
        hobiler: ["futbol", "kitap"]

    },
    {
        ad: "Batu",
        soyad: "ersiz",
        cinsiyet: "erkek",
        tel: "111235154141243",
        adres: "Berlin",
        meslek: "analist",
        diller: ["ingilizce", "turkce", "almanca"],
        hobiler: ["futbol", "kitap", "gezi"]

    }


];
kurucular.forEach(function (personel) {
    console.log("***************")
    console.log(personel.ad + " " + personel.soyad);
    personel.diller.forEach(function (dil) {
        console.log(dil);
    });
});