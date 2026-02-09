// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.


function retryOnce(fn) {

    return function(cb) {
        let tried = false;

        function attempt(){
            fn((err) => {
                if(!err){
                    cb(null, "success")
                    return;
                }

                if(!tried){
                    tried = true;
                    attempt()
                } else {
                    cb("error", null)
                }

            })
        }
        attempt()
    }
}

module.exports = retryOnce;
