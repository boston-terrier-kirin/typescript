class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Bird extends Animal {
  fly(distance: number) {
    console.log(`${this.name} flew ${distance}m.`);
  }
}

const bird = new Bird('Kuroro');
bird.fly(100);

// protectedはjavaと同じ
// bird.name = 'Kirin';
