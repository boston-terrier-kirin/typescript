import { ServerResponse } from 'http';
import { IncomingMessage } from 'http';
import { RegisterHandler } from '../../../app/server_app/handlers/RegisterHandler';
import { Authorizer } from '../../../app/server_app/auth/Authorizer';
import {
  HTTP_CODES,
  HTTP_METHODS,
} from '../../../app/server_app/model/ServerModel';

const getRequestBodyMock = jest.fn();
jest.mock('../../../app/server_app/utils/Utils', () => {
  return {
    getRequestBody: () => getRequestBodyMock(),
  };
});

describe('RegisterHandler', () => {
  let sut: RegisterHandler;

  const request = {
    method: undefined,
  };

  const responseMock = {
    statusCode: 0,
    writeHead: jest.fn(),
    write: jest.fn(),
  };

  const authorizerMock = {
    registerUser: jest.fn(),
  };

  beforeEach(() => {
    sut = new RegisterHandler(
      request as IncomingMessage,
      responseMock as any as ServerResponse,
      authorizerMock as any as Authorizer
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const testAccount = {
    id: '',
    password: 'test',
    userName: 'john',
  };
  const testId = 'ID12345';

  it('should register valid account in request', async () => {
    request.method = HTTP_METHODS.POST;
    getRequestBodyMock.mockResolvedValueOnce(testAccount);
    authorizerMock.registerUser.mockResolvedValueOnce(testId);

    await sut.handleRequest();

    expect(responseMock.statusCode).toBe(HTTP_CODES.CREATED);
    expect(responseMock.writeHead).toHaveBeenCalledWith(HTTP_CODES.CREATED, {
      'Content-Type': 'application/json',
    });
    expect(responseMock.write).toHaveBeenCalledWith(
      JSON.stringify({ userId: testId })
    );
  });
});
