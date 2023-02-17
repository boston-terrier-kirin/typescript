type Developer = {
  name: string;
};

let kirinwan: Developer;

function init() {
  kirinwan = {
    name: 'Kirin',
  };
}

// ここで初期化
init();

// ts的にはkirinwanが初期化されたかがわからない。
// Variable 'kirinwan' is used before being assigned.
console.log(kirinwan.name);

// !でnull/undefinedじゃないと教えるのが、non-null assertion。
console.log(kirinwan!.name);
