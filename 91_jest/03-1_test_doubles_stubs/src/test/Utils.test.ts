import { calcComplexity } from '../app/Utils';

describe('Utils', () => {
  it('calc complexity', () => {
    // Stubs
    // パラメータ全部をわたすのではなく、anyにして、必要なものだけわたす。
    const someInfo: any = {
      length: 5,
      extraInfo: {
        field1: 'info1',
        field2: 'info2',
      },
    };
    const actual = calcComplexity(someInfo);

    expect(actual).toBe(10);
  });
});
