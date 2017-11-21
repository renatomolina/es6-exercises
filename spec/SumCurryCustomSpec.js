var _ = require('lodash');

describe('Sum function', function () {
  it('let my own curry func to return the sum', function () {
    expect(_.curry(sum)(10)(5)).toEqual(15);
  });
});

let sum = (x, y) => x + y;


