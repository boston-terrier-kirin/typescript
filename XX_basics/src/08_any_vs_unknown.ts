// anyを使った場合
function log(value: any) {
  console.log(value.toFixed(2));
}

// anyを使った場合、コンパイルエラーにならず、実行時に、'hello'.toFixed(2) がエラーになる。
// log(123.456);
// log('hello');

// unknownを使った場合
function log2(value: unknown) {
  // 型チェックをしないとコンパイルエラーになる。
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}

log2(123.456);
log2('hello');
