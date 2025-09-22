# The Odin Project - Full Stack JavaScript

## #13 Project: Testing Practice

A simple project to practice writing unit tests with Jest.

Our first introduction to TDD (Test-Driven Development).

## Overview

This project contains basic JavaScript functions with comprehensive test coverage using the Jest testing framework.

## Features

### capitalize(str)
Capitalizes the first letter of a string.
```javascript
capitalize("hello") // returns "Hello"
```

### reverseString(str)
Reverses a string.
```javascript
reverseString("abc")  // returns "cba
reverseString("Drow") // returns "worD"
```

### calculator object
A calculator with four operations:
```javascript
calculator.add(2, 3)      // returns 5
calculator.subtract(5, 3) // returns 2
calculator.multiply(2, 4) // returns 8
calculator.divide(10, 2)  // returns 5
```

### caesarCipher(str, shift)
Encrypts a string using Caesar cipher:
```javascript
caesarCipher("abc", 3)           // returns "def"
caesarCipher("xyz", 3)           // returns "abc" (wraps from z to a)
caesarCipher("HeLLo", 3)         // returns "KhOOr" (lettercase preservation)
caesarCipher("Hello, World!", 3) // returns "Khoor, Zruog!" (punctuation and spaces unchanged)
```

### analyzeArray(arr)
Analyzes an array of numbers and returns statistics:
```javascript
analyzeArray([1, 8, 3, 4, 2, 6])
/* 
returns {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
*/
```

## Usage
1. Clone or download this repository
2. Navigate to project directory
3. Install dependencies:
```bash
npm install
```

## Running Tests
Run all tests:
```bash
npm test
```