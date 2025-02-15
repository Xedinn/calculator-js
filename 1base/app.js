let num  = 42
let firstName = 'Alexey'
const isProgrammer = true

alert (firstName)

// console.log(firstName)
// console.log(num + 10)   
// console.log(num - 10)   
// console.log(num * 10)   
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = num + (10 * 2)/5 - 1 
// console.log(num3)

// const fullName = firstName + ' Mironov'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit') 
const plusBtn = document.getElementById('plus') 
const minusBtn = document.getElementById('minus') 

let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = 42


// console.log(typeof sum);


plusBtn.onclick = function () {
action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

submitBtn.onclick = function () {

    if (action == '+') {
        const sum  = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum 
    } else {
        const sum  = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum 
    }
}


    