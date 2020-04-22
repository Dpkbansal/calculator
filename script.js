let input = "";
let buttonsInput = document.querySelectorAll('button');
buttonsInput.forEach((button) => {
    button.addEventListener('click',function(){
        input += button.id;
        let display = document.querySelector(".display");
        display.textContent = input;
    });
})

window.addEventListener('keydown',function(e){
    if(e.key>=0 && e.key<=9 || e.key=="*" || e.key =="-" || e.key =="+" || e.key =="/" || e.key == "." || e.key == "^"){
        input += e.key;
    }
        let display = document.querySelector(".display");
        display.textContent = input;
})


let buttonBackspace = document.querySelector(".back");
buttonBackspace.addEventListener('click',function(){
    let inputArray = Array.from(input);
    let splice = inputArray.splice((inputArray.length-1),1);
    input = inputArray.join("");
    let display = document.querySelector(".display");
    display.textContent = input;
})

window.addEventListener('keydown',function(e){
    if(e.key == "Backspace"){
    let inputArray = Array.from(input);
    let splice = inputArray.splice((inputArray.length-1),1);
    input = inputArray.join("");
    let display = document.querySelector(".display");
    display.textContent = input;
    }
})



let buttonClear = document.querySelector(".clear");
buttonClear.addEventListener('click',function(){
    input="";
    let display = document.querySelector(".display");
    display.textContent = input;
})
window.addEventListener('keydown',function(e){
    if(e.key == "Escape"){
        input="";
    }
    let display = document.querySelector(".display");
    display.textContent = input;
})

function operate(){
    let inputArray = Array.from(input);
    let input1 =0;
    let input2 =0;
    let inputOperator =0;
    for(let i=inputArray.length-1;i>=0;i--){
        if(inputArray[i]=="+" || inputArray[i]=="-" || inputArray[i]=="*" || inputArray[i]=="/" || inputArray[i]=="^"){
            input2 = parseFloat(inputArray.splice(i+1,(inputArray.length-i)).join(""));
            input1 = parseFloat(inputArray.splice(0,i).join(""));
            inputOperator = inputArray.join("");
            break;
        }
        else{
            let display = document.querySelector(".display");
            display.textContent = input+"="+input;
        }
    }
    switch (inputOperator){
        case "+":{
        let result = (input1)+(input2);
        let display = document.querySelector(".display");
        display.textContent = input + "="+result;
        break;
        }
        case "-":{
        let result = (input1)-(input2);
        let display = document.querySelector(".display");
        display.textContent = input + "="+result;
        break;
        }
        case "*":{
        let result = (input1)*(input2);
        let display = document.querySelector(".display");
        display.textContent = input + "="+result;
        break;
        }
        case "/":{
        if(input2==0){
            let result = "INFINITY"
        }
        else{
            result = (input1)/(input2);
        }
        let display = document.querySelector(".display");
        display.textContent = input + "="+result;
        break;
        }
        case "^":{
        let result = Math.pow(input1,input2);
        let display = document.querySelector(".display");
        display.textContent = input + "="+result;
        break;
        }
    }
}

let equalButton = document.querySelector(".equal");
equalButton.addEventListener('click',operate);

window.addEventListener('keydown',function(e){
    if(e.key == "Enter"){
        operate();
    }
})