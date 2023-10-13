function sortArray (){
    let length = 10000; 
    array = [...Array(length).keys()].map(i => randomInt(length/-2, length/2));
    console.log(`Созданный массив: ${array} \n`);
    sortArray = bubbleSort(array);
    console.log(`Отсортированный массив: ${sortArray}`);
}

function bubbleSort(arr) {
    let swap;
    do {
        swap = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swap = true;
            }
        })
    } while (swap);
    return arr
}

function bubbleSortSecond(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr
}