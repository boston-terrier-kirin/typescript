enum Roles {
  /** ADMINの場合、XX権限あり */
  ADMIN = 'admin',
  /** USERはXXができるだけ。 */
  USER = 'user',
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const u: Person = {
  name: 'John',
  email: 'john@test.com',
  password: '123456',
  role: Roles.USER,
};

const p: Person = {
  name: 'John',
  email: 'john@test.com',
  password: '123456',
  role: Roles.ADMIN,
};

// {
//     name: 'John',
//     email: 'john@test.com',
//     password: '123456',
//     role: 'admin'
// }
console.log(p);

export {};
