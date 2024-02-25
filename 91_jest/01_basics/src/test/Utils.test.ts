import { StringUtils } from './../app/Utils';
import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  describe('toUpperCase', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'my-string', expected: 'MY-STRING' },
      { input: 'my_string', expected: 'MY_STRING' },
    ])('$input -> $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo', () => {
    it('should return string-info', () => {
      const actual = getStringInfo('My-String');

      expect(actual.lowerCase).toBe('my-string');
      expect(actual.extraInfo).toEqual({});
      expect(actual.characters).toHaveLength(9);

      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g'])
      );

      expect(actual.characters).toContain<string>('M');

      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });

  describe('StringUtils', () => {
    let sut: StringUtils; // system under test
    beforeEach(() => {
      sut = new StringUtils();
    });

    it('should return correct uppcase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
    });

    it('should throw error on invalid argument', () => {
      expect(() => sut.toUpperCase('')).toThrow('Invalid argument!');
    });

    it('should throw error on invalid argument - try-catch', () => {
      try {
        sut.toUpperCase('');
        throw new Error('should not reach here');
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toHaveProperty('message', 'Invalid argument!');
      }
    }, 10000);
  });
});
