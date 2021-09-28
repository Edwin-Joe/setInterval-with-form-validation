function sum(){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    let ans = x+y;
    document.getElementById("answer").innerHTML = ans;
}

function divide(){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    let ans = x/y;
    document.getElementById("answer").innerHTML = ans;
}
var b = false;
var a = false;
function checkNum(){
    check1();
    check2();
    //console.log(1);
}
function check1(){
    let a1 = document.getElementById("num1").value;
    if(isNaN(a1) || a1 == "" || a1 == " "){a = false;}
    else{a = true;}
    enable();
}
function check2(){
    let a1 = document.getElementById("num2").value;
    if(isNaN(a1) || a1 == "" || a1 == " "){b = false;}
    else{b = true;}
    enable();
}
function enable(){
    if(a == true && b == true){
        document.getElementById("addition").disabled = false;
        document.getElementById("division").disabled = false;
    }
    if(a == false || b == false){
        document.getElementById("addition").disabled = true;
        document.getElementById("division").disabled = true;
    }
    
}
setInterval(checkNum,100);
