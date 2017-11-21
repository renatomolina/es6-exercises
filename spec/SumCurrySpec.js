describe('Sum function', function () {
  it('let currying to return the sum', function () {
    expect(sum(10)(5)).toEqual(15);
  });
});

let sum = (x) => (y) => x + y;


