/*
    reverse string inside parenthesis, then also remove parenthesis
 */
function reverseParens(str){
    let closingStack = [];
    let origLength = str.length;
    let lastClose = origLength;

    for(let i = str.length-1; i >= 0; i--){
        if(str.charAt(i) === ')') closingStack.push(i);
        else if (str.charAt(i) === '('){
            let closestClosing = closingStack.pop(i);
            if(closestClosing > lastClose) {
                closestClosing -= (origLength-str.length);
            }

            let reversedStrippedStr = stripParenAndReverseStr(str, i, closestClosing);
            let strBefore = str.substring(0,i);
            let strAfter = str.substring(closestClosing+1,str.length);
            str = [strBefore,reversedStrippedStr, strAfter].join('');
            lastClose = closestClosing;
        }
    }

    return str;


    function stripParenAndReverseStr(str, startIndex, closingIndex){
        let subStr = str.substring(startIndex+1, closingIndex);
        return reverse(subStr);
    }

    function reverse(str){
        return str.split('').reverse().join('');
    }
}

(function(){
    console.log(reverseParens('ab(cd(ef)g(hi)jk)12345'));
    //abkjhigefdc12345

})();