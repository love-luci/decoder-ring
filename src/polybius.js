// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
   //TODO: do the following for the entire alphabet
    //! I and J should be separate in the encode, but together in the decode
  const polybiusEncode = {
    "a":"11",
    "b":"21",
    "c":"31",
    "d":"41",
    "e":"51",
    "f":"12",
    "g":"22",
    "h":"32",
    "i":"42",
    "j":"42",
    "k":"52",
    "l":"13",
    "m":"23",
    "n":"33",
    "o":"43",
    "p":"53",
    "q":"14",
    "r":"24",
    "s":"34",
    "t":"44",
    "u":"54",
    "v":"15",
    "w":"25",
    "x":"35",
    "y":"45",
    "z":"55",
  };

  const polybiusDecode = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g",
    "32": "h",
    "42": "(i/j)",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n",
    "43": "o",
    "53": "p",
    "14": "q",
    "24": "r",
    "34": "s",
    "44": "t",
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y",
    "55": "z",
  };

   //TODO: create a helper function for the decode
    //*use lookup for polybius decode as well
      //* increase index by 2; instead of i++, use i+=2
 function decodeHelper() {

  }; 

function polybius(input, encode = true) {
  //? where does this code go?
   /* if(message.length % 2 !== 0) {
      return false;
    }; */
        
    // your solution code here
    const result = [];
    //* convert input into array
    const message = input.toLowerCase().split("");
    //* iterate through array to build encoded string
    //* to get values, use [] syntax
    if(encode) {
      message.forEach((letter) => {
        //* if letter matches the key, return the value
        const encodedLetter = polybiusEncode[letter];
        if(encodedLetter) {
          result.push(encodedLetter);
        } else {
          result.push(letter);
        }
      });
    } else {
        for(let i=0; i<message.length; i++) {
          const currentLetter = message[i];
          const nextLetter = message[i+1];
          if(isNaN(parseInt(currentLetter,10))) {
            result.push(currentLetter);
          } else if(!nextLetter) {
            return false;
          } else if(!isNaN(parseInt(currentLetter,10))&&!isNaN(parseInt(nextLetter,10))) {
              const decodedLetter = polybiusDecode[currentLetter + nextLetter];
              result.push(decodedLetter);
              i++;
            };
        };
      };
      return result.join("");
    };

  return {
    polybius,
  }

})();

module.exports = { polybius: polybiusModule.polybius };
