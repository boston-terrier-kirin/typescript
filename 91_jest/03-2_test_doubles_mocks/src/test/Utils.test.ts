import { toUpperCaseWith } from '../app/Utils';

describe('Utils', () => {
  // Mocks
  describe('tracking callbacks', () => {
    const callbackMock = jest.fn();

    beforeEach(() => {
      // ここでcallbackをmockする
      callbackMock.mockImplementationOnce((arg) => {
        console.log(`mock - ${arg}`);
      });
    });

    afterEach(() => {
      // 終わったら毎回クリアする
      jest.clearAllMocks();
    });

    it('toUpperCase - invalid argument', () => {
      const actual = toUpperCaseWith('', callbackMock);
      expect(actual).toBeUndefined();

      expect(callbackMock).toHaveBeenCalledWith('Invalid argument');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });

    it('toUpperCase - valid argument', () => {
      const actual = toUpperCaseWith('abc', callbackMock);
      expect(actual).toBe('ABC');

      expect(callbackMock).toHaveBeenCalledWith('called with abc');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    });
  });
});
