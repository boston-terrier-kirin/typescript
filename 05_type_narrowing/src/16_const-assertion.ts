const pikachu = {
  name: 'pikachu',
  no: 25,
  genre: 'mouse pokémon',
  height: 0.4,
  weight: 6.0,
} as const;

// Cannot assign to 'name' because it is a read-only property.
pikachu.name = 'raichu';
