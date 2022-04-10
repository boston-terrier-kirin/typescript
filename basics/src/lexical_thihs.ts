class Person {
  constructor(private age: number) {}

  growOld() {
    this.age++;
  }

  growOld2 = () => {
    this.age++;
  };

  getAge() {
    return this.age;
  }
}

const p = new Person(20);

// この呼び方はOK
// p.growOld();
// console.log(p.getAge());

// この呼び方はOK
// setTimeout(() => {
//     p.growOld();
//     console.log('1', p.getAge());
//   }, 1000);

// この呼び方はageがundefinedになる。
// const growOld = p.growOld;
// growOld();

// アローファンクションであれば問題なし。
const growOld2 = p.growOld2;
growOld2();
console.log('2', p.getAge());
