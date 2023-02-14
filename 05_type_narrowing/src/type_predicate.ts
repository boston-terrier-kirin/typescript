interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// animal is Cat をつけることで、tsが、isCat でnarrowingしてくれる。
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return `Meow ${animal.name} ${animal.numLives}`;
  }

  return `Bow ${animal.name} ${animal.breed}`;
}
