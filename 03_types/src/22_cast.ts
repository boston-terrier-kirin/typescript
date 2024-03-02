const leet = '1337';

// + をつけるとcastされて、numはnumberになる。
const num = +leet;

// https://typescriptbook.jp/reference/values-types-variables/type-assertion-as
// string -> number のtype assertionはできない。
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.
// const num2 = leet as number;

// 強引にやろうとすればこうなる。
const num2 = leet as unknown as number;

// tsは実行時には影響しないので、ts自体ではcastはなく、+とかで明示的にcastする必要がある。
// castというのは実行時の型変換のことなので、tsではtype assertionと呼ぶ。
// type assertionはcastではなく、あくまでコンパイル時に型を伝えるだけ。
