function kiemtra10() {
    let a = parseInt(document.getElementById("num1").value);
    if(a <10){
        document.getElementById("result").innerHTML="Số vừa nhập vào nhỏ hơn 10";
    }else if( a==10) {
        document.getElementById("result").innerHTML = "Số vừa nhập bằng 10";
    }else {
        document.getElementById("result").innerHTML=" Số vừa nhập lớn hơn 10";
    }
}