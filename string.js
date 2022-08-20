function stringLength(str) {
    if (str.length >= 1 && str.length <= 10) {
        return str.length;
    } else {
        return "Failed";
    }
    
}

function reverseString(str) {
  return str.split("").reverse().join("");
  //console.log(str.split("").reverse().join(""));
}

class calculator {
    constructor() {
        
    }

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.capitalizeFirstLetter = capitalizeFirstLetter;
