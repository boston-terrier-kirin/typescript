function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }

  return value * 3;
}

console.log(triple('Hi'));
console.log(triple(10));
