type Person = {
  name: string;
  age: number;
};

function log<T>(obj: T, key: keyof T) {
  const value = obj[key];
  console.log('💨', value);
}

const john: Person = {
  name: 'John',
  age: 19,
};

// TはPerson、keyはPersonのkeyのどれか
// この型縛りができれば、obj[key] がタイプセーフになる。
log<Person>(john, 'name');
log<Person>(john, 'age');

log(john, 'name');
log(john, 'age');

// Personのkeyにemailがないので、これはエラーになる
// log<Person>(john, 'email');

export {};
