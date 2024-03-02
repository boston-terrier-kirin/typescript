const numbers: readonly number[] = [1, 2, 3];

// Property 'push' does not exist on type 'readonly number[]'.
numbers.push(4);

// ReadonlyArrayでも同じことができる
const numbers2: ReadonlyArray<number> = [1, 2, 3];
numbers2.push(3);
