for (var i = 10; i <= 100; i++) {
    console.log(i);
}

var i = 10;
while (i <= 100) {
    console.log(i);
    i += 5;
}




var k_username = "guest";
var k_password = "12345";
var loggedin = false;

while (loggedin == false) {

    var username = prompt("kullanıcı adı : ");
    var password = prompt("parola : ");

    if ((k_username == username) && (k_password == password)) {
        console.log("giris basarılı...");
        loggedin = true;
    } else {
        console.log("kullanıcı adı veya parola yanlış...");
    }


}



