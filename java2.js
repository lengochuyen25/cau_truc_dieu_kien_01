function hs10() {
    let a = parseInt(document.getElementById("num1").value);
    if(a<16){
        document.getElementById("result").innerHTML="Học sinh chưa đủ tuổi học lớp 10";
    }else {
        document.getElementById("result").innerHTML=" Học sinh đủ tuổi vào học lớp 10";
    }
}