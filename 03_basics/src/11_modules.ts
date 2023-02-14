import { add } from './11_modules_util';

console.log(add(10, 5));

// 09_type assertions.tsにhelloがあるのでエラーになると思ったけど、先頭でimportすればエラーにならない。
// これはimportを使った時点でmodule化されるため。
const hello = 'test';
