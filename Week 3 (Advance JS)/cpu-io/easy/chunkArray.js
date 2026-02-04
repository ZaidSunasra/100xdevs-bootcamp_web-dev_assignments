// Problem Description – Chunk Array
//
// When dealing with large datasets, it's often necessary to process them
// in smaller batches (chunks) to avoid overloading the CPU or I/O.
//
// Your task is to implement a function `chunkArray(array, size)` that
// splits an array into sub-arrays of a maximum specified size.
//
// Requirements:
// 1. The function should return a new array containing the chunks.
// 2. The last chunk might be smaller than the specified size.
// 3. Handle edge cases like empty arrays or chunk size <= 0.
//
// This is a prerequisite for common patterns like batching API calls.

function chunkArray(array, size) {
    let count = 0;
    let finalArr = [];
    let tempArr = []
    if (size <= 0) {
        return finalArr
    }
    if (!array || !Array.isArray(array)) {
        return finalArr
    }
    for (let i = 0; i < array.length; i++) {
        if (count == size) {
            finalArr.push(tempArr)
            count = 0;
            tempArr = []
        }
        tempArr.push(array[i])
        count++
    }
    if (count) {
        finalArr.push(tempArr)
        tempArr = []
    }
    return finalArr;
}

module.exports = chunkArray;
