var cumle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quis!";

function ozet(cumle,maxKarakter){
    var ozetCumle = [];

    if(maxKarakter>cumle.length){
        return cumle;
    }else{
        var kelimeler = cumle.split(" ");
        var toplamKarakter = 0;

        for(var i = 0;i<kelimeler.length;i++){
            ozetCumle.unshift(kelimeler[i]);
            toplamKarakter+=kelimeler[i].length;
            if(toplamKarakter>maxKarakter){
                break;
            }
        }
        return ozetCumle.join(" ");
    }
}

var product = {
    name: "İphone 11",
    fiyat: "10000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quis!",
    summary: function(){/*Nesnelere hizmet edicek fonksiyonları objeler icinde boyle kullanabiliriz. */
        var ozetCumle = [];
        var maxKarakter=20;
        var cumle = this.description;

    if(maxKarakter>cumle.length){
        this.shortDescription =  cumle;/*shortdescription oluşturmuş olduk.*/
    }else{
        var kelimeler = cumle.split(" ");
        var toplamKarakter = 0;

        for(var i = 0;i<kelimeler.length;i++){
            ozetCumle.unshift(kelimeler[i]);
            toplamKarakter+=kelimeler[i].length;
            if(toplamKarakter>maxKarakter){
                break;
            }
        }
        this.shortDescription = ozetCumle.join(" ");
    }

    }
}

console.log(ozet(cumle,20));

product.summary();

console.log(product);