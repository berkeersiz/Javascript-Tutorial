var models = [
    { name: "Mazda", selected: false },
    { name: "Volvo", selected: false },
    { name: "Merco", selected: true },
    { name: "Porsche", selected: false },
    { name: "Lambo", selected: false }
];
var html = document.querySelector(".list-group");

models.forEach(function (model) {
    /*console.log(model);*/

    if (model.selected) {
        html.innerHTML += '<li class="list-group-item active">' + model.name + '</li>'

    } else {

        html.innerHTML += '<li class="list-group-item">' + model.name + '</li>'
    }

    /*diğer yol daha pratik
    var li = " ";
    if(model.selected){
        li='<li class="list-group-item active">' + model.name + '</li>'
    }else{
        '<li class="list-group-item">' + model.name + '</li>'
    }
    html.innerHTML+=li;
    */



});