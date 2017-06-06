function closestSequence2(a, b) {
    'use strict';
    // declare constants
    const lookUpTable = [];
    const lengthDiff = b.length - a.length;

    a.forEach((value, aIndex) => {
        lookUpTable.push({});
        let aTable = lookUpTable[aIndex];
        for (let bIndex = aIndex; bIndex <= aIndex + lengthDiff; bIndex++) {
            let lastMinSum = (aIndex === 0) ? 0 : lookUpTable[aIndex - 1][bIndex - 1];
            let currentVal = lastMinSum + Math.abs(a[aIndex] - b[bIndex]);
            let possibleMin = (bIndex === aIndex) ? currentVal : Math.min(currentVal, lookUpTable[aIndex][bIndex - 1]);
            lookUpTable[aIndex][bIndex] = possibleMin;
        }
    })
    return lookUpTable[a.length-1][b.length-1];

}