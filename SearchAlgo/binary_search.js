function binarySearch(sortedList, target) {
    let low = 0;
    let high = sortedList.length - 1;

    while(low <= high) {
        let mid = parseInt((low + high) / 2);
        const guess = sortedList[mid];
        
        if(guess === target) return {index: mid, element: sortedList[mid]};
        if(guess > target) high = mid + 1;
        if(guess < target) low = mid - 1;
    }
    return {};
}

const numList = [];
for(let i = 1; i <= 20480000; i++) {
    numList.push(i);
}

console.time();
console.log(binarySearch(numList, 20479999));
console.timeEnd();