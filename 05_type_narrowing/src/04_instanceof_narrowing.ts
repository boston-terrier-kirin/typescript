class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function print(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}
