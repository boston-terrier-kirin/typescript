type Developer = {
  name: string;
};

let kirinwan: Developer;

function init() {
  kirinwan = {
    name: 'Kirin',
  };
}

init();

// ts的にはkirinwanが初期化されたかがわからない。
// console.log(kirinwan.name);

// https://typescriptbook.jp/reference/values-types-variables/definite-assignment-assertion#%E9%9D%9Enull%E3%82%A2%E3%82%B5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3
// !でnull/undefinedじゃないと教えるのが、non-null assertion。
console.log(kirinwan!.name);
