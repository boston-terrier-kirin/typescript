interface Header {
  // keyは文字通りDataのkeyになっているので、keyof Dataにするのが正しい。
  key: keyof Data;
  label: string;
}

interface Data {
  name: string;
  age: string;
  job: string;
}

const headers: Header[] = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'job', label: 'Job' },
];

const data: Data = {
  name: 'James',
  age: '24',
  job: 'Designer',
};

for (const header of headers) {
  console.log(data[header.key]);
}

export {};
