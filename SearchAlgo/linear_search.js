function linearSearch(sortedList, target) {
    for(let i = 0; i < sortedList.length; i++) {
        if(sortedList[i] === target) return {index: i, element: sortedList[i]};
    }
    return {}
}

const numList = [];
for(let i = 1; i <= 20480000; i++) {
    numList.push(i);
}

console.time();
console.log(linearSearch(numList, 20479999));
console.timeEnd();