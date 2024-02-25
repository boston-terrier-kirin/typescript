import * as Utils from '../app/Utils';

jest.mock('../app/Utils', () => {
  return {
    ...jest.requireActual('../app/Utils'),
    getId: () => 'ID123',
  };
});

jest.mock('uuid', () => {
  return {
    v4: () => 'ID12345',
  };
});

describe('mock entier module', () => {
  it('toUpperCase', () => {
    const actual = Utils.toUpperCase('abc');
    expect(actual).toBe('ABC');
  });

  it('toLowerCaseWithId', () => {
    const actual = Utils.toLowerCaseWithId('ABC');
    expect(actual).toBe('abcID12345');
  });

  it('getId', () => {
    const actual = Utils.getId();
    expect(actual).toBe('ID123');
  });
});
