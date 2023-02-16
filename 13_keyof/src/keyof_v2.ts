type Person = {
  name: string;
  age: number;
};

const log = <T>(obj: T, key: keyof T) => {
  const value = obj[key];
  console.log('💨', value);
};

const log2 = <T, K extends keyof T>(obj: T, key: K) => {
  const value = obj[key];
  console.log('💨', value);
};

const john: Person = {
  name: 'John',
  age: 19,
};

log<Person>(john, 'name');
log<Person>(john, 'age');

// これはエラーになる
// log<Person>(john, 'email');

// log2の方が賢いのか？
log2(john, 'name');
// log2(john, 'email');

// TはPerson、keyはPersonのkeyのどれか
// この型縛りができれば、obj[key] がタイプセーフになる。
// const log = <T>(obj: T, key: keyof T) => {
//   const value = obj[key];
//   console.log('💨', value);
// };
