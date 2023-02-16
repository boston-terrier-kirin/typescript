function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number) => a + b;

function sum(...values: number[]): number {
  return values.reduce((value, acc) => {
    return acc + value;
  }, 0);
}

const sum2 = (...values: number[]): number => {
  return values.reduce((value, acc) => {
    return acc + value;
  }, 0);
};

console.log(sum(1, 2, 3));
console.log(sum2(1, 2, 3));
