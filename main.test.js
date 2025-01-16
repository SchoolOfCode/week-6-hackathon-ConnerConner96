import { describe, expect, test } from 'vitest';
import uppercase from './main.js';

describe('Uppercase Function Test', () => {
    test('Should uppercase the first letter of each word correctly', () => {
    //Arrange
    const input = "this is the best test ive ever seen";
    const expected = "This Is The Best Test Ive Ever Seen";
    //Act
    const actual = uppercase(input);
    //Assert
    expect(actual).toBe(expected);
    })

    test('Should throw error if input is not a string', () => {
    //Arrange
     const invalidInputs = [123, true, [], {}, null, undefined];  
     //Act 
     invalidInputs.forEach(input => {
     //Assert
     expect(() => uppercase(input)).toThrow('Input must be a string');
     })
    })

    test('Should handle strings with mixed case', () => {
        const input = "tHis Is A teSt";
        const expected = "This Is A Test";
        expect(uppercase(input)).toBe(expected);
    });

    test('Should handle strings with only spaces correctly', () => {
        const input = "     ";
        const expected = "     ";
        expect(uppercase(input)).toBe(expected);
    });

    test('Should handle multiple spaces between words correctly', () => {
        const input = "hello     world";
        const expected = "Hello World";
        expect(uppercase(input)).toBe(expected);
    });

    test('Should handle strings with non-alpha characters correctly', () => {
        const input = "hello $world *&* test";
        const expected = "Hello $World *&* Test";
        expect(uppercase(input)).toBe(expected);
    });
})