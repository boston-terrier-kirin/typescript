{
  type SystemSupportLanguage = 'en' | 'fr' | 'it' | 'es';

  // キーを動的に作ることができる。
  // type Butterfly = {
  //   en: string;
  //   fr: string;
  //   it: string;
  //   es: string;
  // }
  type Butterfly = {
    [key in SystemSupportLanguage]: string;
  };
}

{
  type Point = {
    x: number;
    y: number;
    z: number;
  };

  // readonly に変えることができる
  type ReadonlyPoint = {
    readonly [Key in keyof Point]: Point[Key];
  };
}

{
  class State<T> {
    constructor(public current: T) {}

    update(next: T) {
      this.current = { ...this.current, ...next };
    }
  }

  const state = new State({ x: 0, y: 0 });

  // yだけをupdateしようとするとエラーになってしまう。
  state.update({
    x: 1,
    y: 2,
  });
}

{
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
}
