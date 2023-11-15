// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    if(shift === 0||shift>25||shift<-25||!shift) {
      return false;
    };
    //*if encode = false, change the sign of the shift by multiplying by -1
    let encodeShift = shift;
    if(!encode) {
      encodeShift *= -1;
    };
    
    const result = [];
    const message = input.toLowerCase().split("")
    //*iterate through message array; return result
    message.forEach((letter) => {
      const currentIndex = alphabet.findIndex((index) => index === letter);
        if(currentIndex > -1) {
          let shiftedIndex = currentIndex + encodeShift;
          //*if result of shift is >25, subtract 26
            if(shiftedIndex >25){
              shiftedIndex -=26;
            } else if(shiftedIndex <0) {
              shiftedIndex +=26;
            }
          result.push(alphabet[shiftedIndex])
        } else {
            //*should leave the txt or space as is, assuming that it isn't a letter
            result.push(letter);
          };
    });
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
