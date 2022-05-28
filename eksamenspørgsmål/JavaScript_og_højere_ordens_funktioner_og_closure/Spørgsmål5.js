
function randomText(textArray){
    return () => {
        return textArray[Math.floor((Math.random()*textArray.length))]
    }
}

const colors = ["red", "green", "blue", "pink"]
const randomColor = randomText(colors)
console.log(randomColor())

class Car{
    #model
    #color

    constructor(model, color) {
        this.#model = model
        this.#color = color
    }

    toJson(){
        return {model : this.#model, color : this.#color}
    }

    toString(){
        return JSON.stringify(this.toJson())
    }

}
// fill sætter alle elementer til en bestemt værdi, i dette tilfælde 0
function randomCars(carAmount, randomColor, randomModel){
    return new Array(carAmount).fill(0).map(a => new Car(randomModel(), randomColor()))
}

const models = ["Audi", "BMW", "Opel", "Mazda"]
const randomModel = randomText(models)

console.log(randomCars(3, randomColor, randomModel).map(c => c.toString()))
