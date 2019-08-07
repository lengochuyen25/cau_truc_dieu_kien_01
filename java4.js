function solonnhat() {
    let a =parseInt(document.getElementById("num1").value);
    let b= parseInt(document.getElementById("num2").value);
    let c= parseInt(document.getElementById("num3").value);
    let max=a;
    if( max<b){
        max=b;
        if(max<c){
            max=c;
        }
    }else if(max<c){
        max=c;
    }
    document.getElementById("result").innerHTML="Số lớn nhất là: "+max;
    }