/*
    get the number of common letters given 2 strings.
*/


function checkStrs(strA, strB) {
    let strCountA = getCharNumMap(strA);
    let strCountB = getCharNumMap(strB);
    return Object.keys(strCountA)
        .map(aChar => Math.min(strCountA[aChar], strCountB[aChar] || 0))
        .reduce((total, currentval) => total + currentval, 0);

}

function getCharNumMap(str) {
    let strCount = {};
    let splitStr = str.split('');

    for (let i = 0; i < splitStr.length; i++) {
        strCount[splitStr[i]] = strCount[splitStr[i]]+1 || 1;
    }

    return strCount;
}


(function () {
    printRes('aaa', 'aaaaa');
    printRes('aycd', 'dcax');
    printRes('acdfa', 'dcabda');

    function printRes(strA, strB) {
        console.log('strings: ', strA, strB);
        console.log(checkStrs(strA, strB));
    }
})();