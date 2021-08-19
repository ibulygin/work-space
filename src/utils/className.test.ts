import {getCssClasses} from "./className"

test('Class Names', () => {
    const res = getCssClasses(['1', '2']);

    expect(res).toBe('1 2');
});

describe('Class Names', () => {
    it('pass', () => {
        const res = getCssClasses(['1', '2']);

        expect(res).toBe('1 2');
    })
})