class Queue<T> {
  data = new Array<T>();

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    // const test: T | undefined になっているので、戻り値の方も合わせる必要がある。
    // const test = this.data.shift();

    return this.data.shift();
  }
}

const q = new Queue<number>();

q.push(1);
q.push(2);
q.push(3);

console.log(q.pop());
