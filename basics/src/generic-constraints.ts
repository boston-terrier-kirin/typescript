class Car {
  print() {
    console.log('Car');
  }
}

class House {
  print() {
    console.log('House');
  }
}

interface Printable {
  print(): void;
}

// T extends Printable が generic constraints で、Tに制約を持たせることができる。
// T がなんでも良いというわけではなくなる。
// arr自体をPrintableにすればよい気もする。
function printAnything<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
