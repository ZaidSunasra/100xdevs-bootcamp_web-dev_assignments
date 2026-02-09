// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.

function promiseAll(promises) {

    return new Promise((resolveAll, rejectAll) => {
        let results = []
        let remaining = promises.length
        let alreadyRejected = false

        if (promises.length == 0) {
            resolveAll([])
        }

        if (!Array.isArray(promises)) {
            rejectAll(new TypeError("Not an array"))
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                value => {
                    if (alreadyRejected) return;

                    results[index] = value
                    remaining--;

                    if (remaining == 0) {
                        resolveAll(results)
                    }
                },
                error => {
                    if (alreadyRejected) return;

                    alreadyRejected = true;
                    rejectAll(error)
                }
            )
        })
    })

}

module.exports = promiseAll;
