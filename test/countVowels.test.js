const { countVowels } = require("../countVowels");

describe('This test should return the correct number of vowels in a Sting', () => {
    test("should return the correct number of vowels for 12345", () => {
        expect(countVowels("Nymph")).toBe(1);
    });
});

describe("This test should return the correct number of vowels in a string", () => {
    test("should return the correct number of vowels for input 'Darren'", () => {
        expect(countVowels("Darren")).toBe(2); 
    });
});

describe("This test should return the correct number of vowels in a string", () => {
    test("should return the correct number of vowels for input 'Cooing'", () => {
        expect(countVowels("Cooing")).toBe(3); 
    });
});