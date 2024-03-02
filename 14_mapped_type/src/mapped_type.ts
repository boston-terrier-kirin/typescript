type Position = 'Programmer' | 'HR' | 'Manager';

// {
//     Programmer: string[];
//     HR: string[];
//     Manager: string[];
// }
type PositionDuties = {
  [position in Position]: string[];
};

const developer: PositionDuties = {
  Programmer: ['web developer'],
  HR: ['web developer'],
  Manager: ['web developer'],
};
