// ■問題が発生したコード
interface Header {
  key: string;
  label: string;
}

interface Data {
  name: string;
  age: string;
  job: string;
}

// headerを定義して、headerのキーからdataの値をGETしたい。
const header: Header = { key: 'name', label: 'Name' };
const data: Data = {
  name: 'James',
  age: '24',
  job: 'Designer',
};

// ここでコンパイルエラーになる
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Data'.
data[header.key];

export {};
