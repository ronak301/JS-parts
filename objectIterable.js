
var obj = {
    [Symbol.iterator]() {
      var idx = this.start, end = this.end;
      var it = {
        next: () => {
          var value = this.values[idx]; 
          idx++;
          if (idx <= end) {
            return { value, done: false }
          } else {
            return { done: true }
          }
          
        }
      } 
      return it; 
    }, 
    start: 3,
    end: 8,
    values : [2,4,6,8,10,12,14,16,18,20,22, 24,26,28,30]
  }
  
  var result = [...obj];
  console.log("result is", result);
  
  for (var v of result) {
    console.log(v);
  }
  
  var it = obj[Symbol.iterator]();
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());