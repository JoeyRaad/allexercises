//Salim Salary exercise 

function main() {
    // Prompting the user for input 
    var salary = parseFloat(prompt("Enter this month salary: "));
    var month = prompt("Enter name of this month: ");

    var savingsPercentage = parseFloat(prompt("Enter savings percentage: ")) / 100;
    var rentPercentage = parseFloat(prompt("Enter rent percentage: ")) / 100;
    var electricityPercentage = parseFloat(prompt("Enter electricity percentage: ")) / 100;

    // Calculating amounts for savings, rent, and electricity
    var savingsAmount = salary * savingsPercentage;
    var rentAmount = salary * rentPercentage;
    var electricityAmount = salary * electricityPercentage;

    // Calculating total expenses and remaining salary
    var totalSpent = savingsAmount + rentAmount + electricityAmount;
    var remainder = salary - totalSpent;

    // Estimating yearly amounts
    var yearlyRent = rentAmount * 12;
    var yearlyElectricity = electricityAmount * 12;

    // Squaring the salary
    var salarySquared = salary * salary;

    // Handling the additional savings ratio
    var additionalSavings = 50;
    var savingsRatio = 0;
    if (savingsAmount > 0) {
        savingsRatio = additionalSavings / savingsAmount;
    }

    // Displaying the results
    alert(`\n--- Salim Monthly Finances for ${month} ---\n` +
          `Savings Amount: $${savingsAmount.toFixed(2)}\n` +
          `Rent Amount: $${rentAmount.toFixed(2)}\n` +
          `Electricity Amount: $${electricityAmount.toFixed(2)}\n` +
          `Total amount spent on Savings, Rent, and Electricity: $${totalSpent.toFixed(2)}\n` +
          `Remaining salary after expenses: $${remainder.toFixed(2)}\n` +
          `Estimated yearly Rent: $${yearlyRent.toFixed(2)}\n` +
          `Estimated yearly Electricity: $${yearlyElectricity.toFixed(2)}\n` +
          `Total monthly salary squared: $${salarySquared.toFixed(2)}\n` +
          `Ratio of additional savings compared to savings amount: ${savingsRatio.toFixed(2)}`);
}

// Calling the function to run the program
main();


////////////////////////////////////////////////////////////////////////////////////////////

//Pyramid of numbers exercise

// Function pyramid of numbers
function printNumberPyramid(x) {
    for (let i = 1; i <= x; i++) {  // Loop for the height of the pyramid
        let row = '';

        // Add spaces for alignment
        for (let j = 0; j < x - i; j++) {
            row += ' ';
        }

        // Add numbers from 1 to i
        for (let k = 1; k <= i; k++) {
            row += k + ' ';
        }

        // Print the row 
        console.log(row);
    }
}

// Main program function
function main() {
    // Get the user input 
    let x = parseInt(prompt("Enter a number: "));
    
    // Call the pyramid printing function
    printNumberPyramid(x);
}

// Run the main program
main();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Divisible by 3 and 5 exercise

// Function to find numbers divisible by both 3 and 5
function findDivisibleNumbers(x) {

    let divisibleNumbers = []; // Create Array 

    for (let i = 1; i <= x; i++) {  
        if (i % 3 === 0 && i % 5 === 0) { // Check if divisible by 3 and 5
            divisibleNumbers.push(i); // Add number to the array
        }
    }

    return divisibleNumbers;
}

// Main program function
function main() {
    const x = parseInt(prompt("Enter a number x: "), 10); // Get user input
    const result = findDivisibleNumbers(x);// assign result to the function
    
    if (result.length > 0) {  
        console.log("Numbers from 1 to " + x + " that are divisible by both 3 and 5 are: " + result);
    } else {
        console.log("There are no numbers that are divisible by both 3 and 5.");
    }
}

// Run main program
main();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Diamond exercise

// Function diamond star pattern
function printDiamond(rows) {
    // Upper part of the diamond
    for (let i = 0; i < rows; i++) {
        // Print spaces
        let spaces = ' '.repeat(rows - i - 1);
        // Print stars
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }

    // Lower part of the diamond
    for (let i = 0; i < rows - 1; i++) {
        // Print spaces
        let spaces = ' '.repeat(i + 1);
        // Print stars
        let stars = '*'.repeat(2 * (rows - i - 2) + 1);
        console.log(spaces + stars);
    }
}

// Main program
function main() {
    const rows = parseInt(prompt("Enter the number of rows for the diamond pattern: "));
    printDiamond(rows);
}

// Run main program
main();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sum of Odd Numbers exercise

// Function sum odd numbers
function sumOfOddNumbers(n) {
    let total = 0; // Define total sum

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { // Check if the number is odd
            total += i; // Add odd number to total
        }
    }

    return total;
}

// Main function
function main() {
    const n = parseInt(prompt("Enter a number: "), 10); // Get user input

    const oddSum = sumOfOddNumbers(n);
    console.log("The sum of all odd numbers up to", n, "is:", oddSum);
}

// Run main program
main();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fibonnaci Exercise

// Fibonacci numbers function
function generateFibonacci(n) {
    let fibonacciSequence = [];
    let a = 0, b = 1; // Assigned Values of Fibonacci

    for (let i = 0; i < n; i++) {
        fibonacciSequence.push(a); // Add number to sequence
        [a, b] = [b, a + b]; // Update numbers in list as addition of last number
    }

    return fibonacciSequence;
}

function main() {
    // Ask user for input
    const n = parseInt(prompt("Enter a number n: "), 10);
    
    // Generate Fibonacci numbers assigned
    const fibonacciNumbers = generateFibonacci(n);

    console.log("The first " + n + " Fibonacci numbers are: " + fibonacciNumbers);
}

// Run the main program
main();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Overlapping Intervals

function mergeIntervals(intervals) {
    // Check if empty
    if (intervals.length === 0) {
        return [];
    }
    
    // Sort by numerical order
    intervals.sort((a, b) => a[0] - b[0]);
    
    // List to store merged intervals and start from index 0
    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        
        // Merge if current interval overlaps with the next interval
        if (currentInterval[1] >= interval[0]) {
            // Move current interval end to max of both interval ends
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            // No overlap, add current interval to merged list
            merged.push(currentInterval);
            currentInterval = interval;
        }
    }

    // Add last interval to the new merged list
    merged.push(currentInterval);

    return merged;
}

const intervals = [[1, 3], [2, 4], [6, 8]];
console.log(mergeIntervals(intervals));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Peaks in Arrays Exercise

function findPeaks(array) {
    // Array to store all peaks and get the length of the array
    let peaks = [];
    let n = array.length;

    // Check for edge cases
    if (array.length === 0) {
        return 0;
    }
    // Check for logical cases
    if (n < 3) {
        return 0;
    }

    // Start from the second element and end before the last number
    for (let i = 1; i < n - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peaks.push(i);
        }
    }

    return peaks;
}

const array = [1, 4, 2, 7, 4, 6, 2];
console.log(findPeaks(array));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Longest Subarray Exercise

function longestSubarray(longarray) {
    // Initialize with sum 0 at index -1
    const countMap = { 0: -1 };  
    // Initialize both at starting 0
    let maxLength = 0, count = 0;

    for (let index = 0; index < longarray.length; index++) {
        count += (longarray[index] === 1) ? 1 : -1; // Increment if 1, otherwise decrement by 1
        
        if (count in countMap) {
            // Calculate the length of the longest subarray
            maxLength = Math.max(maxLength, index - countMap[count]);
        } else {
            // Store this count
            countMap[count] = index;
        }
    }

    return maxLength;
}

const longarray = [0, 1, 0, 1, 1, 1, 1, 1, 0, 1];
console.log(longestSubarray(longarray));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Special Rearrangement Exercise 

function specialRearrangement(nums) {
    // Create arrays for both to store numbers
    let even = [];
    let odd = [];
    
    for (let i of nums) {
        // Check if the number is even or odd
        if (i % 2 === 0) {
            // Add to even array
            even.push(i);
        } else {
            odd.push(i);
        }
    }

    // Sort both arrays
    even.sort((a, b) => a - b);
    odd.sort((a, b) => a - b);
    
    // Return the combined array
    return even.concat(odd);
}

let nums = [3, 1, 4, 2, 7, 5, 6];
console.log(specialRearrangement(nums));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stock Pricing Exercise

function maxProfit(prices) {
    // If the list is empty, nothing can be returned
    if (prices.length === 0) {
        return 0;
    }

    // Initialize both min_price to the first element and max_profit to 0
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        // If the current price is lower than minPrice, update it
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}

const prices = [2, 10, 6, 5, 4];
console.log(maxProfit(prices));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Move Zeros Exercise 

function moveZeros(numbers) {
    // Create an array to store non-zero elements
    let nonZeros = numbers.filter(num => num !== 0);
    
    // Count the number of zeros in the original array
    let zerosCount = numbers.length - nonZeros.length;
    
    // Add the counted zeros to the end of the non-zeros array
    return nonZeros.concat(Array(zerosCount).fill(0));
}

// Example usage
let numbers = [0, 1, 0, 3, 12];
let result = moveZeros(numbers);
console.log(result);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rebuild Sentences Exercise

function rebuildSentence(words, lengths) {
    let result = [];

    for (let i = 0; i < lengths.length; i++) {
        // Get length of the word/sentence
        if (lengths[i] <= words[i].length) {
            // Add word in numeric order given by list
            result.push(words[i].substring(0, lengths[i]));
        } else {
            // Continue adding words
            result.push(words[i]);
        }
    }
    // Store added words in result list
    return result.join(' ');
}

const output = rebuildSentence(["the", "sky", "is", "blue"], [3, 2, 2, 1]);
console.log(output);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Missing Positive Exercise

function firstMissingPositive(numbers) {
    // Ignore all non-positive numbers
    numbers = numbers.filter(num => num > 0);
    
    // Create a Set from the numbers
    const numSet = new Set(numbers);
    
    // Start checking from 1 since it is the smallest positive integer
    let missingPositive = 1;
    while (true) {
        if (!numSet.has(missingPositive)) {
            return missingPositive;
        }
        missingPositive += 1;
    }
}

console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0]));      // Output: 3
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






