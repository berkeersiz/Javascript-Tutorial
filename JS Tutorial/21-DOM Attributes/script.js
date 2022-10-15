var models =[
    {
        name:"Merco c200",
        image:"merco.jpg",
        link:"https://www.mercedes-benz.com.tr/?group=all&subgroup=see-all&view=BODYTYPE"
    },
    {
        name:"Lambo urus",
        image:"lambo.jpg",
        link:"https://www.lamborghini.com/en-en/models/urus/urus"
    },
    {
        name:"Range sport",
        image:"range.png",
        link:"https://www.landrover.com.tr/land-rover-price-list"
    }

   ];

   setInterval(function(){
       var index = Math.floor(Math.random()*models.length);

       var img = document.querySelector(".card-img-top");
       var title = document.querySelector(".card-title");
       var a = document.querySelector("a");

       img.setAttribute("src",models[index].image);
       a.setAttribute("href",models[index].link);
       title.textContent=models[index].name;
       a.textContent="Detay";


   },1000);
