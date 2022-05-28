
let arrayJson = '[{"navn":"Lars","vaegt":70,"vaegtfoer":75},{"navn":"Allan","vaegt":40,"vaegtfoer":54},{"navn":"Jeppe","vaegt":65,"vaegtfoer":64}]'

console.log(arrayJson)
const array = JSON.parse(arrayJson)
console.log(array)

const names = array.map(person => person.navn);

console.log(names)


console.log(array.filter(a => a.vaegt < a.vaegtfoer).map(a => a.navn))

console.log(array.map(a => a.vaegt).reduce((prev,current) => prev > current ? prev : current))

const loss = array.filter(a => a.vaegt < a.vaegtfoer)

console.log(loss)
console.log(loss.map(a => a.vaegtfoer - a.vaegt).reduce((prev, current) => prev + current) / loss.length)


const numbers = [28,77,45,99,27]

numbers.forEach(number => {
    console.log(number)
})