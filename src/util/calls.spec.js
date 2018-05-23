import fetchMock from '../__mocks__/fetchMock'
import {swagger, swaggerBase} from './calls';

describe('call creator for Swagger API', () => {
    beforeAll(() => {
        global.fetch = jest.fn();
        global.fetch.mockImplementation(fetchMock)
    });
    it('creates a call', async () => {
        const res = await swagger({
            search: 'someMovie',
            searchBy: 'title'
        })
        expect(res.data).toMatch(/https?\:\/\//);
    });
    it('provides default params for not provided query options', async () => {
        const res = await swagger();
        expect(res.data).toBe(`${swaggerBase}/movies?search=&searchBy=title&sortBy=title&sortOrder=desc`);
    });
    it('maps call params to query params', async () => {
        const res = await swagger({
            search:'a',
            searchBy:'b',
            sortBy:'c',
            sortOrder:'d'
        });
        expect(res.data).toMatch('search=a');
        expect(res.data).toMatch('searchBy=b');
        expect(res.data).toMatch('sortBy=c');
        expect(res.data).toMatch('sortOrder=d');
    })
});