/*
----codefights challenge, before minifier

 Given a string s, your mission is to apply the following easy-to-comprehend algorithm to it:

Find all the words in s, where a word is a sequence of consecutive English letters with no other letters around it;
Reverse the characters in each word;
For each word, swap the cases of its characters so that the case of a character at each position differs from the case at the corresponding position of the original (unreversed) word.
Return the obtained string as the answer.

Example

For s = "So, what is CodeFights?", the answer should be
reverseInverse(s) = "oS, TAHW SI sTHGiFEDOC?".

There are 4 words in s: "So", "what", "is", and "CodeFights". Let's take the word "CodeFights" as an example:

The letters 'C' at index 0 and letter 'F' at index 4 are uppercase, while all the other letters are lowercase;
"codefights" reversed becomes "sthgifedoc";
With the cases swapped, the letters at indices 0 and 4 should be lowercase and all the other letters should be uppercase;
Thus, the final word is "sTHGiFEDOC".
Input/Output

[time limit] 4000ms (js)
[input] string s

A string containing only English letters and punctuation marks.

Guaranteed constraints:
0 ≤ s.length < 500.

[output] string

The result of applying the algorithm described above to s.
 */

function reverseInverse(s) {
    'use strict';
    let strArr = s.split(' ');
    return strArr.map(str=>{
        let punctuationSplitStrs = str.split(/\W/);
        let reversedWords = punctuationSplitStrs.map(pStr=>{
            let chars = pStr.split('');
            let capPos = chars.reduce((posMap, char,i)=>{
                posMap[i] = char === char.toUpperCase();
                return posMap;
            },{});
            let reversedChars = chars
                .reverse()
                .map((value,index)=>(capPos[index])?value.toLowerCase():value.toUpperCase());
            return reversedChars.join('');
        });
        
        let punctuation = str.split('').filter(value=>value.match(/\W/));
        let newArr = [];
        for(let i in punctuation){
            newArr.push(reversedWords[i],punctuation[i]);
        }
        newArr.push(reversedWords[reversedWords.length-1]);
        return newArr.join('');
        
    }).join(' ');

}
