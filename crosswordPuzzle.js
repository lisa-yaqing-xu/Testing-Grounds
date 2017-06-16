/*
+-++++++++
+-++++++++
+-++++++++
+-----++++
+-+++-++++
+-+++-++++
+++++-++++
++------++
+++++-++++
+++++-++++
*/

function solveCrossword(grid, words) {
    const blanks = getAllBlanks(grid);    
    return searchPuzzle(grid, 0);
    
    function searchPuzzle(grid, index){
        if(!grid)return false;

        const word = words[index];
        const wordLen = word.length;
        const availableBlanks = blanks[wordLen];
        
        let result = false;

        for(let slot of availableBlanks){
            let newGrid = fitWordInGrid(grid, slot, word);
            result = result || ((index < words.length -1)?searchPuzzle(newGrid, index+1):newGrid);
        }

        return result;
    }

}

function fitWordInGrid(origGrid, slot, word) {
    const grid = gridCopy(origGrid);
    const isAcross = (slot.direction === 'across');
    const initIndex = isAcross ? slot.col : slot.row;
    const writeIn = isAcross
        ? (char, index) => {
            if (grid[slot.row][index] != '-' && grid[slot.row][index] != char) return false;
            grid[slot.row][index] = char;
            return true;
        }
        : (char, index) => {
            if (grid[index][slot.col] != '-' && grid[index][slot.col] != char) return false;
            grid[index][slot.col] = char;
            return true;
        }
    for (let i = 0; i < word.length; i++) {
        let index = initIndex + i;
        let success = writeIn(word.charAt(i),index);
        if(!success) return false;
    }
    return grid;
}

function getAllBlanks(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const rowItems = getBlanks(grid, numRows, numCols, 'across');
    const colItems = getBlanks(grid, numCols, numRows, 'down');

    Object.keys(colItems).forEach(length => {
        rowItems[length] = rowItems[length] ? rowItems[length].concat(colItems[length]) : colItems[length];
    });

    return rowItems;
}

function getBlanks(grid, dir1, dir2, direction) {
    const store = {};
    const isAcross = direction === 'across';
    for (let i = 0; i < dir1; i++) {
        let start = -1;
        for (let j = 0; j < dir2; j++) {
            let row = isAcross ? i : j;
            let col = isAcross ? j : i;
            let cell = grid[row][col];
            let length = j - start;
            if (cell === '-') {
                if (start != -1 && j === dir2 - 1) addBlankItemToStore(store, length+1, createBlankItem(isAcross ? row : start, isAcross ? start : col, length+1, direction));
                //^length+1 bc there's no + after that when that's really when length should be calculated
                else if (start === -1) start = j;
            }
            else {
                if (start != -1 && length > 1) addBlankItemToStore(store, length, createBlankItem(isAcross ? row : start, isAcross ? start : col, length, direction));
                start = -1;
            }
        }
    }
    return store;
}

function addBlankItemToStore(store, key, item) {
    store[key] = store[key] || [];
    store[key].push(item);
}

function createBlankItem(row, col, length, direction) {
    return { row: row, col: col, length: length, direction: direction };
}

function gridCopy(grid) {
    return grid.map(row => row.map(n => n));
}


(function () {
    'use strict';

    let inputStr = '+-++++++++\n+-++++++++\n+-++++++++\n+-----++++\n+-+++-++++\n+-+++-++++\n+++++-++++\n++------++\n+++++-++++\n+++++-++++'
    let inputGrid = inputStr.split('\n').map(str => str.split(''));
    let words = 'LONDON;DELHI;ICELAND;ANKARA';
    let wordArr = words.split(';');

    let solvedCrossword = solveCrossword(inputGrid, wordArr);
    console.log(solvedCrossword);
})();