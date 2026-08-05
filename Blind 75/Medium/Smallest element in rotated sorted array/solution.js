/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function smallestInRotatedArray(numbers) {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (numbers[mid] > numbers[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return numbers[l];
}