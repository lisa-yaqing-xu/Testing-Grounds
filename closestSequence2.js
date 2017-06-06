/*
The difference between two sequences of the same length a1, a2, a3,..., an and b1, b2, b3,..., bn can be defined as the sum of absolute differences between their respective elements:

diff(a, b) = |a1 - b1| + |a2 - b2| + ... + |an - bn|.

For the given sequences a and b (not necessarily having the same lengths) find a subsequence b' of b such that diff(a, b') is minimal. Return this difference.

Example

For a = [1, 2, 6] and b = [0, 1, 3, 4, 5], the output should be
closestSequence2(a, b) = 2.

The best subsequence will be b' = [1, 3, 5] which has a difference of 2 with a.*/

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

(function(){
   const a =  [1, 2, 6];
   const b =  [0, 1, 3, 4, 5];
   
   let res = closestSequence2(a, b);

   console.log(res);

})();