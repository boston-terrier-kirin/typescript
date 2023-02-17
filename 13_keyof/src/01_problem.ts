interface Header {
  key: string;
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

// headerのkeyを使って、dataから動的に値をGETしたかった。
for (const header of headers) {
  // ここでコンパイルエラーになる
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Data'.
  console.log(data[header.key]);
}

export {};
