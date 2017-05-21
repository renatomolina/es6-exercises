describe('Default Parameters', function () {
  it('consider the default parameter', function () {
    let value = doSomething();
    expect(value).toEqual("default");
  });
});

let doSomething = function(name="default") {
  return name;
};

