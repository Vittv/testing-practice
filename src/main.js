const capitalize = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
};

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

const caesarCipher = (str, shift) => {
  return str.replace(/[a-z]/gi, (char) => {
    // determine if character is uppercase
    const isUpperCase = char === char.toUpperCase();
    const baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);

    // get current character code and apply shift
    const charCode = char.charCodeAt(0);
    const shiftedCode = (charCode - baseCharCode + shift) % 26;

    // handle negative shifts and wrap around
    const newCharCode = shiftedCode >= 0
      ? shiftedCode + baseCharCode
      : shiftedCode + 26 + baseCharCode;

    return String.fromCharCode(newCharCode);
  });
};

const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0
    };
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length
  };
};

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };