// Problem Description – Parallel Execution of Async Functions
//
// You are given an array of asynchronous functions. Your task is to execute
// all of them at the same time (in parallel).
//
// The function should return a promise that resolves to an array of
// resolved values in the same order as the input functions.
//
// If any of the asynchronous functions reject, the returned promise
// should immediately reject with that error.

async function runParallel(functions) {

    return new Promise((resolve, reject) => {
        let results = []
        let completedCount = 0
        functions.forEach((func, index) => {
            Promise.resolve(func()).then((val) => {
                results[index] = val
                completedCount++
                if (completedCount == functions.length) {
                    resolve(results)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

module.exports = runParallel;
