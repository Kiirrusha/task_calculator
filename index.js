let display = document.querySelector(".display_input");
let buttons = Array.from(document.querySelectorAll(".button"));
let calculator = document.querySelector(".calculator");

console.log(buttons);
let has_operation = false;
let number_a = "123";
let number_b = "123";
let operations = "+";

for (let i=0; i < buttons.length; i++) {
    // let button = buttons[i];
    buttons[i].addEventListener("click", (e) => {

    let dot = e.target.dataset.calc_dot;
    let number = e.target.dataset.calc_number;
    let operation = e.target.dataset.calc_operation;
    let eq = e.target.dataset.calc_eq;
    let reset = e.target.dataset.calc_reset;

    function calculate (a, b, oper) {
        if (oper == "+") {
            return Number(a) + Number(b)
        }
        if (oper == "-") {
            return Number(a) - Number(b)
        }
        if (oper == "*") {
            return Number(a) * Number(b)
        }
        if (oper == "/") {
            return Number(a) / Number(b)
        }
    }

    if (reset) {
        display.value = "0";
        has_operation = false;
        number_a = '';
        number_b = '';
        operations = '';
        return
    }
    if (eq) {
        if (has_operation) {
            number_b = display.value.split(operations)[1];
            display.value = calculate(number_a, number_b, operations);
        }
        has_operation = false;
        return
    }
    if (number) {
        if (display.value == "0") {
            display.value = number;
            return
        }
        display.value += number;

        return
    }
    if (dot) {
        display.value += dot;
        return
    }
    if (operation) {
        if (has_operation) {
            return
        }
        number_a = display.value;
        has_operation = true;
        operations = operation;
        display.value += operation;
        return
    }
    
    });
}


// console.log(display);


  // else if (display.value.includes("+") || display.value.includes("-") 
    //         || display.value.includes("/") || display.value.includes("*")) {
                
    // }
    
    // if (display.value == "0" && e.target.innerText != "." || display.value == "ERROR") {
    //     display.value = e.target.innerText;
    //     return
    // } 
