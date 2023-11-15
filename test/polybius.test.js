// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius()", () => {
    describe("encoding a message", () => {
        it("should encode the given message", () => {
            const message = "spooky"

            const actual = polybius(message);
            const expected = "345343435245";
            expect(actual).to.equal(expected);
        });

        it("should translate i and j to 42", () => {
            const message = "injury";

            const actual = "423342542445"
            const expected = polybius(message);
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const message = "sPoOky"

            const actual = polybius(message);
            const expected = "345343435245";
            expect(actual).to.equal(expected);
        });

        it("should should leave spaces and other symbols as is", () => {
            const message = "so spooky!"

            const actual = polybius(message);
            const expected = "3443 345343435245!";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode the given message", () => {
            const message = "345343435245";
    
            const actual = polybius(message,false);
            const expected = "spooky";
            expect(actual).to.equal(expected);
        });

        it("should translate 42 to (i/j)", () => {
            const message = "423342542445";
    
            const actual = polybius(message,false);
            const expected = "(i/j)n(i/j)ury";
            expect(actual).to.equal(expected);
        });

        it("should return false is the length of the input numbers is odd", () => {
            const message = "42334254244";
            
            const actual = polybius(message,false);
            const expected = false;
            expect(actual).to.equal(expected)
        });

        it("should should leave spaces and other symbols as is", () => {
            const message = "3443 345343435245!"

            const actual = polybius(message,false);
            const expected = "so spooky!";
            expect(actual).to.equal(expected);
        });
    });
});