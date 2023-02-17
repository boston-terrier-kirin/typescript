type Person = {
  name: string;
  age: number;
};

const log = <T, K extends keyof T>(obj: T, key: K) => {
  const value = obj[key];
  console.log('💨', value);
};

const john: Person = {
  name: 'John',
  age: 19,
};

log(john, 'name');
log(john, 'age');

// Personのkeyにemailがないので、これはエラーになる
// log(john, 'email');

export {};
