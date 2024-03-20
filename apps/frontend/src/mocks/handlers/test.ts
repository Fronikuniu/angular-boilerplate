import { HttpResponse, http } from 'msw';
import { testMock } from '../data/test';

export const testHandler = http.get('http://127.0.0.1:1337/api/tests', () => {
  return HttpResponse.json(testMock);
});
