describe('Default Parameters', function () {
  it('uses a default parameter', function () {
    let value = doSomething();
    expect(value).toEqual("default");
  });
});

let doSomething = (name = "default") => name;

