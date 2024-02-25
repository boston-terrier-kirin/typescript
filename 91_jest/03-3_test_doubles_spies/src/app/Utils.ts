export class StringUtils {
  private callExternalService() {
    console.log('Calling...');
  }

  public toUpperCase(arg: string) {
    return arg.toLocaleUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
