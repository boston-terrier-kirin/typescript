type Position = 'Programmer' | 'Manager';

type Employee = {
  name: string;
  position: Position;
};

const john: Employee = {
  name: 'John',
  position: 'Programmer',
};

function getProperty(emp: Employee, key: string) {
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Employee'.
  return emp[key];
}

// key: keyof Employeeで解決
function getProperty2(emp: Employee, key: keyof Employee) {
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Employee'.
  return emp[key];
}

// genericsで解決
function getProperty3<T>(emp: T, key: keyof T) {
  return emp[key];
}
