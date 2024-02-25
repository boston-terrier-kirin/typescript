import { PassChecker, PassErrors } from '../app/PassChecker';

describe('PassChecker', () => {
  let sut: PassChecker;
  beforeEach(() => {
    sut = new PassChecker();
  });

  describe('length', () => {
    it('password with 7 chars is invalid', () => {
      const actual = sut.checkPassword('1234567');

      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PassErrors.SHORT);
    });

    it('password with 8 chars is valid', () => {
      const actual = sut.checkPassword('12345678');

      expect(actual.reasons).not.toContain(PassErrors.SHORT);
    });

    it('password with 9 chars is valid', () => {
      const actual = sut.checkPassword('123456789');

      expect(actual.reasons).not.toContain(PassErrors.SHORT);
    });
  });

  describe('upper case letter', () => {
    it('password with no upper case letter is invalid', () => {
      const actual = sut.checkPassword('1234abcd');

      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PassErrors.NO_UPPER_CASE);
    });

    it('password with upper case letter is valid', () => {
      const actual = sut.checkPassword('1234Abcd');

      expect(actual.valid).toBe(true);
      expect(actual.reasons).toEqual([]);
    });
  });

  describe('lower case letter', () => {
    it('password with no lower case letter is invalid', () => {
      const actual = sut.checkPassword('1234ABCD');

      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PassErrors.NO_LOWER_CASE);
    });

    it('password with lower case letter is valid', () => {
      const actual = sut.checkPassword('1234Abcd');

      expect(actual.valid).toBe(true);
      expect(actual.reasons).toEqual([]);
    });
  });

  describe('admin password', () => {
    it('admin password with no number is invalid', () => {
      const actual = sut.checkAdminPassword('Abcdefghij');
      expect(actual.valid).toBe(false);
      expect(actual.reasons).toContain(PassErrors.NO_NUMBER);
    });

    it('admin password with number is valid', () => {
      const actual = sut.checkAdminPassword('Abcde1ghij');
      expect(actual.valid).toBe(true);
      expect(actual.reasons).toEqual([]);
    });
  });
});
