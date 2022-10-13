/* eslint-disable no-undef */
import { myLength, myPop, myPush, myShift, mySome } from './index.js';

describe('Testing manually built array methods', () => {
    // LENGTH
    test('Testing Length', () => {
        // Arrange
        const testArray1 = ['pepe', 'paco', 'manolo'];
        const expectedResult1 = 3;
        // Act
        const result1 = myLength(testArray1);
        // Assert
        expect(JSON.stringify(result1)).toBe(JSON.stringify(expectedResult1));
    });

    // PUSH
    test('Testing Push: pushing an element into an array', () => {
        // Arrange
        const testArray2 = ['pepe', 'paco', 'manolo'];
        const expectedResult2 = ['pepe', 'paco', 'manolo', 'garfunkel'];
        const valueToAdd2 = 'garfunkel';
        // Act
        const result2 = myPush(testArray2, valueToAdd2);
        // Assert
        expect(JSON.stringify(result2)).toBe(JSON.stringify(expectedResult2));
    });

    test('Testing Push: trying to pushan element into not an array', () => {
        // Arrange
        const testArray11 = 'not an array';
        const valueToAdd11 = 'garfunkel';

        // Assert
        try {
            myPush(testArray11, valueToAdd11);
        } catch (error) {
            expect(error.message).toBe('You must pass an array');
        }
    });

    // POP
    test('Testing Pop', () => {
        // Arrange
        const testArray3 = ['pepe', 'paco', 'manolo', 'garfunkel'];
        const expectedResult3 = ['pepe', 'paco', 'manolo'];
        // Act
        const result3 = myPop(testArray3);
        // Assert

        expect(JSON.stringify(result3)).toBe(JSON.stringify(expectedResult3));
    });

    //SHIFT
    test('Testing Shift', () => {
        // Arrange
        const testArray4 = ['pepe', 'paco', 'manolo'];
        const expectedResult4 = ['garfunkel', 'pepe', 'paco', 'manolo'];
        const valueToAdd4 = 'garfunkel';
        // Act
        const result4 = myShift(testArray4, valueToAdd4);
        // Assert
        expect(JSON.stringify(result4)).toBe(JSON.stringify(expectedResult4));
    });

    //SOME
    test('Testing Some with a value thats inside the array', () => {
        // Arrange
        const testArray5 = ['pepe', 'paco', 'manolo'];
        const valueToAdd5 = 'paco';
        const expectedResult5 = true;
        // Act
        const result5 = mySome(testArray5, valueToAdd5);
        // Assert
        expect(result5).toBe(expectedResult5);
    });
    test('Testing Some with a value thats not in the array', () => {
        // Arrange
        const testArray5 = ['pepe', 'paco', 'manolo'];
        const valueToAdd5 = 'garfunkel';
        const expectedResult5 = false;
        // Act
        const result5 = mySome(testArray5, valueToAdd5);
        // Assert
        expect(result5).toBe(expectedResult5);
    });
});
