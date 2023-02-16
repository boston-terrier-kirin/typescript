type Square2 = {
  kind: 'square';
  size: number;
};

type Rectangle2 = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type Shape2 = Square2 | Rectangle2;

// 16_type-narrowing.tsでやった様な、プロパティの有無ではなく、literal-typeで判別できるようする。
// 判別可能なunionなので、descriminated union。
function area2(shape: Shape2) {
  if (shape.kind === 'square') {
    // この場合も、type narrowingが効く。
    return shape.size * shape.size;
  }

  if (shape.kind === 'rectangle') {
    // この場合も、type narrowingが効く。
    return shape.width * shape.height;
  }
}

const s2: Rectangle2 = {
  kind: 'rectangle',
  width: 100,
  height: 30,
};

console.log(area2(s2));
