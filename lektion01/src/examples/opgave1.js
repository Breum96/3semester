let list = ["hej", "jeg", "hedder", "Lars", "Allan"];

for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length ; j++) {
        if (list[i] > list[j]) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }

    }
    
}

console.log(list);