import { v4 } from 'uuid';
import { Employee, printEmployee } from './utils';

const john: Employee = {
  age: 30,
  name: 'John',
};

printEmployee(john);

console.log(v4());
