import { HttpResponse, http } from 'msw';

export const testHandler = http.get('http://127.0.0.1:1337/api/tests', () => {
  return HttpResponse.json({ data: 'mocked data' });
});
