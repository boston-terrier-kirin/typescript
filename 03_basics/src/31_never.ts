// https://typescriptbook.jp/reference/statements/never

// この場合、戻りはneverになっている。
const throwError = () => {
  throw new Error('Something went wrong');
};

// この場合、戻りはvoidになっている。明示的にneverをつけてもOK。
function throwError2() {
  throw new Error('Something went wrong');
}
