# Typescript Cheatsheet

[Developer Note](https://developer-note-cef6b.web.app/)

**[`instance-types`](#instance-types)**
**[`object-types`](#object-types)**
**[`readonly-modifier`](#readonly-modifier)**
**[`tuple`](#tuple)**
**[`enum`](#enum)**
**[`readonly-array`](#readonly-array)**
**[`never`](#never)**
**[`any_vs_unknown`](#any_vs_unknown)**
**[`structual-typing`](#structual-typing)**
**[`cast`](#cast)**
**[`type-assertions`](#type-assertions)**
**[`union-types`](#union-types)**
**[`intersection-types`](#intersection-types)**
**[`literal-types`](#literal-types)**
**[`typeof-type`](#typeof-type)**
**[`lookup-type`](#lookup-type)**
**[`keyof-type`](#keyof-type)**
**[`mapped-type`](#mapped-type)**
**[`type-narrowing`](#type-narrowing)**
**[`equality-narrowing`](#equality-narrowing)**
**[`in-narrowing`](#in-narrowing)**
**[`instanceof-narrowing`](#instanceof-narrowing)**
**[`truthiness-guards`](#truthiness-guards)**
**[`typeof-guards`](#typeof-guards)**
**[`discriminated-unions`](#discriminated-unions)**
**[`type-predicate`](#ype-predicate)**
**[`assertion-function`](#assertion-function)**
**[`optional-modifier`](#optional-modifier)**
**[`non-null-assertion`](#non-null-assertion)**
**[`definite-assignment`](#definite-assignment)**
**[`const-assertion`](#const-assertion)**

# [types](https://github.com/boston-terrier-kirin/typescript/tree/main/03_types/src)

## instance-types

```typescript
const arr1: string[] = ['a', 'b', 'c'];
const arr2: Array<string> = ['a', 'b', 'c'];
const arr3: Array<number | string> = [1, 2, 'aaa'];

const set: Set<number> = new Set([1, 2, 3]);
set.add(4);
```

## object-types

```typescript
type Point = {
  x: number;
  y: number;
};

const center: Point = {
  x: 0,
  y: 0,
};
```

## readonly-modifier

```typescript
type Test = {
  readonly x: number;
};

const test: Test = {
  x: 0,
};

// readonlyにすると、これができなくなる。
// test.x = 1;
```

## tuple

```typescript
{
  // 配列で数を固定したい場合、tupleを使う
  // [firstName, lastName, age]
  const user: [string, string, number] = ['kirin', 'matsumoto', 14];
}

{
  // [numberOfStudets, passing, "john", "jane"]
  type Students = [number, boolean, ...string[]];

  const passingStudents: Students = [3, true, 'john', 'jane', 'harry'];
  const failingStudents: Students = [1, false, 'kevin'];

  // [ 3, true, 'john', 'jane', 'harry' ]
  console.log(passingStudents);

  // [ 1, false, 'kevin' ]
  failingStudents[0] = 99; // 変更できてしまう。
  console.log(failingStudents);
}

{
  // [numberOfStudets, passing, "john", "jane"]
  type Students = readonly [number, boolean, ...string[]];

  const passingStudents: Students = [3, true, 'john', 'jane', 'harry'];

  // Cannot assign to '0' because it is a read-only property.
  passingStudents[0] = 99;
}
```

## enum

```typescript
enum Roles {
  ADMIN = 'admin',
  USER = 'user',
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

// {
//     name: 'John',
//     email: 'john@test.com',
//     password: '123456',
//     role: 'admin'
// }
console.log(p);
```

## readonly-array

```typescript
const numbers: readonly number[] = [1, 2, 3];

// Property 'push' does not exist on type 'readonly number[]'.
numbers.push(4);
```

## never

[never](https://typescriptbook.jp/reference/statements/never)

```typescript
// この場合、戻りはneverになっている。
const throwError = () => {
  throw new Error('Something went wrong');
};

// この場合、戻りはvoidになっている。明示的にneverをつけてもOK。
function throwError2() {
  throw new Error('Something went wrong');
}
```

## any_vs_unknown

```typescript
// anyを使った場合
function log(value: any) {
  console.log(value.toFixed(2));
}

// anyを使った場合、コンパイルエラーにならず、実行時に、'hello'.toFixed(2) がエラーになる。
// log(123.456);
// log('hello');

// unknownを使った場合
function log2(value: unknown) {
  // 型チェックをしないとコンパイルエラーになる。
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}

log2(123.456);
log2('hello');
```

## structual-typing

```typescript
type User = {
  id: string;
};

type Product = {
  id: string;
  name: string;
};

const product: Product = {
  id: 'product-fdsage',
  name: 'iPhone',
};

const sayHello = (user: User) => {
  console.log(user.id);
};

// tsはstructual typingなので、構造があっていれば、問題なし。
// sayHelloのパラメータはuserになっているが、productを渡してもOK。
// product.nameがあっても問題なし。
sayHello(product);
```

## cast

ts は実行時には影響しないので、ts 自体では cast はなく、+とかで明示的に cast する必要がある。
type assertion は cast ではなく、あくまでコンパイル時に型を伝えるだけ。

## type-assertions

[type-assertion-as](https://typescriptbook.jp/reference/values-types-variables/type-assertion-as)

```typescript
const hello: unknown = 'hello';

// これはcastではなく、type assertion
const trimmed = (hello as string).trim();

// tsxではタグ扱いになってエラーになるので、<string>はお勧めしない。
const trimmed2 = (<string>hello).trim();
```

## union-types

```typescript
const stuff: (number | string)[] = [1, 2, 'aaa'];
```

## intersection-types

```javascript
type Person = {
  name: string,
};

type Email = {
  email: string,
};

type Phone = {
  phone: string,
};

type ContanctDetail = Person & Email & Phone;

// unionとは違い、typeの合体が、intercetion
const detail: ContanctDetail = {
  name: 'John',
  email: 'john@test.com',
  phone: '999-9999-999',
};
```

## literal-types

```typescript
type Direction = 'North' | 'South' | 'East' | 'West';

function move(direction: Direction) {
  console.log(`Move to ${direction}`);
}

move('East');
move('West');
```

## typeof-type

[typeof-type-operator](https://typescriptbook.jp/reference/type-reuse/typeof-type-operator)

```typescript
const center = {
  x: 0,
  y: 0,
  z: 0,
};

// centerを元に新しい型を作る
type Point = typeof center;

const unit: Point = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};
```

## lookup-type

```typescript
// APIからのレスポンスを定義
type Response = {
  paymentInfo: {
    token: number;
  };
};

// paymentInfoだけを返す、関数があった場合
function getPayment(): Response['paymentInfo'] {
  // Response.paymentInfo.token の型をlookupしてくれる
  return {
    token: 12345,
  };
}

// const payment: {
//   token: number;
// }
const payment = getPayment();

export {};
```

## keyof-type

```typescript
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
```

## mapped-type

```typescript
type SystemSupportLanguage = 'en' | 'fr' | 'it' | 'es';

// キーを動的に作ることができる。
// type Butterfly = {
//   en: string;
//   fr: string;
//   it: string;
//   es: string;
// } & {
//  id: number;
// }
type Butterfly = {
  [key in SystemSupportLanguage]: string;
} & { id: number };
```

```typescript
type Point = {
  x: number;
  y: number;
  z: number;
};

// readonly に変えることができる
type ReadonlyPoint = {
  readonly [Key in keyof Point]: Point[Key];
};
```

```typescript
type UpdateItem<T> = {
  // [P in keyof T]? -> Tのすべてのキーを optional に。
  // T[P]            -> T[キー]
  [P in keyof T]?: T[P];
};

class State<T> {
  constructor(public current: T) {}

  update(next: UpdateItem<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });

// yだけをupdateできる。
state.update({
  y: 2,
});
```

# [type-narrowing](https://github.com/boston-terrier-kirin/typescript/tree/main/05_type_narrowing/src)

## type-narrowing

```typescript
type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ('size' in shape) {
    // この場合も、type narrowingが効く。
    return shape.size * shape.size;
  }

  if ('width' in shape) {
    // この場合も、type narrowingが効く。
    return shape.width * shape.height;
  }
}
```

## equality-narrowing

```typescript
function doSomething(x: string | number, y: string | boolean) {
  if (x === y) {
    // x = y ということは、xはstring型。
    x.trim();
  }

  if (x !== y) {
    // X != y ということは、xは string | number。
    // Property 'trim' does not exist on type 'number'.
    x.trim();
  }
}
```

## in-narrowing

```typescript
interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TvShow) {
  // Property 'numEpisodes' does not exist on type 'Movie'.
  // media.numEpisodes;

  // titleは共通なのでコンパイルエラーにならない。
  console.log('-----', media.title);

  // inでnarrowing。
  if ('episodeDuration' in media) {
    console.log(media.numEpisodes * media.episodeDuration);
  } else {
    console.log(media.duration);
  }
}

getRuntime({ title: 'Amadeus', duration: 120 });
getRuntime({ title: 'Ally My Love', numEpisodes: 12, episodeDuration: 30 });
```

## instanceof-narrowing

```typescript
class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function print(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}
```

## truthiness-guards

```typescript
function saySomething(word: string | null) {
  if (word) {
    word.trim();
  }

  // 'word' is possibly 'null'.
  // word.trim();
}
```

## typeof-guards

```typescript
function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }

  return value * 3;
}

console.log(triple('Hi'));
console.log(triple(10));
```

## discriminated-unions

```typescript
type Square2 = {
  kind: 'square'; // stringではなく、literal type
  size: number;
};

type Rectangle2 = {
  kind: 'rectangle'; // stringではなく、literal type
  width: number;
  height: number;
};

type Shape2 = Square2 | Rectangle2;

// 16_type-narrowing.tsでやった様な、プロパティの有無ではなく、literal-typeで判別できるようする。
// 判別可能なunionなので、descriminated union。
function area2(shape: Shape2) {
  if (shape.kind === 'square') {
    // この場合も、type narrowingが効く。
    return shape.size * shape.size;
  }

  if (shape.kind === 'rectangle') {
    // この場合も、type narrowingが効く。
    return shape.width * shape.height;
  }
}
```

## type-predicate

[instanceof-and-interfaces](https://typescriptbook.jp/reference/object-oriented/interface/instanceof-and-interfaces)

```typescript
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// animal is Cat をつけることで、tsが、isCat でnarrowingしてくれる。
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return `Meow ${animal.name} ${animal.numLives}`;
  }

  return `Bow ${animal.name} ${animal.breed}`;
}
```

## assertion-function

[assertion-functions](https://typescriptbook.jp/reference/functions/assertion-functions)

```typescript
// type predicate とは違い、Errorを投げる。
function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) {
    return;
  }

  throw new TypeError('value is not a Date');
}

type Person = {
  name: string;
  dateOfBirth?: Date; // optional
};

const person: Person = {
  name: 'Kirin',
  dateOfBirth: new Date(),
};

// assertion fuction でチェックすれば、toLocaleDateString できるようになる。
assertDate(person.dateOfBirth);
person.dateOfBirth.toLocaleDateString();
```

## optional-modifier

```typescript
type Student = {
  name: string;
  email: string;
  phone?: string;
};

const kirin: Student = {
  name: 'Kirin',
  email: 'kirin@test.com',
};

// undefined
console.log(kirin.phone);

class Doggy {
  // ここで?を使うこともできる。string | undefined になる。
  name?: string;
  email?: string;
}

const kuroro = new Doggy();
kuroro.name = 'Kuroro';
// kuroro.email = null; optionalにnullはセットできない。
```

## non-null-assertion

[non-null assertion](https://typescriptbook.jp/reference/values-types-variables/definite-assignment-assertion#%E9%9D%9Enull%E3%82%A2%E3%82%B5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)

```typescript
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
```

## definite-assignment

[definite-assignment-assertion](https://typescriptbook.jp/reference/values-types-variables/definite-assignment-assertion)

```typescript
class Point {
  // angularで時どき困るこれは、definite assignment
  x!: number;
  y!: number;

  constructor() {
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
```

## const-assertion

```typescript
const pikachu = {
  name: 'pikachu',
  no: 25,
  genre: 'mouse pokémon',
  height: 0.4,
  weight: 6.0,
} as const;

// Cannot assign to 'name' because it is a read-only property.
pikachu.name = 'raichu';
```
