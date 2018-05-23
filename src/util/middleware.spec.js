import {persistStore} from './middleware';

describe('persist store middleware', () => {
    it('calls localStorage.setItem with JSON.stringified store and returns next(originalAction)', () => {
        const fakeNext = jest.fn().mockImplementation(action => action);
        window.localStorage = {
            setItem: jest.fn()
        };
        const fakeStore = {
            getState: jest.fn().mockImplementation(()=>({some: 'value'}))
        };
        const result = persistStore(fakeStore)(fakeNext)('action here');
        expect(fakeStore.getState).toHaveBeenCalledTimes(1);
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(window.localStorage.setItem.mock.calls[0][0]).toBe('netflixRouletteStore');
        expect(window.localStorage.setItem.mock.calls[0][1]).toBe(JSON.stringify({some: 'value'}));
        expect(fakeNext).toHaveBeenCalledTimes(1);
        expect(result).toBe('action here');
    })
});