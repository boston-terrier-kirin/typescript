type Person = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [key: string]: Person;
};

const persons: PersonDictionary = {
  jone: { displayName: 'John Doe', email: 'john@test.com' },
  jane: { displayName: 'Jane Doe', email: 'jane@test.com' },
};

persons['jone'];
