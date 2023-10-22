//QNo 1

// function displayCurrentDateTime() {
//     const currentDate = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const formattedDate = currentDate.toLocaleDateString('en-US', options);

//     const dateTimeElement = document.getElementById('currentDateTime');
//     dateTimeElement.textContent = "Current Date & Time: " + formattedDate;
// }

// // Call the function to display the current date and time
// displayCurrentDateTime();

//QNo 2

// function greetUser() {
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;

//     if (firstName && lastName) {
//         const fullName = `${firstName} ${lastName}`;
//         const greetingMessage = `Hello, ${fullName}!`;
//         document.getElementById('greetingMessage').textContent = greetingMessage;
//     } else {
//         document.getElementById('greetingMessage').textContent = "Please enter both your first and last name.";
//     }
// }

//QNo 3

// function addNumbers() {
//     const firstNumber = parseFloat(document.getElementById('firstNumber').value);
//     const secondNumber = parseFloat(document.getElementById('secondNumber').value);

//     if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//         const sum = firstNumber + secondNumber;
//         document.getElementById('result').textContent = `The sum of ${firstNumber} and ${secondNumber} is: ${sum}`;
//     } else {
//         document.getElementById('result').textContent = "Please enter valid numbers.";
//     }
// }

//QNo 4

// function calculate() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const operator = document.getElementById('operator').value;
//     let result;

//     if (!isNaN(num1) && !isNaN(num2) && operator) {
//         switch (operator) {
//             case '+':
//                 result = num1 + num2;
//                 break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '*':
//                 result = num1 * num2;
//                 break;
//             case '/':
//                 if (num2 === 0) {
//                     document.getElementById('result').textContent = "Division by zero is not allowed.";
//                     return;
//                 }
//                 result = num1 / num2;
//                 break;
//             default:
//                 document.getElementById('result').textContent = "Invalid operator. Use +, -, *, or /.";
//                 return;
//         }

//         document.getElementById('result').textContent = `Result: ${result}`;
//     } else {
//         document.getElementById('result').textContent = "Please enter valid numbers and an operator.";
//     }
// }

//QNo 5

// function calculateSquare() {
//     const inputNumber = parseFloat(document.getElementById('numberInput').value);

//     if (!isNaN(inputNumber)) {
//         const result = square(inputNumber);
//         document.getElementById('result').textContent = `The square of ${inputNumber} is: ${result}`;
//     } else {
//         document.getElementById('result').textContent = "Please enter a valid number.";
//     }
// }

// function square(number) {
//     return number * number;
// }

//QNo 6

// function calculateFactorial() {
//     const inputNumber = parseInt(document.getElementById('numberInput').value);

//     if (!isNaN(inputNumber) && inputNumber >= 0) {
//         const result = factorial(inputNumber);
//         document.getElementById('result').textContent = `The factorial of ${inputNumber} is: ${result}`;
//     } else {
//         document.getElementById('result').textContent = "Please enter a non-negative integer.";
//     }
// }

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

//QNo 7

// function countNumbers() {
//     const startNumber = parseInt(document.getElementById('startNumber').value);
//     const endNumber = parseInt(document.getElementById('endNumber').value);

//     if (!isNaN(startNumber) && !isNaN(endNumber) && startNumber <= endNumber) {
//         const countingResult = generateCounting(startNumber, endNumber);
//         document.getElementById('countingResult').textContent = "Counting: " + countingResult.join(', ');
//     } else {
//         document.getElementById('countingResult').textContent = "Please enter valid start and end numbers.";
//     }
// }

// function generateCounting(start, end) {
//     const counting = [];
//     for (let i = start; i <= end; i++) {
//         counting.push(i);
//     }
//     return counting;
// }

//QNo8

// function calculateHypotenuse() {
//     const base = parseFloat(document.getElementById('baseInput').value);
//     const perpendicular = parseFloat(document.getElementById('perpendicularInput').value);

//     if (!isNaN(base) && !isNaN(perpendicular) && base > 0 && perpendicular > 0) {
//         const hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//         const squareRoot = Math.sqrt(hypotenuse);
//         document.getElementById('result').textContent = `Hypotenuse: ${squareRoot}`;
//     } else {
//         document.getElementById('result').textContent = "Please enter valid positive numbers for the base and perpendicular.";
//     }
// }

// function calculateSquare(number) {
//     return number * number;
// }

//QNo9

// function calculateAreaWithValues(width, height) {
//     const area = width * height;
//     displayResult(area);
// }

// function calculateAreaWithVariables() {
//     const width = 8;
//     const height = 5;
//     const area = width * height;
//     displayResult(area);
// }

// function displayResult(area) {
//     document.getElementById('result').textContent = `The area of the rectangle is: ${area}`;
// }

//QNo 10

// function checkPalindrome() {
//     const inputString = document.getElementById('inputString').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

//     if (isPalindrome(inputString)) {
//         document.getElementById('result').textContent = "It's a palindrome!";
//     } else {
//         document.getElementById('result').textContent = "It's not a palindrome.";
//     }
// }

// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

//QNo 11

// function convertToUppercase() {
//     const inputString = document.getElementById('inputString').value;
//     const convertedString = capitalizeFirstLetterOfEachWord(inputString);
//     document.getElementById('result').textContent = convertedString;
// }

// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }

//QNo 12

// function findLongestWord() {
//     const inputString = document.getElementById('inputString').value;
//     const longestWord = findLongestWordInString(inputString);
//     document.getElementById('result').textContent = `Longest Word: ${longestWord}`;
// }

// function findLongestWordInString(str) {
//     const words = str.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

//QNo 13

// function countOccurrences() {
//     const inputString = document.getElementById('inputString').value;
//     const inputLetter = document.getElementById('inputLetter').value;
//     const count = countLetterOccurrences(inputString, inputLetter);
//     document.getElementById('result').textContent = `Occurrences of "${inputLetter}": ${count}`;
// }

// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }
//     return count;
// }

//QNo 14

function calcCircumference() {
    const radius = parseFloat(document.getElementById('radiusInput').value);

    if (!isNaN(radius)) {
        const circumference = calculateCircumference(radius);
        document.getElementById('result').textContent = `The circumference is ${circumference}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid radius.";
    }
}

function calcArea() {
    const radius = parseFloat(document.getElementById('radiusInput').value);

    if (!isNaN(radius)) {
        const area = calculateArea(radius);
        document.getElementById('result').textContent = `The area is ${area}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid radius.";
    }
}

function calculateCircumference(radius) {
    return (2 * Math.PI * radius).toFixed(2);
}

function calculateArea(radius) {
    return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}
