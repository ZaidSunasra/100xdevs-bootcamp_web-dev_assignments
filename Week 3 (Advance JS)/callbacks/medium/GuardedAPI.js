// Problem Description – Async Initialization Gate
//
// You are required to design a mechanism for APIs that depend on an
// asynchronous initialization step.
// Any calls made before initialization completes should be queued and
// executed only after the initialization finishes.
// Calls made after initialization should execute immediately.
//
// The initialization task and API functions must invoke callbacks when
// they complete.

class GuardedAPI {
  constructor() {
    this.queue = [];
    this.begin= false
  }

  init(initTask) {
    initTask((err) => {
      if(!err){
        this.begin = true;
        this._flush();
      }
    })
  }

  call(apiFn, onComplete) {
    if(!this.begin) {
      this.queue.push([apiFn, onComplete])
      return
    }
    apiFn((err, result) => {
      if(err){
       return onComplete(err, null)
      }
      return onComplete(null, result)
    })
  }

  _flush() {
    while(this.queue.length > 0){
      const [api, onComplete] = this.queue.shift();
      this.call(api, onComplete)
    }
  }
}

module.exports = GuardedAPI;

