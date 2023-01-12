// @types/nodeがあるので、process.envが見えるようになる。
console.log(process.env);

import fs from 'fs';
fs.writeFileSync('hello.txt', 'Hello World');
