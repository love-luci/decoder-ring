// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if the shift value is 0", () => {
      const shift = 0;
      const message = "thinkful";
      const expected = false;

      const actual = caesar(message,shift)
      expect(actual).to.equal(expected);
    });
   
   it("should return false if the shift value is greater than 25", () => {
    const shift = 26;
    const message = "thinkful";
    const expected = false;

    const actual = caesar(message,shift)
    expect(actual).to.equal(expected);
    });
   
   it("should return false if the shift value is less than -25", () => {
    const shift = -26;
    const message = "thinkful";
    const expected = false;

    const actual = caesar(message,shift)
    expect(actual).to.equal(expected);
    }); 
   
   it("should return false if the shift value is undefined", () => {
    const shift = undefined;
    const message = "thinkful";
    const expected = false;

    const actual = caesar(message,shift)
    expect(actual).to.equal(expected);
    }); 
  });

  describe("encoding a message", () => {
    it("should encode the given message", () => {
      const input = "thinkful";
      const shift = 3

      const expected = "wklqnixo";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });
    
    it("should leave spaces and other symbols as is", () => {
      const input = "think ful!";
      const shift = 3

      const expected = "wklqn ixo!";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });
    
    it("should ignore capital letters", () => {
      const input = "Thinkful";
      const shift = 3

      const expected = "wklqnixo";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });
    
    it("should wrap back to the begining if the shift goes past the end of the alphabet", () => {
      const input = "Thinkfuzz";
      const shift = 3;

      const expected = "wklqnixcc";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    }); 

    it("should shift to the left if it is a negative shift", () => {
      const input = "Thankful";
      const shift = -3;

      const expected = "qexkhcri";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    }); 
  });

  describe("decoding a message", () => {
    it("should decode the given message", () => {
      const input = "wklqnixo";
      const shift = -3;

      const expected = "thinkful";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });
    
    it("should leave spaces and other symbols as is", () => {
      const input = "wklqn ixo!";
      const shift = -3

      const expected = "think ful!";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "WklqniXO";
      const shift = -3

      const expected = "thinkful";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    });

    it("should wrap back to the begining if the shift goes past the end of the alphabet", () => {
      const input = "wklqnixcc";
      const shift = -3;

      const expected = "thinkfuzz";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    }); 
//? what is the difference between this test and the submission test?
    it("should shift to the left if it is a negative shift", () => {
      const input = "qexkhcri";
      const shift = 3;

      const expected = "thankful";
      const actual = caesar(input,shift);
      expect(actual).to.equal(expected);
    }); 
  });
});

  

  
  
  /*it("should encode 'thinkful'", () => {
        const input = "thinkful";
        const shift = 3

        const expected = "wklqnixo";
        const actual = caesar(input,shift);
        expect(actual).to.equal(expected);
    });
}) 
*/


/*const averageScore = require("../src/main");

describe("averageScore", () => {
  it("should return the average score among all students", () => {
    const input = [
      { name: "Shane Carey", score: 9.5 },
      { name: "Rebecca Mills", score: 8.7 },
      { name: "Catarina Lima", score: 9.7 },
    ];
    const expected = 9.3;
    const actual = averageScore(input);
    expect(actual).to.equal(expected);
  });
}); */