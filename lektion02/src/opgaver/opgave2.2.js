let list = [1,2,3,4,5,6,7,8,9,10]

function max(array){
let max = 0;
for (let element of list){
    if (element > max){
        max = element;
    }
}
return max;
}

console.log(max(list))

function contains(array, element){
    return array.includes(element);
}

console.log(contains(list, 4))


function sum(array){
    let sum = 0;
    for (let element of array){
        sum += element
    }
    return sum
}

console.log(sum(list))