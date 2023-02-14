interface Rooster {
  kind: 'Rooster'; // これは literal type
  name: string;
  weight: number;
  age: number;
}

interface Cow {
  kind: 'Cow';
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  kind: 'Pig';
  name: string;
  weight: number;
  age: number;
}

interface Sheep {
  kind: 'Sheep';
  name: string;
  weight: number;
  age: number;
}

function getFarmAnimalSound(animal: Rooster | Cow | Pig | Sheep) {
  if (animal.kind === 'Rooster') {
    // Roosterとして認識される。
    animal;
  } else if (animal.kind === 'Cow') {
    animal;
  } else if (animal.kind === 'Pig') {
    animal;
  } else {
    // Exhaustiveness Checks with Never
    // 間違ってSheepを追加してしまった場合に、エラーにできる。
    // Type 'Sheep' is not assignable to type 'never'.
    const shouldNotGetHere: never = animal;
  }
}
