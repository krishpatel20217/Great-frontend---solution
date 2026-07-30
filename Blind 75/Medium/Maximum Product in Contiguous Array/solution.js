/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers) {
  let maxEndingHere = numbers[0];
    let minEndingHere = numbers[0];
    let answer = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const num = numbers[i];

        const prevMax = maxEndingHere;
        const prevMin = minEndingHere;

        maxEndingHere = Math.max(
            num,
            prevMax * num,
            prevMin * num
        );

        minEndingHere = Math.min(
            num,
            prevMax * num,
            prevMin * num
        );

        answer = Math.max(answer, maxEndingHere);
    }

    return answer;
}