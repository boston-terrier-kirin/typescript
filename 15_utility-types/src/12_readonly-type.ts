type Point = {
  x: number;
  y: number;
  z: number;
};

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// Cannot assign to 'x' because it is a read-only property.
center.x = 100;
