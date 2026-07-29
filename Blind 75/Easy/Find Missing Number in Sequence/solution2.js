/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
 let xor = numbers.length;

    for (let i = 0; i < numbers.length; i++) {
        xor ^= i;
        xor ^= numbers[i];
    }

    return xor;
}