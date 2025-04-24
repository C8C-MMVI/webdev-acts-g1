const lenders = document.getElementById("nakautangs")
const newUtang = document.createElement("li")

let name = document.getElementById("name")
let utang = parseFloat(document.getElementById("utang"))
while (i != 0){
    newUtang.textContent = i + " " + name + " - " + utang
    i++
}

lenders.appendChild("newUtang")