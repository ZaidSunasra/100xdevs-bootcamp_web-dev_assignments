// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.

class CallbackPool {

  constructor(limit) {
    this.limit = limit
    this.runningTask = 0
    this.queue = []
  }

  run(task, onComplete) {
    if (this.runningTask >= this.limit) {
      this.queue.push([task, onComplete])
      return;
    }

    this.runningTask++;

    task((err, result) => {
      this.runningTask--;

      if (err) {
        this._next();
        return onComplete(err)
      }

      onComplete(null, result)
      this._next()
    })
  }

  _next() {
    if (this.queue.length == 0) return;

    const [task, onComplete] = this.queue.shift()
    this.run(task, onComplete)
  }
}

module.exports = CallbackPool;
