const output = document.getElementById('output');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button_add = document.getElementById('add');
const button_sub = document.getElementById('subtract');
const button_multi = document.getElementById('multi');
const button_div = document.getElementById('divide');

button_add.addEventListener('click', add);
button_sub.addEventListener('click', subtract);
button_multi.addEventListener('click', yes);
button_div.addEventListener('click', divide);


function add() { 
    let sum = parseInt(input1.value) + parseInt(input2.value);
    if (isNaN(sum)) {
        if (confirm("The answer is 0, make sure you added a number in both fields.")) {
            location.reload();
        }  
    } else if (sum >= 500) {
        output.innerHTML = sum + ' !';
    } else if (sum == 0) {
        output.innerHTML = '0 !';
    } else {
        output.innerHTML = sum + ' ?';
    }
}

function subtract() {
    let diff = parseInt(input1.value) - parseInt(input2.value);
    if (isNaN(diff)) {
        if (confirm("The answer is 0, make sure you added a number in both fields.")) {
            location.reload();
        }  
    } else if (diff >= 500) {
        output.innerHTML = diff + ' !';
    } else if (diff == 0) {
        output.innerHTML = '0 !';
    } else {
        output.innerHTML = diff + ' ?';
    }
}

function divide(){
    let div = parseInt(input1.value) / parseInt(input2.value);
    if (isNaN(div)) {
        if (confirm("The answer is 0, make sure you added a number in both fields.")) {
            location.reload();
        }  
    }
    else if (div >= 500) {
        output.innerHTML = div + ' !';
    }
    else if (div == 0) {
        output.innerHTML = '0 !';
    }
    else {
        output.innerHTML = div + ' ?';
    }
    
}
    function multiply(){
        let multi = parseInt(input1.value) * parseInt(input2.value);
        if (isNaN(multi)) {
            if (confirm("The answer is 0, make sure you added a number in both fields.")) {
                location.reload();
            }
        }
        else if (multi >= 500) {
            output.innerHTML = multi + ' !';
        }
        else if (multi == 0) {
            output.innerHTML = '0 !';
        }
        else {
            output.innerHTML = multi + ' ?';
        }
    }
    

function yes() {
    output.innerHTML = input1.value * input2.value;
    if (!input1.value || !input2.value) {
         if (confirm("The answer is 0, make sure you added a number in both fields.")) {
    location.reload();
         }  
    }
    
    else if (output.innerHTML >= 500) {
        output.innerHTML = input1.value * input2.value + ' !';

    }
    else if(input1.value == 0 || input2.value == 0) {
        output.innerHTML = '0 !';
    }
    else {
        output.innerHTML = input1.value * input2.value + ' ?';
    }
    
}
    function options_calc(){

    }

// Path: index.html
