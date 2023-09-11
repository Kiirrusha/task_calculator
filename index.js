let display = document.querySelector(".display_input");
let buttons = Array.from(document.querySelectorAll(".button"));



let has_operation = false;
let dot_total = 0;
let number_a = "";
let number_b = "";
let operations = "";



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
        dot_total = 0;
        return
    }
    if (eq) {
        if (has_operation) {
            number_b = display.value.split(operations)[1];
            display.value = calculate(number_a, number_b, operations);
        }
        if (number_a.indexOf(".") > -1) {
            has_operation = false;
            dot_total = 1;
            return
        }

        has_operation = false;
        dot_total = 0;
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
        if (has_operation == false && dot_total == 0) {
            display.value += dot;
            dot_total += 1;
            return
        }
        if (has_operation == true && dot_total == 1) {
            display.value += dot;
            dot_total += 1;
            return
        }
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

document.addEventListener("keydown", (e) => {
 
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

    if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4"
     || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
        if (display.value == "0") {
            display.value = e.key;
            return
        }
        display.value += e.key;
    }
    
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" ) {
        if (has_operation) {
            return
        }
        number_a = display.value;
        has_operation = true;
        operations = e.key;
        display.value += operations;
        return
    }
    
    if (e.key === ".") {
        if (has_operation == false && dot_total == 0) {
            display.value += e.key;
            dot_total += 1;
            return
        }
        if (has_operation == true && dot_total == 1) {
            display.value += e.key;
            dot_total += 1;
            return
        }
        return
    }

    if (e.key === "=") {
        if (has_operation) {
            number_b = display.value.split(operations)[1];
            display.value = calculate(number_a, number_b, operations);
        }
        if (number_a.indexOf(".") > -1) {
            has_operation = false;
            dot_total = 1;
            return
        }

        has_operation = false;
        dot_total = 0;
        return
    }

    if (e.key === "c" || e.key === "Backspace") {
        display.value = "0";
        has_operation = false;
        number_a = '';
        number_b = '';
        operations = '';
        dot_total = 0;
        return
    }
  });





