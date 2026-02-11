// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.

function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
    let finished = false
    let primaryFailed = false
    let secondaryFailed = false

    setTimeout(() => {
        if (finished) return;
        secondary((err, result) => {
            if (err) {
                secondaryFailed = true
                if (primaryFailed && secondaryFailed) {
                    finished = true
                    return onComplete(err, null)
                }
                return;
            }
            finished = true
            return onComplete(null, result)
        })
    }, timeoutMs)

    primary((err, result) => {
        if (finished) return
        if (err) {
            primaryFailed = true;
            if (primaryFailed && secondaryFailed) {
                finished = true
                return onComplete(err, null)
            }
            return;
        }
        finished = true;
        return onComplete(null, result)
    })
}

module.exports = hedgedRequest;
