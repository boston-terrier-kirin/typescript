import { StringUtils } from '../app/Utils';

describe('Utils', () => {
  // Spies
  describe('StringUtils', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it('use a spy to track calls', () => {
      // spyはもとの機能を保持するのがmockと違うところ
      const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');

      sut.toUpperCase('abc');

      expect(toUpperCaseSpy).toHaveBeenCalledWith('abc');
    });

    it('use a spy to track calls to other module', () => {
      const consoleLogSpy = jest.spyOn(console, 'log');

      sut.logString('abc');

      expect(consoleLogSpy).toHaveBeenCalledWith('abc');
    });

    it('use a spy to replace the impl of a method', () => {
      // private を呼び出すためのhack
      jest
        .spyOn(sut as any, 'callExternalService')
        .mockImplementationOnce(() => {
          console.log('Calling mock impl');
        });

      (sut as any).callExternalService();
    });
  });
});
