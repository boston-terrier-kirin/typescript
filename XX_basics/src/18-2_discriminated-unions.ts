type ValidationSuccess = {
  kind: 'success';
  result: string[];
};

type ValidationError = {
  kind: 'error';
  message: string;
};

type ValidationResult = ValidationSuccess | ValidationError;

function logResult(result: ValidationResult) {
  if (result.kind === 'success') {
    // この場合も、type narrowingが効く。
    console.log('success', result.result);
  } else {
    // elseの場合も、type narrowingが効く。
    console.log('error', result.message);
  }
}
