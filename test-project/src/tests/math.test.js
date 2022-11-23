import {divisionBy10} from '../modules/maths.js'

test('division by 10)', () => {
    expect(divisionBy10(100)).toBe(10)
    expect(divisionBy10(0)).toBe(0)
    expect(divisionBy10(-10)).toBe(-1)
    expect(divisionBy10(1)).toBe(0.1)
} );
