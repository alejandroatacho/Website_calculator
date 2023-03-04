const output = document.getElementById('output');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output_option = {
    function sum() {
        output.innerHTML = input1.value + input2.value;
        if (!input1.value || !input2.value) {
            if (confirm("The answer is 0, make sure you added a number in both fields.")) {
                location.reload();
            }
        }
        else if (output.innerHTML >= 500) {
            output.innerHTML = input1.value + input2.value + ' !';
        }
        else if(input1.value == 0 || input2.value == 0) {
            output.innerHTML = '0 !';
        }
        else {
            output.innerHTML = input1.value + input2.value + ' ?';
        }
    }
    function subtract(){
        output.innerHTML = input1.value - input2.value;
        if (!input1.value || !input2.value) {
            if (confirm("The answer is 0, make sure you added a number in both fields.")) {
                location.reload();
            }
        }
        else if (output.innerHTML >= 500) {
            output.innerHTML = input1.value - input2.value + ' !';
        }
        else if(input1.value == 0 || input2.value == 0) {
            output.innerHTML = '0 !';
        }
        else {
            output.innerHTML = input1.value - input2.value + ' ?';
        }
    }    
}

// function options(){
//     function sum() {
//         output.innerHTML = input1.value + input2.value;
//         if (!input1.value || !input2.value) {
//             if (confirm("The answer is 0, make sure you added a number in both fields.")) {
//                 location.reload();
//             }
//         }
//         else if (output.innerHTML >= 500) {
//             output.innerHTML = input1.value + input2.value + ' !';
//         }
//         else if(input1.value == 0 || input2.value == 0) {
//             output.innerHTML = '0 !';
//         }
//         else {
//             output.innerHTML = input1.value + input2.value + ' ?';
//         }
//     }
//     function subtract(){
//         output.innerHTML = input1.value - input2.value;
//         if (!input1.value || !input2.value) {
//             if (confirm("The answer is 0, make sure you added a number in both fields.")) {
//                 location.reload();
//             }
//         }
//         else if (output.innerHTML >= 500) {
//             output.innerHTML = input1.value - input2.value + ' !';
//         }
//         else if(input1.value == 0 || input2.value == 0) {
//             output.innerHTML = '0 !';
//         }
//         else {
//             output.innerHTML = input1.value - input2.value + ' ?';
//         }
//     }
// }

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