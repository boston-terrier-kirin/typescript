// ■■■■■例1)
function identity<T>(item: T): T {
  return item;
}

identity<string>('aaa');
identity<number>(123);

// ■■■■■例2)
function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}
getRandomElement<string>(['a', 'b', 'c']);
getRandomElement<number>([1, 2, 3]);

// type inferred
getRandomElement([1, 2, 3]);

// ■■■■■例3)
const getRandomElement2 = <T>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};

// ■■■■■例4)
// 戻りはintercetion(T & U)になる。
function merge<T, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

const combo = merge({ name: 'kohei' }, { pets: ['kirin', 'kuroro'] });

console.log(combo);

// ■■■■■例5)
function merge2<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

// type constraints
// merge2('kuroro', 'kirin');

// 例6)
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
}

function mergeHumanDog<T extends Human, U extends Dog>(human: T, dog: U) {
  return {
    ...human,
    ...dog,
  };
}

const petDog = mergeHumanDog(
  { name: 'kohei', age: 45, hobby: 'typescript' },
  { name: 'kirin' }
);

// ■■■■■例6)
// Tのデフォルト型を決められる。
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const values = makeEmptyArray();
