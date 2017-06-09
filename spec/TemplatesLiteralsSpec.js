describe('Templates Literals', function () {
  it('is like args', function () {
    let value = sum(1,2,3,4);
    expect(value).toEqual(10);
  });
});

let sum = function(...numbers) {
  let result = 0;

  numbers.forEach((n) => { result += n });
  return result;
};

