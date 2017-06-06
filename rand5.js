/*
    generate rand7 from rand5, where rand5 outputs integers from 0 to 5;
*/
function rand5() {
    return Math.floor(Math.random() * 6);//5+1
}

function rand5CoinFlip() {
    let rand5Val = rand5();
    if (rand5Val < 3) return 0;
    else return 1;
}

function generate7() {
    let bin1 = rand5CoinFlip();
    let bin2 = rand5CoinFlip();
    let bin3 = rand5CoinFlip();

    let binary = [bin1, bin2, bin3].join('');
    return parseInt(binary, 2);
}

function generateBucket(bucketStart, bucketEnd) {
    let bucket = {};
    for (let i = bucketStart; i <= bucketEnd; i++) {
        bucket[i] = 0;
    }
    return bucket;
}


(function () {
    'use strict';

    let bucket = generateBucket(0, 7);
    for (let i = 0; i < 1000000; i++) {
        bucket[generate7()]++;
    }
    console.log(bucket);

})();