describe('Class', function () {
  it('it respond a method', function () {
    let name = "Paul Doe";
    let person = new Person(name);
    expect(person.name).toEqual(name);
    expect(person.doWork()).toEqual("complete");
  });
});

class Person {
    constructor(name){
       this.name = name;
    }

    doWork(){
        return "complete";
    }

    set name(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }
}
