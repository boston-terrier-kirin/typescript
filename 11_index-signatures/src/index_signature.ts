type Employee = {
  name: string;
  position: string;
  [key: string]: string; // なんでもOKにできる
};

const john: Employee = {
  name: 'john',
  position: 'programmer',
  email: 'john@test.com',
};
/////

type Person = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [id: number]: Person;
};

const persons: PersonDictionary = {
  1: { displayName: 'John Doe', email: 'john@test.com' },
  2: { displayName: 'Jane Doe', email: 'jane@test.com' },
};

persons[3] = { displayName: 'Jane Doe', email: 'jane@test.com' };
persons[1];
/////

// Recordでも同じことはできる
const personsRecord: Record<number, Person> = {
  1: { displayName: 'John Doe', email: 'john@test.com' },
  2: { displayName: 'Jane Doe', email: 'jane@test.com' },
};
personsRecord[3] = { displayName: 'Jane Doe', email: 'jane@test.com' };
personsRecord[1];
