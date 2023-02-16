export {};

// https://typescriptbook.jp/reference/values-types-variables/definite-assignment-assertion
class Point {
  // angularで時どき困るこれは、definite assignment
  x!: number;
  y!: number;

  constructor() {
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
