// Problem Description – Task Execution with Dependencies
//
// You are given a set of asynchronous tasks where some tasks depend
// on the completion of others.
// Your goal is to execute each task only after all of its dependencies
// have been successfully completed.
// The solution should ensure correct execution order and handle
// dependency relationships properly.
//
// Each task is asynchronous and must invoke a callback when finished.
// Invoke finalCallback after all tasks have completed, or with an error
// if any task fails.

function runWithDependencies(tasks, finalCallback) {
    let completed = new Set();
    let running = new Set()
    let results = {};

    function runTask() {
        if (completed.size == tasks.length) {
            return finalCallback(null, results)
        };
        for (const task of tasks) {
            if (!completed.has(task.id) && task.deps.every(dep => completed.has(dep)) && !running.has(task.id)) {
                running.add(task.id)
                task.run((err, result) => {
                    if (err) {
                        return finalCallback(err)
                    }
                    running.delete(task.id)
                    completed.add(task.id)
                    results[task.id] = result
                    runTask()
                })
            }
        }
    }
    runTask();
}

module.exports = runWithDependencies;
