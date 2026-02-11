// Problem Description – Priority Task Queue with Dynamic Concurrency
//
// You are required to implement a task queue that executes asynchronous
// tasks based on priority.
// Higher-priority tasks should be executed before lower-priority ones.
// The queue must enforce a concurrency limit, ensuring only a fixed number
// of tasks run at the same time.
// The concurrency limit can be updated dynamically while the system is running.
//
// Each task must invoke its callback when finished.

class DynamicPriorityQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.queue = [];
    this.taskRunning = 0;
  }

  setLimit(newLimit) {
    this.concurrency = newLimit;
  }

  add(task, priority, onComplete) {
    if(this.taskRunning >= this.concurrency){
      this.queue.push([task, priority, onComplete]);
      this.queue.sort((a, b) => {return b[1] - a[1]})
      return;
    }
    this.taskRunning++;

    task((err, result) => {
      this.taskRunning--;
      if (err) {
        this.runNext();
        return onComplete(err)
      }
      onComplete(null, result)
      this.runNext()
    })
  }

  runNext() {
    if (this.queue.length == 0) return;
    const [task, priority, onComplete] = this.queue.shift()
    this.add(task, priority, onComplete)
  }
}

module.exports = DynamicPriorityQueue;
