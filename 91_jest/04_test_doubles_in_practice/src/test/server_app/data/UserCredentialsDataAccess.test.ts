import { DataBase } from '../../../app/server_app/data/DataBase';
import { UserCredentialsDataAccess } from '../../../app/server_app/data/UserCredentialsDataAccess';
import { Account } from '../../../app/server_app/model/AuthModel';

const insertMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../app/server_app/data/DataBase', () => {
  return {
    DataBase: jest.fn().mockImplementation(() => {
      return {
        insert: insertMock,
        getBy: getByMock,
      };
    }),
  };
});

describe('UserCredentialsDataAccess', () => {
  let sut: UserCredentialsDataAccess;

  const testAccount: Account = {
    id: '',
    userName: 'john',
    password: 'test',
  };

  const testId = '1234';

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add user and return id', async () => {
    insertMock.mockResolvedValueOnce(testId);

    const actualId = await sut.addUser(testAccount);

    expect(actualId).toBe(testId);
  });

  it('should return user by id', async () => {
    getByMock.mockResolvedValueOnce(testAccount);

    const actualAccount = await sut.getUserById(testId);

    expect(actualAccount).toEqual(testAccount);
  });

  it('should return user by name', async () => {
    getByMock.mockResolvedValueOnce(testAccount);

    const actualAccount = await sut.getUserByUserName(testAccount.userName);

    expect(actualAccount).toEqual(testAccount);
  });
});
