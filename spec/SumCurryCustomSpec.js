describe('Sum function', function () {
  it('let my own curry func to return the sum', function () {
    expect(curryCustom(sum)(10)(1)(4)).toEqual(15);
  });
});

let sum = (x, y, z) => x + y + z;

let curryCustom = function(func) {
  return function curried(...args) {
    if(args.length >= func.length){
      return func(...args);
    } else {
      return function(param) {
        return curried(...[...args, param]);
      }
    }
  }
}

