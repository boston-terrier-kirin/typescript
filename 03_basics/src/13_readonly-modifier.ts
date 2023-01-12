type Test = {
  readonly x: number;
};

const test: Test = {
  x: 0,
};

// readonlyにすると、これができなくなる。
// test.x = 1;
