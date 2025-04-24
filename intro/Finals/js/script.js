const result = document.getElementById("result")

document.getElementById("add").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("operand1").value)
    let num2 = parseFloat(document.getElementById("operand2").value)
    
    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "Please enter valid numbers"
        result.classList.add("error")
        return
    }

    result.classList.remove("error")
    result.classList.add("success")
    result.textContent = "The result is " + (num1 + num2)
})

document.getElementById("add").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("operand1").value)
    let num2 = parseFloat(document.getElementById("operand2").value)
    
    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "Please enter valid numbers"
        result.classList.add("error")
        return
    }

    result.classList.remove("error")
    result.classList.add("success")
    result.textContent = "The result is " + (num1 - num2)
})

document.getElementById("multiply").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("operand1").value)
    let num2 = parseFloat(document.getElementById("operand2").value)
    
    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "Please enter valid numbers"
        result.classList.add("error")
        return
    }

    result.classList.remove("error")
    result.classList.add("success")
    result.textContent = "The result is " + (num1 * num2)
})

document.getElementById("divide").addEventListener("click", function(){
    let num1 = parseFloat(document.getElementById("operand1").value)
    let num2 = parseFloat(document.getElementById("operand2").value)
    
    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "Please enter valid numbers"
        result.classList.add("error")
        return
    }

    if (num2 === 0){
        result.textContent = "Cannot divide by 0"
        result.classList.add("error")
        return
    }
    result.classList.add("success")
    result.classList.remove("error")
    result.textContent = "The result is " + (num1 / num2)
    
})