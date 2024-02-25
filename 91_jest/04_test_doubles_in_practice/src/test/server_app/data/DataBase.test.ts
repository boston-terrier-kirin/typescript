import * as IdGenerator from '../../../app/server_app/data/IdGenerator';
import { DataBase } from './../../../app/server_app/data/DataBase';

type SomeTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe('DataBase', () => {
  let sut: DataBase<SomeTypeWithId>;

  const fakeId = '1234';
  const someObject1 = {
    id: '',
    name: 'john',
    color: 'blue',
  };
  const someObject2 = {
    id: '',
    name: 'jane',
    color: 'blue',
  };

  beforeEach(() => {
    sut = new DataBase();
  });

  it('should return id after insert', async () => {
    jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fakeId);

    const actual = await sut.insert({
      id: '',
    } as any);

    expect(actual).toBe(fakeId);
  });

  it('should get element after insert', async () => {
    const id = await sut.insert(someObject1);
    const actual = await sut.getBy('id', id);

    expect(actual).toBe(someObject1);
  });

  it('should find all elements with th same property', async () => {
    await sut.insert(someObject1);
    await sut.insert(someObject2);
    const expected = [someObject1, someObject2];

    const actual = await sut.findAllBy('color', 'blue');

    expect(actual).toEqual(expected);
  });

  it('should change color on object', async () => {
    const id = await sut.insert(someObject1);
    const expected = 'red';

    await sut.update(id, 'color', expected);
    const object = await sut.getBy('id', id);
    const actual = object.color;

    expect(actual).toBe(expected);
  });

  it('should delete object', async () => {
    const id = await sut.insert(someObject1);

    await sut.delete(id);
    const actual = await sut.getBy('id', id);

    expect(actual).toBeUndefined();
  });

  it('should return all elements', async () => {
    await sut.insert(someObject1);
    await sut.insert(someObject2);
    const expected = [someObject1, someObject2];

    const actual = await sut.getAllElements();

    expect(actual).toEqual(expected);
  });
});
