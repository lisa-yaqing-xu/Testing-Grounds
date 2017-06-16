function stringsRearrangement(inputArray) {
    'use strict';
    const matchCache = inputArray.map((word)=>{
        return inputArray.map((value,index)=>index).filter((index)=>{
            return isSwappable(word,inputArray[index]);
        })
    });
    const numMatches = matchCache.map((matches,index)=>{return {index: index, numMatches: matches.length}});
    const findStart = numMatches.sort((a,b)=>a.numMatches - b.numMatches);
    if(findStart[0].numMatches === 0)return false;    
    
    const initVisit= {};
    return recursiveMatch(findStart[0].index,initVisit,0);

    function recursiveMatch(index, visitedCache, count){
        count++;    
        if(count === inputArray.length) {
            return true;
        }

        let visited = Object.assign({},visitedCache);
        visited[index] = true;

        return matchCache[index].reduce((result, otherIndex)=>{
            if(visited[otherIndex])return result || false;
            else return result || recursiveMatch(otherIndex, visited, count);
        },false);
    }

    function isSwappable(str1, str2) {
        let diff = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1.charAt(i) != str2.charAt(i)) diff++;
            if(diff > 1)return false;
        }
        return diff === 1;
    }
}

(function () {
    //['abc', 'aec', 'bec', 'bea','xea', 'xec', 'cec']
    //['xea', 'xec', 'cec','abc', 'aec', 'bec', 'bea']
    let test = stringsRearrangement(["abc", 
 "bef", 
 "bcc", 
 "bec", 
 "bbc", 
 "bdc"]);
    console.log(test);
})();