// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if substitution alphabet is missing", () => {
        const message = "sonder";

        const actual = substitution(message);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    
    it("should return false if substitution alphabet is not 26 characters long", () => {
        const message = "sonder";
        const alphabet = "smol";

        const actual = substitution(message, alphabet);
        const expected = false;
        expect(actual).to.equal(expected);
    });
   
    it("should return false if there are any duplicate characters in the substitution alphabet", () => {
        const message = "sonder";
        const alphabet = "duuplicates";

        const actual = substitution(message, alphabet);
        const expected = false;
        expect(actual).to.equal(expected);
    }); 
  });

  describe("encoding a message", () => {
    //? should i make two separate tests for alphabets with and without unique characters?
    it("should encode the given message using the substitution alphabet", () => {
        const message = "sonder";
        const alphabet = "!q@w#e$r%t^y&u*i;o<p+a_s>d";

        const actual = substitution(message, alphabet);
        const expected = "<*uw#o";
        expect(actual).to.equal(expected);
    });
    
    it("should leave spaces as is", () => {
        expect(1).toBe(2);
    });
    
    it("should ignore capital letters", () => {
        expect(1).toBe(2);
    });
  });

  describe("decoding a message", () => {
    it("should decode the given message using the substitution alphabet", () => {
        const message = "<*uw#o";
        const alphabet = "!q@w#e$r%t^y&u*i;o<p+a_s>d";

        const actual = substitution(message, alphabet);
        const expected = "sonder";
        expect(actual).to.equal(expected);
    });
    
    it("should leave spaces as is", () => {
        expect(1).toBe(2);
    });

    it("should ignore capital letters", () => {
        expect(1).toBe(2);
    });
  });
});
