describe('Spread Operator', function () {
  it('does concat arrays', function () {
    let array1 = [1,2,3];
    let array2 = [4,5,6,...array1];
    expect(array2).toEqual([4,5,6,1,2,3]);
  });
});
