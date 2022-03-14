// (remember to mention line breaks)
//line break after return is interpreted as ;
const list = [7, 13, 9, 8, 4, 1, 2, 16, 0]; // array definition

// double loop with for
function bubbleSort(array){
    for (let i = list.length - 1; i >= 0; i--) {
        function swap(i){
            let temp = list[i];
            list[i] = list[i + 1];
            list[i + 1] = temp;
        }
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(j)
            }
        }
    }
}

console.log(bubbleSort(list)) // => 0,1,2,4,7,8,9,13,16


