type Direction = 'North' | 'South' | 'East' | 'West';

function move(direction: Direction) {
  console.log(`Move to ${direction}`);
}

move('East');
