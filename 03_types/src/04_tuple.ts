{
  // 配列で数を固定したい場合、tupleを使う
  // [firstName, lastName, age]
  const user: [string, string, number] = ['kirin', 'matsumoto', 14];
}

{
  // [numberOfStudets, passing, "john", "jane"]
  type Students = [number, boolean, ...string[]];

  const passingStudents: Students = [3, true, 'john', 'jane', 'harry'];
  const failingStudents: Students = [1, false, 'kevin'];

  // [ 3, true, 'john', 'jane', 'harry' ]
  console.log(passingStudents);

  // [ 1, false, 'kevin' ]
  failingStudents[0] = 99; // 変更できてしまう。
  console.log(failingStudents);
}

{
  // [numberOfStudets, passing, "john", "jane"]
  type Students = readonly [number, boolean, ...string[]];

  const passingStudents: Students = [3, true, 'john', 'jane', 'harry'];

  // Cannot assign to '0' because it is a read-only property.
  passingStudents[0] = 99;
}
