function xeploaihocluc() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    let diem = parseFloat((a + b +c) / 3);
    if (diem < 5) {
        document.getElementById("result").innerHTML = "Xếp loại F";
    } else if (diem < 6.5) {
        document.getElementById("result").innerHTML = "Xếp loại D";
    } else if (diem < 7) {
        document.getElementById("result").innerHTML = "Xếp loại C";
    } else if (diem < 8.5) {
        document.getElementById("result").innerHTML = "Xếp loại B";
    } else {
        document.getElementById("result").innerHTML = "Xếp loại A";
    }
}