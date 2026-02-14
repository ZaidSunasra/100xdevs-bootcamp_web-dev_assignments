// Problem Description – Retry with Exponential Backoff and Jitter

// You are required to implement a retry mechanism for an asynchronous task that fails. 
// On each retry, the delay before the next attempt should increase, and a small random “jitter”
// should be added to the delay to prevent synchronized retries that can overload a server. 
// The process should stop once the task succeeds or the maximum retry limit is reached.

async function retryWithJitter(fn, retries = 3, baseDelay = 1000) {

    let attempts = 0;
    while (attempts <= retries) {
        try {
            const result = await fn();
            return result
        } catch (error) {
            if (attempts == retries) {
                throw error
            }
            const jitter = Math.random() * baseDelay
            const exponentialDelay = baseDelay * (2 ** attempts)
            const delay = exponentialDelay + jitter
            await new Promise(resolve => setTimeout(resolve, delay))
            attempts++;
        }
    }
}

module.exports = retryWithJitter;
