interface UserProps {
  id: number;
  name: string;
  age: number;
}

class Attributes<T> {
  constructor(private data: T) {}

  // 元はこれで、これだと戻りがstring or numberになって、他の型に対応できない。
  // get(key: string): string | number {
  //   return this.data[key];
  // }
  //   ↓
  // ・paramterのK
  //   keyは、Tのキーをextendsしたものとして定義できる。
  // ・returnは、T[K] した結果になる。
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

/**
 * Generic Constraints + Lookup Type の良い例
 */
const attrs = new Attributes<UserProps>({ id: 1, name: 'Stephen', age: 32 });

// namesだと、UserPropsにないキーなので、コンパイルエラー
// const name = attrs.get('names');

// nameは、UserPropsでstring型になっているので、これでstringとして認識できる
const myName = attrs.get('name');
console.log(myName);

// ageは、UserPropsでnumber型になっているので、 これでnumberとして認識できる
const myAge = attrs.get('age');
console.log(myAge);
