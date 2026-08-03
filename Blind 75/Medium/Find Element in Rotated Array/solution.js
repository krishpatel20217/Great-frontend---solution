/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export default function findInRotatedArray(numbers, target) {
  let left = 0;
        let right = numbers.length - 1;

        while (left <= right) {

            const mid = Math.floor((left + right) / 2);

            if (numbers[mid] === target) {
                return mid;
            }

            // Left half is sorted
            if (numbers[left] <= numbers[mid]) {

                if (target >= numbers[left] && target < numbers[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }

            }

            // Right half is sorted
            else {

                if (target > numbers[mid] && target <= numbers[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }

            }

        }

        return -1;
    
}