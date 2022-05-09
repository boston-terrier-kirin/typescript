type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

// union typeがあって、、
type Shape = Square | Rectangle;

// これが、type-predicate。AKA: User Defined Type Guards
function isSquare(shape: Shape): shape is Square {
  // shapeがSquareかどうかの判定基準を、自分で作ることができる。
  return 'size' in shape;
}

// これが、type-predicate。AKA: User Defined Type Guards
function isRectangle(shape: Shape): shape is Rectangle {
  // shapeがSquareかどうかの判定基準を、自分で作ることができる。
  return 'width' in shape;
}

function area(shape: Shape) {
  // Squareと判定した場合
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  // Squareと判定した場合
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }
}
