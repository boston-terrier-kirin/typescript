type Positions = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master';

type Salaries = Record<Positions, { salary: number }>;

const salaries: Salaries = {
  Programmer: {
    salary: 1000,
  },
  Manager: {
    salary: 1000,
  },
  HR: {
    salary: 1000,
  },
  'Scrum Master': {
    salary: 1000,
  },
};
