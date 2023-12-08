const equalBtn = document.getElementById("equal")
const clearBtn = document.getElementById("clear")
const deleteBtn = document.getElementById("delete")
const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")
const output = document.querySelector(".output")

equalBtn.addEventListener("click",()=>{
    output.textContent = eval(output.textContent)
})

clearBtn.addEventListener("click",()=>{
    output.textContent = ' '
})
deleteBtn.addEventListener("click",()=>{
    output.textContent = output.textContent.slice(0,-1)
})

for(let i=0;i<10;i++){
    numbers[i].addEventListener("click",()=>{
        output.textContent += numbers[i].value
    })
}

for(let i=0;i<10;i++){
    operations[i].addEventListener("click",()=>{
        output.textContent += operations[i].value
    }

)}