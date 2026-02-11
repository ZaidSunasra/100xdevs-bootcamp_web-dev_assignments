// Problem Description – Ordered Parallel Batcher
//
// You need to process many items in parallel, but with a fixed
// concurrency limit to avoid resource exhaustion.
//
// Tasks should start as soon as a slot is free, and the final
// results must preserve the original input order.
//
// Requirements:
// - Run at most `limit` workers in parallel.
// - Preserve the original order of results.
// - Start new work as soon as one finishes.
// - Stop and return an error if any task fails.

function batchProcess(items, limit, worker, onComplete) {

    if (items.length == 0) {
        onComplete(null, [])
    }

    let results = [];
    let nextIndex = 0;
    let runningTask = 0;
    let completedTask = 0;
    let stopped = false

    function runTask() {

        if (stopped) return;

        while (runningTask < limit && nextIndex < items.length) {
            const currentIndex = nextIndex;
            const item = items[currentIndex];

            runningTask++;
            nextIndex++;

            worker(item, (err, result) => {
                if (stopped) return;

                if (err) {
                    stopped = true
                    return onComplete(err, null)
                }

                runningTask--;
                completedTask++;
                results[currentIndex] = result;

                if (completedTask == items.length) {
                    stopped = true;
                    return onComplete(null, results)
                }

                runTask()
            })
        }
    }

    runTask()
    
}

module.exports = batchProcess;
