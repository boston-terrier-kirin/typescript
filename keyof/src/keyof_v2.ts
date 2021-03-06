type Person = {
  name: string;
  age: number;
};

const log = <T>(obj: T, key: keyof T) => {
  const value = obj[key];
  console.log('ð¨', value);
};

const log2 = <T, K extends keyof T>(obj: T, key: K) => {
  const value = obj[key];
  console.log('ð¨', value);
};

const john: Person = {
  name: 'John',
  age: 19,
};

log<Person>(john, 'name');
log<Person>(john, 'age');

// ããã¯ã¨ã©ã¼ã«ãªã
// log<Person>(john, 'email');

// log2ã®æ¹ãè³¢ãã®ãï¼
log2(john, 'name');
// log2(john, 'email');

// Tã¯Personãkeyã¯Personã®keyã®ã©ãã
// ãã®åç¸ããã§ããã°ãobj[key] ãã¿ã¤ãã»ã¼ãã«ãªãã
// const log = <T>(obj: T, key: keyof T) => {
//   const value = obj[key];
//   console.log('ð¨', value);
// };
