import {swagger} from './calls';

describe('call creator for Swagger API', () => {
    beforeAll(() => {
        global.fetch = jest.fn();
        global.fetch.mockImplementation(async (uri) => Promise.resolve({
            json: async () => Promise.resolve(uri)
        }))
    });
    it('creates a call', async () => {
        const uri = await swagger({
            search: 'someMovie',
            searchBy: 'title'
        })
        expect(uri).toMatch(/https?\:\/\//);
    })
});