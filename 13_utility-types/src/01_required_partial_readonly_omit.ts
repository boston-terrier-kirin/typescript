type Employee = {
  name: string;
  position: string;
};

// {
//     name: string;
//     position: string;
// }
type RequiredEmplyee = Required<Employee>;

// {
//     name?: string | undefined;
//     position?: string | undefined;
// }
type PartialEmplyee = Partial<Employee>;

type ReadOnlyEmplyee = Readonly<Employee>;

// {
//   name: string;
// }
type OmitEmployee = Omit<Employee, 'position'>;
const emp: OmitEmployee = {
  name: 'john',
};
