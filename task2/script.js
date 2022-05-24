let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let multiplyBtn = document.getElementById("multiply")
let divideBtn = document.getElementById("divide")

let firstInput = document.getElementById("firstinput")
let secondInput = document.getElementById("secondinput")
let resultInput = document.getElementById("result")

plusBtn.addEventListener("click", function(){
    resultInput.value=Number(firstInput.value)+Number(secondInput.value);
})
minusBtn.addEventListener("click", function(){
    resultInput.value=Number(firstInput.value)-Number(secondInput.value);
})
multiplyBtn.addEventListener("click", function(){
    resultInput.value=Number(firstInput.value)*Number(secondInput.value);
})
divideBtn.addEventListener("click", function(){
    resultInput.value=Number(firstInput.value)/Number(secondInput.value);
})


