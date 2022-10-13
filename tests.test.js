/* eslint-disable no-undef */
import { myLength, myPop, myPush, myShift, mySome } from './index.js';

describe('Testing Length', () => {
    // LENGTH
    test('Testing Length: with an array of 3 items', () => {
        const testArray = ['pepe', 'paco', 'manolo'];
        const expectedResult = 3;
        const result = myLength(testArray);

        try {
            expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
    test('Testing Length: with an an undefined value', () => {
        const testArray = 'not an array';

        try {
            myLength(testArray);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
});

describe('Testing Push', () => {
    // PUSH
    test('Testing Push: pushing an element into an array', () => {
        const testArray = ['pepe', 'paco', 'manolo'];
        const expectedResult = ['pepe', 'paco', 'manolo', 'garfunkel'];
        const valueToAdd = 'garfunkel';
        const result = myPush(testArray, valueToAdd);
        try {
            expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
    test('Testing Push: trying to push an element into not an array', () => {
        const testArray = 'not an array';
        const valueToAdd = 'garfunkel';

        try {
            myPush(testArray, valueToAdd);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
});

describe('Testing Pop', () => {
    // POP
    test('Testing Pop: with an array of 4 items', () => {
        const testArray = ['pepe', 'paco', 'manolo', 'garfunkel'];
        const expectedResult = ['pepe', 'paco', 'manolo'];
        const result = myPop(testArray);

        try {
            expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
    test('Testing Pop: with not an array', () => {
        const testArray = 3;

        try {
            myPop(testArray);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
});

describe('Testing Shift', () => {
    //SHIFT
    test('Testing Shift: with an array of 3 items', () => {
        const testArray = ['pepe', 'paco', 'manolo'];
        const expectedResult = ['garfunkel', 'pepe', 'paco', 'manolo'];
        const valueToAdd = 'garfunkel';
        const result = myShift(testArray, valueToAdd);

        try {
            expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
    test('Testing Shift: with not an array', () => {
        const testArray = 7;
        const valueToAdd = 'garfunkel';

        try {
            myShift(testArray, valueToAdd);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
});

describe('Testing Some', () => {
    //SOME
    test('Testing Some with a value thats inside the array', () => {
        const testArray = ['pepe', 'paco', 'manolo'];
        const valueToAdd = 'paco';
        const expectedResult = true;

        const result = mySome(testArray, valueToAdd);

        expect(result).toBe(expectedResult);
    });
    test('Testing Some with a value thats not in the array', () => {
        const testArray = ['pepe', 'paco', 'manolo'];
        const valueToAdd = 'garfunkel';
        const expectedResult = false;

        const result = mySome(testArray, valueToAdd);

        expect(result).toBe(expectedResult);
    });
    test('Testing Some with a value thats not an array', () => {
        const testArray = 4;
        const valueToAdd = 'garfunkel';

        try {
            mySome(testArray, valueToAdd);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });
});
