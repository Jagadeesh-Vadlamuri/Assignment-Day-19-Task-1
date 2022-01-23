let btn1 = document.getElementById("1");
btn1.addEventListener("click",one);

function one(){
   document.getElementById("result").value += 1;  
   
}

let btn2 = document.getElementById("2");
btn2.addEventListener("click",two);

function two(){
   document.getElementById("result").value += 2;  
   
}

let btn3 = document.getElementById("3");
btn3.addEventListener("click",three);

function three(){
   document.getElementById("result").value += 3;  
   
}

let btn4 = document.getElementById("4");
btn4.addEventListener("click",four);

function four(){
   document.getElementById("result").value += 4;  
   
}

let btn5 = document.getElementById("5");
btn5.addEventListener("click",five);

function five(){
   document.getElementById("result").value += 5;  
   
}

let btn6 = document.getElementById("6");
btn6.addEventListener("click",six);

function six(){
   document.getElementById("result").value += 6;  
   
}

let btn7 = document.getElementById("7");
btn7.addEventListener("click",seven);

function seven(){
   document.getElementById("result").value += 7;  
   
}

let btn8 = document.getElementById("8");
btn8.addEventListener("click",eight);

function eight(){
   document.getElementById("result").value += 8;  
   
}

let btn9 = document.getElementById("9");
btn9.addEventListener("click",nine);

function nine(){
   document.getElementById("result").value += 9;  
   
}

let btn0 = document.getElementById("0");
btn0.addEventListener("click",zero);

function zero(){
   document.getElementById("result").value += 0;  
   
}

let btn00 = document.getElementById("00");
btn00.addEventListener("click",doublezero);

function doublezero(){
   document.getElementById("result").value += '00';  
   
}

let btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click",Multiply);

function Multiply(){
   document.getElementById("result").value += '*';  
   
}

let btnAdd = document.getElementById("add");
btnAdd.addEventListener("click",Add);

function Add(){
   document.getElementById("result").value += '+';  
   
}

let btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click",Subtract);

function Subtract(){
   document.getElementById("result").value += '-';  
   
}

let btnDivide = document.getElementById("division");
btnDivide.addEventListener("click",Division);

function Division(){
   document.getElementById("result").value += '/';  
}

let reset = document.getElementById("clear");
reset.addEventListener("click",Clear);
function Clear(){
    document.getElementById("result").value = "";
}

let back = document.getElementById("Arr");
back.addEventListener("click",ARR);
function ARR(){
    let val = document.getElementById("result").value;
    let val1 =val.split("").splice(0,val.length-1).join("");
    document.getElementById("result").value = val1;
}

let dotbtn = document.getElementById("dot");
dotbtn.addEventListener("click", Dot);

function Dot(){
    document.getElementById("result").value += ".";
}

function alert(){
    let User_Input = document.getElementById("result").value;
    let alpha = /[a-zA-ZA-z]/gi;
    let res = User_Input.match(alpha);
    if(User_Input === res){
        alert(
            "Only the numbers are allowed"
        )
    }
}

let equals = document.getElementById("equal");
equals.addEventListener("click",Equals);
function Equals(){
    var datum = document.getElementById("result").value;
    var result = 0;
    for(var i=0; i<datum.length; i++){
        if(datum.split("")[i]=="+"){
            var data = datum.split("+");
            for(var j=0; j<data.length; j++){   //-9-2-4
                result += Number(data[j]);
            }
            break;
        }
        if(datum.split("")[i]=="-" && datum.split("")[0]!=="-"){          
            var data = datum.split("-");
            result = Number(data[0]);
            for(var j=0; j<data.length-1; j++){
                result -= Number(data[j+1]);
            } 
            break; 
        }
        else if(datum.split("")[i]=="-" && datum.split("")[0]==="-"){
            var data = datum.split("-");
            data.shift();
            result = "-"+Number(data[0]);
            for(var j=0; j<data.length-1; j++){
                result -= Number(data[j+1]);
            } 
            break;
        }
        if(datum.split("")[i]=="*"){
            var data = datum.split("*");
            result = 1;
            for(var k=0; k<data.length; k++){
                result *= Number(data[k]);
            }
            break;
        }
        if(datum.split("")[i]=="/"){
            var data = datum.split("/");
            result = Number(data[0]);
            for(var k=0; k<data.length-1; k++){  
                result /= Number(data[k+1]);
            }
            break;
        }
    }
    document.getElementById("result").value = result;
}
