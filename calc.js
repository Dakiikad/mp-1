function addition() {
    let input = document.getElementById("firstNumber").value;
    let input2 = document.getElementById("secondNumber").value;
    let output = Number(input) + Number(input2);
    if (output < 0) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML= "Result: " + String(output);
        }
        else{
        document.getElementById("result").style.color = "black";
        document.getElementById("result").innerHTML = "Result: " + String(output);
        }
    
}

function subtract() {
    let input = document.getElementById("firstNumber").value;
    let input2 = document.getElementById("secondNumber").value;
    let output = input - input2;
    if (output < 0) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML= "Result: " + String(output);
        }
        else{
        document.getElementById("result").style.color = "black";
        document.getElementById("result").innerHTML = "Result: " + String(output);
        }
}

function multiply() {
    let input = document.getElementById("firstNumber").value;
    let input2 = document.getElementById("secondNumber").value;
    let output = input * input2;
    if (output < 0) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML= "Result: " + String(output);
        }
        else{
        document.getElementById("result").style.color = "black";
        document.getElementById("result").innerHTML = "Result: " + String(output);
        }
    
}

function divide() {
    let input = document.getElementById("firstNumber").value;
    let input2 = document.getElementById("secondNumber").value;
    output = input/input2;
    if (output < 0) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML= "Result: " + String(output);
        }
    else if(output >0){
        document.getElementById("result").style.color = "black";
        document.getElementById("result").innerHTML = "Result: " + String(output);
        }
    
    else {
        document.getElementById("result").innerHTML = "Error: Cannot divide by zero"; 
    }
}

function power() {
    let input = Number(document.getElementById("firstNumber").value);
    let input2 = Number(document.getElementById("secondNumber").value);
    let output = 1;
    for (let i = 0; i < input2; i++) {
        output *= input;
    }
    if (output < 0) {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML= "Result: " + String(output);
        }
        else{
        document.getElementById("result").style.color = "black";
        document.getElementById("result").innerHTML = "Result: " + String(output);
        }
}

function clearInputs() {
    document.getElementById("firstNumber").value = '';
    document.getElementById("secondNumber").value = '';
    document.getElementById("result").innerHTML ="Result" + ""; 
}
