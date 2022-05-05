function lessThan(a,b){
    if (typeof a == 'string' && typeof b == 'string'){
        return a>b
    }else if (typeof a == 'number' && typeof b == 'number'){
        return a>b
    }else{
        throw new Error("lolbro")
    }

}

console.log(lessThan("roflmaooo","roflmao"))
console.log(lessThan(2,8))
//console.log(lessThan("hej", 2))

const number = [5,3,7,9,1,2,5,8]

function minimum(array){
    let min = array[0]
    for (let i = 0; i < array.length-1; i++) {
        if (lessThan(min,array[i+1]) === true){
            min = array[i+1]
        }
    }
    return min
}

console.log(minimum(number))


const words = ["Preben", "Lars", "Allan", "Breum", "bo", "bobby"]

function minimumText(array){
    return array.reduce((prev, current) => lessThan(current, prev) ? prev : current)
}

console.log(minimumText(words))