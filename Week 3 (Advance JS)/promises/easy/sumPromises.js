// Problem Description – Sum of Two Promises

// You are given two Promises that each resolve to numeric values. 
// Your task is to return a new Promise that resolves to the sum of these two numbers. 
// Both Promises should be executed in parallel using Promise.all to avoid unnecessary waiting.

async function sumPromises(p1, p2) {
    return new Promise((resolve) => {
        resolve(Promise.all([p1, p2]).then(values => values.reduce((sum, val) => sum + val, 0)))
    })
}

module.exports = sumPromises;

