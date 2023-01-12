type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContanctDetail = Person & Email & Phone;

// unionとは違い、typeの合体が、intercetion
const detail: ContanctDetail = {
  name: 'John',
  email: 'john@test.com',
  phone: '999-9999-999',
};
