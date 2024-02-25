export enum PassErrors {
  SHORT = 'Password is too short.',
  NO_UPPER_CASE = 'Upper case letter required.',
  NO_LOWER_CASE = 'Lower case letter required.',
  NO_NUMBER = 'At least one number required.',
}

export interface CheckResult {
  valid: boolean;
  reasons: PassErrors[];
}

export class PassChecker {
  checkPassword(password: string): CheckResult {
    const reasons: PassErrors[] = [];

    this.checkLength(password, reasons);
    this.checkLowerCase(password, reasons);
    this.checkUpperCase(password, reasons);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons,
    };
  }

  checkAdminPassword(password: string): CheckResult {
    const reasons: PassErrors[] = [];

    this.checkLength(password, reasons);
    this.checkLowerCase(password, reasons);
    this.checkUpperCase(password, reasons);
    this.checkNumber(password, reasons);

    return {
      valid: reasons.length > 0 ? false : true,
      reasons,
    };
  }

  private checkLength(password: string, reasons: PassErrors[]) {
    if (password.length < 8) {
      reasons.push(PassErrors.SHORT);
    }
  }

  private checkLowerCase(password: string, reasons: PassErrors[]) {
    if (password === password.toLowerCase()) {
      reasons.push(PassErrors.NO_UPPER_CASE);
    }
  }

  private checkUpperCase(password: string, reasons: PassErrors[]) {
    if (password === password.toUpperCase()) {
      reasons.push(PassErrors.NO_LOWER_CASE);
    }
  }

  private checkNumber(password: string, reasons: PassErrors[]) {
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
      reasons.push(PassErrors.NO_NUMBER);
    }
  }
}
