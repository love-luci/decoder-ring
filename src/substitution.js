// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
 
  function translate(input, from, to) {
    const result = [];
    const message = input.toLowerCase().split("")

    //! look out for if currentIndex = -1 in terms of errors
    message.forEach((letter) => { 
       const originalIndex = from.findIndex((fromLetter) => fromLetter===letter);
       if(originalIndex === -1) {
        result.push(letter);
       }
       const translatedLetter = to[originalIndex];
       result.push(translatedLetter);
    });
    return result;
  };

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet||alphabet.length!==26) {
      return false;
    };

    const  originalAlphabet= "abcdefghijklmnopqrstuvwxyz".split("");
    const encodedAlphabet = alphabet.split("");

    const letterSet = {};
    encodedAlphabet.forEach((letter) => {
      letterSet[letter] = true;
    });
    const uniqueLetters = Object.keys(letterSet);
    if(uniqueLetters.length!==26){
      return false;
    };

    if(encode) {
      return translate(input,originalAlphabet,encodedAlphabet);
    };
    return translate(input,encodedAlphabet,originalAlphabet);
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
