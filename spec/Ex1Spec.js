describe('Hello world', function () {
  it('says hello', function () {
    let value = 0;
    expect(helloWorld()).toEqual('Hello world!');
  });
});


function helloWorld() {
  return 'Hello world!';
}
