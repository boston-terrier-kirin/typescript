interface Printable {
  print(): void;
}

class Car implements Printable {
  print() {
    console.log('Car');
  }
}

class House {
  // printがあれば、implementsしていなくてもOK。
  print() {
    console.log('House');
  }
}

// T extends Printable が generic constraints で、Tに制約を持たせることができる。
// T がなんでも良いというわけではなくなる。
function printAnything<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

const test = [];
test.push(new Car());
test.push(new House());

printAnything<Printable>(test);
