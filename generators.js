/**
generator is nothing but state machine
remember its state when paused.
**/


// ex1

function *main() {
    console.log("hello world");
    yield 9;
    console.log("hello world 2");
    yield 10;
  }
  
  var it = main();
  it.next();
  
  // ex2
  
  function *main1() {
    for(var i =0; i<5;i++) {
      yield i;
    }
  }
  
  for (var v of main1()) {
    console.log(v);
  }
  
  
  // ex3 
  
  
  var obj = {
    *[Symbol.iterator]() {
      for (var i = this.start; i < this.end; i++) {
        yield this.values[i];
      }
    }, 
    start: 3,
    end: 8,
    values : [2,4,6,8,10,12,14,16,18,20,22, 24,26,28,30]
  }
  
  var result = [...obj];
  console.log("result is", result);
  
  
  
  // ex4
  
  var numbers = {
    *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
      for(let i = start; i <= end; i = i + step) {
        yield i;
      }
    }
  }
  
  for(let num of numbers[Symbol.iterator]({
    start: 6, 
    end: 30, 
    step: 6
  })) {
    console.log(num);
  }
  
  
  // ex 5
  Number.prototype[Symbol.iterator] = function *() {
    if (this < 0) {
      for(let i = 0; i <= this; i--) {
        yield i;
      }  
    } else {
      for(let i = 0; i<=this; i++) {
        yield i;
      }  
    }
  }
  
  console.log([...8]);