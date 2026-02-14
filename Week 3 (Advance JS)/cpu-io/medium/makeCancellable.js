
// Problem Description – Abortable Promise Wrapper

// You are required to wrap a Promise so that it can be cancelled using an AbortSignal.
// If the signal is aborted before the Promise settles, the wrapper should immediately reject with an appropriate error. 
// If not aborted, it should resolve or reject normally.

function makeCancellable(promise, signal) {

    let finished = false;

    return new Promise((resolve, reject) => {
        if (signal.aborted) {
            if (finished) return;

            finished = true;
            reject(new Error("Aborted"))
        }

        signal.addEventListener("abort", function () {
            if (finished) return;

            finished = true;
            reject(new Error("Aborted"))
        })

        Promise.resolve(promise).then((data) => {
            if (finished) return;

            finished = true;
            resolve(data);
        }).catch((err) => {
            if (finished) return;

            finished = true;
            reject(err);
        })
    })
}

module.exports = makeCancellable;
