// opgave 1
const allSections = document.querySelectorAll("body")
const array = Array.from(allSections)
for (let elem of array){
    elem.style.color = "red"
}

// anden løsning
/*
const allSections = document.querySelector("body")
allSections.style.color = "red"
 */

// opgave 2
const brun = document.querySelectorAll("h1")
const arrayBrown = Array.from(brun)
for (let elem of arrayBrown){
    elem.nextElementSibling.nextElementSibling.style.color = "brown"
}

//opgave 3

const li = document.querySelectorAll("li")

for (let i = 0; i < li.length; i++) {
    if(i % 2 === 0){
        li[i].style.backgroundColor = "lightGrey"
    }
}

// opgave 4


for (let elem of document.querySelectorAll("h1")){
    elem.nextElementSibling.outerHTML = '<h2>' + elem.nextElementSibling.innerHTML + '</h2>'
}


