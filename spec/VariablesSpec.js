describe('Variables', function () {
  it('let keyword declares a local variable', function () {
    let value = 1;
    value = 3;
    expect(value).toEqual(3);
  });

  it('let keyword declares a score variable', function () {
    let value = 1;
    if(true) {
      let value = 3;
      expect(value).toEqual(3);
    }
    expect(value).not.toEqual(3);
  });

});

