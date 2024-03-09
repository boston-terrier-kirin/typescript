// https://typescriptbook.jp/reference/import-export-require
// import/exportをつけると、自動的にmoduleになるらしい。
// import/exportがないと、Globalスコープに所属することになる。
// utils.tsにもtestがあるが、moduleになっているので、コンパイルエラーにならない。
const test = 1;
import { add, sample } from './utils';
console.log(add(1, 2));
const arr = ['react', 'typescript', 'javascript', 'python'];
console.log(sample(arr));
