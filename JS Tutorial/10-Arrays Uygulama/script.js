var now = 2022;
var models = ["11","12","13pro","13promax"];
var years=["2015","2016,2019","2020"];

for(var i=0;i<models.length;i++){
    console.log(models[i]);
}

models.forEach(function(element){
    console.log(element);
});

for(var i=0;i<models.length;i++){
    console.log(models[i] + " " + years[i] + " model ve " + (now-years[i]) + "yaşında bir telefondur.");
}

var mode = prompt("model giriniz.");
var year = prompt("model yilini giriniz.");

models.push(model);
models.push(year);
models.forEach(function(element){
    console.log(element);
});



