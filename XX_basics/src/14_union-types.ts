function formatCommandLine(input: string | string[]) {
  let line = '';

  if (typeof input === 'string') {
    // type narrowingが効いて、stringになっている。
    line = input.trim();
  } else {
    // type narrowingが効いて、string[]になっている。
    line = input.map((x) => x.trim()).join(' ');
  }

  return line;
}

console.log(formatCommandLine('あいう'));
console.log(formatCommandLine(['A', 'B', 'C']));

// 配列で、number or stringにしたい場合はこうする。
const stuff: (number | string)[] = [1, 2, 'aaa'];
