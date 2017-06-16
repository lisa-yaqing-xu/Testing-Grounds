/*
3
1 3
3
2 2
12 34 56
3 2
2 3 4 4 5 6
*/


/*
input
10
10 1
13 23 23 23 27 27 52 52 53 53
11 1
5 20 20 24 29 51 51 51 73 78 92
3 3
18 32 38 46 52 58 60 66 72 78
4 3
36 37 38 39 42 43 43 44 44 45 48 49 49 50 50 51 54 55 56 57
1 8
16
4 2
18 20 22 23 25 28 31 33 36 44
2 18
0 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54
2 19
19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
5 2
24 24 24 24 24 24 24 24 24 24 53 53 53 53 82
3 4
0 8 16 17 24 25 32 33 34 41 42 50 51 59 68

ans

13 23 23 23 27 27 52 52 53 53
5 20 20 24 29 51 51 51 73 78 92
6 20 26
12 13 18 19
2
9 11 14 22
0 3
1 1
12 12 12 12 41
0 8 17
*/

String.prototype.splitToNumber = function () {
    return this.split(' ').map(n => Number(n));
}

function calculateKSums(n, k, permutation) {
    console.log(n,k,permutation);
    let results = [];

    //this only works for k = 2 case.
    /*
    let counter = n;
    for (let i = 0; i < permutation.length; i += counter--) {
        results.push(permutation[i] / k);
    }
    */
    //return results;
}


function printResults(input) {
    const inputs = input.split('\n');
    const results = [];



    for (let i = 1; i < inputs.length; i += 2) {
        let nk = inputs[i].splitToNumber();
        let permutation = inputs[i + 1].splitToNumber(); //deal with bigInt case later
        let result = calculateKSums(nk[0], nk[1], permutation);
        results.push(result.join(' '));
    }

    console.log(results.join('\n'));
}

(function () {
    'use strict';
    //const input = '3\n1 3\n3\n2 2\n12 34 56\n3 2\n2 3 4 4 5 6';
    const input = '1\n10 1\n13 23 23 23 27 27 52 52 53 53'
    printResults(input);

})();