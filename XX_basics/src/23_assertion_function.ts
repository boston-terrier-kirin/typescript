// https://typescriptbook.jp/reference/functions/assertion-functions
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

export default '';
