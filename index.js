
const metersToFeet = 3.281

const litersToGallons = 0.264

const poundsToKilos = 0.453


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
    lengthVal.textContent = `${randomVal} meters = ${(randomVal * metersToFeet).toFixed(3)} feet | ${randomVal} feet = ${(randomVal / metersToFeet).toFixed(3)} meters`
    // liters and gallons
    volVal.textContent = `${randomVal} liters = ${(randomVal * litersToGallons).toFixed(3)} gallons | ${randomVal} gallons = ${(randomVal / litersToGallons).toFixed(3)} liters`
    // pounds and kilos
    massVal.textContent = `${randomVal} liters = ${(randomVal * poundsToKilos).toFixed(3)} gallons | ${randomVal} gallons = ${(randomVal / poundsToKilos).toFixed(3)} liters`
})





