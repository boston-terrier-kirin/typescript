enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  DEVELOPER = 'developer',
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const p: Person = {
  name: 'John',
  email: 'john@test.com',
  password: '123456',
  role: Roles.ADMIN,
};

function payBonus(person: Person) {
  const role = person.role;
  if (role === Roles.ADMIN) {
    console.log('Do something');
  } else if (role == Roles.USER) {
    console.log('Do something');
  } else {
    // exhaustive enum
    // Roles.DEVELOPERをカバーしきれてないので、コンパイルエラーになる。
    const notSupported: never = role;
  }
}

export {};
