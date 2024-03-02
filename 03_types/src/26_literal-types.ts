type Direction = 'North' | 'South' | 'East' | 'West';

function move(direction: Direction) {
  console.log(`Move to ${direction}`);
}

move('East');
move('West');
/////

type Level = 'Junior' | 'Senior';
type Positon = 'Programmer' | 'Manager';

// "Junior Programmer" | "Junior Manager" | "Senior Programmer" | "Senior Manager"
type LevelPosition = `${Level} ${Positon}`;
