var c = [{ marka: "Merco", yıl: 2022 },
{ marka: "porsche", yıl: 2021 },
{ marka: "range", yıl: 2023 }];

function arabalarıGoster() {

    document.getElementById("div1").innerHTML =
        c[0].marka + " " + c[0].yıl + "<br>" +
        c[1].marka + " " + c[1].yıl + "<br>" +
        c[2].marka + " " + c[2].yıl + "<br>";



}

function sırala() {
    c.sort(function (a, b) { return a.yıl - b.yıl });
    arabalarıGoster();

}
sırala();
