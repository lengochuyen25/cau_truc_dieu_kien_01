function tienhoahong() {
    let a = parseFloat(document.getElementById("num1").value);
    let hoahong;
    if (0<=a && a<4) {
        hoahong = a * 0.1;
    } else if (a < 10) {
        hoahong = a * 0.2;
    } else {
        hoahong = a * 0.3;
    }
   document.getElementById("result").innerHTML="Tiền hoa hồng là: "+hoahong+" triệu";
}