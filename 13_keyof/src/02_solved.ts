// 解決策１
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

const header: Header = { key: 'name', label: 'Name' };
const data: Data = {
  name: 'James',
  age: '24',
  job: 'Designer',
};

data[header.key];

export {};
