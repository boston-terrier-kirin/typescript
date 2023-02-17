function doSomething(x: string | number, y: string | boolean) {
  if (x === y) {
    // x = y ということは、xはstring型。
    x.trim();
  }

  if (x !== y) {
    // X != y ということは、xは string | number。
    // Property 'trim' does not exist on type 'number'.
    x.trim();
  }
}
