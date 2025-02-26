/*
1 meter = 3.281 feet
1 foot = 0.305 meters
1 liter = 0.264 gallon
1 gallon = 3.788 liters
1 kilogram = 2.204 pound
1 pound = 0.454 kilogram
*/

const inputVal = document.getElementById("input") // get input value
const cBtn = document.getElementById("btn") // get convert btn
let lengthVal = document.getElementById("length-dl")// get innerHtml from length paragraph
let volVal = document.getElementById("vol-dl")//get innerHTML from volume paragraph
let massVal = document.getElementById("mass-dl")// get innerHTML from mass paragraph

function getInputVal(){
    return inputVal.value
}

cBtn.addEventListener("click", function(){
    const randomVal = getInputVal()
    // meters and feet
    lengthVal.textContent = lengthConvert(randomVal)
    // liters and gallons
    volVal.textContent = volumeConvert(randomVal)
    // pounds and kilos
    massVal.textContent = massConvert(randomVal)
}

function lengthConvert(value) {
    let meter = (value * 3.281).toFixed(3)
    let foot = (value * 0.305).toFixed(3)
    let meters = `${value} meters = ${meter} feet`
    let feet = `${value} feet = ${foot} meters`
    return `${meters} | ${feet}`
}

function volumeConvert(value) {
    let liter = (value * 0.264).toFixed(3)
    let gallon = (value * 3.788).toFixed(3)
    let liters = `${value} liters = ${liter} gallons`
    let gallons = `${value} gallons =  ${gallon} liters`
    return `${liters} | ${gallons}`
}

function massConvert(value) {
    let kilo = (value * 2.204).toFixed(3)
    let pound = (value * 0.454).toFixed(3)
    let kilos = `${value} kilos = ${kilo} pounds`
    let pounds = `${value} pounds = ${pound} kilos`
    return `${kilos} | ${pounds}`
}
