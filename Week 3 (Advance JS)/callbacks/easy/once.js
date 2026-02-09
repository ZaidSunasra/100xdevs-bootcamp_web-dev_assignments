// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let started = false;
    let finished = false;
    let result;
    let error;
    let callbacks = [];

    return function (...args) {
        const cb = args[args.length - 1]; 

        if (finished) {
            cb(error, result);
            return;
        }

        callbacks.push(cb);

        if (started) return;

        started = true;

        const fnArgs = args.slice(0, -1);

        fn(...fnArgs, (err, data) => {
            error = err;
            result = data;
            finished = true;

            callbacks.forEach(cb => cb(error, result));
            callbacks = [];
        });
    };
}

module.exports = once;
