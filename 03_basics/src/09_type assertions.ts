const hello: unknown = 'hello';

// これはcastではなく、type assertion
const trimmed = (hello as string).trim();

// tsxではタグ扱いになってエラーになるので、<string>はお勧めしない。
const trimmed2 = (<string>hello).trim();
