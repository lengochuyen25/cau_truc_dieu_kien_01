function achiab() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let result= a%b;
    if (b == 0) {
        alert("Bạn phải nhập b khác 0");
    }else if (result == 0) {
        alert("a chia hết cho b");
    }else {
        alert("a không chia hết cho b");
    }
}
