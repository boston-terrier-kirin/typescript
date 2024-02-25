type LoggerService = (arg: string) => void;

export function toUpperCaseWith(arg: string, fn: LoggerService): string {
  if (!arg) {
    fn('Invalid argument');
    return;
  }

  fn(`called with ${arg}`);
  return arg.toLocaleUpperCase();
}
