/**
 * 戻り値は、string or string[] になる。
 */
function reverse_v1(word: string | string[]) {
  if (typeof word === 'string') {
    // stringの場合は、splitで配列に変える。
    return word.split('').reverse().join('');
  } else {
    return word.slice().reverse();
  }
}

{
  // test1/test_2は、string or string[] になっている。
  const test_1 = reverse_v1('abc');
  const test_2 = reverse_v1(['a', 'b', 'c']);
}

// ■ここからoverload
console.log('💨💨💨💨💨💨');
/**
 * overloadは、パラメータが2種類、リターンが2種類あるような場合で有効。
 * 本体とは別に、functionの宣言を作ってしまう。
 */
function reverse(word: string): string;
function reverse(word: string[]): string[];

// 本体はここで、両方のケースに対応させる。
function reverse(word: string | string[]) {
  if (typeof word === 'string') {
    // stringの場合は、splitで配列に変える。
    return word.split('').reverse().join('');
  } else {
    return word.slice().reverse();
  }
}

{
  // test1は、stringになっている。
  const test_1 = reverse('abc');

  // test2は、string[]になっている。
  const test_2 = reverse(['a', 'b', 'c']);
}

// ■ここからoverload
console.log('💨💨💨💨💨💨');
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(year: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(year, month, day);
  }

  return new Date(year);
}

{
  const test_1 = makeDate(2022, 6, 1);
  const test_2 = makeDate(2022);

  // makeDate(2022, 1) は、オーバーロードのパターンにないのでコンパイルエラーになる。
  // const test_3 = makeDate(2022, 1);

  console.log(test_1);
  console.log(test_2);
  // console.log(test_3);
}

// ■ここからoverload
console.log('💨💨💨💨💨💨');
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number) {
  if (!c) {
    console.log('a+b');
    return a + b;
  }

  console.log('a+b+c');
  return a + b + c;
}

{
  sum(1, 2);
  sum(1, 2, 3);
}
