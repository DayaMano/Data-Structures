function insertionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}


let arr = [12, 11, 13, 5, 6 ];
insertionSort(arr, arr.length);
console.log(arr);