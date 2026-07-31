/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxSumSubArray(numbers) {
  let prevMax = numbers[0];
    let answer = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        prevMax = Math.max(numbers[i], prevMax + numbers[i]);
        answer = Math.max(answer, prevMax);
    }
  return answer;
}