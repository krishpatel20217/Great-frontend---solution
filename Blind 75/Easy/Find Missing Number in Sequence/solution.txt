/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  let expectedSum = numbers.length * (numbers.length + 1) / 2
let actualSum = 0;

for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}
return expectedSum - actualSum;
  
}

