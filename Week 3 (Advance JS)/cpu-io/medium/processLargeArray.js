// Problem Description – Non-Blocking Large Array Processing

// You are given a very large array containing around 100,000 items that must be processed. 
// Your task is to implement a strategy that performs this processing without blocking the main thread, ensuring the browser UI remains responsive. 
// The solution should break the work into smaller chunks and schedule them asynchronously.

async function processLargeArray(items, processFn) {

    const chunkSize = 10000
    for(let i=0; i<items.length; i++){
        if( i % chunkSize == 0){
            await new Promise((resolve) => {setTimeout(resolve, 0)})
        }
        processFn(items[i])
    }
}

module.exports = processLargeArray;
