// select the element
let squarediv = document.querySelector(".square")
// add and event
squarediv.oneclick = function(){
    squarediv.style.backgroundColor = "magenta"
}

//select the element
let btnanimal = document.querySelector(".btnanimal")
let animaldiv = document.querySelector(".animalsdiv")

//list of animals
let animals = ['fish','dog','turtle','cat','spider']
// add an event
btnanimal.oneclick = function(){
    animaldiv.textContent = animals[2]
    animalsdiv.textContent = animals[Math.floor(Math.random)]
}
// MOUSE EVENT
// select the element
let numberdiv = document.querySelector(".numberdiv")
// add an event
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
// function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return 
}

// EXERCISE
//set counter
let counter = 0;
let circlediv = document.querySelector(".circle")
circlediv.onmousehover = function(){
    circlediv.textContent = counter
}