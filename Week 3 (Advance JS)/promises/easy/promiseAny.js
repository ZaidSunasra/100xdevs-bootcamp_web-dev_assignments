// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.

function promiseAny(promises) {

    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) {
            reject(new TypeError("Not an array"))
            return
        }

        if (promises.length == 0) {
            reject(new Error("Empty iterable"))
            return
        }

        let rejectedCount = 0
        let errors = []

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => {
                    resolve(value)
                },
                error => {
                    rejectedCount++;
                    errors[index] = error
                    if (rejectedCount === promises.length) {
                        reject(new Error("All promises were rejected"))
                    }
                }
            )
        })
    })
}

module.exports = promiseAny;
