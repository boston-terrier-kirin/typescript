type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ('size' in shape) {
    // この場合も、type narrowingが効く。
    return shape.size * shape.size;
  }

  if ('width' in shape) {
    // この場合も、type narrowingが効く。
    return shape.width * shape.height;
  }
}

const s: Rectangle = {
  width: 100,
  height: 30,
};

console.log(area(s));
