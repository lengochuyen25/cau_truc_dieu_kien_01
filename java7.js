function cuocdienthoai() {
    let a = parseFloat(document.getElementById("num1").value);
    let money;
  if (a<100){
      money=a*300;
  }else if(a<200){
      money= 100*300+ (a-100)*200;
  }else {
      money=100*300+ 100*200 + (a-200)*100;
  }
  document.getElementById("result").innerHTML="Số tiền điện thoại là: "+money;
}