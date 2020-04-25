let input = "";
        let buttonsInput = document.querySelectorAll('button');
        buttonsInput.forEach((button) => {
            button.addEventListener('click',function(){
                if(button.id>=0 && button.id<=9 || button.id =="."){
                input += button.id;
                let display = document.querySelector(".display");
                display.textContent = input;
                }
            });
        })
      
        window.addEventListener('keydown',function(e){
            if(e.key>=0 && e.key<=9 || e.key =="."){
                input += e.key;
            }
            else{
                input = input;
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

        let input1 ="";
        let input2="";
        let selectedOperator = "";
        function operate(input1,input2){
            input2=input;
            switch (selectedOperator){
                case "+":{
                    input = (parseFloat(input1)+parseFloat(input2));
                    let display = document.querySelector(".display");
                    display.textContent = input;
                    console.log(input);
                    input2="";
                    break;
                }
                case "-":{
                    input = (parseFloat(input1)-parseFloat(input2));
                    let display = document.querySelector(".display");
                    display.textContent = input;
                    input2="";
                    break;
                }
                case "*":{
                    input = (parseFloat(input1)*parseFloat(input2));
                    let display = document.querySelector(".display");
                    display.textContent = input;
                    input2="";
                    break;
                }
                case "/":{
                    input = ((parseFloat(input1))/(parseFloat(input2)));
                    let display = document.querySelector(".display");
                    display.textContent = input;
                    input2="";
                    break;
                }
                case "^":{
                    input = Math.pow(parseFloat(input1),parseFloat(input2));
                    let display = document.querySelector(".display");
                    display.textContent = input;
                    input2="";
                    break;
                }
            }
        }
        let plusButton = document.querySelector(".add");
        plusButton.addEventListener('click',function(){
            input1 = input;
            selectedOperator="+";
            input="";
                
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "+"){
                input1 = input;
                selectedOperator="+";
                input="";
            }
        })

        let subtractButton = document.querySelector(".subtract");
        subtractButton.addEventListener('click',function(){
            input1 = input;
            selectedOperator="-";
            input="";
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "-"){
                input1 = input;
                selectedOperator="-";
                input="";
            }
        })

        let multiplyButton = document.querySelector(".multiply");
        multiplyButton.addEventListener('click',function(){
            input1 = input;
            selectedOperator="*";
            input="";
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "*"){
                input1 = input;
                selectedOperator="*";
                input="";
            }
        })

        let divideButton = document.querySelector(".divide");
        divideButton.addEventListener('click',function(){
            input1 = input;
            selectedOperator="/";
            input="";
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "/"){
                input1 = input;
                selectedOperator="/";
                input="";
            }
        })

        let powerButton = document.querySelector(".power");
        powerButton.addEventListener('click',function(){
            input1 = input;
            selectedOperator="/";
            input="";
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "^"){
                input1 = input;
                selectedOperator="^";
                input="";
            }
        })

        let percentageButton = document.querySelector(".percentage");
        percentageButton.addEventListener('click',function(){
            input = (parseFloat(input))*(0.01);
            let display = document.querySelector(".display");
            display.textContent = input+"%";
            input2="";
        })
        window.addEventListener('keydown',function(e){
            if(e.key == "%"){
                input = ((parseFloat(input))*(0.01)).toFixed(2);
                let display = document.querySelector(".display");
                display.textContent = input+"%";
                input2="";
            }
        })

        let equalButton = document.querySelector(".equal");
        equalButton.addEventListener('click',function(){
            operate(input1,input2);
        });

        window.addEventListener('keydown',function(e){
            if(e.key == "Enter"){
                operate(input1,input2);
            }
        })