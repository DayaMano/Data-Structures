function merge(arr, low, mid, high) {
    let L = [];
    let R = [];

    for (let i = 0; i < mid - low + 1; i++) {
        L[i] = arr[low + i];
    }
    for (let j = 0; j < high - mid; j++) {
        R[j] = arr[mid + j + 1]
    }

    let i = 0;
    let j = 0;

    let k = low;

    while (i < L.length && j < R.length) {
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < L.length) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < R.length) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, low, high) {
    if(low < high) {
        let mid = Math.floor((low + high) / 2);

        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}


let arr = [12, 11, 13, 5, 6 ];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);