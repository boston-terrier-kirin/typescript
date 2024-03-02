type Employee = {
  name: string;
  role: string;
};

async function fetchEmployee<T>(url: string): Promise<T[]> {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

async function getFirstEmployee() {
  const employees = await fetchEmployee<Employee>('hr.com');
  const firstEmployee = employees[0];
}
